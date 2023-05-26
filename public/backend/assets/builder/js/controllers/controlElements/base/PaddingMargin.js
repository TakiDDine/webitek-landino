import BaseElement from "../../globalControllers/BaseElement.js"

class PaddingMargin extends BaseElement {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables options");
      }
  
      this._selfDOM = null;
      this._options = options;
  
      this._createElement(options);
    }
  
    _createElement(args) {
      var _this = this;
      var pmInput = document.createElement("div");
      var classItem = args.outerClass ? " " + args.outerClass : "";
      pmInput.className = "item cs-element cs-pm" + classItem;
      pmInput.dataset.order = args.order || 999999;
  
      var value = args.callback ? args.callback() : "";
  
      if (
        !/(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*?|auto)\s(?:-?[0-9]+\.?[0-9]*[^\s]*|auto)|none|^$/.test(
          value
        )
      ) {
        throw new SyntaxError("Expected variables format like '0px 0px 2px 1px'");
      }
  
      var match = ["", "", "", ""];
  
      if (value !== "none" && value !== "") {
        match = value.split(" ");
      }
  
      var top = match[0] === "0" || match[0] === "" ? "" : match[0];
      var right = match[1] === "0" || match[1] === "" ? "" : match[1];
      var bottom = match[2] === "0" || match[2] === "" ? "" : match[2];
      var left = match[3] === "0" || match[3] === "" ? "" : match[3];
  
      let toribole = Core.prototype.translateWord.keywords_ar.rightPanel;
  
      pmInput.innerHTML =
        "<label>" +
        args.title +
        "</label>" +
        '<div class="wrapper d-flex flex-wrap">' +
        '<input type="text" placeholder="' +
        toribole.top +
        '" value="' +
        top +
        '" class="top text-center">' +
        '<input type="text" placeholder="' +
        toribole.right +
        '" value="' +
        left +
        '" class="left text-center">' +
        '<div class="item center-center"></div>' +
        '<input type="text" placeholder="' +
        toribole.left +
        '" value="' +
        right +
        '" class="right text-center">' +
        '<input type="text" placeholder="' +
        toribole.bottom +
        '" value="' +
        bottom +
        '" class="bottom text-center">' +
        "</div>";
  
      this._addEventListToPmInput(pmInput, args.eventName);
  
      var inputs = pmInput.querySelectorAll("input");
      Array.prototype.forEach.call(inputs, function (input) {
        input.addEventListener(
          "keydown",
          _this._keyArrowUpDown.bind(_this, input)
        );
  
        var scrollMove = _this._scrollMove.bind(_this, input);
  
        input.addEventListener("focus", function (e) {
          input.addEventListener("wheel", scrollMove);
        });
  
        input.addEventListener("blur", function (e) {
          input.removeEventListener("wheel", scrollMove);
        });
      });
  
      this._selfDOM = pmInput;
    }
  
    _addEventListToPmInput(pmInput, eventName) {
      var _this = this;
      var inputs = pmInput.querySelectorAll("input");
      Array.prototype.forEach.call(inputs, function (input) {
        input.addEventListener("keyup", function (e) {
          e.preventDefault();
  
          var top = pmInput.querySelector("input.top").value;
          var right = pmInput.querySelector("input.right").value;
          var bottom = pmInput.querySelector("input.bottom").value;
          var left = pmInput.querySelector("input.left").value;
  
          top = top === "" ? "0" : top;
          right = right === "" ? "0" : right;
          bottom = bottom === "" ? "0" : bottom;
          left = left === "" ? "0" : left;
  
          var val = top + " " + right + " " + bottom + " " + left;
  
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
  
  export default PaddingMargin;
  