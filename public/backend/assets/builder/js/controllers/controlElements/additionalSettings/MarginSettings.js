import MediaPM from "../base/MediaPM.js";
import { replaceSpace, firstUp, firstDown } from "../../functions/function.js";

class MarginSettings extends MediaPM {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super({
      name: "MediaPM",
      itemName: "MediaPM",
      title: Core.prototype.translateWord.keywords_ar.rightPanel.margin,
      prefix: "m",
      menu: [
        "-300px",
        "-200px",
        "-100px",
        "-50px",
        "-30px",
        "-",
        "0px",
        "10px",
        "20px",
        "30px",
        "50px",
        "75px",
        "100px",
        "150px",
        "200px",
        "250px",
        "300px",
      ],
      callbackTop: () => {
        const element = this._targetObject;
        const cNameTop = element
          .getAttribute("class")
          .match(/mt-(?![a-z])(-?[0-9]*)/i);
        return cNameTop && cNameTop[1] !== "" ? cNameTop[1] + "px" : "-";
      },
      callbackBottom: () => {
        const element = this._targetObject;
        const cNameBottom = element
          .getAttribute("class")
          .match(/mb-(?![a-z])(-?[0-9]*)/i);
        return cNameBottom && cNameBottom[1] !== ""
          ? cNameBottom[1] + "px"
          : "-";
      },
      obj: this._targetObject,
    });

    this.paddingTop = {
      default: "-",
      mobile: "-",
      tablet: "-",
      desktop: "-",
    };

    this.paddingBottom = {
      default: "-",
      mobile: "-",
      tablet: "-",
      desktop: "-",
    };
  }

  _addEventListToDropdown(dropDown) {
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");

    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const value = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(value));
        button.querySelector("span").innerHTML = value;

        let paddingPosition = "top";

        if (!dropDown.classList.contains("padding-top")) {
          paddingPosition = "bottom";
        }

        const val = {
          value: value,
          media: this.media,
          paddingPosition: paddingPosition,
        };

        const mVal =
          paddingPosition === "bottom"
            ? this.paddingBottom[this.media]
            : this.paddingTop[this.media];

        const saveVal = {
          value: mVal.substr(0, mVal.length - 2),
          media: this.media,
          paddingPosition: paddingPosition,
        };

        if (dropDown.classList.contains("padding-top")) {
          this.paddingTop[this.media] = value !== "" ? value + "px" : "-";
        } else {
          this.paddingBottom[this.media] = value !== "" ? value + "px" : "-";
        }

        const btn = {};
        btn.desktop = this._selfDOM.querySelector(
          ".media-group [data-id=desktop]"
        );
        btn.tablet = this._selfDOM.querySelector(
          ".media-group [data-id=tablet]"
        );
        btn.mobile = this._selfDOM.querySelector(
          ".media-group [data-id=mobile]"
        );

        if (
          this.paddingTop[this.media] === "-" &&
          this.paddingBottom[this.media] === "-" &&
          this.media !== "default"
        ) {
          btn[this.media].classList.remove("isset");
        } else if (this.media !== "default") {
          btn[this.media].classList.add("isset");
        }

        this.setMargin(val, saveVal);
      });
    });
  }

  setMargin(val, saveVal) {
    const element = this._targetObject;

    let pIndex = "t";
    if (val.paddingPosition === "bottom") pIndex = "b";

    let className = "";

    if (val.value !== "") className = " m" + pIndex + "-" + val.value;

    if (val.media === "mobile") {
      if (val.value !== "") className = " m" + pIndex + "-sm-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(new RegExp("\\s?m" + pIndex + "-sm-{1,2}[0-9]+", "ig"), "")
      );
    }

    if (val.media === "tablet") {
      if (val.value !== "") className = " m" + pIndex + "-md-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(new RegExp("\\s?m" + pIndex + "-md-{1,2}[0-9]+", "ig"), "")
      );
    }

    if (val.media === "desktop") {
      if (val.value !== "") className = " m" + pIndex + "-lg-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(new RegExp("\\s?m" + pIndex + "-lg-{1,2}[0-9]+", "ig"), "")
      );
    }

    if (val.media === "default") {
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(new RegExp("\\s?m" + pIndex + "-{1,2}[0-9]+", "ig"), "")
      );
    }

    if (val.value !== "") {
      element.setAttribute("class", element.getAttribute("class") + className);
    }

    this.nowrapCorrectigPosition(element);

    this.trigger("element.settings.change", document, {
      detail: {
        Obj: this._targetObject,
      },
    });

    this.setStep(() => {
      this.setMargin(saveVal, val);
    });
  }
}

export default MarginSettings;
