import Colorpicker from "../global/Colorpicker.js";

class BorderColorES extends Colorpicker {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.border_color,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._borderColor,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._borderColor = this._targetObject.style.borderColor;
  }

  _listenerToColorpicker(color) {
    const val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();

    const saveVal = this._borderColor;
    this._borderColor = val;

    this.setBorderColor(val, saveVal);
  }

  setBorderColor(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("border-color");
    } else {
      this._targetObject.style.borderColor = val;
    }

    this.setStep(() => {
      this.setBorderColor(saveVal, val);
    });
  }
}
export default BorderColorES;
