import Colorpicker from "../base/Colorpicker.js";

class FontHoverColorES extends Colorpicker {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontHoverColor,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._hoverColor,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._hoverColor = this._targetObject.dataset.hoverColor;
    this._className = this._targetObject.dataset.hovercolorname;

    console.log(
      "this._targetObject.dataset.hovercolorname",
      this._targetObject.dataset.hovercolorname
    );
  }

  _listenerToColorpicker(color) {
    var val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();
    var saveVal = this._hoverColor;
    this._hoverColor = val;
    this.setHoverColor(val, saveVal);
  }

  setHoverColor(val, saveVal) {
    const section = this._targetObject.closest("section");
    const style = this._targetObject.closest("li").querySelector("style");
    const hoverClassName = this._targetObject.dataset.hovercolorname;
    const hoverColor =
      val === "rgba(0, 0, 0, 0)" || val === "" ? "inherit" : val;

    if (/landino-hover-color-/.test(this._targetObject.className)) {
      const elementOnHover = `#${section.id} .${hoverClassName}:hover`;
      const newRule = `${elementOnHover} { color: ${hoverColor}!important; }`;
      const styleContent = style.innerHTML;
      const rulePattern = new RegExp(`${elementOnHover}\\s*{[^}]+}`, "g");
      const updatedContent = styleContent.replace(rulePattern, newRule);
      style.innerHTML = updatedContent;
      this._targetObject.setAttribute("data-hover-color", hoverColor);
      this._hoverColor = val;
    } else {
      const newHoverClassName = this.generateUniqueClassName(style);
      this._targetObject.className += ` ${newHoverClassName}`;
      const elementOnHover = `#${section.id} .${newHoverClassName}:hover`;

      const newRule = `${elementOnHover} { color: ${hoverColor}!important; }`;
      style.innerHTML += `\n${newRule}`;
      this._targetObject.setAttribute("data-hover-color", hoverColor);
      this._targetObject.setAttribute("data-hovercolorname", newHoverClassName);
      this._className = newHoverClassName;
      this._hoverColor = hoverColor;
    }

    this.setStep(() => {
      this.setHoverColor(saveVal, val);
    });
  }

  generateUniqueClassName(style) {
    const prefix = "landino-hover-color-";
    const randomSuffix = Math.floor(Math.random() * 10);
    let className = `${prefix}${randomSuffix}`;
    const existingClasses = style.innerHTML.match(/\.[^\s{]+(?=\s*{)/g) || [];
    while (existingClasses.includes(className)) {
      className = `${prefix}${Math.floor(Math.random() * 10)}`;
    }
    return className;
  }
}
export default FontHoverColorES;
