import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class Size extends HalfDropdown {
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
      callback: () => {
        return options.media[options.mediaMode][options.mode].value;
      },
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
    const size = this._selfDOM;
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    let value = mediaProperty[mode].value;
    value = value === "auto" ? ["", ""] : value.split(" ");

    size.querySelector(".width").value = value[0];
    size.querySelector(".height").value = value[1];
  }

  _addEventListToSize(size, eventName) {
    const inputs = size.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const width = size.querySelector(".width");
        const height = size.querySelector(".height");

        if (this._triggerProportion) {
          let value = "auto";

          if (
            input.getAttribute("name") === "width" &&
            (input.value !== "" || input.value !== "auto")
          ) {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] / this._proportion) + match[2]
              : "";
            height.value = value;
          } else if (input.value !== "" || input.value !== "auto") {
            const match = input.value.match(/([0-9]+\.?[0-9]*)([^0-9]*)/);
            value = match
              ? Math.round(match[1] * this._proportion) + match[2]
              : "";
            width.value = value;
          }

          const cEventP = {
            detail: {
              tag: this._tag,
              mode: this._controlElements._mode,
              media: this._controlElements._media,
              property:
                input.getAttribute("name") === "width" ? "height" : "width",
              value: value === "" ? "auto" : value,
              valueLikeDefault:
                width.value + " " + height.value ===
                  this._properties.media.default[this._controlElements._mode]
                    .value && this._controlElements._media !== "default",
            },
          };

          const eventCheckSelectP = new CustomEvent(
            "globalStyle.change",
            cEventP
          );

          document.dispatchEvent(eventCheckSelectP);
        }

        const val = width.value + " " + height.value;

        const cEvent = {
          detail: {
            tag: this._tag,
            mode: this._controlElements._mode,
            media: this._controlElements._media,
            property: input.getAttribute("name"),
            value: input.value === "" ? "auto" : input.value,
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

export default Size;
