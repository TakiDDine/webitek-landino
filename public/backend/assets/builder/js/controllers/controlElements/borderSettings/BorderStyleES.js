import HalfDropdown from "../../globalControllers/HalfDropdown.js";
import { firstUp } from "../../functions/function.js";

class BorderStyleES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [
        "-",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
      ],
      title: this.translateWord.keywords_ar.rightPanel.border_style,
      order: options.order || 999999,
      elClass: "",
      callback: () => firstUp(this._borderStyle),
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._borderStyle = this._targetObject.style.borderStyle;
  }

  _addEventListToDropdown(dropDown) {
    const _this = this;
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        const saveVal = _this._borderRadius;
        _this._borderRadius = val;

        _this.setBorderStyle(val, saveVal);
      });
    });
  }

  setBorderStyle(val, saveVal) {
    const _this = this;

    if (val === "" || val === "-") {
      _this._targetObject.style.removeProperty("border-style");
    } else {
      _this._targetObject.style.borderStyle = val;
    }

    _this.setStep(() => {
      _this.setBorderStyle(saveVal, val);
    });
  }
}
export default BorderStyleES;
