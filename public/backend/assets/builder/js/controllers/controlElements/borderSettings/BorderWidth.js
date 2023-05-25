import BaseBorderWidth from "../global/BaseBorderWidth.js";

class BorderWidth extends BaseBorderWidth {
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
        let oldVal =
          this._properties.media[options.mediaMode][options.mode].value;

        if (oldVal !== "") {
          let globalBorderWidth = Core.prototype._elementNoPx(
            this._properties.media[options.mediaMode][options.mode].value
          );
          return globalBorderWidth;
        }
        return oldVal;
      },
      leftPanel: options.leftPanel,
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
    let match = ["", "", "", ""];

    if (value !== "initial" && value !== "" && value !== "none") {
      match = value.split(" ");
    }

    const top = match[0] === "0" || match[0] === "0px" ? "" : match[0];
    const right = match[1] === "0" || match[1] === "0px" ? "" : match[1];
    const bottom = match[2] === "0" || match[2] === "0px" ? "" : match[2];
    const left = match[3] === "0" || match[3] === "0px" ? "" : match[3];

    this._selfDOM.querySelector("input.top").value = top;
    this._selfDOM.querySelector("input.right").value = right;
    this._selfDOM.querySelector("input.bottom").value = bottom;
    this._selfDOM.querySelector("input.left").value = left;
  }

  _addEventListToBorderWidthInput(borderWidth, eventName) {
    const inputs = borderWidth.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        let top = borderWidth.querySelector("input.top").value;
        let right = borderWidth.querySelector("input.right").value;
        let bottom = borderWidth.querySelector("input.bottom").value;
        let left = borderWidth.querySelector("input.left").value;

        top = top === "" ? "0" : top;
        right = right === "" ? "0" : right;
        bottom = bottom === "" ? "0" : bottom;
        left = left === "" ? "0" : left;

        const val = `${top}px ${right}px ${bottom}px ${left}px`;

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
export default BorderWidth;
