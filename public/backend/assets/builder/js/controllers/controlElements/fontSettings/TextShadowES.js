import FourthInput from "../global/FourthInput.js";

class TextShadowES extends FourthInput {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.textShadow,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        if (this._textShadow === "") return this._textShadow;
        let _textShadowArr = this._textShadow.split(" ");
        let RgbColor = _textShadowArr.slice(0, -3).join(" ");
        let numbersInPX = _textShadowArr.slice(-3).join(" ");
        let numbersNoPX = Core.prototype
          ._elementNoPx(numbersInPX)
          .split(" ")
          .slice(0, 3)
          .join(" ");
        let _textShadow = RgbColor + " " + numbersNoPX;

        return _textShadow;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._textShadow = this._targetObject.style.textShadow;
  }

  _listenerToFourthInputCp(color) {
    var inputs = this._selfDOM.querySelectorAll("input");
    var val = "";

    Array.prototype.forEach.call(inputs, function (input, indx) {
      var postfix = " ";
      var value = input.value === "" ? "0" : input.value;
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

    var saveVal = this._textShadow;
    this._textShadow = val;

    this.setTextShadow(val, saveVal);
  }

  _addEventListToFourthInput(fourthInput) {
    var inputs = fourthInput.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        var val = "";

        Array.prototype.forEach.call(inputs, (input, indx) => {
          var postfix = " ";
          var value = input.value === "" ? "0" : input.value;
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

        this._targetObject.style.textShadow = val;
      });
    });

    Array.prototype.forEach.call(inputs, (el) => {
      el.addEventListener("blur", (e) => {
        e.preventDefault();
        var val = "";

        Array.prototype.forEach.call(inputs, (input, indx) => {
          var postfix = " ";
          var value = input.value === "" ? "0" : input.value;
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

        var saveVal = this._textShadow;
        this._textShadow = val;

        this.setTextShadow(val, saveVal);
      });
    });
  }

  setTextShadow(val, saveVal) {
    if (val === "" || val === "-") {
      this._targetObject.style.removeProperty("text-shadow");
    } else {
      this._targetObject.style.textShadow = val;
    }

    this.setStep(() => {
      this.setTextShadow(saveVal, val);
    });
  }
}
export default TextShadowES;
