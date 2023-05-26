import ButtonsSwitch from "../../globalControllers/ButtonsSwitch.js";

class Visibility extends ButtonsSwitch {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.visibility,
      buttons: [
        {
          title: '<i class="fa fa-mobile"></i>',
          value: "mobile",
        },
        {
          title: '<i class="fa fa-tablet"></i>',
          value: "tablet",
        },
        {
          title: '<i class="fa fa-desktop"></i>',
          value: "desktop",
        },
      ],
      order: options.order || 999999,
      outerClass: "",
      onlyOne: false,
      allowSelectNothing: false,
      isActive: (value) => {
        if (
          !this._targetObject.classList.contains("hidden-sm") &&
          value === "mobile"
        ) {
          this._visibility.mobile = true;
          return true;
        }
        if (
          !this._targetObject.classList.contains("hidden-md") &&
          value === "tablet"
        ) {
          this._visibility.tablet = true;
          return true;
        }
        if (
          !this._targetObject.classList.contains("hidden-lg") &&
          !this._targetObject.classList.contains("hidden-xl") &&
          value === "desktop"
        ) {
          this._visibility.desktop = true;
          return true;
        }
        return false;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._li = options.li;
    this._visibility = {
      mobile: false,
      tablet: false,
      desktop: false,
    };
  }

  _addEventListToSwitchButton(btn, e) {
    const active = btn.parentElement.querySelector(".active");
    const countActive = btn.parentElement.querySelectorAll(".active");
    if (active && active !== btn && this.onlyOne) {
      active.classList.remove("active");
    }

    if (
      btn.classList.contains("active") &&
      (countActive.length > 1 ||
        (countActive.length === 1 && this.allowSelectNothing))
    ) {
      btn.classList.remove("active");
    } else if (!btn.classList.contains("active")) {
      btn.classList.add("active");
    }

    const val = {
      value: btn.dataset.value,
      select: btn.classList.contains("active"),
    };
    const saveVal = {
      value: btn.dataset.value,
      select: this._visibility[val.value],
    };
    this._visibility[val.value] = val.select;

    this.setVisibility(val, saveVal);
  }

  setVisibility(val, saveVal) {
    const element = this._targetObject;

    if (val.select) {
      if (val.value === "mobile") {
        element.setAttribute(
          "class",
          element.getAttribute("class").replace(/\s?hidden-sm/gi, "")
        );
      }

      if (val.value === "tablet") {
        element.setAttribute(
          "class",
          element.getAttribute("class").replace(/\s?hidden-md/gi, "")
        );
      }

      if (val.value === "desktop") {
        element.setAttribute(
          "class",
          element.getAttribute("class").replace(/\s?hidden-(lg|xl)/gi, "")
        );
      }
    } else {
      if (val.value === "mobile") {
        element.setAttribute(
          "class",
          element.getAttribute("class") + " hidden-sm"
        );
      }

      if (val.value === "tablet") {
        element.setAttribute(
          "class",
          element.getAttribute("class") + " hidden-md"
        );
      }

      if (val.value === "desktop") {
        element.setAttribute(
          "class",
          element.getAttribute("class") + " hidden-lg hidden-xl"
        );
      }
    }

    this.trigger("element.settings.change", document, {
      detail: {
        Obj: this._targetObject,
      },
    });

    this.setStep(() => {
      this.setVisibility(saveVal, val);
    });
  }
}

export default Visibility;
