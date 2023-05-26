import BaseElement from "../../globalControllers/BaseElement.js";

class BaseCoordinates extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;
    this._options = options;
    this._postfixDefault =
      options.postfix === undefined ? "px" : options.postfix;
    this._stepDefault = options.step === undefined ? 1 : options.step;
    this._min = -1000;

    this._createElement(options);
  }

  _createElement(args) {
    const bCoordinates = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    bCoordinates.className = "item cs-element cs-coordinates" + classItem;
    bCoordinates.dataset.order = args.order || 999999;

    const value = args.callback ? args.callback() : "";

    if (
      !/(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*|auto)|none|^$/.test(
        value
      )
    ) {
      throw new SyntaxError("Expected variables format like '0px 0px 2px 1px'");
    }

    const match = ["auto", "auto", "auto", "auto"];

    if (value !== "none" && value !== "") {
      match = value.split(" ");
    }

    const top = match[0] === "auto" ? "" : match[0];
    const right = match[1] === "auto" ? "" : match[1];
    const bottom = match[2] === "auto" ? "" : match[2];
    const left = match[3] === "auto" ? "" : match[3];

    let toribole = this.translateWord.keywords_ar.rightPanel;

    bCoordinates.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<div class="wrapper d-flex flex-wrap">' +
      '<input type="text" name="top" placeholder="' +
      toribole.top +
      '" value="' +
      top +
      '" class="top text-center">' +
      '<input type="text" name="left" placeholder="' +
      toribole.left +
      '" value="' +
      left +
      '" class="left text-center">' +
      '<div class="item center-center"></div>' +
      '<input type="text" name="right" placeholder="' +
      toribole.right +
      '" value="' +
      right +
      '" class="right text-center">' +
      '<input type="text" name="bottom" placeholder="' +
      toribole.bottom +
      '" value="' +
      bottom +
      '" class="bottom text-center">' +
      "</div>";

    this._addEventListTobCoordinatesInput(bCoordinates, args.eventName);

    const inputs = bCoordinates.querySelectorAll("input");
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

    this._selfDOM = bCoordinates;
  }

  _addEventListTobCoordinatesInput(bCoordinates, eventName) {
    const inputs = bCoordinates.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const obj = {};
        obj[input.getAttribute("name")] =
          input.value === "" ? "0" : input.value;

        const eventCheckSelect = new CustomEvent(
          eventName + ".dropDown.select",
          {
            detail: obj,
          }
        );
        bCoordinates.dispatchEvent(eventCheckSelect);
      });
    });
  }
}
export default BaseCoordinates;
