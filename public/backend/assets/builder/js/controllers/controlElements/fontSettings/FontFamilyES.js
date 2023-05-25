import DropDown from "../../globalControllers/DropDown.js";

class FontFamilyES extends DropDown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    if (!Array.isArray(typographyFonts)) {
      throw new TypeError("Expected type of Array");
    }

    super({
      title: Core.prototype.translateWord.keywords_ar.rightPanel.fontFamilly,
      order: options.order || 999999,
      elClass: "",
      callback: () => {
        return this._fontFamily;
      },
    });

    this._selfDOM = null;
    this._targetObject = options.targetObject;
    this._fontFamily = this._targetObject.style.fontFamily;
  }

  _createElement(args) {
    var dropDown = document.createElement("div");
    var classItem = args.outerClass ? " " + args.outerClass : "";
    dropDown.className = "item cs-element dropdown-el-full" + classItem;
    dropDown.dataset.order = args.order;

    var ul =
      '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
      this._countDropDown +
      '">' +
      '<li><a href="#" style="font-family: \'none\';">-</a></li>';
    typographyFonts.forEach(function (el) {
      ul +=
        '<li><a href="#" style="font-family: \'' +
        el.font_family +
        "';\">" +
        firstUp(el.font_name) +
        "</a></li>";
    });
    ul += "</ul>";

    var visibleCValue = "-";
    var curentValue = "-";
    var callBackVal = "";
    if (args.callback !== undefined) callBackVal = args.callback();
    if (callBackVal !== "") {
      var curentValue = callBackVal;
      visibleCValue = curentValue;
      if (args.mode !== "lower") {
        visibleCValue = this.fromCamelCase(curentValue);
      }
    }

    curentValue = replaceSpace(curentValue);

    var title = args.title !== "" ? "<label>" + args.title + "</label>" : "";

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

  _addEventListToDropdown(dropDown) {
    var _this = this;
    var options = dropDown.querySelectorAll("li a");
    var button = dropDown.querySelector(".dropdown button");
    Array.from(options).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        var val = element.innerHTML;
        var style = element.getAttribute("style");
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;
        button.setAttribute("style", style);

        var saveVal = _this._fontFamily;
        _this._fontFamily = button.style.fontFamily;

        _this.setFontFamily(button.style.fontFamily, saveVal);
      });
    });
  }

  setFontFamily(val, saveVal) {
    if (val === "none" || val === "-") {
      this._targetObject.style.removeProperty("font-family");
    } else {
      this._targetObject.style.fontFamily = val;
    }

    this.setStep(() => {
      this.setFontFamily(saveVal, val);
    });
  }
}
export default FontFamilyES;
