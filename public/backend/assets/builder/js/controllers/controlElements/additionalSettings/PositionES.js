import HalfDropdown from "../../globalControllers/HalfDropdown.js";
import { replaceSpace, firstDown, firstUp } from "../../functions/function.js";

class PositionES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }
    super({
      menu: ["-", "static", "fixed", "absolute", "relative"],
      title: Core.prototype.translateWord.keywords_ar.rightPanel.position,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return firstUp(this._position);
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._position = this._targetObject.style.position;
  }

  _addEventListToDropdown(dropDown) {
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");
    Array.from(options).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        const saveVal = this._position;
        this._position = val;

        this.setPosition(val, saveVal);
      });
    });
  }

  setPosition(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("position");
    } else {
      this._targetObject.style.position = val;
    }

    this.setStep(() => {
      this.setPosition(saveVal, val);
    });
  }
}
export default PositionES;
