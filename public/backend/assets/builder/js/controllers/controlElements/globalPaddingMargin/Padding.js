import PaddingMargin from "../global/PaddingMargin.js"

class Padding extends PaddingMargin {
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
  
      PaddingMargin.call(this, {
        menu: [],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: this._properties.property,
        callback: () => {
          return this._properties.media[options.mediaMode][options.mode].value;
        },
      });
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
      var inputs = pmInput.querySelectorAll("input");
      Array.prototype.forEach.call(inputs, (input) => {
        input.addEventListener("keyup", (e) => {
          e.preventDefault();
  
          var top = pmInput.querySelector("input.top").value;
          var right = pmInput.querySelector("input.right").value;
          var bottom = pmInput.querySelector("input.bottom").value;
          var left = pmInput.querySelector("input.left").value;
  
          top = top === "" ? "0" : top;
          right = right === "" ? "0" : right;
          bottom = bottom === "" ? "0" : bottom;
          left = left === "" ? "0" : left;
  
          var val = top + " " + right + " " + bottom + " " + left;
  
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
  
  export default Padding;
  