import PaddingMargin from "../global/PaddingMargin.js";

class Margin extends PaddingMargin {
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
          let globalMargin = Core.prototype._elementNoPx(
            this._properties.media[options.mediaMode][options.mode].value
          );
          return globalMargin;
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

    if (value !== "none" && value !== "") {
      match = value.split(" ");
    }

    var top = match[0] === "0" || match[0] === "0px" ? "" : match[0];
    var right = match[1] === "0" || match[1] === "0px" ? "" : match[1];
    var bottom = match[2] === "0" || match[2] === "0px" ? "" : match[2];
    var left = match[3] === "0" || match[3] === "0px" ? "" : match[3];

    this._selfDOM.querySelector("input.top").value = top;
    this._selfDOM.querySelector("input.right").value = right;
    this._selfDOM.querySelector("input.bottom").value = bottom;
    this._selfDOM.querySelector("input.left").value = left;
  }

  _addEventListToPmInput(pmInput, eventName) {
    var _this = this;
    var inputs = pmInput.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, function (input) {
      input.addEventListener("keyup", function (e) {
        e.preventDefault();

        var top = pmInput.querySelector("input.top").value;
        var right = pmInput.querySelector("input.right").value;
        var bottom = pmInput.querySelector("input.bottom").value;
        var left = pmInput.querySelector("input.left").value;

        top = top === "" ? "0" : top;
        right = right === "" ? "0" : right;
        bottom = bottom === "" ? "0" : bottom;
        left = left === "" ? "0" : left;

        var val =
          `${top}px` +
          " " +
          `${right}px` +
          " " +
          `${bottom}px` +
          " " +
          `${left}px`;

        var cEvent = {
          detail: {
            tag: _this._tag,
            mode: _this._controlElements._mode,
            media: _this._controlElements._media,
            property: _this._properties.property,
            value: val,
            valueLikeDefault:
              val ===
                _this._properties.media.default[_this._controlElements._mode]
                  .value && _this._controlElements._media !== "default",
          },
        };

        var eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

        _this._issetOrNotIsset(null, null, cEvent);

        document.dispatchEvent(eventCheckSelect);

        if (!cEvent.detail.valueLikeDefault) {
          if (!_this._properties.media[_this._controlElements._media]) {
            _this._properties.media[_this._controlElements._media] = {};
            if (
              !_this._properties.media[_this._controlElements._media][
                _this._controlElements._mode
              ]
            ) {
              _this._properties.media[_this._controlElements._media][
                _this._controlElements._mode
              ] = {
                value: "",
              };
            }
          }
          _this._properties.media[_this._controlElements._media][
            _this._controlElements._mode
          ].value = val;
        }
      });
    });
  }
}

export default Margin;
