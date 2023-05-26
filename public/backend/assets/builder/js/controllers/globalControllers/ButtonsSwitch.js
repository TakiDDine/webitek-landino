import HalfDropdown from "./HalfDropdown.js";

class ButtonsSwitch extends HalfDropdown {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();

    this._selfDOM = null;
    this._options = options;
    this.allowSelectNothing = options.allowSelectNothing || false;
    this.onlyOne = options.onlyOne || false;

    this._createElement(options);
  }

  _createElement(args) {
    const buttons = document.createElement("div");
    let classItem = args.outerClass ? " " + args.outerClass : "";
    if (args.buttons.length === 3) classItem = " three";
    if (args.buttons.length > 4) classItem = " four";

    buttons.className = "item cs-element buttons-switch" + classItem;
    buttons.dataset.order = args.order || 999999;

    buttons.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<div class="wrapper d-flex justify-content-between">' +
      "</div>";

    const buttonsList = buttons.querySelector(".wrapper");

    args.buttons.forEach((button) => {
      const btn = document.createElement("button");
      btn.dataset.value = button.value;

      if (args.isActive(button.value)) {
        btn.className = "active";
      }
      btn.innerHTML = button.title;

      console.log("_this._controlElements[cElement] 2", btn);

      btn.addEventListener(
        "click",
        this._addEventListToSwitchButton.bind(this, btn)
      );

      buttonsList.appendChild(btn);
    });

    this._selfDOM = buttons;
  }

  _prepareValues(btn) {
    const active = btn.parentElement.querySelector(".active");
    const countActive = btn.parentElement.querySelectorAll(".active");
    if (active && active !== btn && this.onlyOne) {
      active.classList.remove("active");
    }

    if (
      btn.classList.contains("active") &&
      (countActive.length > 1 ||
        (countActive.length === 1 && this.allowSelectNothing))
    ) {
      btn.classList.remove("active");
    } else if (!btn.classList.contains("active")) {
      btn.classList.add("active");
    }

    return btn;
  }

  _addEventListToSwitchButton(btn, e) {
    btn = this._prepareValues(btn);

    this.doThis(btn);
  }

  doThis(btn) {
    const eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        btn: btn,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}
export default ButtonsSwitch;
