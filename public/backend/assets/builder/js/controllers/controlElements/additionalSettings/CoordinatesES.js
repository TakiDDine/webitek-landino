import BaseCoordinates from "../global/BaseCoordinates.js";

class CoordinatesES extends BaseCoordinates {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.coordinates,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._coordinates === "") return this._coordinates;
        let _coordinates = this._elementNoPx(this._coordinates);
        return _coordinates;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    let top = this._targetObject.style.top || "auto";
    let right = this._targetObject.style.right || "auto";
    let bottom = this._targetObject.style.bottom || "auto";
    let left = this._targetObject.style.left || "auto";
    this._coordinates = `${top} ${right} ${bottom} ${left}`;
  }

  _addEventListTobCoordinatesInput(bCoordinates, eventName) {
    const inputs = bCoordinates.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        let top = bCoordinates.querySelector("input.top").value;
        let right = bCoordinates.querySelector("input.right").value;
        let bottom = bCoordinates.querySelector("input.bottom").value;
        let left = bCoordinates.querySelector("input.left").value;

        top = top === "" ? "auto" : top;
        right = right === "" ? "auto" : right;
        bottom = bottom === "" ? "auto" : bottom;
        left = left === "" ? "auto" : left;

        let val = `${top}px ${right}px ${bottom}px ${left}px`;

        if (top === "" && right === "" && bottom === "" && left === "")
          val = "";

        this.setCoordinates(val);
      });
    });

    Array.prototype.forEach.call(inputs, (el) => {
      el.addEventListener("blur", (e) => {
        e.preventDefault();

        let top = bCoordinates.querySelector("input.top").value;
        let right = bCoordinates.querySelector("input.right").value;
        let bottom = bCoordinates.querySelector("input.bottom").value;
        let left = bCoordinates.querySelector("input.left").value;

        top = top === "" ? "auto" : top;
        right = right === "" ? "auto" : right;
        bottom = bottom === "" ? "auto" : bottom;
        left = left === "" ? "auto" : left;

        let val = `${top}px ${right}px ${bottom}px ${left}px`;

        if (top === "" && right === "" && bottom === "" && left === "")
          val = "";

        let saveVal = this._coordinates;
        this._coordinates = val;

        this.setCoordinatesWithHistory(val, saveVal);
      });
    });
  }

  setCoordinates(val) {
    let match = ["", "", "", ""];

    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("top");
      this._targetObject.style.removeProperty("right");
      this._targetObject.style.removeProperty("bottom");
      this._targetObject.style.removeProperty("left");
    } else {
      match = val.split(" ");
    }

    if (match[0] && match[0] !== "auto") {
      this._targetObject.style.top = match[0];
    } else {
      this._targetObject.style.removeProperty("top");
    }

    if (match[1] && match[1] !== "auto") {
      this._targetObject.style.right = match[1];
    } else {
      this._targetObject.style.removeProperty("right");
    }

    if (match[2] && match[2] !== "auto") {
      this._targetObject.style.bottom = match[2];
    } else {
      this._targetObject.style.removeProperty("bottom");
    }

    if (match[3] && match[3] !== "auto") {
      this._targetObject.style.left = match[3];
    } else {
      this._targetObject.style.removeProperty("left");
    }
  }

  setCoordinatesWithHistory(val, saveVal) {
    this.setCoordinates(val);

    this.setStep(() => {
      this.setCoordinatesWithHistory(saveVal, val);
    });
  }
}
export default CoordinatesES;
