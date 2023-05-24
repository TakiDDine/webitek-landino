class TextShadow extends FourthInput {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables elements");
      }
  
      super({
        menu: [],
        title: options.title,
        order: options.order || 999999,
        elClass: "",
        eventName: options.media.property,
        callback: () => {
          let oldVal = options.media[options.mediaMode][options.mode].value;
  
          if (oldVal === "") return oldVal;
          let _textShadowArr = oldVal.split(" ").join("").split("px");
  
          let RgbColor = _textShadowArr.slice(-1)[0];
  
          let numbersInPX = _textShadowArr.slice(0, -1).join(" ");
  
          let numbersNoPX = this._elementNoPx(numbersInPX)
            .split(" ")
            .slice(0, 3)
            .join(" ");
  
          let _textShadow = numbersNoPX + " " + RgbColor;
  
          return _textShadow;
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
  
    _createElement(args) {
      var _this = this;
      var fourthInput = document.createElement("div");
      var classItem = args.outerClass ? " " + args.outerClass : "";
      fourthInput.className = "item cs-element fourth-input-cp" + classItem;
      fourthInput.dataset.order = args.order;
  
      var value = args.callback ? args.callback() : "";
  
      if (
        !/[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s[0-9]+\.?[0-9]*[^\s]*?\s(?:#[0-9abcdf]{3,6}|rgba\([^)]*\))|none|^$/.test(
          value
        )
      ) {
        throw new SyntaxError("Expected variables format like '0px 0px 2px #ffffff'");
      }
  
      var match = ["", "", "", "transparent"];
  
      if (value !== "none" && value !== "") {
        match = value.split(" ");
      }
  
      fourthInput.innerHTML =
        "<label>" +
        args.title +
        "</label>" +
        '<input type="text" placeholder="-" value="' +
        match[0] +
        '" class="">' +
        '<input type="text" placeholder="-" value="' +
        match[1] +
        '" class="">' +
        '<input type="text" placeholder="-" value="' +
        match[2] +
        '" class="">' +
        '<input type="text" class="spectrum">';
  
      $(fourthInput)
        .find(".spectrum")
        .spectrum({
          color: match[3],
          showPalette: true,
          preferredFormat: "hex",
          allowEmpty: false,
          showAlpha: true,
          localStorageKey: "spectrum.weber",
          change: _this._listenerToFourthInputCp.bind(_this),
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
            _this._listenerToFourthInputCp(colorLast);
  
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
  
      this._addEventListToFourthInput(fourthInput);
  
      var inputs = fourthInput.querySelectorAll("input:not(.spectrum)");
      Array.prototype.forEach.call(inputs, function (input) {
        input.addEventListener("keydown", _this._keyArrowUpDown.bind(_this, input));
  
        var scrollMove = _this._scrollMove.bind(_this, input);
  
        input.addEventListener("focus", function (e) {
          input.addEventListener("wheel", scrollMove);
        });
  
        input.addEventListener("blur", function (e) {
          input.removeEventListener("wheel", scrollMove);
        });
      });
  
      this._selfDOM = fourthInput;
    }
  
    selectValue(media, mode) {
      var inputs = this._selfDOM.querySelectorAll("input");
      var mediaProperty = this._properties.media[media];
  
      this._issetOrNotIsset(mediaProperty, mode);
  
      if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
        mediaProperty = this._properties.media.default;
      }
  
      var value = mediaProperty[mode].value;
      var match = ["", "", "", "transparent"];
  
      if (value !== "none" && value !== "") {
        match = value.split(" ");
  
      }
  
      inputs[0].value = `${match[0]}px`;
      inputs[1].value = `${match[1]}px`;
      inputs[2].value = `${match[2]}px`;
      $(inputs[3]).spectrum("set", match[3]);
    }
  
    _listenerToFourthInputCp(color) {
      var _this = this;
      var inputs = this._selfDOM.querySelectorAll("input");
      var val = "";
  
      Array.prototype.forEach.call(inputs, function (input, indx) {
        var postfix = "";
        var value = input.value === "" ? "0" : input.value;
  
        if (input.classList.contains("spectrum")) {
          value = /rgba/.test($(input).spectrum("get").toRgbString())
            ? $(input).spectrum("get").toRgbString()
            : $(input).spectrum("get").toHexString();
  
          val += value;
        } else {
          val += `${value}px ${postfix}`;
        }
        if (indx !== inputs.length - 1) postfix = " ";
      });
  
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
        }
        if (!_this._properties.media[_this._controlElements._media][
          _this._controlElements._mode
        ]) {
          _this._properties.media[_this._controlElements._media][
            _this._controlElements._mode
          ] = {};
        }
  
        _this._properties.media[_this._controlElements._media][
          _this._controlElements._mode
        ].value = val;
      } else {
        delete _this._properties.media[_this._controlElements._media][
          _this._controlElements._mode
        ];
      }
  
      var tag =
        _this._properties.media[_this._controlElements._media][
          _this._controlElements._mode
        ] !== undefined
          ? _this._properties.media[_this._controlElements._media][
            _this._controlElements._mode
          ].tag
          : "";
  
      _this._tagChange(tag);
    }
  }
  export default TextShadow;