import BaseElement from "../../globalControllers/BaseElement.js";

class BaseSize extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;

    this._triggerProportion = false;
    this._proportion = 1;

    this._createElement(options);
  }

  _createElement(args) {
    const size = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    size.className = "item cs-element cs-size" + classItem;
    size.dataset.order = args.order || 999999;

    let toribole = this.translateWord.keywords_ar.rightPanel;

    const value = args.callback ? args.callback() : "";
    const values = value === "auto" ? ["auto", "auto"] : value.split(" ");

    size.innerHTML = `
        <label>${args.title}</label>
        <div class="wrapper d-flex justify-content-between align-items-center">
          <input type="text" name="width" placeholder="${toribole.width}" value="${values[0]}" class="width">
          <i class="proportion fa fa-unlock"></i>
          <input type="text" name="height" placeholder="${toribole.height}" value="${values[1]}" class="height">
        </div>
      `;

    this._addEventListToSize(size, args.eventName);
    this._addEventListToProportion(size);

    const inputs = size.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keydown", this._keyArrowUpDown.bind(this, input));

      const scrollMove = this._scrollMove.bind(this, input);

      input.addEventListener("focus", (e) => {
        input.addEventListener("wheel", scrollMove);
      });

      input.addEventListener("blur", (e) => {
        input.removeEventListener("wheel", scrollMove);
      });
    });

    this._selfDOM = size;
  }

  _addEventListToProportion(size) {
    size.querySelector("i.proportion").addEventListener("click", function () {
      if (this.classList.contains("fa-lock")) {
        this.classList.remove("fa-lock");
        this.classList.add("fa-unlock");
        this._triggerProportion = false;
      } else {
        this.classList.remove("fa-unlock");
        this.classList.add("fa-lock");

        const width = size.querySelector(".width").value;
        const height = size.querySelector(".height").value;
        if (
          width === "" ||
          width === "auto" ||
          height === "" ||
          height === "auto"
        ) {
          this._proportion = 1;
        } else {
          this._proportion =
            width.replace(/[^0-9.]+/, "") / height.replace(/[^0-9.]+/, "");
        }

        this._triggerProportion = true;
      }
    });
  }

  _addEventListToSize(size, eventName) {
    const inputs = size.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const width = size.querySelector(".width");
        const height = size.querySelector(".height");

        const obj = {
          width: width.value,
          height: height.value,
        };

        if (this._triggerProportion) {
          let value = "auto";

          if (
            input.getAttribute("name") === "width" &&
            input.value !== "" &&
            input.value !== "auto"
          ) {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] / this._proportion) + match[2]
              : "";
            height.value = value;
            obj.height = value;
          } else if (input.value !== "" && input.value !== "auto") {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] * this._proportion) + match[2]
              : "";
            width.value = value;
            obj.width = value;
          }
        }

        obj[input.getAttribute("name")] =
          input.value === "" ? "auto" : input.value;

        this.doThis(obj);
      });
    });
  }

  doThis(obj) {
    const eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        obj: obj,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}

export default BaseSize;
