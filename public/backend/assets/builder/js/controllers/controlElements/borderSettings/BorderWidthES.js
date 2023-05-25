import BaseBorderWidth from "../global/BaseBorderWidth.js";

class BorderWidthES extends BaseBorderWidth {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.border_width,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._borderWidht === "") return this._borderWidht;
        let _borderWidht = this._elementNoPx(this._borderWidht);
        return _borderWidht;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._borderWidht = this._targetObject.style.borderWidth;
  }

  _addEventListToBorderWidthInput(borderWidth, eventName) {
    var inputs = borderWidth.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        var top = borderWidth.querySelector("input.top").value;
        var right = borderWidth.querySelector("input.right").value;
        var bottom = borderWidth.querySelector("input.bottom").value;
        var left = borderWidth.querySelector("input.left").value;

        top = top === "" ? "0" : top;
        right = right === "" ? "0" : right;
        bottom = bottom === "" ? "0" : bottom;
        left = left === "" ? "0" : left;

        var val =
          `${top}px` +
          " " +
          `${right}px` +
          " " +
          `${bottom}px` +
          " " +
          `${left}px`;

        this._targetObject.style.borderWidth = val;
      });
    });

    Array.prototype.forEach.call(inputs, (el) => {
      el.addEventListener("blur", (e) => {
        e.preventDefault();

        var top = borderWidth.querySelector("input.top").value;
        var right = borderWidth.querySelector("input.right").value;
        var bottom = borderWidth.querySelector("input.bottom").value;
        var left = borderWidth.querySelector("input.left").value;

        top = top === "" ? "0" : top;
        right = right === "" ? "0" : right;
        bottom = bottom === "" ? "0" : bottom;
        left = left === "" ? "0" : left;

        var val =
          `${top}px` +
          " " +
          `${right}px` +
          " " +
          `${bottom}px` +
          " " +
          `${left}px`;

        var saveVal = this._borderWidht;
        this._borderWidht = val;

        this.setBorderWidth(val, saveVal);
      });
    });
  }

  setBorderWidth(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("border-width");
    } else {
      this._targetObject.style.borderWidth = val;
    }

    this.setStep(() => {
      this.setBorderWidth(saveVal, val);
    });
  }
}
export default BorderWidthES;
