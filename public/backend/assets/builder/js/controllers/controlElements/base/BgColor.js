import BaseElement from "../../globalControllers/BaseElement.js";

class BgColor extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }
    super();
    this._selfDOM = null;
    this._options = options;
    this._createElement(options);
  }

  _createElement(args) {
    const bgColor = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";

    bgColor.dataset.order = args.order || 999999;

    let callBackVal = "";
    if (args.callback !== undefined) callBackVal = args.callback();
    const value = this._getColorsAndValueOfMenu(callBackVal);
    if (value.bgStyleColor === "Solid color") classItem = " solid";
    if (value.bgStyleColor === "-") classItem = " none";

    bgColor.className = "item cs-element bg-color" + classItem;

    let ul =
      '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
      this._countDropDown +
      '">';
    args.menu.forEach((element, indx) => {
      let style = "";
      if (args.styleForItems) {
        style = 'style=""';
      }
      ul += '<li><a href="#" ' + style + ">" + firstUp(element) + "</a></li>";
    });
    ul += "</ul>";

    const visibleCValue = value.bgStyleColor;

    const curentValue = replaceSpace(visibleCValue);

    const title = args.title !== "" ? "<label>" + args.title + "</label>" : "";
    const elClass = args.elClass || "";

    bgColor.innerHTML =
      title +
      '<div class="dropdown">' +
      '<button class="supra-btn dropdown-toggle d-flex justify-content-between align-items-center ' +
      elClass +
      '" ' +
      'type="button" id="dropdownMenu' +
      this._countDropDown +
      '"' +
      'data-toggle="dropdown" ' +
      'aria-haspopup="true" aria-expanded="false"' +
      'data-value="' +
      curentValue +
      '">' +
      "<span>" +
      visibleCValue +
      "</span>" +
      "</button>" +
      ul +
      "</div>" +
      '<div class="color-input d-flex justify-content-between align-items-center">' +
      '<input type="text" class="spectrum first">' +
      '<input type="text" class="spectrum second">' +
      "</div>";

    $(bgColor)
      .find(".spectrum.first")
      .spectrum({
        color: value.gradientColor1,
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        change: this._listenerToBgColor.bind(this, bgColor),
        beforeShow: (color) => {
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
        },
        hide: (color) => {
          this._hideColorpicker(bgColor);

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
        },
      });

    $(bgColor)
      .find(".spectrum.second")
      .spectrum({
        color: value.gradientColor2,
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        beforeShow: (color) => {
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
        },
        change: this._listenerToBgColor.bind(this, bgColor),
        hide: (color) => {
          this._hideColorpicker(bgColor);

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
        },
      });

    this._addEventListToBgColorDropdown(bgColor);

    this._selfDOM = bgColor;
  }

  _hideColorpicker(bgColor, colorLast) {
    const bgColor1 = bgColor.querySelector(".spectrum.first");
    const bgColor2 = bgColor.querySelector(".spectrum.second");
    bgColor1.value = /rgba/.test($(bgColor1).spectrum("get").toRgbString())
      ? $(bgColor1).spectrum("get").toRgbString()
      : $(bgColor1).spectrum("get").toHexString();
    bgColor2.value = /rgba/.test($(bgColor2).spectrum("get").toRgbString())
      ? $(bgColor2).spectrum("get").toRgbString()
      : $(bgColor2).spectrum("get").toHexString();

    this._listenerToBgColor();
  }

  _getColorsAndValueOfMenu(bgColorValue) {
    let gradientColor1 = "transparent";
    let gradientColor2 = "transparent";

    let bgStyleColor = "Solid color";
    const colors = bgColorValue.match(
      /.*?(#[^\s,)]*|rgba\([^)]*\)|rgb\([^)]*\)).*?(#[^\s,)]*|rgba\([^)]*\)|rgb\([^)]*\))/i
    );
    if (colors) {
      gradientColor1 = colors[1];
      gradientColor2 = colors[2];
    }
    if (bgColorValue.match(/linear-gradient\((?!to right)/i)) {
      bgStyleColor = "Vertical gradient";
    } else if (bgColorValue.match(/linear-gradient\(to right/i)) {
      bgStyleColor = "Horizontal gradient";
    } else if (bgColorValue.match(/radial-gradient\(circle/i)) {
      bgStyleColor = "Radial gradient";
    } else if (bgColorValue.match(/linear-gradient\(135deg/i)) {
      bgStyleColor = "Angle gradient";
    } else if (bgColorValue !== "" && bgColorValue !== "-") {
      gradientColor1 = bgColorValue;
    } else if (bgColorValue === "-") {
      bgStyleColor = "-";
    }

    return {
      gradientColor1: gradientColor1,
      gradientColor2: gradientColor2,
      bgStyleColor: bgStyleColor,
    };
  }

  _changeCstmColor(c1, c2) {
    const bgElementColor = this._selfDOM
      .querySelector("button")
      .dataset.value.toLowerCase();
    switch (bgElementColor) {
      case "radial_gradient":
        return "radial-gradient(circle, " + c1 + " 30%, " + c2 + " 70%)";
      case "vertical_gradient":
        return "linear-gradient(to bottom, " + c1 + ", " + c2 + ")";
      case "horizontal_gradient":
        return "linear-gradient(to right, " + c1 + ", " + c2 + ")";
      case "angle_gradient":
        return "linear-gradient(135deg, " + c1 + ", " + c2 + ")";
      case "solid_color":
        return c1;
      case "-":
        return "-";
    }
  }

  _listenerToBgColor(color) {
    const bgColor1 = this._selfDOM.querySelector(".spectrum.first");
    const bgColor2 = this._selfDOM.querySelector(".spectrum.second");
    const bgColor1value = /rgba/.test($(bgColor1).spectrum("get").toRgbString())
      ? $(bgColor1).spectrum("get").toRgbString()
      : $(bgColor1).spectrum("get").toHexString();
    const bgColor2value = /rgba/.test($(bgColor2).spectrum("get").toRgbString())
      ? $(bgColor2).spectrum("get").toRgbString()
      : $(bgColor2).spectrum("get").toHexString();
    const val = this._changeCstmColor(bgColor1value, bgColor2value);

    this.doThis(val);
  }

  _addEventListToBgColorDropdown(bgColor) {
    const options = bgColor.querySelectorAll("li a");
    const button = bgColor.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, (element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const item = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(item));
        button.querySelector("span").innerHTML = item;

        if (item === "Solid color" && !bgColor.classList.contains("solid")) {
          bgColor.classList.add("solid");
        } else if (
          item !== "Solid color" &&
          bgColor.classList.contains("solid")
        ) {
          bgColor.classList.remove("solid");
        }

        if (item === "-" && !bgColor.classList.contains("none")) {
          bgColor.classList.add("none");
        } else if (item !== "-" && bgColor.classList.contains("none")) {
          bgColor.classList.remove("none");
        }

        const bgColor1 = this._selfDOM.querySelector(".spectrum.first");
        const bgColor2 = this._selfDOM.querySelector(".spectrum.second");
        const bgColor1value = /rgba/.test(
          $(bgColor1).spectrum("get").toRgbString()
        )
          ? $(bgColor1).spectrum("get").toRgbString()
          : $(bgColor1).spectrum("get").toHexString();
        const bgColor2value = /rgba/.test(
          $(bgColor2).spectrum("get").toRgbString()
        )
          ? $(bgColor2).spectrum("get").toRgbString()
          : $(bgColor2).spectrum("get").toHexString();
        const val = this._changeCstmColor(bgColor1value, bgColor2value);

        this.doThis(val);
      });
    });
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

export default BgColor;
