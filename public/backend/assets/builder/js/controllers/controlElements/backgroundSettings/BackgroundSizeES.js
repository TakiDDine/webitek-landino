import BgSize from "../global/BgSize.js";
import { firstDown, replaceSpace } from "../../functions/function.js";

class BackgroundSizeES extends BgSize {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: ["-", "Auto", "Cover", "Contain", "Custom (width x height)"],
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel.background_size,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        var bgOptions = this._targetObject.style.backgroundSize;
        var WidthVal = "auto";
        var HeightVal = "auto";

        if (bgOptions !== "auto" || bgOptions !== "cover") {
          var WidthValMatch = bgOptions
            ? bgOptions.match(/([0-9]*(?:px|%)|auto)(?:\s|$)/i)
            : null;
          WidthVal = WidthValMatch ? WidthValMatch[1] : "auto";
        }

        if (bgOptions !== "auto" || bgOptions !== "cover") {
          var HeightValMatch = bgOptions
            ? bgOptions.match(/\s([0-9]*(?:px|%)|auto)/i)
            : null;
          HeightVal = HeightValMatch ? HeightValMatch[1] : "auto";
        }

        if (
          bgOptions === "auto" ||
          bgOptions === "cover" ||
          bgOptions === "contain"
        ) {
          return (this._size = bgOptions);
        } else if (/px|%/.test(bgOptions)) {
          return (this._size = WidthVal + " " + HeightVal);
        }
        return "-";
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._size = "";
  }

  _addEventListToSizeInput(bgSize, eventName) {
    var inputs = bgSize.querySelectorAll(".size-input input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        var width = bgSize.querySelector(".width").value;
        var height = bgSize.querySelector(".height").value;

        width = width === "" ? "auto" : width;
        height = height === "" ? "auto" : height;

        var val = width + " " + height;

        var saveVal = this._size;
        this._size = val;

        this.setBgSize(val, saveVal);
      });
    });
  }

  _addEventListToBgSizeDropdown(bgSize) {
    var options = bgSize.querySelectorAll("li a");
    var button = bgSize.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        var val = element.innerHTML.toLowerCase();
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = firstUp(val);

        if (element.innerHTML.toLowerCase() === "custom (width x height)") {
          bgSize.classList.add("show-custom-size");
          var width = bgSize.querySelector(".width").value;
          var height = bgSize.querySelector(".height").value;

          width = width === "" ? "auto" : width;
          height = height === "" ? "auto" : height;

          val = width + " " + height;
        }

        if (
          element.innerHTML.toLowerCase() !== "custom (width x height)" &&
          bgSize.classList.contains("show-custom-size")
        ) {
          bgSize.classList.remove("show-custom-size");
        }

        var saveVal = this._size;
        this._size = val;

        this.setBgSize(val, saveVal);
      });
    });
  }

  setBgSize(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("background-size");
    } else {
      this._targetObject.style.backgroundSize = val;
    }

    this.setStep(() => {
      this.setBgSize(saveVal, val);
    });
  }
}
export default BackgroundSizeES;
