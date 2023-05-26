import BaseElement from "../../globalControllers/BaseElement.js";

class BaseBorderWidth extends BaseElement {
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
    const borderWidth = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    borderWidth.className = "item cs-element cs-border" + classItem;
    borderWidth.dataset.order = args.order || 999999;

    let value = args.callback ? args.callback() : "";

    if (value !== "") {
      const arr = value.match(/([^\s]*)\s*([^\s]*)\s*([^\s]*)\s*([^\s]*)/);
      let left = arr[4] ? arr[4] : arr[1];
      if (arr[4] === "" && arr[2] !== "") {
        left = arr[2];
      }
      const right = arr[2] ? arr[2] : arr[1];
      const bottom = arr[3] ? arr[3] : arr[1];

      value = arr[1] + " " + right + " " + bottom + " " + left;
    }

    if (
      !/(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*|auto)|initial|^$/.test(
        value
      )
    ) {
      throw new SyntaxError("Expected variables format like '0px 0px 2px 1px'");
    }

    const match = ["", "", "", ""];

    if (value !== "initial" && value !== "" && value !== "none") {
      match = value.split(" ");
    }

    const top = match[0] === "0" || match[0] === "0px" ? "" : match[0];
    const right = match[1] === "0" || match[1] === "0px" ? "" : match[1];
    const bottom = match[2] === "0" || match[2] === "0px" ? "" : match[2];
    const left = match[3] === "0" || match[3] === "0px" ? "" : match[3];

    const toribole = Core.prototype.translateWord.keywords_ar.rightPanel;

    borderWidth.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<div class="wrapper d-flex flex-wrap">' +
      '<input type="text" placeholder="' +
      toribole.top +
      '" value="' +
      top +
      '" class="top text-center">' +
      '<input type="text" placeholder="' +
      toribole.left +
      '" value="' +
      left +
      '" class="left text-center">' +
      '<div class="item center-center"></div>' +
      '<input type="text" placeholder="' +
      toribole.right +
      '" value="' +
      right +
      '" class="right text-center">' +
      '<input type="text" placeholder="' +
      toribole.bottom +
      '" value="' +
      bottom +
      '" class="bottom text-center">' +
      "</div>";

    this._addEventListToBorderWidthInput(borderWidth, args.eventName);

    const inputs = borderWidth.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keydown", this._keyArrowUpDown.bind(this, input));

      const scrollMove = this._scrollMove.bind(this, input);

      input.addEventListener("focus", (e) => {
        input.addEventListener("wheel", scrollMove);
      });

      input.addEventListener("blur", (e) => {
        input.removeEventListener("wheel", scrollMove);
      });
    });

    this._selfDOM = borderWidth;
  }

  _addEventListToBorderWidthInput(borderWidth, eventName) {
    const inputs = borderWidth.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const top = borderWidth.querySelector("input.top").value;
        const right = borderWidth.querySelector("input.right").value;
        const bottom = borderWidth.querySelector("input.bottom").value;
        const left = borderWidth.querySelector("input.left").value;

        const val = top + " " + right + " " + bottom + " " + left;

        const eventCheckSelect = new CustomEvent(
          eventName + ".dropDown.select",
          {
            detail: val,
          }
        );
        borderWidth.dispatchEvent(eventCheckSelect);
      });
    });
  }
}
export default BaseBorderWidth;
