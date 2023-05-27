import ControlPanel from "./ControlPanel.js";

class ControlAOSSettingsPL2 extends ControlPanel {
  constructor(options) {
    if (options.name === undefined) {
      throw new ReferenceError("Expected variables options.name");
    }

    const activePanel = this.leftPanel.getActivePanel();

    if (activePanel.caller === options.caller) {
      if (!activePanel.getDOMSelf().classList.contains("active")) {
        activePanel.getDOMSelf().classList.add("active");
      }
      return activePanel;
    }

    super(options);

    this._selfDOM.className += " custom-styling supra";

    this.name = options.name;
    this._targetObject = options.obj;
    this.caller = options.caller;
    this._cElements = null;
    this._topBtnGroup = null;

    this._animation = "";
    this._easing = "";
    this._duration = "1000";
    this._delay = "";
    this._repeat = "";

    this._init();
    this._addEventListeners();

    this.openPanelElement();
  }

  _init() {
    var cElement = document.createElement("div");
    cElement.className = "c-element check-buttons";

    let animationAR = Core.prototype.translateWord.keywords_ar.rightPanel;

    var cElements = new ControlElements({
      name: this.name,
      elements: [
        {
          name: "DropDown",
          itemName: "animation",
          menu: [
            "-",
            "fade",
            "fade-up",
            "fade-down",
            "fade-left",
            "fade-right",
            "fade-up-right",
            "fade-up-left",
            "fade-down-right",
            "fade-down-left",
            "flip-up",
            "flip-down",
            "flip-left",
            "flip-right",
            "slide-up",
            "slide-down",
            "slide-left",
            "slide-right",
            "zoom-in",
            "zoom-in-up",
            "zoom-in-down",
            "zoom-in-left",
            "zoom-in-right",
            "zoom-out",
            "zoom-out-up",
            "zoom-out-down",
            "zoom-out-left",
            "zoom-out-right",
            "stretch-left",
            "stretch-right",
            "stretch-horizontal",
            "stretch-top",
            "stretch-bottom",
            "rotate-in",
            "rotate-in-down-left",
            "rotate-in-down-right",
            "rotate-in-up-left",
            "rotate-in-up-right",
          ],
          title: animationAR.animation,
          callback: function () {
            return this._targetObject.dataset.aos || "None";
          },
        },
        {
          name: "DropDown",
          itemName: "ease",
          menu: [
            "linear",
            "ease",
            "ease-in",
            "ease-out",
            "ease-in-out",
            "ease-in-back",
            "ease-out-back",
            "ease-in-out-back",
            "ease-in-sine",
            "ease-out-sine",
            "ease-in-out-sine",
            "ease-in-quad",
            "ease-out-quad",
            "ease-in-out-quad",
            "ease-in-cubic",
            "ease-in-cubic",
            "ease-out-cubic",
            "ease-in-out-cubic",
            "ease-in-quart",
            "ease-out-quart",
            "ease-in-out-quart",
          ],
          title: animationAR.easeFunction,
          callback: function () {
            return this._targetObject.dataset.aosEasing || "Linear";
          },
        },
        {
          name: "HalfInput",
          itemName: "duration",
          title: animationAR.duration,
          postfix: "",
          step: 100,
          callback: function () {
            return this._targetObject.dataset.aosDuration || "";
          },
        },
        {
          name: "HalfInput",
          itemName: "delay",
          title: animationAR.delay,
          postfix: "",
          step: 100,
          callback: function () {
            return this._targetObject.dataset.aosDelay || "";
          },
        },
        {
          name: "HalfDropdown",
          itemName: "repeat",
          menu: ["Once", "Every"],
          title: animationAR.timingFunction,
          callback: function () {
            return this._targetObject.dataset.aosOnce === "true"
              ? "Once"
              : "Every";
          },
        },
      ],
    });

    let containersResults = document.getElementById("containers-results");
    let containersResultsControl = document.querySelector(
      "#containers-results .containers-results__control"
    );
    let containersResultsTitle = document.getElementById(
      "containers-results__control-title"
    );
    let containersResultsContent = document.getElementById(
      "containers-results__content"
    );

    cElement.appendChild(cElements.getDOMSelf());

    if (
      containersResultsControl.children.length > 0 ||
      containersResultsContent.children.length > 0
    ) {
      containersResultsContent.innerHTML = null;
      containersResultsContent.appendChild(cElement);
      containersResultsTitle.innerHTML = this.name;

      containersResults.classList.add("active");
      setTimeout(() => {
        containersResults.classList.add("animate");
      }, 0.1);
    }

    this.body.appendChild(this._selfDOM);

    $(cElement).niceScroll({
      cursorcolor: "#555555",
      cursorborder: "1px solid #555555",
      autohidemode: "scroll",
      hidecursordelay: 0,
    });

    this._cElements = cElements;
  }
  _addEventListeners() {
    this._cElements
      .getElements()
      .animation.getDOMSelf()
      .addEventListener("custom.event", function (e) {
        var val = firstDown(e.detail.val);
        var saveValue = this._animation;
        this._animation = val;

        this.setAnimation(val, saveValue);
      });

    this._cElements
      .getElements()
      .ease.getDOMSelf()
      .addEventListener("custom.event", function (e) {
        var val = firstDown(e.detail.val);
        var saveValue = this._easing;
        this._easing = val;

        this.setEase(val, saveValue);
      });

    this._cElements
      .getElements()
      .duration.getDOMSelf()
      .addEventListener("custom.event", function (e) {
        var val = firstDown(e.detail.val);

        if (val !== "") {
          this._targetObject.dataset.aosDuration = val;
        } else {
          delete this._targetObject.dataset.aosDuration;
        }
      });

    this._cElements
      .getElements()
      .duration.getDOMSelf()
      .querySelector("input")
      .addEventListener("blur", function (e) {
        var val = this.value;
        var saveValue = this._duration;
        this._duration = val;

        this.setDuration(val, saveValue);
      });

    this._cElements
      .getElements()
      .delay.getDOMSelf()
      .addEventListener("custom.event", function (e) {
        var val = firstDown(e.detail.val);

        if (val !== "") {
          this._targetObject.dataset.aosDelay = val;
        } else {
          delete this._targetObject.dataset.aosDelay;
        }
      });

    this._cElements
      .getElements()
      .delay.getDOMSelf()
      .querySelector("input")
      .addEventListener("blur", function (e) {
        var val = this.value;
        var saveValue = this._delay;
        this._delay = val;

        this.setDelay(val, saveValue);
      });

    this._cElements
      .getElements()
      .repeat.getDOMSelf()
      .addEventListener("custom.event", function (e) {
        var val = firstDown(e.detail.val);
        var saveValue = this._repeat;
        this._repeat = val;

        this.setRepeat(val, saveValue);
      });
  }
  setAnimation(val, saveVal) {
    if (this._targetObject.getAttribute("class").match(/(\s?aos-[^\s]*)+/i)) {
      this._targetObject.setAttribute(
        "class",
        this._targetObject
          .getAttribute("class")
          .replace(/(\s?aos-[^\s]*)+/gi, "")
          .trim()
      );
      if (this._targetObject.getAttribute("class") === "")
        this._targetObject.removeAttribute("class");
    }

    if (!(val === "-" || val === "")) {
      this._targetObject.style.transition = "";

      this._targetObject.dataset.aos = val;

      if (builder.windowIframe.AOS) {
        setTimeout(function () {
          this._targetObject.setAttribute(
            "class",
            this._targetObject.getAttribute("class") + " aos-init aos-animate"
          );
          setTimeout(function () {
            this.windowIframe.AOS.refresh();
          }, this._duration * 2);
        }, this._duration * 1);
      }
    } else {
      delete this._targetObject.dataset.aos;
    }

    this.setStep(function () {
      this.setAnimation(saveVal, val);
    });
  }
  setEase(val, saveVal) {
    if (this._targetObject.getAttribute("class").match(/(\s?aos-[^\s]*)+/i)) {
      this._targetObject.setAttribute(
        "class",
        this._targetObject
          .getAttribute("class")
          .replace(/(\s?aos-[^\s]*)+/gi, "")
          .trim()
      );
      if (this._targetObject.getAttribute("class") === "")
        this._targetObject.removeAttribute("class");
    }

    if (val !== "") {
      this._targetObject.dataset.aosEasing = val;

      if (builder.windowIframe.AOS) {
        setTimeout(function () {
          this._targetObject.setAttribute(
            "class",
            this._targetObject.getAttribute("class") + " aos-init aos-animate"
          );
          setTimeout(function () {
            this.windowIframe.AOS.refresh();
          }, this._duration * 2);
        }, this._duration * 1);
      }
    } else {
      delete this._targetObject.dataset.aosEasing;
    }

    this.setStep(function () {
      this.setEase(saveVal, val);
    });
  }
  setDuration(val, saveVal) {
    if (val !== "") {
      this._targetObject.dataset.aosDuration = val;
    } else {
      delete this._targetObject.dataset.aosDuration;
    }

    this.setStep(function () {
      this.setDuration(saveVal, val);
    });
  }
  setDelay(val, saveVal) {
    if (val !== "") {
      this._targetObject.dataset.aosDelay = val;
    } else {
      delete this._targetObject.dataset.aosDelay;
    }

    this.setStep(function () {
      this.setDelay(saveVal, val);
    });
  }
  setRepeat(val, saveVal) {
    if (val === "once") {
      this._targetObject.dataset.aosOnce = "true";
    } else {
      delete this._targetObject.dataset.aosOnce;
    }

    this.setStep(function () {
      this.setRepeat(saveVal, val);
    });
  }
}

export default ControlAOSSettingsPL2;
