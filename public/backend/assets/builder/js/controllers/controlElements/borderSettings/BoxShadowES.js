import FourthInput from "../global/FourthInput.js";

class BoxShadowES extends FourthInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.box_Shadow,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._boxShadow === "") return this._boxShadow;
        let _boxShadowArr = this._boxShadow.split(" ");
        let RgbColor = _boxShadowArr.slice(0, -3).join(" ");
        let numbersInPX = _boxShadowArr.slice(-3).join(" ");
        let numbersNoPX = this._elementNoPx(numbersInPX)
          .split(" ")
          .slice(0, 3)
          .join(" ");
        let _boxShadow = RgbColor + " " + numbersNoPX;

        return _boxShadow;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._boxShadow = this._targetObject.style.boxShadow;
  }

  _listenerToFourthInputCp(color) {
    const inputs = this._selfDOM.querySelectorAll("input");
    let val = "";

    Array.prototype.forEach.call(inputs, (input, indx) => {
      let postfix = " ";
      let value = input.value === "" ? "0" : input.value;
      if (input.classList.contains("spectrum")) {
        value = /rgba/.test($(input).spectrum("get").toRgbString())
          ? $(input).spectrum("get").toRgbString()
          : $(input).spectrum("get").toHexString();

        val += value + postfix;
      } else {
        val += `${value}px` + postfix;
      }
      if (indx !== inputs.length - 1) postfix = " ";
    });

    const saveVal = this._boxShadow;
    this._boxShadow = val;

    this.setBoxShadow(val, saveVal);
  }

  _addEventListToFourthInput(fourthInput) {
    const inputs = fourthInput.querySelectorAll("input");

    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        let val = "";

        Array.prototype.forEach.call(inputs, (input, indx) => {
          let postfix = " ";
          let value = input.value === "" ? "0" : input.value;
          if (input.classList.contains("spectrum")) {
            value = /rgba/.test($(input).spectrum("get").toRgbString())
              ? $(input).spectrum("get").toRgbString()
              : $(input).spectrum("get").toHexString();

            val += value + postfix;
          } else {
            val += `${value}px` + postfix;
          }
          if (indx !== inputs.length - 1) postfix = " ";
        });

        this._targetObject.style.boxShadow = val;
      });
    });

    Array.prototype.forEach.call(inputs, (el) => {
      el.addEventListener("blur", (e) => {
        e.preventDefault();
        let val = "";

        Array.prototype.forEach.call(inputs, (input, indx) => {
          let postfix = " ";
          let value = input.value === "" ? "0" : input.value;
          if (input.classList.contains("spectrum")) {
            value = /rgba/.test($(input).spectrum("get").toRgbString())
              ? $(input).spectrum("get").toRgbString()
              : $(input).spectrum("get").toHexString();

            val += value + postfix;
          } else {
            val += `${value}px` + postfix;
          }
          if (indx !== inputs.length - 1) postfix = " ";
        });

        const saveVal = this._boxShadow;
        this._boxShadow = val;

        this.setBoxShadow(val, saveVal);
      });
    });
  }

  setBoxShadow(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("box-shadow");
    } else {
      this._targetObject.style.boxShadow = val;
    }

    this.setStep(() => {
      this.setBoxShadow(saveVal, val);
    });
  }
}
export default BoxShadowES;
