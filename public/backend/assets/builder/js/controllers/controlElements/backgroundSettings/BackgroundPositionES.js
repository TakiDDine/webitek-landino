import BgPosition from "../global/BgPosition.js";

class BackgroundPositionES extends BgPosition {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super({
      menu: [],
      title:
        Core.prototype.translateWord.keywords_ar.rightPanel.background_position,
      order: options.order || 999999,
      elClass: "",
      callback: () => this._position,
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._position = this._targetObject.style.backgroundPosition
      ? this._targetObject.style.backgroundPosition
      : "";
  }

  _addEventListToBgPositionItems(bgPosition, eventName) {
    bgPosition.addEventListener("click", (e) => {
      var index = this.cells.indexOf(e.target);
      var val = "";

      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
      } else {
        var activeItem = bgPosition.querySelector(".item.active");
        if (activeItem) {
          activeItem.classList.remove("active");
        }

        e.target.classList.add("active");

        if (index === 0) {
          val = "left top";
        }

        if (index === 1) {
          val = "center top";
        }

        if (index === 2) {
          val = "right top";
        }

        if (index === 3) {
          val = "left center";
        }

        if (index === 4) {
          val = "center center";
        }

        if (index === 5) {
          val = "right center";
        }

        if (index === 6) {
          val = "left bottom";
        }

        if (index === 7) {
          val = "center bottom";
        }

        if (index === 8) {
          val = "right bottom";
        }
      }

      var saveVal = this._position;
      this._position = val;

      this.setPosition(val, saveVal);
    });
  }

  setPosition(val, saveVal) {
    if (val === "") {
      this._targetObject.style.removeProperty("background-position");
    } else {
      this._targetObject.style.backgroundPosition = val;
    }

    this.setStep(() => {
      this.setPosition(saveVal, val);
    });
  }
}
export default BackgroundPositionES;
