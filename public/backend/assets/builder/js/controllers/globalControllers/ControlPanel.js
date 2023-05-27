import Core from "./Core.js";

class ControlPanel extends Core {
  constructor(options) {
    if (options.title === undefined) {
      throw new ReferenceError("Expected variables options.title");
    }
    super();
    this._options = options;
    this._selfDOM = null;
    this.title = null;
    this._controlButton = null;
    this._initPanel(options);
  }

  _initPanel(options) {
    this._createPanel(options);

    if (options.closeButton) {
      this.addCloseButton();
    }

    if (options.bookmark) {
      this.addBookmark();
    }
  }

  openPanel(button) {
    if (button.classList.contains("active")) return;

    if (
      this.leftPanel.getActivePanel() &&
      this.leftPanel.getActivePanel() !== this
    ) {
      this._selfUnactive(this.leftPanel.getActivePanel().getDOMSelf());

      if (this.leftPanel.getActivePanel().type === "modeOfBuilder") {
        this._selfUnactive(this.leftPanel.getActivePanel().getControlButton());
      } else {
        const activePanel = this.leftPanel.getActivePanel().getDOMSelf();
        activePanel.parentElement.removeChild(activePanel);
      }

      if (this.type === "modeOfBuilder") {
        const pageDOM = this.getActivePageObject().getDOMSelf();
        pageDOM.className = pageDOM.className.replace(/\spage-mode[^\s]*/, "");
        pageDOM.classList.add(this.pageMode);

        const changeMode = new CustomEvent("modeOfBuilder.change", {
          detail: { mode: this.pageMode },
        });

        document.dispatchEvent(changeMode);
      }
    }

    if (
      this.leftPanel.getActivePanel().getLevel3() &&
      this.leftPanel.getActivePanel().getLevel3().classList.contains("show")
    ) {
      this.leftPanel.getActivePanel().getLevel3().classList.remove("show");
    }

    if (this._fixedRightSide && !this._options.closeButton) {
      this.enableBookmark();
    } else {
      this.disableBookmark();
    }

    const checkShowPanel = document.querySelector(
      ".add-sections-items, .global-style-controls"
    );
    if (checkShowPanel) checkShowPanel.classList.remove("show");

    this._selectionWithSelfUnactive(this._selfDOM);
    if (button) this.selection(button);
    this.leftPanel.setActivePanel(this);
  }

  openPanelElement() {
    this._selectionWithSelfUnactive(this._selfDOM);
    const activePanel = this.leftPanel.getCustomActivePanel();

    if (activePanel)
      activePanel
        .getDOMSelf()
        .parentElement?.removeChild(activePanel.getDOMSelf());
    this.leftPanel.setCustomActivePanel(this);
  }

  _createPanel(options) {
    const panel = document.createElement("aside");
    const additionalClass = options.className ? " " + options.className : "";
    panel.className = "control-panel" + additionalClass;

    const title = document.createElement("div");
    title.className = "title d-flex justify-content-between align-items-center";

    title.innerHTML = "<h3>" + options.title + "</h3>";

    const iframeViewPort = document.getElementById(
      "iframeViewPort__list-container"
    );
    const sidebarBtnTriggerers = document.getElementById("sidebarTriggerers");
    const globalStylesTriggerer = document.getElementById(
      " global-styles__Triggerer"
    );

    this._selfDOM = panel;
    this.title = title;

    const globalStyleContainer = document.querySelector(
      "#sidebar_contentHeader-right .global-style__container"
    );

    const myItemsModeViewing = options.leftPanel?.itemsModeViewing;
    myItemsModeViewing?.forEach((mode) => {
      iframeViewPort.appendChild(mode);
    });

    panel.appendChild(title);
  }

  createLife() {}

  getDOMSelf() {
    return this._selfDOM;
  }

  addCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.className = "close";
    this.title.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
      if (this._selfDOM.classList.contains("active")) {
        this._selfDOM.classList.remove("active");
      }
    });
  }

  addBookmark() {
    const bookmark = document.createElement("i");
    bookmark.className = "supra bookmark";
    this.title.appendChild(bookmark);

    bookmark.addEventListener("click", () => {
      if (!this._selfDOM.classList.contains("pin")) {
        this.enableBookmark.call(this);
      } else {
        this.disableBookmark.call(this);
      }
    });
  }

  enableBookmark() {
    if (!this._selfDOM.classList.contains("pin")) {
      this._selfDOM.classList.add("pin");
      this.body.classList.add("pin");
      Core.prototype._fixedRightSide = true;
    }
  }

  disableBookmark() {
    this._selfDOM.classList.remove("pin");
    this.body.classList.remove("pin");
    Core.prototype._fixedRightSide = false;
  }

  getControlButton() {
    if (this._controlButton) {
      return this._controlButton;
    }

    const controlButton = document.createElement(this.controlButtonOptions.tag);

    controlButton.className = this.controlButtonOptions.className;
    controlButton.innerHTML = this.controlButtonOptions.innerHTML;

    controlButton.addEventListener(
      "click",
      this.openPanel.bind(this, controlButton)
    );

    this._controlButton = controlButton;

    return controlButton;
  }

  getLevel3() {
    return null;
  }
}
export default ControlPanel;
