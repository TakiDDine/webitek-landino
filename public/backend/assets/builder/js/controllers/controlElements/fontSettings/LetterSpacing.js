import HalfInput from '../../globalControllers/HalfInput.js'

class LetterSpacing extends HalfInput {
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
          let oldVal = this._properties.media[options.mediaMode][options.mode].value;
  
          if (oldVal !== '') {
            let globalLetterSpacing = Core.prototype._elementNoPx(this._properties.media[options.mediaMode][options.mode].value).split(' ')[0];
            return globalLetterSpacing;
          }
          return oldVal;
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
      var _this = this;
      halfInput.querySelector("input").addEventListener("keyup", function (e) {
        e.preventDefault();
        var val = this.value;
  
        val = val === "" ? "inherit" : `${val}px`;
  
        var cEvent = {
          detail: {
            tag: _this._tag,
            mode: _this._controlElements._mode,
            media: _this._controlElements._media,
            property: _this._properties.property,
            value: val,
            valueLikeDefault:
              val ===
              _this._properties.media.default[_this._controlElements._mode].value &&
              _this._controlElements._media !== "default",
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
    }
  }
  

  export default LetterSpacing;