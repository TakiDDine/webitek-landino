import ButtonsSwitch from "../../globalControllers/ButtonsSwitch.js";

class MediaTextAlign extends ButtonsSwitch {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super(arguments);

    this.media = "default";
    this.activeButtons = {
      default: "",
      mobile: "",
      tablet: "",
      desktop: "",
    };
    this._loadMediaButtonsMode(options);
  }

  _createElement(args) {
    const _this = this;
    const classItem = args.outerClass ? " " + args.outerClass : "";
    const sa = document.createElement("div");
    sa.className =
      "item cs-element buttons-switch media-text-align" + classItem;
    sa.dataset.order = args.order || 999999;

    sa.innerHTML =
      '<div class="d-flex justify-content-between align-items-center">' +
      "<label>" +
      args.title +
      "</label>" +
      '<div class="media-group">' +
      '<button data-id="mobile"><i class="fa fa-mobile"></i></button>' +
      '<button data-id="tablet"><i class="fa fa-tablet"></i></button>' +
      '<button data-id="desktop"><i class="fa fa-desktop"></i></button>' +
      "</div>" +
      "</div>" +
      '<div class="wrapper d-flex justify-content-between">' +
      "</div>";

    const buttonsList = sa.querySelector(".wrapper");

    args.buttons.forEach(function (button) {
      const btn = document.createElement("button");
      btn.dataset.value = button.value;
      if (args.isActive(button.value)) {
        btn.className = "active";
      }

      btn.innerHTML = button.title;

      btn.addEventListener(
        "click",
        _this._addEventListToSwitchButton.bind(_this, btn)
      );

      buttonsList.appendChild(btn);
    });

    const buttons = sa.querySelectorAll(".media-group button");

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        const buttonActive = buttonsList.querySelector(".active");
        if (buttonActive) {
          buttonActive.classList.remove("active");
        }

        if (this.classList.contains("active")) {
          this.classList.remove("active");
          this.blur();
          _this.media = "default";
        } else {
          _this.selection(this);
          _this.media = this.dataset.id;
        }

        if (_this.activeButtons[_this.media] !== "") {
          const buttonFor = buttonsList.querySelector(
            "[data-value=" + _this.activeButtons[_this.media] + "]"
          );
          buttonFor.classList.add("active");
        }
      });
    });

    this._selfDOM = sa;
  }

  _loadMediaButtonsMode(options) {
    const _this = this;
    const DOM = options.obj;
    if (
      /\s?text-?(xs|sm|md|lg|xl)?-(left|right|center|justify)/i.test(
        DOM.className
      )
    ) {
      const match = DOM.className.match(
        /\s?text-?(xs|sm|md|lg|xl)?-(left|right|center|justify)/gi,
        ""
      );

      const desktop = this._selfDOM.querySelector(
        ".media-group [data-id=desktop]"
      );
      const tablet = this._selfDOM.querySelector(
        ".media-group [data-id=tablet]"
      );
      const mobile = this._selfDOM.querySelector(
        ".media-group [data-id=mobile]"
      );

      match.forEach(function (mt) {
        const m = mt.match(
          /\s?text-?(xs|sm|md|lg|xl)?-(left|right|center|justify)/i,
          ""
        );
        let mode = "default";
        if (m[1] === "xs") {
          mode = "mobile";
          mobile.classList.add("isset");
        }
        if (m[1] === "sm" || m[1] === "md") {
          mode = "tablet";
          tablet.classList.add("isset");
        }
        if (m[1] === "lg" || m[1] === "xl") {
          mode = "desktop";
          desktop.classList.add("isset");
        }

        _this.activeButtons[mode] = m[2];
      });
    }
  }

  _addEventListToSwitchButton(btn, e) {
    const _this = this;
    btn = this._prepareValues(btn);

    const btnM = {};

    btnM.desktop = _this._selfDOM.querySelector(
      ".media-group [data-id=desktop]"
    );
    btnM.tablet = _this._selfDOM.querySelector(".media-group [data-id=tablet]");
    btnM.mobile = _this._selfDOM.querySelector(".media-group [data-id=mobile]");

    if (btn.classList.contains("active") && _this.media !== "default") {
      btnM[_this.media].classList.add("isset");
    } else if (_this.media !== "default") {
      btnM[_this.media].classList.remove("isset");
    }

    this.activeButtons[this.media] = btn.classList.contains("active")
      ? btn.dataset.value
      : "";

    this.doThis(btn);
  }
}
export default MediaTextAlign;
