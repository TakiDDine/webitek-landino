import BaseElement from "./BaseElement.js";

class HalfDropdown extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;
    this._countDropDown = 0;

    this._createElement(options);
  }

  _createElement(args) {
    var dropDown = document.createElement("div");
    var classItem = args.outerClass ? " " + args.outerClass : "";
    dropDown.className =
      "item cs-element d-flex " +
      "justify-content-between align-items-center dropdown-el-half" +
      classItem;
    dropDown.dataset.order = args.order || 999999;

    var ul =
      '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
      this._countDropDown +
      '">';
    args.menu.forEach(function (element, indx) {
      var style = "";
      if (args.styleForItems) {
        style = 'style=""';
      }
      ul += '<li><a href="#" ' + style + ">" + firstUp(element) + "</a></li>";
    });
    ul += "</ul>";

    var visibleCValue = args.menu[0] ? firstUp(args.menu[0]) : "";
    var curentValue = args.menu[0] ? args.menu[0] : "";
    var callBackVal = "";
    if (args.callback !== undefined) callBackVal = args.callback();
    if (callBackVal !== "") {
      var curentValue = callBackVal;
      visibleCValue = curentValue;
      if (args.mode !== "lower") {
        visibleCValue = firstUp(curentValue);
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
      '">' +
      "<span>" +
      visibleCValue +
      "</span>" +
      "</button>" +
      ul +
      "</div>";

    this._addEventListToDropdown(dropDown, args.eventName);

    this._countDropDown++;

    this._selfDOM = dropDown;
  }

  _addEventListToDropdown(dropDown) {
    var _this = this;
    var options = dropDown.querySelectorAll("li a");
    var button = dropDown.querySelector(".dropdown button");
    Array.prototype.forEach.call(options, function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        var val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = val;

        _this.doThis(val);
      });
    });
  }

  doThis(val) {
    var eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        val: val,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}

export default HalfDropdown;
