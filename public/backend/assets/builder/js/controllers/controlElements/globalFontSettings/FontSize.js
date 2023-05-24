import HalfInput from "../../globalControllers/HalfInput.js"

class FontSize extends HalfInput {
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
  
      HalfInput.call(this, {
        menu: [],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: this._properties.property,
        callback: () => {
          let oldVal = this._properties.media[options.mediaMode][options.mode].value;
  
          if (oldVal !== "") {
            let globalFontSize = Core.prototype._elementNoPx(this._properties.media[options.mediaMode][options.mode].value).split(' ')[0];
            return globalFontSize;
          }
          return oldVal;
        },
      });
    }
  
    selectValue(media, mode) {
      var halfInput = this._selfDOM.querySelector("input");
      var mediaProperty = this._properties.media[media];
  
      this._issetOrNotIsset(mediaProperty, mode);
  
      if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
        mediaProperty = this._properties.media.default;
      }
  
      var value = mediaProperty[mode].value;
      halfInput.value = `${value}px`;
    }
  
    _addEventListToHalfInput(halfInput, eventName) {
      halfInput.querySelector("input").addEventListener("keyup", (e) => {
        e.preventDefault();
        var val = this.value;
  
        val = val === "" ? "inherit" : `${val}px`;
  
        var cEvent = {
          detail: {
            tag: this._tag,
            mode: this._controlElements._mode,
            media: this._controlElements._media,
            property: this._properties.property,
            value: val,
            valueLikeDefault:
              val === this._properties.media.default[this._controlElements._mode].value && this._controlElements._media !== "default",
          },
        };
  
        var eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);
  
        this._issetOrNotIsset(null, null, cEvent);
  
        document.dispatchEvent(eventCheckSelect);
  
        if (!cEvent.detail.valueLikeDefault) {
          if (!this._properties.media[this._controlElements._media]) {
            this._properties.media[this._controlElements._media] = {};
            if (!this._properties.media[this._controlElements._media][this._controlElements._mode]) {
              this._properties.media[this._controlElements._media][this._controlElements._mode] = {
                value: "",
              };
            }
          }
  
          this._properties.media[this._controlElements._media][this._controlElements._mode].value = val;
        }
      });
    }
  }

  export default FontSize