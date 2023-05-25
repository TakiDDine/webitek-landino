import BaseElement from "../../globalControllers/BaseElement.js";

class BaseBorderRadius extends BaseElement {
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
    const borderRadius = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    borderRadius.className = "item cs-element cs-radius" + classItem;
    borderRadius.dataset.order = args.order || 999999;
    const value = args.callback ? args.callback() : "";

    if (
      !/(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:[0-9]+\.?[0-9]*[^\s]*|auto)|initial|^$/.test(
        value
      )
    ) {
      throw new SyntaxError("Expected variables format like '0px 0px 2px 1px'");
    }

    let match = ["", "", "", ""];

    if (value !== "initial" && value !== "" && value !== "none") {
      match = value.split(" ");
    }

    const topLeft = match[0] === "0" || match[0] === "0px" ? "" : match[0];
    const topRight = match[1] === "0" || match[1] === "0px" ? "" : match[1];
    const bottomRight = match[2] === "0" || match[2] === "0px" ? "" : match[2];
    const bottomLeft = match[3] === "0" || match[3] === "0px" ? "" : match[3];

    borderRadius.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<div class="wrapper d-flex flex-wrap">' +
      '<input type="text" placeholder="-" value="' +
      topLeft +
      '" class="top-left text-center">' +
      '<div class="item"></div>' +
      '<input type="text" placeholder="-" value="' +
      topRight +
      '" class="top-right text-center">' +
      '<div class="item center-center d-flex flex-wrap ' +
      'justify-content-between align-content-between">' +
      "<div></div><div></div><div></div><div></div>" +
      "</div>" +
      '<input type="text" placeholder="-" value="' +
      bottomLeft +
      '" class="bottom-left text-center">' +
      '<div class="item"></div>' +
      '<input type="text" placeholder="-" value="' +
      bottomRight +
      '" class="bottom-right text-center">' +
      "</div>";

    this._addEventListToBorderRadiusInput(borderRadius, args.eventName);

    const inputs = borderRadius.querySelectorAll("input");
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

    this._selfDOM = borderRadius;
  }

  _addEventListToBorderRadiusInput(borderRadius, eventName) {
    const inputs = borderRadius.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const topLeft = borderRadius.querySelector("input.top-left").value;
        const topRight = borderRadius.querySelector("input.top-right").value;
        const bottomLeft =
          borderRadius.querySelector("input.bottom-left").value;
        const bottomRight =
          borderRadius.querySelector("input.bottom-right").value;

        const val =
          topLeft + " " + topRight + " " + bottomRight + " " + bottomLeft;

        const eventCheckSelect = new CustomEvent(
          eventName + ".dropDown.select",
          { detail: val }
        );
        borderRadius.dispatchEvent(eventCheckSelect);
      });
    });
  }
}
export default BaseBorderRadius;
