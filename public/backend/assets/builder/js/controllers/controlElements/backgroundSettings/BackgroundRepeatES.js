import DropDown from "../../globalControllers/DropDown.js";
import { replaceSpace, firstDown, firstUp } from "../../functions/function.js";

class BackgroundRepeatES extends DropDown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    if (!Array.isArray(typographyFonts)) {
      throw new TypeError("Expected type of Array");
    }

    super({
      menu: ["-", "repeat", "repeat-x", "repeat-y", "no-repeat"],
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel.background_repeat,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._repeat,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._repeat = this._targetObject.style.backgroundRepeat;
  }

  _addEventListToDropdown(dropDown) {
    var options = dropDown.querySelectorAll("li a");
    var button = dropDown.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        var val = firstDown(element.innerHTML);
        button.dataset.value = replaceSpace(val);
        button.querySelector("span").innerHTML = firstUp(val);

        var saveVal = this._repeat;
        this._repeat = val;

        this.setRepeat(val, saveVal);
      });
    });
  }

  setRepeat(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("background-repeat");
    } else {
      this._targetObject.style.backgroundRepeat = val;
    }

    this.setStep(() => {
      this.setRepeat(saveVal, val);
    });
  }
}
export default BackgroundRepeatES;
