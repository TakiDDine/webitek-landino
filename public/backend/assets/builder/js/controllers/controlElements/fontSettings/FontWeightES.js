import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class FontWeightES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [
        "-",
        "normal",
        "bold",
        "bolder",
        "lighter",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontWeight,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return firstUp(this._fontWeight);
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._fontWeight = this._targetObject.style.fontWeight;
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

        var saveVal = _this._fontWeight;
        _this._fontWeight = val;

        _this.setFontWeight(val, saveVal);
      });
    });
  }

  setFontWeight(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("font-weight");
    } else {
      this._targetObject.style.fontWeight = val;
    }

    this.setStep(() => {
      this.setFontWeight(saveVal, val);
    });
  }
}

export default FontWeightES;
