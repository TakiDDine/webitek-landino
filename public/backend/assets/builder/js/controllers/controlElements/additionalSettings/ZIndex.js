import HalfInput from "../../globalControllers/HalfInput.js";

class ZIndex extends HalfInput {
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
      postfix: "",
      callback: () => {
        return this._properties.media[options.mediaMode][options.mode].value;
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
    const halfInput = this._selfDOM.querySelector("input");
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = mediaProperty[mode].value;
    halfInput.value = value;
  }

  _addEventListToHalfInput(halfInput, eventName) {
    halfInput.querySelector("input").addEventListener("keyup", (e) => {
      e.preventDefault();
      let val = this.value;

      val = val === "" ? "inherit" : val;

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
  }
}

export default ZIndex;
