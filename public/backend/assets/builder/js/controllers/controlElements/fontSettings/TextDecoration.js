import HalfDropdown from "../../globalControllers/HalfDropdown.js";

class TextDecoration extends HalfDropdown {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables elements");
      }
  
      super({
        menu: ["-", "none", "underline", "overline", "line-through", "inherit"],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: this._properties.property,
        callback: () =>
          firstUp(
            this._properties.media[options.mediaMode][options.mode].value
          ),
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
      var options = dropDown.querySelectorAll("li a");
      var button = dropDown.querySelector(".dropdown button");
      Array.prototype.forEach.call(options, (element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          var val = element.innerHTML;
          button.dataset.value = replaceSpace(firstDown(val));
          button.querySelector("span").innerHTML = val;
  
          var cEvent = {
            detail: {
              tag: this._tag,
              mode: this._controlElements._mode,
              media: this._controlElements._media,
              property: this._properties.property,
              value: replaceSpace(firstDown(val)),
              valueLikeDefault:
                replaceSpace(firstDown(val)) ===
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
            ].value = replaceSpace(firstDown(val));
          }
        });
      });
    }
  }
  
  export default TextDecoration;