import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class FontStyleES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: ["-", "normal", "italic"],
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontStyle,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return firstUp(this._fontStyle);
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._fontStyle = this._targetObject.style.fontStyle;
  }

  _addEventListToDropdown(dropDown) {
    var _this = this;
    var options = dropDown.querySelectorAll("li a");
    var button = dropDown.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        var val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        var saveVal = _this._fontStyle;
        _this._fontStyle = val;

        _this.setFontStyle(val, saveVal);
      });
    });
  }

  setFontStyle(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("font-style");
    } else {
      this._targetObject.style.fontStyle = val;
    }

    this.setStep(() => {
      this.setFontStyle(saveVal, val);
    });
  }
}
export default FontStyleES;
