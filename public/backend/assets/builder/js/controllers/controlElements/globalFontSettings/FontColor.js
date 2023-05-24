import HalfInput from "../../globalControllers/HalfInput.js"

class FontColor extends HalfInput{
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables elements");
      }
  
      this._selfDOM = null;
      this._properties = {
        media: options.media,
        property: options.property,
      };
      this._tag = options.tag;
      this._controlElements = options.controlElements;
  
      Colorpicker.call(this, {
        menu: [],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: this._properties.property,
        callback: () => {
          return this._properties.media[options.mediaMode][options.mode].value;
        },
        leftPanel: options.leftPanel,
      });
    }
  
    _createElement(args) {
      var _this = this;
      var colorpicker = document.createElement("div");
      var classItem = args.outerClass ? " " + args.outerClass : "";
      colorpicker.className =
        "item cs-element d-flex justify-content-between align-items-center cs-colorpicker" +
        classItem;
      colorpicker.dataset.order = args.order;
  
      var value = args.callback ? args.callback() : "";
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
          change: this._listenerToColorpiker.bind(this),
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
      var colorpicker = this._selfDOM.querySelector(".spectrum");
      var mediaProperty = this._properties.media[media];
  
      this._issetOrNotIsset(mediaProperty, mode);
  
      if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
        mediaProperty = this._properties.media.default;
      }
  
      var value =
        mediaProperty[mode].value === ""
          ? "transparent"
          : mediaProperty[mode].value;
      $(colorpicker).spectrum("set", value);
    }
  
    _listenerToColorpiker(color) {
      var val = /rgba/.test(color.toRgbString())
        ? color.toRgbString()
        : color.toHexString();
  
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
    }
  }
  
 export default FontColor;
  