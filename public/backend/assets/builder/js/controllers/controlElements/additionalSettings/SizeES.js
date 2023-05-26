import HalfInput from "../../globalControllers/HalfInput.js";
import BaseSize from "../base/BaseSize.js";

class SizeES extends BaseSize {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super(options);

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    const width = this._targetObject.style.width || "";
    const height = this._targetObject.style.height || "";
    this._size = width + " " + height;

    let sizeAr = this.translateWord.keywords_ar.rightPanel.size;

    HalfInput.call(this, {
      title: sizeAr,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._size === "") return (this._size = "auto auto");
        let _size = this._elementNoPx(this._size);

        return _size;
      },
    });
  }

  _addEventListToSize(size, eventName) {
    const inputs = size.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const width = size.querySelector(".width");
        const height = size.querySelector(".height");

        if (this._triggerProportion) {
          let value = "auto";

          if (
            input.getAttribute("name") === "width" &&
            (input.value !== "" || input.value !== "auto")
          ) {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] / this._proportion) + match[2]
              : "";
            height.value = value;
          } else if (input.value !== "" || input.value !== "auto") {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] * this._proportion) + match[2]
              : "";
            width.value = value;
          }
        }

        if (value === "auto") {
          var val = width.value + " " + height.value;
        } else {
          var val = `${width.value}px` + " " + `${height.value}px`;
        }

        this.setSize(val);
      });
    });

    Array.prototype.forEach.call(inputs, (input) => {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("blur", (e) => {
        e.preventDefault();

        const width = size.querySelector(".width");
        const height = size.querySelector(".height");

        if (this._triggerProportion) {
          let value = "auto";

          if (
            input.getAttribute("name") === "width" &&
            (input.value !== "" || input.value !== "auto")
          ) {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] / this._proportion) + match[2]
              : "";
            height.value = value;
          } else if (input.value !== "" || input.value !== "auto") {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] * this._proportion) + match[2]
              : "";
            width.value = value;
          }
        }

        if (width.value === "auto" && height.value === "auto") {
          var val = width.value + " " + height.value;
        } else {
          var val = `${width.value}px` + " " + `${height.value}px`;
        }

        var saveVal = this._size;
        this._size = val;

        this.setSizeWithHistory(val, saveVal);
      });
    });
  }

  setSize(val) {
    const match = val.split(" ");

    if (match[0] === "" || match[0] === "-") {
      this._targetObject.style.removeProperty("width");
    } else {
      this._targetObject.style.width = match[0];
    }

    if (match[1] === "" || match[1] === "-") {
      this._targetObject.style.removeProperty("height");
    } else {
      this._targetObject.style.height = match[1];
    }
  }

  setSizeWithHistory(val, saveVal) {
    this.setSize(val);

    this.setStep(() => {
      this.setSizeWithHistory(saveVal, val);
    });
  }
}

export default SizeES;
