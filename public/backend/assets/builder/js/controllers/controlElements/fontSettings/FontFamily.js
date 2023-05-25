import HalfInput from "../../globalControllers/HalfInput.js"

class FontFamily extends HalfInput {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables elements");
      }
  
      if (!Array.isArray(typographyFonts)) {
        throw new TypeError("Expected type of Array");
      }
  
      this._selfDOM = null;
      this._properties = {
        media: options.media,
        property: options.property,
      };
      this._tag = options.tag;
      this._controlElements = options.controlElements;
  
      DropDown.call(this, {
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
  
    _createElement(args) {
      const dropDown = document.createElement("div");
      const classItem = args.outerClass ? " " + args.outerClass : "";
      dropDown.className = "item cs-element dropdown-el-full" + classItem;
      dropDown.dataset.order = args.order;
  
      let ul = '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
        this._countDropDown +
        '">' +
        '<li><a href="#" style="font-family: \'none\';">-</a></li>';
      typographyFonts.forEach(el => {
        ul += '<li><a href="#" style="font-family: \'' +
          el.font_family +
          "';\">" +
          firstUp(el.font_name) +
          "</a></li>";
      });
      ul += "</ul>";
  
      let visibleCValue = "-";
      let curentValue = "-";
      let callBackVal = "";
      if (args.callback !== undefined) callBackVal = args.callback();
      if (callBackVal !== "") {
        curentValue = callBackVal;
        visibleCValue = curentValue;
        if (args.mode !== "lower") {
          visibleCValue = this.fromCamelCase(curentValue);
        }
      }
  
      curentValue = replaceSpace(curentValue);
  
      const title = args.title !== "" ? "<label>" + args.title + "</label>" : "";
  
      dropDown.innerHTML =
        title +
        '<div class="dropdown">' +
        '<button class="supra-btn dropdown-toggle d-flex justify-content-between align-items-center ' +
        args.elClass +
        '" ' +
        'type="button" id="dropdownMenu' +
        this._countDropDown +
        '"' +
        'data-toggle="dropdown" ' +
        'aria-haspopup="true" aria-expanded="false"' +
        'data-value="' +
        curentValue +
        '" style="font-family: ' +
        curentValue +
        ';">' +
        "<span>" +
        visibleCValue +
        "</span>" +
        "</button>" +
        ul +
        "</div>";
  
      this._addEventListToDropdown(dropDown);
  
      this._countDropDown++;
  
      this._selfDOM = dropDown;
    }
  
    selectValue(media, mode) {
      const button = this._selfDOM.querySelector("button");
      let mediaProperty = this._properties.media[media];
  
      this._issetOrNotIsset(mediaProperty, mode);
  
      if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
        mediaProperty = this._properties.media.default;
      }
  
      let valueStyle = mediaProperty[mode].value;
      valueStyle = valueStyle === "" ? "-" : valueStyle;
      const value = this.fromCamelCase(valueStyle);
      button.dataset.value = replaceSpace(value);
      button.setAttribute("style", "font-family: " + valueStyle + ";");
      button.querySelector("span").innerHTML = value;
    }
  
    _addEventListToDropdown(dropDown) {
      const options = dropDown.querySelectorAll("li a");
      const button = dropDown.querySelector(".dropdown button");
  
      Array.prototype.forEach.call(options, element => {
        element.addEventListener("click", e => {
          e.preventDefault();
          const val = element.innerHTML;
          const style = element.getAttribute("style");
          button.dataset.value = replaceSpace(firstDown(val));
          button.querySelector("span").innerHTML = val;
          button.setAttribute("style", style);
  
          const value =
            button.style.fontFamily !== "none"
              ? "'" + button.style.fontFamily + "'"
              : "-";
          const cEvent = {
            detail: {
              tag: this._tag,
              mode: this._controlElements._mode,
              media: this._controlElements._media,
              property: this._properties.property,
              value: value,
              valueLikeDefault:
                value ===
                  this._properties.media.default[this._controlElements._mode]
                    .value && this._controlElements._media !== "default",
            },
          };
  
          this._issetOrNotIsset(null, null, cEvent);
  
          const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);
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
            ].value = value;
          }
        });
      });
    }
  }
  
  export default FontFamily;