import BaseCoordinates from "../global/BaseCoordinates.js";

class Coordinates extends BaseCoordinates {
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
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = mediaProperty[mode].value;
    let match = ["auto", "auto", "auto", "auto"];

    if (value !== "none" && value !== "" && value !== "auto") {
      match = value.split(" ");
    }

    const top = match[0] === "auto" ? "" : match[0];
    const right = match[1] === "auto" ? "" : match[1];
    const bottom = match[2] === "auto" ? "" : match[2];
    const left = match[3] === "auto" ? "" : match[3];

    this._selfDOM.querySelector("input.top").value = top;
    this._selfDOM.querySelector("input.right").value = right;
    this._selfDOM.querySelector("input.bottom").value = bottom;
    this._selfDOM.querySelector("input.left").value = left;
  }

  _addEventListTobCoordinatesInput(bCoordinates, eventName) {
    const inputs = bCoordinates.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        const top = bCoordinates.querySelector("input.top").value;
        const right = bCoordinates.querySelector("input.right").value;
        const bottom = bCoordinates.querySelector("input.bottom").value;
        const left = bCoordinates.querySelector("input.left").value;

        const val = `${top} ${right} ${bottom} ${left}`;

        if (
          top === "none" &&
          right === "none" &&
          bottom === "none" &&
          left === "none"
        )
          val = "";

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

        this._issetOrNotIsset(null, null, cEvent);

        const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

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
export default Coordinates;
