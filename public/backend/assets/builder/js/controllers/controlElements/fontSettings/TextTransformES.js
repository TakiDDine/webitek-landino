import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class TextTransformES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: ["-", "capitalize", "uppercase", "lowercase"],
      title: Core.prototype.translateWord.keywords_ar.rightPanel.textTransform,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return firstUp(this._textTransform);
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._textTransform = this._targetObject.style.textTransform;
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

        var saveVal = _this._textTransform;
        _this._textTransform = val;

        _this.setTextTransform(val, saveVal);
      });
    });
  }

  setTextTransform(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("text-transform");
    } else {
      this._targetObject.style.textTransform = val;
    }

    this.setStep(() => {
      this.setTextTransform(saveVal, val);
    });
  }
}
export default TextTransformES;
