import BaseElement from "../../globalControllers/BaseElement.js";

class ImagePreview extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    this._selfDOM = null;
    this._options = options;

    this._createElement(options);
  }

  _createElement(args) {
    const _this = this;
    const imagePreview = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    imagePreview.className = "item cs-element input-img-preview" + classItem;
    imagePreview.dataset.order = args.order || 999999;

    let value = args.callback ? args.callback() : "";
    value = value || "";
    value = /url/.test(value)
      ? value.match(/url\(['"]?([^']*)['"]?\)/)[1]
      : value;

    imagePreview.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      "<figure>" +
      '<div class="wrap-hover d-flex justify-content-center align-items-center">' +
      '<img src="' +
      value +
      '" ' +
      'alt="image">' +
      '<div class="img" style="display: none;"></div>' +
      '<div class="bg-test bg"></div>' +
      '<i class="fa fa-picture-o flex-center before-square"></i>' +
      "</div>" +
      "<figcaption>350x680</figcaption>" +
      '<div class="modal-preloader">' +
      '<div class="wrapper">' +
      '<div class="timer"><div class="arrow_sec"></div><div class="arrow_min"></div></div>' +
      "</div>" +
      "</div>" +
      "</figure>" +
      '<div class="input-image">' +
      '<input type="text" value="' +
      value +
      '" placeholder="رابط الصورة" class="choice-images">' +
      '<i class="fa fa-picture-o"></i>' +
      "</div>";

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
    Array.prototype.forEach.call(i, function (el) {
      el.addEventListener("click", function () {
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

        $(modGallery).on("hidden.bs.modal", function (e) {
          const input = imagePreview.querySelector(".input-image input");
          const val = imagePreview.querySelector(".input-image input").value;
          if (val === "") img.style.display = "none";
          else img.style.display = "block";
          _this._listenerToImagePreview(val);
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

  _setCustomSizeOnFigure(widthEl, heightEl, divImg, section) {
    let w = widthEl.value || widthEl,
      h = heightEl.value || heightEl;
    const width = w.match(/(([0-9]*?)(px|%)|auto)/i);
    const height = h.match(/(([0-9]*?)(px|%)|auto)/i);
    const sectionBRect = section.getBoundingClientRect();
    const widthSection = sectionBRect.width;
    const heightSection = sectionBRect.height;
    if (width && height) {
      w = width ? width[1] : "auto";
      h = height ? height[1] : "auto";
      if (widthEl.value) widthEl.value = w;
      if (heightEl.value) heightEl.value = h;
      if (width[3] === "px") w = (width[2] / widthSection) * 100 + "%";
      if (height[3] === "px") h = (height[2] / heightSection) * 100 + "%";

      divImg.style.backgroundSize = w + " " + h;
      divImg.style.backgroundSize = w + " " + h;
    }
  }

  _listenerToImagePreview(src) {
    const val = src === "" ? "none" : src;

    this.doThis(val);
  }

  _listenerToManualImagePreview(input, e) {
    const val = input.value === "" ? "none" : input.value;

    if (val === "none") {
      this._selfDOM.querySelector("img").style.display = "none";
    } else {
      this._selfDOM.querySelector("img").style.display = "block";
      this._selfDOM.querySelector("img").src = val;
    }

    this.doThis(val);
  }

  doThis(val) {
    const eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        val: val,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}

export default ImagePreview;
