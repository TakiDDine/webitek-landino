import MediaTextAlign from "../base/MediaTextAlign.js";

class ElementMediaTextAlign extends MediaTextAlign {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      title: this.translateWord.keywords_ar.rightPanel.textAlign,
      buttons: [
        {
          title: '<i class="icon-landino-align-left-black"></i>',
          value: "left",
        },
        {
          title: '<i class="icon-landino-align-center-black"></i>',
          value: "center",
        },
        {
          title: '<i class="icon-landino-align-right-black"></i>',
          value: "right",
        },
        {
          title: '<i class="icon-landino-align-justify"></i>',
          value: "justify",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
      isActive: (value) => {
        const element = this._targetObject;
        if (
          new RegExp("\\s?text-" + value).test(element.getAttribute("class"))
        ) {
          return true;
        }
        return false;
      },
      obj: options.targetObject,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._li = options.li;
  }

  _addEventListToSwitchButton(btn, e) {
    btn = this._prepareValues(btn);
    const value = btn.dataset.value;
    const val = {
      value: value,
      media: this.media,
      btn: btn,
    };
    const saveBtn = document.createElement("div");
    saveBtn.dataset.value = this.activeButtons[this.media];
    if (saveBtn.dataset.value !== "") saveBtn.classList.add("active");
    const saveVal = {
      value: this.activeButtons[this.media],
      media: this.media,
      btn: saveBtn,
    };

    const btnM = {};
    btnM.desktop = this._selfDOM.querySelector(
      ".media-group [data-id=desktop]"
    );
    btnM.tablet = this._selfDOM.querySelector(".media-group [data-id=tablet]");
    btnM.mobile = this._selfDOM.querySelector(".media-group [data-id=mobile]");

    if (btn.classList.contains("active") && this.media !== "default") {
      btnM[this.media].classList.add("isset");
    } else if (this.media !== "default") {
      btnM[this.media].classList.remove("isset");
    }

    this.activeButtons[this.media] = btn.classList.contains("active")
      ? btn.dataset.value
      : "";

    this.setTextAlign(val, saveVal);
  }

  setTextAlign(val, saveVal) {
    const element = this._targetObject;
    let className = " text-" + val.value;

    if (val.media === "mobile") {
      className = " text-xs-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(/\s?text-xs-(?:left|right|center|justify)/gi, "")
      );
    }

    if (val.media === "tablet") {
      className = " text-sm-" + val.value + " text-md-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(/\s?text-(?:sm|md)-(?:left|right|center|justify)/gi, "")
      );
    }

    if (val.media === "desktop") {
      className = " text-lg-" + val.value + " text-xl-" + val.value;
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(/\s?text-(?:lg|xl)-(?:left|right|center|justify)/gi, "")
      );
    }

    if (val.media === "default") {
      element.setAttribute(
        "class",
        element
          .getAttribute("class")
          .replace(/\s?text-(?:left|right|center|justify)/gi, "")
      );
    }

    if (val.btn.classList.contains("active")) {
      element.setAttribute("class", element.getAttribute("class") + className);
    }

    this.trigger("element.settings.change", document, {
      detail: {
        Obj: this._targetObject,
      },
    });

    this.setStep(() => {
      this.setTextAlign(saveVal, val);
    });
  }
}

export default ElementMediaTextAlign;
