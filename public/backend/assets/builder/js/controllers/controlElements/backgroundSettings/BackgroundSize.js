import BgSize from "../global/BgSize.js";

class BackgroundSize extends BgSize {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: ["-", "Auto", "Cover", "Contain", "Custom (width x height)"],
      title: options.title,
      order: options.order || 999999,
      elClass: "",
      callback: () =>
        this._properties.media[options.mediaMode][options.mode].value,
    });

    this._selfDOM = null;
    this._properties = {
      media: options.media,
      property: options.property,
    };
    this._tag = options.tag;
    this._media = options.media;
    this._mode = options.mode;
    this._controlElements = options.controlElements;
  }

  selectValue(media, mode) {
    const bgSize = this._selfDOM;
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = mediaProperty[mode].value.split(" ");
    const button = bgSize.querySelector("button");

    if (value.length > 1) {
      button.dataset.value = replaceSpace("Custom (width x height)");
      button.querySelector("span").innerHTML = "Custom (width x height)";
      bgSize.querySelector(".width").value = value[0];
      bgSize.querySelector(".height").value = value[1];
      if (!bgSize.classList.contains("show-custom-size")) {
        bgSize.classList.add("show-custom-size");
      }
    } else {
      const val = value[0] === "" ? "-" : value[0];
      button.dataset.value = replaceSpace(val);
      button.querySelector("span").innerHTML = firstUp(val);
      bgSize.querySelector(".width").value = "";
      bgSize.querySelector(".height").value = "";
      if (bgSize.classList.contains("show-custom-size")) {
        bgSize.classList.remove("show-custom-size");
      }
    }
  }

  _addEventListToSizeInput(bgSize, eventName) {
    const inputs = bgSize.querySelectorAll(".size-input input");
    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener("keyup", (e) => {
        e.preventDefault();
        const width = bgSize.querySelector(".width").value;
        const height = bgSize.querySelector(".height").value;

        const val = `${width || "auto"} ${height || "auto"}`;

        const cEvent = {
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

        const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

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

  _addEventListToBgSizeDropdown(bgSize) {
    const options = bgSize.querySelectorAll("li a");
    const button = bgSize.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let val = element.innerHTML.toLowerCase();
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = firstUp(val);

        if (val === "custom (width x height)") {
          bgSize.classList.add("show-custom-size");
          const width = bgSize.querySelector(".width").value;
          const height = bgSize.querySelector(".height").value;

          val = `${width || "auto"} ${height || "auto"}`;
        }

        if (
          val !== "custom (width x height)" &&
          bgSize.classList.contains("show-custom-size")
        ) {
          bgSize.classList.remove("show-custom-size");
        }

        const cEvent = {
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

        const eventCheckSelect = new CustomEvent("globalStyle.change", cEvent);

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

export default BackgroundSize;
