import Colorpicker from "../global/Colorpicker.js";

class BorderColor extends Colorpicker {
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

  _createElement(args) {
    const _this = this;
    const colorpicker = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    colorpicker.className =
      "item cs-element d-flex justify-content-between align-items-center cs-colorpicker" +
      classItem;
    colorpicker.dataset.order = args.order;

    let value = args.callback ? args.callback() : "";
    value = value === "" ? "transparent" : value;
    colorpicker.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<input type="text" class="spectrum">';

    $(colorpicker)
      .find(".spectrum")
      .spectrum({
        color: value,
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        change: _this._listenerToColorpiker.bind(_this),
        beforeShow: function (color) {
          if (
            !_this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.contains("pin")
          ) {
            _this.leftPanel.getActivePanel().enableBookmark(_this.leftPanel);
            _this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.add("colorpicker-show");
          }
        },
        hide: function (colorLast) {
          _this._listenerToColorpiker(colorLast);

          if (
            _this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.contains("colorpicker-show")
          ) {
            _this.leftPanel.getActivePanel().disableBookmark(_this.leftPanel);
            _this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.remove("colorpicker-show");
          }
        },
      });

    this._selfDOM = colorpicker;
  }

  selectValue(media, mode) {
    const colorpicker = this._selfDOM.querySelector(".spectrum");
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    let value = mediaProperty[mode].value;
    value = value === "" ? "transparent" : value;
    $(colorpicker).spectrum("set", value);
  }

  _listenerToColorpiker(color) {
    const _this = this;
    const val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();

    const cEvent = {
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

    const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

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
  }
}
export default BorderColor;
