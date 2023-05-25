import ImagePreview from "../global/ImagePreview";

class BackgroundImage extends ImagePreview {
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
      callback: () =>
        this._properties.media[options.mediaMode][options.mode].value,
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
    const imagePreview = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    imagePreview.className = "item cs-element input-img-preview" + classItem;
    imagePreview.dataset.order = args.order;

    let value = args.callback ? args.callback() : "";
    value = /url/.test(value) ? value.match(/url\(['"]?([^']*)['"]?\)/)[1] : "";

    imagePreview.innerHTML = `
        <label>${args.title}</label>
        <figure>
          <div class="wrap-hover">
            <img src="${value}" alt="image">
            <div class="img" style="display: none;"></div>
            <div class="bg-test bg"></div>
            <i class="fa fa-picture-o flex-center before-square"></i>
          </div>
          <figcaption>350x680</figcaption>
          <div class="modal-preloader">
            <div class="wrapper">
              <div class="timer">
                <div class="arrow_sec"></div>
                <div class="arrow_min"></div>
              </div>
            </div>
          </div>
        </figure>
        <div class="input-image">
          <input type="text" placeholder="رابط الصورة" value="${value}" class="choice-images">
          <i class="fa fa-picture-o"></i>
        </div>`;

    const img = imagePreview.querySelector("img");
    const figcaption = imagePreview.querySelector("figcaption");
    img.addEventListener("load", function () {
      let format = 1.085;
      if (window.innerWidth < 501) format = 0.75;
      Modal.prototype._imageSizig(
        this.naturalWidth,
        this.naturalHeight,
        format,
        this
      );
      figcaption.innerHTML = this.naturalWidth + "x" + this.naturalHeight;
    });

    if (value === "") img.style.display = "none";

    const i = imagePreview.querySelectorAll("i");
    Array.from(i).forEach((el) => {
      el.addEventListener("click", () => {
        const modGallery = new Modal("supra-modal-gallery", "Gallery", {
          parentModal: {
            _selfDOM: imagePreview,
            _elements: {
              figure: imagePreview.querySelector("figure"),
            },
          },
          targetElement: imagePreview.querySelector(".input-image"),
          type: args.type || "normal",
        });

        if (
          !this.leftPanel
            .getActivePanel()
            .getDOMSelf()
            .classList.contains("pin")
        ) {
          this.leftPanel.getActivePanel().enableBookmark(this.leftPanel);
          this.leftPanel
            .getActivePanel()
            .getDOMSelf()
            .classList.add("colorpicker-show");
        }

        $(modGallery).on("hidden.bs.modal", (e) => {
          const val = imagePreview.querySelector(".input-image input").value;
          if (val === "") img.style.display = "none";
          else img.style.display = "block";
          this._listenerToImagePreview(val);

          if (
            this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.contains("colorpicker-show")
          ) {
            this.leftPanel.getActivePanel().disableBookmark(this.leftPanel);
            this.leftPanel
              .getActivePanel()
              .getDOMSelf()
              .classList.remove("colorpicker-show");
          }
        });
      });
    });

    const input = imagePreview.querySelector(".choice-images");
    input.addEventListener(
      "blur",
      this._listenerToManualImagePreview.bind(this, input)
    );

    this._selfDOM = imagePreview;
  }

  selectValue(media, mode) {
    const imagePreview = this._selfDOM.querySelector("input");
    let mediaProperty = this._properties.media[media];

    this._issetOrNotIsset(mediaProperty, mode);

    if (!mediaProperty || (mediaProperty && !mediaProperty[mode])) {
      mediaProperty = this._properties.media.default;
    }

    const value = /#|rgba/.test(mediaProperty[mode].value)
      ? ""
      : mediaProperty[mode].value.replace(/url\('|'\)/g, "");
    const img = this._selfDOM.querySelector("img");
    const divImg = this._selfDOM.querySelector(".img");
    if (value === "") {
      img.style.display = "none";
    } else {
      img.style.display = "block";
      img.src = value;
      divImg.style.backgroundImage = "url('" + value + "')";
    }

    imagePreview.value = value;
  }

  _listenerToImagePreview(src, eventName) {
    const val = src === "" ? "" : "url('" + src + "')";

    const cEvent = {
      detail: {
        tag: this._tag,
        mode: this._controlElements._mode,
        media: this._controlElements._media,
        property: this._properties.property,
        value: val,
        valueLikeDefault:
          val ===
            this._properties.media.default[this._controlElements._mode].value &&
          this._controlElements._media !== "default",
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
  }

  _listenerToManualImagePreview(input) {
    const val = input.value === "" ? "none" : "url('" + input.value + "')";

    if (val === "none") {
      this._selfDOM.querySelector("img").style.display = "none";
    } else {
      this._selfDOM.querySelector("img").style.display = "block";
      this._selfDOM.querySelector("img").src = input.value;
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
            this._properties.media.default[this._controlElements._mode].value &&
          this._controlElements._media !== "default",
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
  }
}

export default BackgroundImage;
