import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class MarginES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }
    super({
      title: this.translateWord.keywords_ar.rightPanel.margin,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._margin === "") return this._margin;
        let _margin = this._elementNoPx(this._margin);
        return _margin;
      },
    });

    this._selfDOM = null;
    this._min = -1000;
    this._targetObject = options.targetObject;
    const margin = this._targetObject.style.margin;
    let mTop = this._targetObject.style.marginTop || "0px";
    let mBottom = this._targetObject.style.marginBottom || "0px";
    let mRight = this._targetObject.style.marginRight || "0px";
    let mLeft = this._targetObject.style.marginLeft || "0px";

    const elementStyleMargin = margin.match(
      /([^\s]*)\s*([^\s]*)\s*([^\s]*)\s*([^\s]*)/
    );
    if (elementStyleMargin[0] !== "") {
      mTop = elementStyleMargin[1];
      mRight = elementStyleMargin[2]
        ? elementStyleMargin[2]
        : elementStyleMargin[1];
      mBottom = elementStyleMargin[3]
        ? elementStyleMargin[3]
        : elementStyleMargin[1];
      mLeft = elementStyleMargin[4]
        ? elementStyleMargin[4]
        : elementStyleMargin[1];

      if (elementStyleMargin[4] === "" && elementStyleMargin[2] !== "") {
        mLeft = elementStyleMargin[2];
      }
    }

    this._margin = `${mTop} ${mRight} ${mBottom} ${mLeft}`;
  }

  _addEventListToPmInput(pmInput, eventName) {
    const inputs = pmInput.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        let top = pmInput.querySelector("input.top").value;
        let right = pmInput.querySelector("input.right").value;
        let bottom = pmInput.querySelector("input.bottom").value;
        let left = pmInput.querySelector("input.left").value;

        top = top === "" ? "0" : top;
        right = right === "" ? "0" : right;
        bottom = bottom === "" ? "0" : bottom;
        left = left === "" ? "0" : left;

        const val = `${top}px ${right}px ${bottom}px ${left}px`;

        this._targetObject.style.margin = val;
      });
    });

    Array.from(inputs).forEach((el) => {
      el.addEventListener("blur", (e) => {
        const parent = this.parentElement;
        const top = parent.querySelector(".top").value || "0";
        const right = parent.querySelector(".right").value || "0";
        const bottom = parent.querySelector(".bottom").value || "0";
        const left = parent.querySelector(".left").value || "0";
        const val = `${top}px ${right}px ${bottom}px ${left}px`;
        const saveValue = this._margin;
        this._margin = val;

        this.setMargin(val, saveValue);
      });
    });
  }

  setMargin(val, saveVal) {
    this._targetObject.style.removeProperty("margin-top");
    this._targetObject.style.removeProperty("margin-right");
    this._targetObject.style.removeProperty("margin-bottom");
    this._targetObject.style.removeProperty("margin-left");

    if (val === "0px 0px 0px 0px" || val === "0 0 0 0") {
      this._targetObject.style.removeProperty("margin");
    } else {
      this._targetObject.style.margin = val;
    }

    this.setStep(() => {
      this.setMargin(saveVal, val);
    });
  }
}
export default MarginES;
