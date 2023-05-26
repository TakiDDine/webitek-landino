import HalfDropdown from "../../globalControllers/HalfDropdown.js";
import { replaceSpace, firstUp, firstDown } from "../../functions/function.js";

class MediaPM extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }
    super();
    this._selfDOM = null;
    this._options = options;
    this.prefix = options.prefix;

    this.media = "default";

    this.paddingTop = {
      default: "-",
      mobile: "-",
      tablet: "-",
      desktop: "-",
    };

    this.paddingBottom = {
      default: "-",
      mobile: "-",
      tablet: "-",
      desktop: "-",
    };

    this._createElement(options);
    this._loadMediaButtonsMode(options);
  }

  _createElement(args) {
    const classItem = args.outerClass ? " " + args.outerClass : "";
    const mediaPadding = document.createElement("div");
    mediaPadding.className = "item cs-element media-padding" + classItem;
    mediaPadding.dataset.order = args.order || 999999;

    mediaPadding.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <label>${args.title}</label>
          <div class="media-group">
            <button data-id="mobile"><i class="fa fa-mobile"></i></button>
            <button data-id="tablet"><i class="fa fa-tablet"></i></button>
            <button data-id="desktop"><i class="fa fa-desktop"></i></button>
          </div>
        </div>`;

    const dropDownPTop = document.createElement("div");
    dropDownPTop.className = "dropdown";
    let ul = `<ul class="dropdown-menu" aria-labelledby="dropdownMenu${this._countDropDown}">`;

    args.menu.forEach((element, indx) => {
      ul += `<li><a href="#">${firstUp(element)}</a></li>`;
    });

    ul += "</ul>";

    const visibleCValue = (this.paddingTop.default =
      args.callbackTop !== undefined ? args.callbackTop() : args.menu[0]);
    const curentValue = replaceSpace(visibleCValue);

    dropDownPTop.innerHTML = `
        <button class="supra-btn dropdown-toggle d-flex justify-content-center align-items-center"
          type="button" id="dropdownMenu${this._countDropDown}"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          data-value="${curentValue}">
          <span>${visibleCValue}</span>
        </button>
        ${ul}`;

    this._countDropDown++;

    const dropDownPBottom = dropDownPTop.cloneNode(true);
    const buttonDPB = dropDownPBottom.querySelector("button");
    const visibleCValueBottom = (this.paddingBottom.default =
      args.callbackBottom !== undefined ? args.callbackBottom() : args.menu[0]);
    const curentValueBottom = replaceSpace(visibleCValueBottom);
    buttonDPB.id = "dropdownMenu" + this._countDropDown;
    dropDownPBottom
      .querySelector(".dropdown-menu")
      .setAttribute("aria-labelledby", "dropdownMenu" + this._countDropDown);
    buttonDPB.dataset.value = curentValueBottom;
    buttonDPB.querySelector("span").innerHTML = visibleCValueBottom;

    this._addEventListToDropdown(dropDownPTop);
    this._addEventListToDropdown(dropDownPBottom);

    dropDownPTop.classList.add("padding-top");
    dropDownPBottom.classList.add("padding-bottom");

    mediaPadding.appendChild(dropDownPTop);
    mediaPadding.appendChild(dropDownPBottom);

    const buttons = mediaPadding.querySelectorAll(".media-group button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("_this._controlElements[cElement] 3", button);
        if (button.classList.contains("active")) {
          button.classList.remove("active");
          button.blur();
          this.media = "default";
        } else {
          this.selection(button);
          this.media = button.dataset.id;
        }

        const buttonTop = mediaPadding.querySelector(".padding-top button");
        buttonTop.dataset.value = replaceSpace(
          firstDown(this.paddingTop[this.media])
        );
        buttonTop.querySelector("span").innerHTML = this.paddingTop[this.media];

        const buttonBottom = mediaPadding.querySelector(
          ".padding-bottom button"
        );
        buttonBottom.dataset.value = replaceSpace(
          firstDown(this.paddingBottom[this.media])
        );
        buttonBottom.querySelector("span").innerHTML =
          this.paddingBottom[this.media];
      });
    });

    this._selfDOM = mediaPadding;
  }

  _loadMediaButtonsMode(options) {
    const DOM = options.obj;
    const pattern = new RegExp(
      "\\s?" + this.prefix + "(t|b)-?(xs|sm|md|lg|xl)?-(-?[0-9]*)",
      "i"
    );
    const patternG = new RegExp(
      "\\s?" + this.prefix + "(t|b)-?(xs|sm|md|lg|xl)?-(-?[0-9]*)",
      "ig"
    );

    const desktop = this._selfDOM.querySelector(
      ".media-group [data-id=desktop]"
    );
    const tablet = this._selfDOM.querySelector(".media-group [data-id=tablet]");
    const mobile = this._selfDOM.querySelector(".media-group [data-id=mobile]");

    if (pattern.test(DOM.className)) {
      const match = DOM.className.match(patternG);

      match.forEach((mt) => {
        console.log("mt mt mt", mt);
        const m = mt.match(pattern);
        let paddingPosition = "paddingTop";
        if (m[1] === "b") paddingPosition = "paddingBottom";

        let mode = "default";
        if (m[2] === "sm") {
          mode = "mobile";
          mobile.classList.add("isset");
        }
        if (m[2] === "md") {
          mode = "tablet";
          tablet.classList.add("isset");
        }
        if (m[2] === "lg") {
          mode = "desktop";
          desktop.classList.add("isset");
        }

        this[paddingPosition][mode] = m[3] + "px";
      });
    }
  }

  _addEventListToDropdown(dropDown) {
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");
    options.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        let paddingPosition = "top";

        if (dropDown.classList.contains("padding-top")) {
          this.paddingTop[this.media] = val;
        } else {
          this.paddingBottom[this.media] = val;
          paddingPosition = "bottom";
        }

        const btn = {};

        btn.desktop = this._selfDOM.querySelector(
          ".media-group [data-id=desktop]"
        );
        btn.tablet = this._selfDOM.querySelector(
          ".media-group [data-id=tablet]"
        );
        btn.mobile = this._selfDOM.querySelector(
          ".media-group [data-id=mobile]"
        );

        if (
          this.paddingTop[this.media] === "-" &&
          this.paddingBottom[this.media] === "-" &&
          this.media !== "default"
        ) {
          btn[this.media].classList.remove("isset");
        } else if (_this.media !== "default") {
          btn[this.media].classList.add("isset");
        }

        _this.doThis(button, paddingPosition);
      });
    });
  }

  doThis() {
    var eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        btn: btn,
        paddingPosition: paddingPosition,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}

export default MediaPM;
