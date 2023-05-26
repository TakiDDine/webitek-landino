import ButtonsSwitch from "../../globalControllers/ButtonsSwitch.js";

class ElementSkin extends ButtonsSwitch {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.skin,
      buttons: [
        {
          title: this.translateWord.keywords_ar.rightPanel.light,
          value: "light",
        },
        {
          title: this.translateWord.keywords_ar.rightPanel.dark,
          value: "dark",
        },
      ],
      order: options.order || 999999,
      outerClass: "",
      onlyOne: true,
      allowSelectNothing: false,
      isActive: (value) => {
        if (
          this._targetObject.classList.contains(value) ||
          (this._li.children[0].classList.contains(value) &&
            !this._targetObject.classList.contains("light") &&
            !this._targetObject.classList.contains("dark"))
        ) {
          this._elementSkin.value = value;
          this._elementSkin.select = true;
          return true;
        }
        return false;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._li = options.li;
    this._elementSkin = {
      value: "",
      select: false,
      buttons: this.buttons,
    };
  }

  _addEventListToSwitchButton(btn, e) {
    btn = this._prepareValues(btn);

    const val = {
      value: btn.dataset.value,
      select: btn.classList.contains("active"),
      buttons: this._elementSkin.buttons,
    };
    this._elementSkin.value = this._elementSkin.value || btn.dataset.value;
    const saveVal = this._elementSkin;
    this._elementSkin = val;

    this.setElementSkin(val, saveVal);
  }

  setElementSkin(val, saveVal) {
    const element = this._targetObject;

    if (val.select) {
      val.buttons.forEach((el) => {
        if (element.classList.contains(el.value)) {
          element.classList.remove(el.value);
        }
      });

      element.classList.add(val.value);
    }

    this.trigger("element.settings.change", document, {
      detail: {
        Obj: this._targetObject,
      },
    });

    this.setStep(() => {
      this.setElementSkin(saveVal, val);
    });
  }
}

export default ElementSkin;
