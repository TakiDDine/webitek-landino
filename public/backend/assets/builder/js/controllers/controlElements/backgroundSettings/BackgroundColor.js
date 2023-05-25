import BgColor from "../global/BgColor.js";

class BackgroundColor extends BgColor {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [
        "-",
        "Solid color",
        "Radial gradient",
        "Vertical gradient",
        "Horizontal gradient",
        "Angle gradient",
      ],
      title: options.title,
      order: options.order || 999999,
      elClass: "",
      callback: () =>
        this._properties.media[options.mediaMode][options.mode].value,
    });

    this._selfDOM = null;
    this._properties = {
      media: options.media,
      property: options.property,
    };

    this._tag = options.tag;
    this._media = options.mediaMode;
    this._mode = options.mode;
    this._controlElements = options.controlElements;
  }

  _beforeShowColorpicker() {
    if (
      !this.leftPanel.getActivePanel().getDOMSelf().classList.contains("pin")
    ) {
      this.leftPanel.getActivePanel().enableBookmark(this.leftPanel);
      this.leftPanel
        .getActivePanel()
        .getDOMSelf()
        .classList.add("colorpicker-show");
    }
  }

  _hideColorpicker(bgColor, colorLast) {
    const bgColor1 = bgColor.querySelector(".spectrum.first");
    const bgColor2 = bgColor.querySelector(".spectrum.second");
    bgColor1.value = /rgba/.test($(bgColor1).spectrum("get").toRgbString())
      ? $(bgColor1).spectrum("get").toRgbString()
      : $(bgColor1).spectrum("get").toHexString();
    bgColor2.value = /rgba/.test($(bgColor2).spectrum("get").toRgbString())
      ? $(bgColor2).spectrum("get").toRgbString()
      : $(bgColor2).spectrum("get").toHexString();

    this._listenerToBgColor();

    if (
      this.leftPanel
        .getActivePanel()
        .getDOMSelf()
        .classList.contains("colorpicker-show")
    ) {
      this.leftPanel.getActivePanel().disableBookmark(this.leftPanel);
      this.leftPanel
        .getActivePanel()
        .getDOMSelf()
        .classList.remove("colorpicker-show");
    }
  }

  selectValue(media, mode) {
    const bgColor = this._selfDOM;
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = this._getColorsAndValueOfMenu(mediaProperty[mode].value);

    if (
      value.bgStyleColor === "Solid color" &&
      !bgColor.classList.contains("solid")
    ) {
      bgColor.classList.add("solid");
    } else if (
      value.bgStyleColor !== "Solid color" &&
      bgColor.classList.contains("solid")
    ) {
      bgColor.classList.remove("solid");
    }

    const button = this._selfDOM.querySelector("button");
    button.dataset.value = replaceSpace(value.bgStyleColor);
    button.querySelector("span").innerHTML = firstUp(value.bgStyleColor);
    $(bgColor).find(".spectrum.first").spectrum("set", value.gradientColor1);
    $(bgColor).find(".spectrum.second").spectrum("set", value.gradientColor2);
  }

  _listenerToBgColor(color) {
    const bgColor1 = this._selfDOM.querySelector(".spectrum.first");
    const bgColor2 = this._selfDOM.querySelector(".spectrum.second");
    const bgColor1value = /rgba/.test($(bgColor1).spectrum("get").toRgbString())
      ? $(bgColor1).spectrum("get").toRgbString()
      : $(bgColor1).spectrum("get").toHexString();
    const bgColor2value = /rgba/.test($(bgColor2).spectrum("get").toRgbString())
      ? $(bgColor2).spectrum("get").toRgbString()
      : $(bgColor2).spectrum("get").toHexString();
    const val = this._changeCstmColor(bgColor1value, bgColor2value);

    const bgElementColor = this._selfDOM
      .querySelector("button")
      .dataset.value.toLowerCase();
    const cEvent = {
      detail: {
        tag: this._tag,
        mode: this._controlElements._mode,
        media: this._controlElements._media,
        property:
          bgElementColor !== "solid_color"
            ? "background-image"
            : "background-color",
        value: val,
        valueLikeDefault:
          val ===
            this._properties.media.default[this._controlElements._mode].value &&
          this._controlElements._media !== "default",
      },
    };

    const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

    this._issetOrNotIsset(null, null, cEvent);

    document.dispatchEvent(eventCheckSelect);

    if (!cEvent.detail.valueLikeDefault) {
      if (!this._properties.media[this._controlElements._media]) {
        this._properties.media[this._controlElements._media] = {};
        if (
          !this._properties.media[this._controlElements._media][
            this._controlElements._mode
          ]
        ) {
          this._properties.media[this._controlElements._media][
            this._controlElements._mode
          ] = {
            value: "",
          };
        }
      }

      this._properties.media[this._controlElements._media][
        this._controlElements._mode
      ].value = val;
    }
  }

  _addEventListToBgColorDropdown(bgColor) {
    const options = bgColor.querySelectorAll("li a");
    const button = bgColor.querySelector(".dropdown button");

    Array.from(options).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const item = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(item));
        button.querySelector("span").innerHTML = item;

        if (item === "Solid color" && !bgColor.classList.contains("solid")) {
          bgColor.classList.add("solid");
        } else if (
          item !== "Solid color" &&
          bgColor.classList.contains("solid")
        ) {
          bgColor.classList.remove("solid");
        }

        if (item === "-" && !bgColor.classList.contains("none")) {
          bgColor.classList.add("none");
        } else if (item !== "-" && bgColor.classList.contains("none")) {
          bgColor.classList.remove("none");
        }

        const bgColor1 = this._selfDOM.querySelector(".spectrum.first");
        const bgColor2 = this._selfDOM.querySelector(".spectrum.second");
        const bgColor1value = /rgba/.test(
          $(bgColor1).spectrum("get").toRgbString()
        )
          ? $(bgColor1).spectrum("get").toRgbString()
          : $(bgColor1).spectrum("get").toHexString();
        const bgColor2value = /rgba/.test(
          $(bgColor2).spectrum("get").toRgbString()
        )
          ? $(bgColor2).spectrum("get").toRgbString()
          : $(bgColor2).spectrum("get").toHexString();
        const val = this._changeCstmColor(bgColor1value, bgColor2value);

        const cEvent = {
          detail: {
            tag: this._tag,
            mode: this._controlElements._mode,
            media: this._controlElements._media,
            property:
              item !== "Solid color" ? "background-image" : "background-color",
            value: val,
            valueLikeDefault:
              val ===
                this._properties.media.default[this._controlElements._mode]
                  .value && this._controlElements._media !== "default",
          },
        };

        const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

        this._issetOrNotIsset(null, null, cEvent);

        document.dispatchEvent(eventCheckSelect);

        if (!cEvent.detail.valueLikeDefault) {
          if (!this._properties.media[this._controlElements._media]) {
            this._properties.media[this._controlElements._media] = {};
            if (
              !this._properties.media[this._controlElements._media][
                this._controlElements._mode
              ]
            ) {
              this._properties.media[this._controlElements._media][
                this._controlElements._mode
              ] = {
                value: "",
              };
            }
          }
          this._properties.media[this._controlElements._media][
            this._controlElements._mode
          ].value = val;
        }
      });
    });
  }
}

export default BackgroundColor;
