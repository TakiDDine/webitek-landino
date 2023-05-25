class HalfInput {
    constructor(options) {
      if (options === undefined) {
        throw new ReferenceError("Expected variables options");
      }
  
      this._selfDOM = null;
      this._postfixDefault = options.postfix === undefined ? "px" : options.postfix;
      this._stepDefault = options.step === undefined ? 1 : options.step;
      this._min = options.min === undefined ? 1 : options.min;
      this._createElement(options);
    }
  
    _createElement(args) {
      const halfInput = document.createElement("div");
      const classItem = args.outerClass ? " " + args.outerClass : "";
      halfInput.className =
        "item cs-element d-flex justify-content-between align-items-center cs-half-input" +
        classItem;
      halfInput.dataset.order = args.order || 999999;
  
      const value = args.callback ? args.callback() : "";
      halfInput.innerHTML =
        "<label>" +
        args.title +
        "</label>" +
        '<input type="text" placeholder="-" value="' +
        value +
        '" class="">';
  
      this._addEventListToHalfInput(halfInput);
  
      const input = halfInput.querySelector("input");
  
      input.addEventListener("keydown", this._keyArrowUpDown.bind(this, input));
  
      const scrollMove = this._scrollMove.bind(this, input);
  
      input.addEventListener("focus", function (e) {
        input.addEventListener("wheel", scrollMove);
      });
  
      input.addEventListener("blur", function (e) {
        input.removeEventListener("wheel", scrollMove);
      });
  
      this._selfDOM = halfInput;
    }
  
    _addEventListToHalfInput(halfInput) {
      halfInput.querySelector("input").addEventListener("keyup", function (e) {
        e.preventDefault();
        const val = this.value;
  
        this.doThis(val);
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
  

  