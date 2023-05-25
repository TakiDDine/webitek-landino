import BaseElement from "../../globalControllers/BaseElement.js";
class FourthInput extends BaseElement {
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
    const fourthInput = document.createElement("div");
    const classItem = args.outerClass ? ` ${args.outerClass}` : "";
    fourthInput.className = `item cs-element fourth-input-cp${classItem}`;
    fourthInput.dataset.order = args.order || 999999;

    const value = args.callback ? args.callback() : "";

    if (
      !/[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s(?:#[0-9abcdf]{3,6}|rgba\([^)]*\))|rgb\(.*|^$/.test(
        value
      )
    ) {
      throw new SyntaxError(
        "Expected variables format like '0px 0px 2px #ffffff'"
      );
    }

    let match = ["", "", "", "transparent"];

    if (value !== "" && !/rgb\(.*/.test(value)) {
      match = value.split(" ");
    } else if (/rgb\(.*/.test(value)) {
      match = value.match(/(rgb\([^)]*\))\s([^\s]*)\s([^\s]*)\s([^\s]*)/i);
      match = match.slice(1);
      match.push(match[0]);
      match = match.slice(1);
    }

    fourthInput.innerHTML = `<label>${args.title}</label>
        <input type="text" placeholder="-" value="${match[0]}" class="">
        <input type="text" placeholder="-" value="${match[1]}" class="">
        <input type="text" placeholder="-" value="${match[2]}" class="">
        <input type="text" class="spectrum">`;

    $(fourthInput)
      .find(".spectrum")
      .spectrum({
        color: match[3],
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        hide: this._listenerToFourthInputCp.bind(this),
      });

    this._addEventListToFourthInput(fourthInput, args.eventName);

    const inputs = fourthInput.querySelectorAll("input:not(.spectrum)");
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

    this._selfDOM = fourthInput;
  }

  _listenerToColorpiker(color) {
    const inputs = this._selfDOM.querySelectorAll("input");
    let val = "";

    Array.prototype.forEach.call(inputs, (input, indx) => {
      let postfix = "";
      let value = input.value === "" ? "0" : input.value;
      if (input.classList.contains("spectrum")) {
        value = /rgba/.test(color.toRgbString())
          ? color.toRgbString()
          : color.toHexString();
      }
      if (indx !== inputs.length - 1) postfix = " ";
      val += value + postfix;
    });

    const eventCheckSelect = new CustomEvent(
      `${this._options.eventName}.colorpiker.select`,
      { detail: val }
    );
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }

  _addEventListToFourthInput(fourthInput, eventName) {
    const inputs = fourthInput.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        let val = "";

        Array.prototype.forEach.call(inputs, (input, indx) => {
          let postfix = "";
          let value = input.value === "" ? "0" : input.value;
          if (input.classList.contains("spectrum")) {
            value = /rgba/.test($(input).spectrum("get").toRgbString())
              ? $(input).spectrum("get").toRgbString()
              : $(input).spectrum("get").toHexString();
          }
          if (indx !== inputs.length - 1) postfix = " ";
          val += value + postfix;
        });

        const eventCheckSelect = new CustomEvent(
          `${eventName}.dropDown.select`,
          {
            detail: val,
          }
        );
        fourthInput.dispatchEvent(eventCheckSelect);
      });
    });
  }
}
export default FourthInput;
