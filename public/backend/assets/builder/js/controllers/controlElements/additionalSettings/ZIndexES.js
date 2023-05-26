import HalfInput from "../../globalControllers/HalfInput.js";

class ZIndexES extends HalfInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }
    super({
      title: this.translateWord.keywords_ar.rightPanel.z_index,
      order: options.order || 999999,
      elClass: "",
      postfix: "",
      callback: () => {
        return this._zIndex;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._zIndex = this._targetObject.style.zIndex;
  }

  _addEventListToHalfInput(halfInput, eventName) {
    const input = halfInput.querySelector("input");
    const _this = this;

    input.addEventListener("keyup", (e) => {
      e.preventDefault();
      const val = input.value;

      _this._targetObject.style.zIndex = val;
    });

    input.addEventListener("blur", (e) => {
      e.preventDefault();
      const val = input.value;

      const saveVal = _this._zIndex;
      _this._zIndex = val;

      _this.setZIndex(val, saveVal);
    });
  }

  setZIndex(val, saveVal) {
    const _this = this;

    if (val === "" || val === "-") {
      _this._targetObject.style.removeProperty("z-index");
    } else {
      _this._targetObject.style.zIndex = val;
    }

    _this.setStep(() => {
      _this.setZIndex(saveVal, val);
    });
  }
}

export default ZIndexES;
