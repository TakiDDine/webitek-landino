import DropDown from "../../globalControllers/DropDown.js";

class BackgroundRepeat extends DropDown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    if (!Array.isArray(options.typographyFonts)) {
      throw new TypeError("Expected type of Array");
    }

    super({
      menu: ["-", "repeat", "repeat-x", "repeat-y", "no-repeat"],
      title: options.title,
      order: options.order || 999999,
      elClass: "",
      eventName: options.property,
      callback: () =>
        this.fromCamelCase(
          this._properties.media[options.mediaMode][options.mode].value
        ),
    });

    this._selfDOM = null;
    this._properties = {
      media: options.media,
      property: options.property,
    };
    this._tag = options.tag;
    this._controlElements = options.controlElements;
  }

  selectValue(media, mode) {
    const button = this._selfDOM.querySelector("button");
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    let value = this.fromCamelCase(mediaProperty[mode].value);
    value = value === "" ? "-" : value;
    button.dataset.value = replaceSpace(value);
    button.querySelector("span").innerHTML = value;
  }

  _addEventListToDropdown(dropDown) {
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");

    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const val = firstDown(element.innerHTML);
        button.dataset.value = replaceSpace(val);
        button.querySelector("span").innerHTML = firstUp(val);

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

export default BackgroundRepeat;
