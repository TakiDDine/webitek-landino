import CustomButtonsSwitch from "../base/CustomButtonsSwitch.js";

class ElementCBS extends CustomButtonsSwitch {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      customCE: options.customCE,
      isActive: (value) => {
        if (this._targetObject.classList.contains(value)) {
          this._options = value;
          return true;
        }
        return false;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._li = options.li;
    this._options = "";
  }

  _addEventListToSwitchButton(btn, e) {
    btn = this._prepareValues(btn);

    const sBtn = document.createElement("div");
    sBtn.dataset.value = btn.dataset.value;
    if (btn.classList.contains("active")) sBtn.classList.add("active");

    const val = {
      btn: sBtn,
    };

    const saveBtn = document.createElement("div");
    saveBtn.dataset.value =
      this._options !== "" && this.onlyOne ? this._options : btn.dataset.value;
    if (!btn.classList.contains("active") || this.onlyOne)
      saveBtn.classList.add("active");

    const saveVal = {
      btn: saveBtn,
    };
    this._options = btn.dataset.value;

    this.setOptions(val, saveVal);
  }

  setOptions(val, saveVal) {
    const element = this._targetObject;

    this.optionsSelect(val.btn, element);

    this.trigger("element.settings.change", document, {
      detail: {
        Obj: this._targetObject,
      },
    });

    this.setStep(() => {
      this.setOptions(saveVal, val);
    });
  }
}

export default ElementCBS;
