import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class TextDecorationES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: ["-", "none", "underline", "overline", "line-through"],
      title: Core.prototype.translateWord.keywords_ar.rightPanel.textDecoration,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return firstUp(this._textDecoration);
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._textDecoration = this._targetObject.style.textDecoration;
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

        var saveVal = _this._textDecoration;
        _this._textDecoration = val;

        _this.setTextDecoration(val, saveVal);
      });
    });
  }

  setTextDecoration(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("text-decoration");
    } else {
      this._targetObject.style.textDecoration = val;
    }

    this.setStep(() => {
      this.setTextDecoration(saveVal, val);
    });
  }
}
export default TextDecorationES;
