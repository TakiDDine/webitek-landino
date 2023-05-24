import HalfDropdown from "../../globalControllers/HalfDropdown.js"

class FontWeight extends HalfDropdown {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables elements");
      }
  
      super({
        menu: [
          "-",
          "normal",
          "bold",
          "bolder",
          "lighter",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: options.property,
        callback: () => {
          return firstUp(
            this._properties.media[options.mediaMode][options.mode].value
          );
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
      var button = this._selfDOM.querySelector("button");
      var mediaProperty = this._properties.media[media];
  
      this._issetOrNotIsset(mediaProperty, mode);
  
      if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
        mediaProperty = this._properties.media.default;
      }
  
      var value = mediaProperty[mode].value;
      value = value === "" ? "-" : value;
      button.dataset.value = replaceSpace(value);
      button.querySelector("span").innerHTML = firstUp(value);
    }
  
    _addEventListToDropdown(dropDown) {
      var _this = this;
      var options = dropDown.querySelectorAll("li a");
      var button = dropDown.querySelector(".dropdown button");
      Array.prototype.forEach.call(options, function (element) {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          var val = element.innerHTML;
          button.dataset.value = replaceSpace(firstDown(val));
          button.querySelector("span").innerHTML = val;
  
          var cEvent = {
            detail: {
              tag: _this._tag,
              mode: _this._controlElements._mode,
              media: _this._controlElements._media,
              property: _this._properties.property,
              value: replaceSpace(firstDown(val)),
              valueLikeDefault:
                replaceSpace(firstDown(val)) ===
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
            ].value = replaceSpace(firstDown(val));
          }
        });
      });
    }
  }
  