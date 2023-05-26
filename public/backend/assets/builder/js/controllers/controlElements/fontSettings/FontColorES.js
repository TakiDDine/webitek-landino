import Colorpicker from "../base/Colorpicker.js";

class FontColorES extends Colorpicker {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontColor,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._color,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._color = this._targetObject.style.color;
  }

  _listenerToColorpicker(color) {
    var val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();

    var saveVal = this._color;
    this._color = val;

    this.setFontColor(val, saveVal);
  }

  setFontColor(val, saveVal) {
    if (val === "rgba(0, 0, 0, 0)" || val === "") {
      this._targetObject.style.removeProperty("color");
    } else {
      this._targetObject.style.color = val;
    }

    this.setStep(() => {
      this.setFontColor(saveVal, val);
    });
  }
}
export default FontColorES;
