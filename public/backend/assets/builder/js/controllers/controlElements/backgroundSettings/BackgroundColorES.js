import BgColor from "../global/BgColor.js";
import { replaceSpace, firstDown } from "../../functions/function.js";

class BackgroundColorES extends BgColor {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [
        "-",
        "Solid color",
        "Radial gradient",
        "Vertical gradient",
        "Horizontal gradient",
        "Angle gradient",
      ],
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel.background_color,
      order: options.order || 999999,
      outerClass: "",
      callback: () => this._bgColor,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    var bgColor = /gradient/.test(this._targetObject.style.background)
      ? this._targetObject.style.background
      : /#|rgb/.test(this._targetObject.style.backgroundColor)
      ? this._targetObject.style.backgroundColor
      : "";
    this._bgColor = bgColor && bgColor !== "" ? bgColor : "-";
  }

  _listenerToBgColor(color) {
    var bgColor1 = this._selfDOM.querySelector(".spectrum.first");
    var bgColor2 = this._selfDOM.querySelector(".spectrum.second");
    var bgColor1value = /rgba/.test($(bgColor1).spectrum("get").toRgbString())
      ? $(bgColor1).spectrum("get").toRgbString()
      : $(bgColor1).spectrum("get").toHexString();
    var bgColor2value = /rgba/.test($(bgColor2).spectrum("get").toRgbString())
      ? $(bgColor2).spectrum("get").toRgbString()
      : $(bgColor2).spectrum("get").toHexString();
    var val = this._changeCstmColor(bgColor1value, bgColor2value);

    var saveVal = this._bgColor;
    this._bgColor = val;

    this.setBgColor(val, saveVal);
  }

  _addEventListToBgColorDropdown(bgColor) {
    var options = bgColor.querySelectorAll("li a");
    var button = bgColor.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        var item = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(item));
        button.querySelector("span").innerHTML = item;

        if (item === "Solid color" && !bgColor.classList.contains("solid")) {
          bgColor.classList.add("solid");
        } else if (
          item !== "Solid color" &&
          bgColor.classList.contains("solid")
        ) {
          bgColor.classList.remove("solid");
        }

        if (item === "-" && !bgColor.classList.contains("none")) {
          bgColor.classList.add("none");
        } else if (item !== "-" && bgColor.classList.contains("none")) {
          bgColor.classList.remove("none");
        }

        var bgColor1 = this._selfDOM.querySelector(".spectrum.first");
        var bgColor2 = this._selfDOM.querySelector(".spectrum.second");
        var bgColor1value = /rgba/.test(
          $(bgColor1).spectrum("get").toRgbString()
        )
          ? $(bgColor1).spectrum("get").toRgbString()
          : $(bgColor1).spectrum("get").toHexString();
        var bgColor2value = /rgba/.test(
          $(bgColor2).spectrum("get").toRgbString()
        )
          ? $(bgColor2).spectrum("get").toRgbString()
          : $(bgColor2).spectrum("get").toHexString();
        var val = this._changeCstmColor(bgColor1value, bgColor2value);

        var saveVal = this._bgColor;
        this._bgColor = val;

        this.setBgColor(val, saveVal);
      });
    });
  }

  setBgColor(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("background-color");
    } else if (/gradient/.test(val)) {
      this._targetObject.style.removeProperty("background-color");
      this._targetObject.style.removeProperty("background-image");
      this._targetObject.style.background = val;
    } else {
      this._targetObject.style.backgroundColor = val;
    }

    this.setStep(() => {
      this.setBgColor(saveVal, val);
    });
  }
}
export default BackgroundColorES;
