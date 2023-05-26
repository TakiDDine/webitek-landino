import BaseElement from "../../globalControllers/BaseElement.js";

class BgSize extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;
    this._options = options;

    this._createElement(options);
  }

  _createElement(args) {
    const bgSize = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";

    let ul =
      '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
      this._countDropDown +
      '">';
    args.menu.forEach((element, indx) => {
      let style = "";
      if (args.styleForItems) {
        style = 'style=""';
      }
      ul += '<li><a href="#" ' + style + ">" + firstUp(element) + "</a></li>";
    });
    ul += "</ul>";

    let visibleCValue = args.menu[0] ? firstUp(args.menu[0]) : "";
    let curentValue = args.menu[0] ? args.menu[0] : "";
    let callBackVal = "";
    let width = "";
    let height = "";
    if (args.callback !== undefined) callBackVal = args.callback();
    if (callBackVal !== "") {
      const val = callBackVal.split(" ");

      if (val.length > 1) {
        callBackVal = "Custom (width x height)";
        width = val[0];
        height = val[1];
        classItem += " show-custom-size";
      }
      curentValue = callBackVal;
      visibleCValue = curentValue;
      if (args.mode !== "lower") {
        visibleCValue = firstUp(curentValue);
      }
    }

    curentValue = replaceSpace(visibleCValue);

    const title = args.title !== "" ? "<label>" + args.title + "</label>" : "";

    bgSize.innerHTML =
      title +
      '<div class="dropdown">' +
      '<button class="supra-btn dropdown-toggle d-flex justify-content-between align-items-center ' +
      args.elClass +
      '" ' +
      'type="button" id="dropdownMenu' +
      this._countDropDown +
      '"' +
      'data-toggle="dropdown" ' +
      'aria-haspopup="true" aria-expanded="false"' +
      'data-value="' +
      curentValue +
      '">' +
      "<span>" +
      visibleCValue +
      "</span>" +
      "</button>" +
      ul +
      "</div>" +
      '<div class="size-input d-flex justify-content-between align-items-center">' +
      '<input type="text" placeholder="width" value="' +
      width +
      '" class="width">' +
      '<input type="text" placeholder="height" value="' +
      height +
      '" class="height">' +
      "</div>";

    bgSize.className = "item cs-element bg-size" + classItem;
    bgSize.dataset.order = args.order || 999999;

    this._addEventListToBgSizeDropdown(bgSize);
    this._addEventListToSizeInput(bgSize);

    const inputs = bgSize.querySelectorAll("input");
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

    this._selfDOM = bgSize;
  }

  _addEventListToSizeInput(bgSize) {
    const inputs = bgSize.querySelectorAll(".size-input input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        const width = bgSize.querySelector(".width").value;
        const height = bgSize.querySelector(".height").value;

        const val = width + " " + height;

        this.doThis(val);
      });
    });
  }

  _addEventListToBgSizeDropdown(bgSize, eventName) {
    const options = bgSize.querySelectorAll("li a");
    const button = bgSize.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const val = element.innerHTML.toLowerCase();
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        if (element.innerHTML.toLowerCase() === "custom (width x height)") {
          bgSize.classList.add("show-custom-size");
          const width = bgSize.querySelector(".width").value;
          const height = bgSize.querySelector(".height").value;
          const val = width + " " + height;
        }

        if (
          element.innerHTML.toLowerCase() !== "custom (width x height)" &&
          bgSize.classList.contains("show-custom-size")
        ) {
          bgSize.classList.remove("show-custom-size");
        }

        this.doThis(val);
      });
    });
  }

  doThis(val) {
    const eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        val: val,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}
export default BgSize;
