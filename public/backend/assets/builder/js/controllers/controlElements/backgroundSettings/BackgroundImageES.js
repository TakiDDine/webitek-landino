import ImagePreview from "../global/ImagePreview.js";

class BackgroundImageES extends ImagePreview {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [],
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel.background_image,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._image,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._image = /url/.test(this._targetObject.style.backgroundImage)
      ? this._targetObject.style.backgroundImage.match(
          /url\(['"]?([^']*)['"]?\)/
        )[1]
      : "";
  }

  _listenerToImagePreview(src, eventName) {
    var val = src;
    var saveVal = this._image;
    this._image = val;
    this.setImage(val, saveVal);
  }

  _listenerToManualImagePreview(input) {
    var val = input.value;
    if (val === "none" || val === "") {
      this._selfDOM.querySelector("img").style.display = "none";
    } else {
      this._selfDOM.querySelector("img").style.display = "block";
      this._selfDOM.querySelector("img").src = input.value;
    }

    var saveVal = this._image;
    this._image = val;
    this.setImage(val, saveVal);
  }

  setImage(val, saveVal) {
    if (val === "") {
      this._targetObject.style.removeProperty("background-image");
    } else {
      val = val.replace(/^\.\//, "");
      this._targetObject.style.backgroundImage = "url('" + val + "')";
    }

    this.setStep(() => {
      this.setImage(saveVal, val);
    });
  }
}
export default BackgroundImageES;
