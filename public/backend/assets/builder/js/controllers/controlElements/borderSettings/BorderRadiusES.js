import BaseBorderRadius from "../global/BaseBorderRadius.js";

class BorderRadiusES extends BaseBorderRadius {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.border_radius,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._borderRadius === "") return this._borderRadius;
        let _borderRadius = this._elementNoPx(this._borderRadius);
        return _borderRadius;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._borderRadius = this._targetObject.style.borderRadius;
  }

  _addEventListToBorderRadiusInput(borderRadius, eventName) {
    const inputs = borderRadius.querySelectorAll("input");

    Array.prototype.forEach.call(inputs, (input) => {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const topLeft = borderRadius.querySelector("input.top-left").value;
        const topRight = borderRadius.querySelector("input.top-right").value;
        const bottomLeft =
          borderRadius.querySelector("input.bottom-left").value;
        const bottomRight =
          borderRadius.querySelector("input.bottom-right").value;

        const topLeftVal = topLeft === "" ? "0" : topLeft;
        const topRightVal = topRight === "" ? "0" : topRight;
        const bottomLeftVal = bottomLeft === "" ? "0" : bottomLeft;
        const bottomRightVal = bottomRight === "" ? "0" : bottomRight;

        const val = `${topLeftVal}px ${topRightVal}px ${bottomRightVal}px ${bottomLeftVal}px`;

        this._targetObject.style.borderRadius = val;
      });
    });

    Array.prototype.forEach.call(inputs, (el) => {
      el.addEventListener("blur", (e) => {
        e.preventDefault();

        const topLeft = borderRadius.querySelector("input.top-left").value;
        const topRight = borderRadius.querySelector("input.top-right").value;
        const bottomLeft =
          borderRadius.querySelector("input.bottom-left").value;
        const bottomRight =
          borderRadius.querySelector("input.bottom-right").value;

        const topLeftVal = topLeft === "" ? "0" : topLeft;
        const topRightVal = topRight === "" ? "0" : topRight;
        const bottomLeftVal = bottomLeft === "" ? "0" : bottomLeft;
        const bottomRightVal = bottomRight === "" ? "0" : bottomRight;

        const val = `${topLeftVal}px ${topRightVal}px ${bottomRightVal}px ${bottomLeftVal}px`;

        const saveVal = this._borderRadius;
        this._borderRadius = val;

        this.setBorderRadius(val, saveVal);
      });
    });
  }

  setBorderRadius(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("border-radius");
    } else {
      this._targetObject.style.borderRadius = val;
    }

    this.setStep(() => {
      this.setBorderRadius(saveVal, val);
    });
  }
}
