import HalfInput from "../../globalControllers/HalfInput.js";

class LetterSpacingES extends HalfInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.letterSpacing,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._letterSpacing === "") return this._letterSpacing;
        let _letterSpacing = Core.prototype
          ._elementNoPx(this._letterSpacing)
          .split(" ");
        return _letterSpacing[0];
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._letterSpacing = this._targetObject.style.letterSpacing;
  }

  _addEventListToHalfInput(halfInput, eventName) {
    var _this = this;
    halfInput.querySelector("input").addEventListener("keyup", function (e) {
      e.preventDefault();
      var val = this.value;

      _this._targetObject.style.letterSpacing = `${val}px`;
    });

    halfInput.querySelector("input").addEventListener("blur", function (e) {
      e.preventDefault();
      var val = this.value;

      var saveVal = _this._letterSpacing;
      _this._letterSpacing = val;

      _this.setLetterSpacing(val, saveVal);
    });
  }

  setLetterSpacing(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("letter-spacing");
    } else {
      this._targetObject.style.letterSpacing = `${val}px`;
    }

    this.setStep(() => {
      this.setLetterSpacing(saveVal, val);
    });
  }
}
export default LetterSpacingES;
