import Core from "./Core.js";

class BaseElement extends Core {
    constructor() {}
  
    getDOMSelf() {
      return this._selfDOM;
    }
  
    _scrollMove(el, e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0) {
        let match = el.value.match(/(-?[0-9]+\.?[0-9]*)([^0-9]*)/);
        match = match ? match : [0, 0, this._postfixDefault];
        const postfix =
          match[2] && match[2] !== "" ? match[2] : this._postfixDefault;
        const min = this._min;
        let step = this._stepDefault;
        let koef = 1;
        if (step < 1) {
          koef = 1 / step;
          step = 1;
        }
        el.value =
          match[1] * koef - step < min * koef
            ? ""
            : (match[1] * koef - step) / koef;
      } else {
        let match = el.value.match(/(-?[0-9]+\.?[0-9]*)([^0-9]*)/);
        match = match ? match : [0, 0, this._postfixDefault];
        const postfix =
          match[2] && match[2] !== "" ? match[2] : this._postfixDefault;
        const step = this._stepDefault;
        let koef = 1;
        if (step < 1) {
          koef = 1 / step;
          step = 1;
        }
        el.value = (match[1] * koef + step) / koef;
      }
      const event = new KeyboardEvent("keyup");
      el.dispatchEvent(event);
    }
  
    _keyArrowUpDown(el, e) {
      if (e.keyCode === 40) {
        let match = el.value.match(/(-?[0-9]+\.?[0-9]*)([^0-9]*)/);
        match = match ? match : [0, 0, this._postfixDefault];
        const postfix =
          match[2] && match[2] !== "" ? match[2] : this._postfixDefault;
        const min = this._min;
        let step = this._stepDefault;
        let koef = 1;
        if (step < 1) {
          koef = 1 / step;
          step = 1;
        }
        el.value =
          match[1] * koef - step < min * koef
            ? ""
            : (match[1] * koef - step) / koef;
      } else if (e.keyCode === 38) {
        let match = el.value.match(/(-?[0-9]+\.?[0-9]*)([^0-9]*)/);
        match = match ? match : [0, 0, this._postfixDefault];
        const postfix =
          match[2] && match[2] !== "" ? match[2] : this._postfixDefault;
        const step = this._stepDefault;
        let koef = 1;
        if (step < 1) {
          koef = 1 / step;
          step = 1;
        }
        el.value = (match[1] * koef + step) / koef;
      }
    }
  
    _issetOrNotIsset(mediaProperty, mode, e) {
      if (
        mediaProperty === undefined ||
        (mediaProperty && mediaProperty[mode] === undefined)
      ) {
        this._selfDOM.classList.add("not-isset");
      } else if (
        mediaProperty &&
        mediaProperty[mode] &&
        this._selfDOM.classList.contains("not-isset")
      ) {
        this._selfDOM.classList.remove("not-isset");
      }
  
      if (
        e &&
        this._controlElements._media !== "default" &&
        this._properties.media.default[this._controlElements._mode].value ===
          e.detail.value &&
        !this._selfDOM.classList.contains("not-isset")
      ) {
        this._selfDOM.classList.add("not-isset");
        delete this._properties.media[e.detail.media];
  
        let chek = true;
  
        for (let el in this.globalStyleElements) {
          if (this.globalStyleElements[el]._properties.media[e.detail.media]) {
            chek = false;
            return;
          }
        }
  
        if (chek) {
          const mediaButton = this.mediaButtonsOnControlStylePL2[e.detail.media];
          if (mediaButton.classList.contains("isset")) {
            mediaButton.classList.remove("isset");
          }
        }
      } else if (e && this._selfDOM.classList.contains("not-isset")) {
        this._selfDOM.classList.remove("not-isset");
        const mediaButton = this.mediaButtonsOnControlStylePL2[e.detail.media];
  
        if (!mediaButton.classList.contains("isset")) {
          mediaButton.classList.add("isset");
        }
      }
    }
  }
  

  export default BaseElement;
  