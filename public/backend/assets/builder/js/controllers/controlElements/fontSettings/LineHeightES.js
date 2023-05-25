import HalfInput from "../../globalControllers/HalfInput.js";

class LineHeightES extends HalfInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.lineHeight,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._lineHeight === "") return this._lineHeight;
        let _lineHeight = Core.prototype
          ._elementNoPx(this._lineHeight)
          .split(" ");
        return _lineHeight[0];
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._lineHeight = this._targetObject.style.lineHeight;
  }

  _addEventListToHalfInput(halfInput, eventName) {
    var _this = this;
    halfInput.querySelector("input").addEventListener("keyup", function (e) {
      e.preventDefault();
      var val = this.value;

      _this._targetObject.style.lineHeight = `${val}px`;
    });

    halfInput.querySelector("input").addEventListener("blur", function (e) {
      e.preventDefault();
      var val = this.value;

      var saveVal = _this._lineHeight;
      _this._lineHeight = val;

      _this.setLineHeight(val, saveVal);
    });
  }

  setLineHeight(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("line-height");
    } else {
      this._targetObject.style.lineHeight = `${val}px`;
    }

    this.setStep(() => {
      this.setLineHeight(saveVal, val);
    });
  }
}
export default LineHeightES;
