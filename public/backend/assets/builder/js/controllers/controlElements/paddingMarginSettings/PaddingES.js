import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class PaddingES extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }
    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.padding,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._padding === "") return this._padding;
        let _padding = Core.prototype._elementNoPx(this._padding);
        return _padding;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    const padding = this._targetObject.style.padding;
    let pTop = this._targetObject.style.paddingTop || "0px";
    let pBottom = this._targetObject.style.paddingBottom || "0px";
    let pRight = this._targetObject.style.paddingRight || "0px";
    let pLeft = this._targetObject.style.paddingLeft || "0px";

    const elementStylePadding = padding.match(
      /([^\s]*)\s*([^\s]*)\s*([^\s]*)\s*([^\s]*)/
    );
    if (elementStylePadding[0] !== "") {
      pTop = elementStylePadding[1];
      pRight = elementStylePadding[2]
        ? elementStylePadding[2]
        : elementStylePadding[1];
      pBottom = elementStylePadding[3]
        ? elementStylePadding[3]
        : elementStylePadding[1];
      pLeft = elementStylePadding[4]
        ? elementStylePadding[4]
        : elementStylePadding[1];

      if (elementStylePadding[4] === "" && elementStylePadding[2] !== "") {
        pLeft = elementStylePadding[2];
      }
    }

    this._padding = `${pTop} ${pRight} ${pBottom} ${pLeft}`;
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

        this._targetObject.style.padding = val;
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
        const saveValue = this._padding;
        this._padding = val;

        this.setPadding(val, saveValue);
      });
    });
  }

  setPadding(val, saveVal) {
    this._targetObject.style.removeProperty("padding-top");
    this._targetObject.style.removeProperty("padding-right");
    this._targetObject.style.removeProperty("padding-bottom");
    this._targetObject.style.removeProperty("padding-left");

    if (val === "0px 0px 0px 0px" || val === "0 0 0 0") {
      this._targetObject.style.removeProperty("padding");
    } else {
      this._targetObject.style.padding = val;
    }

    this.setStep(() => {
      this.setPadding(saveVal, val);
    });
  }
}
export default PaddingES;
