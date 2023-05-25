import BaseBorderRadius from "../global/BaseBorderRadius.js";

class BorderRadius extends BaseBorderRadius {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [],
      title: options.title,
      order: options.order || 999999,
      elClass: "",
      eventName: this._properties.property,
      callback: () => {
        let oldVal =
          this._properties.media[options.mediaMode][options.mode].value;

        if (oldVal !== "") {
          let globalBorderRadius = this._elementNoPx(
            this._properties.media[options.mediaMode][options.mode].value
          );
          return globalBorderRadius;
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
    var mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    var value = mediaProperty[mode].value;
    var match = ["", "", "", ""];

    if (value !== "initial" && value !== "" && value !== "none") {
      match = value.split(" ");
    }

    var topLeft = match[0] === "0" || match[0] === "0px" ? "" : match[0];
    var topRight = match[1] === "0" || match[1] === "0px" ? "" : match[1];
    var bottomRight = match[2] === "0" || match[2] === "0px" ? "" : match[2];
    var bottomLeft = match[3] === "0" || match[3] === "0px" ? "" : match[3];

    this._selfDOM.querySelector("input.top-left").value = topLeft;
    this._selfDOM.querySelector("input.top-right").value = topRight;
    this._selfDOM.querySelector("input.bottom-left").value = bottomLeft;
    this._selfDOM.querySelector("input.bottom-right").value = bottomRight;
  }

  _addEventListToBorderRadiusInput(borderRadius, eventName) {
    var inputs = borderRadius.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();

        var topLeft = borderRadius.querySelector("input.top-left").value;
        var topRight = borderRadius.querySelector("input.top-right").value;
        var bottomLeft = borderRadius.querySelector("input.bottom-left").value;
        var bottomRight =
          borderRadius.querySelector("input.bottom-right").value;

        topLeft = topLeft === "" ? "0" : topLeft;
        topRight = topRight === "" ? "0" : topRight;
        bottomRight = bottomRight === "" ? "0" : bottomRight;
        bottomLeft = bottomLeft === "" ? "0" : bottomLeft;

        var val =
          `${topLeft}px` +
          " " +
          `${topRight}px` +
          " " +
          `${bottomRight}px` +
          " " +
          `${bottomLeft}px`;

        var cEvent = {
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

        var eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

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
export default BorderRadius;
