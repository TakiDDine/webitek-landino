import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class BoxShadow extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [],
      title: options.title,
      order: options.order || 999999,
      elClass: "",
      eventName: options.property,
      callback: () =>
        this._properties.media[options.mediaMode][options.mode].value,
    });

    this._selfDOM = null;
    this._properties = {
      media: options.media,
      property: options.property,
    };
    this._tag = options.tag;
    this._controlElements = options.controlElements;
  }

  _createElement(args) {
    const fourthInput = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    fourthInput.className = "item cs-element fourth-input-cp" + classItem;
    fourthInput.dataset.order = args.order;

    const value = args.callback ? args.callback() : "";

    if (
      !/[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s(?:#[0-9abcdf]{3,6}|rgba\([^)]*\))|none|^$/.test(
        value
      )
    ) {
      throw new SyntaxError(
        "Expected variables format like '0px 0px 2px #ffffff'"
      );
    }

    let match = ["", "", "", "transparent"];

    if (value !== "none" && value !== "") {
      match = value.split(" ");
    }

    fourthInput.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<input type="text" placeholder="-" value="' +
      match[0] +
      '" class="">' +
      '<input type="text" placeholder="-" value="' +
      match[1] +
      '" class="">' +
      '<input type="text" placeholder="-" value="' +
      match[2] +
      '" class="">' +
      '<input type="text" class="spectrum">';

    $(fourthInput)
      .find(".spectrum")
      .spectrum({
        color: match[3],
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        change: this._listenerToFourthInputCp.bind(this),
        beforeShow: (color) => {
          if (
            !this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.contains("pin")
          ) {
            this.leftPanel.getActivePanel().enableBookmark(this.leftPanel);
            this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.add("colorpicker-show");
          }
        },
        hide: (colorLast) => {
          this._listenerToFourthInputCp(colorLast);

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
        },
      });

    this._addEventListToFourthInput(fourthInput);

    const inputs = fourthInput.querySelectorAll("input:not(.spectrum)");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keydown", this._keyArrowUpDown.bind(this, input));

      const scrollMove = this._scrollMove.bind(this, input);

      input.addEventListener("focus", (e) => {
        input.addEventListener("wheel", scrollMove);
      });

      input.addEventListener("blur", (e) => {
        input.removeEventListener("wheel", scrollMove);
      });
    });

    this._selfDOM = fourthInput;
  }

  selectValue(media, mode) {
    const inputs = this._selfDOM.querySelectorAll("input");
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = mediaProperty[mode].value;
    let match = ["", "", "", "transparent"];

    if (value !== "none" && value !== "") {
      match = value.split(" ");
    }

    inputs[0].value = match[0];
    inputs[1].value = match[1];
    inputs[2].value = match[2];
    $(inputs[3]).spectrum("set", match[3]);
  }

  _listenerToFourthInputCp(color) {
    const inputs = this._selfDOM.querySelectorAll("input");
    let val = "";

    Array.from(inputs).forEach((input, indx) => {
      let postfix = "";
      let value = input.value === "" ? "0" : input.value;
      if (input.classList.contains("spectrum"))
        value = /rgba/.test(color.toRgbString())
          ? color.toRgbString()
          : color.toHexString();
      if (indx !== inputs.length - 1) postfix = " ";
      val += value + postfix;
    });

    const cEvent = {
      detail: {
        tag: this._tag,
        mode: this._controlElements._mode,
        media: this._controlElements._media,
        property: this._properties.property,
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

  _addEventListToFourthInput(fourthInput) {
    const inputs = fourthInput.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        let val = "";

        Array.from(inputs).forEach((input, indx) => {
          let postfix = "";
          let value = input.value === "" ? "0" : input.value;
          if (input.classList.contains("spectrum"))
            value = /rgba/.test($(input).spectrum("get").toRgbString())
              ? $(input).spectrum("get").toRgbString()
              : $(input).spectrum("get").toHexString();
          if (indx !== inputs.length - 1) postfix = " ";
          val += value + postfix;
        });

        const cEvent = {
          detail: {
            tag: this._tag,
            mode: this._controlElements._mode,
            media: this._controlElements._media,
            property: this._properties.property,
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
export default BoxShadow;
