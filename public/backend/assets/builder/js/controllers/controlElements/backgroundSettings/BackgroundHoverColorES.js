import Colorpicker from "../global/Colorpicker.js";

class BackgroundHoverColorES extends Colorpicker {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel
          .backgroundHoverColor,
      order: options.order || 999999,
      elClass: "",
      outerClass: "bgHoverColor",
      callback: () => this._bgHoverColor,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._bgHoverColor = this._targetObject.getAttribute("data-bgHoverColor");
    this._className = this._targetObject.getAttribute("data-bgHovercolorname");

    console.log("_this", this);
    this._selfDOM.classList.add("hidden");
  }

  _listenerToColorpicker(color) {
    var val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();
    var saveVal = this._bgHoverColor;
    this._bgHoverColor = val;
    this.setHoverColor(val, saveVal);
  }

  setHoverColor(val, saveVal) {
    const section = this._targetObject.closest("section");
    const style = this._targetObject.closest("li").querySelector("style");
    const hoverClassName = this._targetObject.getAttribute(
      "data-bgHovercolorname"
    );
    const hoverColor =
      val === "rgba(0, 0, 0, 0)" || val === "" ? "inherit" : val;

    if (/landino-bgHover-color-/.test(this._targetObject.classList.value)) {
      const elementOnHover = `#${section.id} .${hoverClassName}:hover`;
      const newRule = `${elementOnHover} { background-color: ${hoverColor}!important; }`;
      const styleContent = style.innerHTML;
      const rulePattern = new RegExp(`${elementOnHover}\\s*{[^}]+}`, "g");
      const updatedContent = styleContent.replace(rulePattern, newRule);
      style.innerHTML = updatedContent;
      this._targetObject.setAttribute("data-bgHoverColor", hoverColor);
      this._bgHoverColor = val;
    } else {
      const newHoverClassName = this.generateUniqueClassName(style);
      this._targetObject.classList.add(newHoverClassName);
      const elementOnHover = `#${section.id} .${newHoverClassName}:hover`;

      const newRule = `${elementOnHover} { background-color: ${hoverColor}!important; }`;
      style.innerHTML += `\n${newRule}`;
      this._targetObject.setAttribute("data-bgHoverColor", hoverColor);
      this._targetObject.setAttribute(
        "data-bgHovercolorname",
        newHoverClassName
      );
      this._className = newHoverClassName;
      this._bgHoverColor = hoverColor;
    }

    this.setStep(() => {
      this.setHoverColor(saveVal, val);
    });
  }

  generateUniqueClassName(style) {
    const prefix = "landino-bgHover-color-";
    const randomSuffix = Math.floor(Math.random() * 1000);
    let className = `${prefix}${randomSuffix}`;
    const existingClasses = style.innerHTML.match(/\.[^\s{]+(?=\s*{)/g) || [];
    while (existingClasses.includes(className)) {
      className = `${prefix}${Math.floor(Math.random() * 1000)}`;
    }
    return className;
  }
}

export default BackgroundHoverColorES;
