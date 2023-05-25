import HalfInput from "../../globalControllers/HalfInput.js";

class FontSizeES extends HalfInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontSize,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._fontSize === "") return this._fontSize;
        let _fontSize = Core.prototype._elementNoPx(this._fontSize).split(" ");
        return _fontSize[0];
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._fontSize = this._targetObject.style.fontSize;
  }

  _addEventListToHalfInput(halfInput, eventName) {
    var _this = this;
    halfInput.querySelector("input").addEventListener("keyup", function (e) {
      e.preventDefault();
      var val = this.value;
      _this._targetObject.style.fontSize = `${val}px`;
    });

    halfInput.querySelector("input").addEventListener("blur", function (e) {
      e.preventDefault();
      var val = this.value;

      var saveVal = _this._fontSize;
      _this._fontSize = val;

      _this.setFontSize(val, saveVal);
    });
  }

  setFontSize(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("font-size");
    } else {
      this._targetObject.style.fontSize = `${val}px`;
    }

    this.setStep(() => {
      this.setFontSize(saveVal, val);
    });
  }
}
export default FontSizeES;
