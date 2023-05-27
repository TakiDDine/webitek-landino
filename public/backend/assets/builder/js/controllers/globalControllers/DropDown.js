import BaseElement from "./BaseElement.js";
import { firstDown, firstUp, replaceSpace } from "../functions/function.js";

class DropDown extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;

    this._createElement(options);
    console.log("this._selfDOM DD", this._selfDOM);
  }

  _createElement(args) {
    const dropDown = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    dropDown.className = "item cs-element dropdown-el-full" + classItem;
    dropDown.dataset.order = args.order || 999999;
    console.log("inCreate element");
    let ul =
      '<ul class="dropdown-menu" aria-labelledby="dropdownMenu' +
      this._countDropDown +
      '">';
    args.menu.forEach(function (element, indx) {
      let style = "";
      if (args.styleForItems) {
        style = 'style=""';
      }
      ul += '<li><a href="#" ' + style + ">" + firstUp(element) + "</a></li>";
    });
    ul += "</ul>";

    let visibleCValue = args.menu[0] ? firstUp(args.menu[0]) : "";
    let curentValue = args.menu[0] ? args.menu[0] : "";
    let callBackVal = "";
    if (args.callback !== undefined) callBackVal = args.callback();
    if (callBackVal !== "") {
      curentValue = callBackVal;
      visibleCValue = curentValue;
      if (args.mode !== "lower") {
        visibleCValue = firstUp(curentValue);
      }
    }

    curentValue = replaceSpace(curentValue);

    const title = args.title !== "" ? "<label>" + args.title + "</label>" : "";
    const elClass = args.elClass ? " " + args.elClass : "";

    dropDown.innerHTML =
      title +
      '<div class="dropdown">' +
      '<button class="supra-btn dropdown-toggle d-flex justify-content-between align-items-center' +
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
      "</div>";

    this._addEventListToDropdown(dropDown);

    this._countDropDown++;

    this._selfDOM = dropDown;
  }

  _addEventListToDropdown(dropDown) {
    const options = dropDown.querySelectorAll("li a");
    const button = dropDown.querySelector(".dropdown button");
    options.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const val = element.innerHTML;
        button.dataset.value = replaceSpace(firstDown(val));
        button.querySelector("span").innerHTML = firstUp(val);

        this.doThis(val);
        console.log("this._selfDOM FF", this._selfDOM);
      });
    });
  }

  changeItems(items) {
    const ul = this._selfDOM.querySelector(".dropdown-menu");
    ul.innerHTML = "";
    items.forEach((element, indx) => {
      const style = "";
      const li = document.createElement("li");
      li.innerHTML = '<a href="#" ' + style + ">" + firstUp(element) + "</a>";
      ul.appendChild(li);
    });

    const button = this._selfDOM.querySelector("button");
    button.dataset.value = items[0];
    button.querySelector("span").innerHTML = items[0];

    this._addEventListToDropdown(this._selfDOM);
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

export default DropDown;
