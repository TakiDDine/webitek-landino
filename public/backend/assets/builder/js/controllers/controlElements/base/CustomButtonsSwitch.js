import ButtonsSwitch from "../../globalControllers/ButtonsSwitch.js";

class CustomButtonsSwitch extends ButtonsSwitch {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    options = Object.assign(
      options,
      builderOptions.customControlElements[options.customCE]
    );

    this.arrayOfValues = [];

    super(options);
  }

  _createElement(args) {
    const buttons = document.createElement("div");
    let classItem = args.outerClass ? " " + args.outerClass : "";
    if (args.buttons.length === 3) classItem = " three";

    buttons.className =
      "item cs-element buttons-switch custom-buttons" + classItem;
    buttons.dataset.order = args.order || 999999;

    buttons.innerHTML =
      "<label>" +
      args.title +
      "</label>" +
      '<div class="wrapper d-flex flex-wrap justify-content-between">' +
      "</div>";

    const buttonsList = buttons.querySelector(".wrapper");

    args.buttons.forEach((button) => {
      const btn = document.createElement("div");
      btn.dataset.value = button.value;
      this.arrayOfValues.push(button.value);

      btn.className = "item d-flex flex-column align-items-center";

      if (args.isActive(button.value)) {
        btn.className += " active";
      }

      btn.innerHTML = button.innerHTML;

      if (button.title !== undefined && button.title !== "") {
        btn.innerHTML += "<label>" + button.title + "</label>";
      }

      btn.addEventListener(
        "click",
        this._addEventListToSwitchButton.bind(this, btn)
      );

      buttonsList.appendChild(btn);
    });

    this._selfDOM = buttons;
  }

  optionsSelect(btn, section) {
    const pattern = new RegExp(
      "\\s?(" + this.arrayOfValues.join("|") + ")(\\s|$)",
      "g"
    );

    if (pattern.test(section.getAttribute("class")) && this.onlyOne) {
      section.setAttribute(
        "class",
        section.getAttribute("class").replace(pattern, "$2")
      );
    }

    if (
      !btn.classList.contains("active") &&
      section.getAttribute("class").match(pattern) &&
      (section.getAttribute("class").match(pattern).length > 1 ||
        (section.getAttribute("class").match(pattern).length === 1 &&
          this.allowSelectNothing))
    ) {
      section.setAttribute(
        "class",
        section
          .getAttribute("class")
          .replace(new RegExp("\\s?" + btn.dataset.value + "(\\s|$)"), "$1")
      );
    } else if (
      btn.classList.contains("active") &&
      !new RegExp("s?" + btn.dataset.value + "(\\s|$)").test(
        section.getAttribute("class")
      )
    ) {
      section.setAttribute(
        "class",
        section.getAttribute("class") + " " + btn.dataset.value
      );
    }
  }
}
export default CustomButtonsSwitch;
