import Core from "./Core.js";

class DragAndDrop extends Core {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();
    this.options = options;
    this._elCurGrabbing = null;
    this._nextElCurGrabbing = null;
    this._parentElCurGrabbing = null;
    this.listenerDocumentMouseDownArray = [];
    this._displayPropertyEl = "block";

    this._init();
  }

  elements = [];
  listenerDocumentMousemove = null;
  listenerDocumentMouseUp = null;
  _triggerClick = false;

  _init() {
    if (
      !(
        this.options.elements instanceof Object ||
        this.options.elements instanceof Array
      )
    )
      throw new ReferenceError(
        "Expected variables options.elements like Object or Array"
      );

    if (Array.isArray(this.options.elements)) {
      this.elements = this.options.elements;
    } else {
      this.elements = [this.options.elements];
    }

    this.listenerDocumentMousemove = this._eventMoveDrag.bind(this);
    this.listenerDocumentMouseUp = this._eventEndDrag.bind(this);
  }

  set() {
    this.elements.forEach((el, indx) => {
      const objDispatchEvent = el.btn || el.el;
      this.listenerDocumentMouseDownArray.push(
        this._selectionSectionsItem.bind(this, el.el)
      );
      objDispatchEvent.addEventListener(
        "mousedown",
        this.listenerDocumentMouseDownArray[indx]
      );
    });
  }

  destroy() {
    this.elements.forEach((el, indx) => {
      const objDispatchEvent = el.btn || el.el;
      objDispatchEvent.removeEventListener(
        "mousedown",
        this.listenerDocumentMouseDownArray[indx]
      );
    });
    this.listenerDocumentMouseDownArray = [];
  }

  _selectionSectionsItem(el, e) {
    e.preventDefault();

    this._displayPropertyEl = window
      .getComputedStyle(el)
      .getPropertyValue("display");
    this._sectionDropped = true;

    this._eventStartDrag.call(this, el);
    this._createSectionPreview(el);

    const SPP = this.options.container.querySelectorAll(
      ".spr-start-position-parent-on-drag"
    );
    Array.from(SPP).forEach((parent) => {
      const sP = this._createStartPosition(el);
      parent.appendChild(sP);
    });

    this.documentIframe.addEventListener(
      "mousemove",
      this.listenerDocumentMousemove
    );
    this.documentIframe.addEventListener(
      "mouseup",
      this.listenerDocumentMouseUp
    );
  }

  _eventStartDrag(el) {
    const body = this.documentIframe.querySelector("body");
    body.classList.add("cursor-grab");
    el.classList.add("cursor-grab");
    this._elCurGrabbing = el;
    this._nextElCurGrabbing = el.nextElementSibling;
    this._parentElCurGrabbing = el.parentElement;

    if (!this._triggerClick) {
      this._triggerClick = true;
      this._createMarker();
      this._nextForDropped = null;
    }

    const cChildren = Array.from(this.options.container.children);
    if (this.options.dragItems)
      cChildren = Array.from(
        this.options.container.querySelectorAll(this.options.dragItems)
      );

    cChildren.forEach((el) => {
      if (el.getAttribute("class"))
        el.setAttribute(
          "class",
          el.getAttribute("class") + " spr-drag-children-items"
        );
    });
  }

  _eventMoveDrag(e) {
    if (this._dropPreview && this._sectionDropped) {
      this.removeNowrapSuperStructure(
        this.documentIframe,
        null,
        "without-spr-child"
      );

      if (this._elCurGrabbing.parentElement) {
        this._setStartPosition(
          this._elCurGrabbing,
          this._elCurGrabbing.parentElement
        );
        this._elCurGrabbing.parentElement.insertBefore(
          this._marker,
          this._elCurGrabbing
        );
        this._elCurGrabbing.parentElement.removeChild(this._elCurGrabbing);
      }

      const widthDropP = this._dropPreview.getBoundingClientRect().width;
      this._dropPreview.style.left = e.clientX - widthDropP / 2 + "px";
      this._dropPreview.style.top = e.clientY - 10 + "px";
      this._dropPreview.style.display = "none";
      const sprEditEl = this.findParent(
        this.documentIframe.elementFromPoint(e.clientX, e.clientY),
        ["spr-drag-children-items"]
      );
      this._dropPreview.style.display = "block";

      if (sprEditEl) {
        this._setPositionMarker(e, this.sectionClicked, sprEditEl);
      } else {
        console.log("fail");
      }
      if (window.innerWidth > 500 && !this._fixedRightSide) {
        // perform some action
      }
    }
  }

  _createMarker() {
    this._marker = this.documentIframe.createElement("div");
    this._marker.style.display = this._displayPropertyEl;
    this._marker.className = "marker-element";
  }

  _eventEndDrag() {
    const body = this.documentIframe.querySelector("body");

    if (this._dropPreview && !this._sectionDropped && !this._lockEndDrag) {
      this._dropPreview = null;
    }

    if (this._triggerClick) {
      this._triggerClick = false;

      const parent = this._marker.parentElement;
      if (parent) {
        parent.insertBefore(this._elCurGrabbing, this._marker);

        const SP = this.options.container.querySelectorAll(
          ".spr-start-position-element-on-drag"
        );
        Array.from(SP).forEach((sP) => {
          sP.parentElement.removeChild(sP);
        });

        parent.classList.remove("spr-start-position-parent-on-drag");

        const currPageObj = this.getActivePageObject();
        const activeItem = this.leftPanel.cPanels[
          "project-pages"
        ].getActivePageItem(currPageObj.id);

        const elHistory = this._elCurGrabbing;

        this.setStep(() => {
          const currentPageObj = this.getActivePageObject();
          if (currPageObj && currPageObj.id !== currentPageObj.id) {
            this.leftPanel.cPanels["project-pages"].changeActivePage(
              currPageObj,
              activeItem,
              currPageObj.id
            );
          }
          this.setPointDragMoveEelement(
            elHistory,
            this._parentElCurGrabbing,
            parent,
            this._nextElCurGrabbing
          );
        });

        parent.removeChild(this._marker);
        this._marker = null;
      }
    }

    setTimeout(() => {
      if (this._dropPreview) {
        body.removeChild(this._dropPreview);
        this._dropPreview = null;
      }
      this._lockEndDrag = false;

      if (this.windowIframe.AOS) this.windowIframe.AOS.refresh();
    }, 0);

    if (body.classList.contains("cursor-grab")) {
      body.classList.remove("cursor-grab");
    }

    if (
      this._elCurGrabbing &&
      this._elCurGrabbing.classList.contains("cursor-grab")
    ) {
      this._elCurGrabbing.classList.remove("cursor-grab");
    }
    this._sectionDropped = false;
    this._elCurGrabbing = null;

    this.documentIframe.removeEventListener(
      "mousemove",
      this.listenerDocumentMousemove
    );
    this.documentIframe.removeEventListener(
      "mouseup",
      this.listenerDocumentMouseUp
    );

    const cChildren = Array.from(this.options.container.children);
    if (this.options.dragItems)
      cChildren = Array.from(
        this.options.container.querySelectorAll(this.options.dragItems)
      );

    cChildren.forEach((el) => {
      el.setAttribute(
        "class",
        el.getAttribute("class").replace(/\sspr-drag-children-items/, "")
      );
    });
  }

  _createStartPosition(el) {
    const b = el.getBoundingClientRect();
    const startPosition = this.documentIframe.createElement("div");
    startPosition.style.height = b.height + "px";
    startPosition.style.width = b.width + "px";
    startPosition.className =
      "spr-start-position-element-on-drag spr-drag-children-items";

    return startPosition;
  }

  _setStartPosition(el, parent) {
    if (parent.children.length === 1) {
      const sP = this._createStartPosition(el);
      parent.setAttribute(
        "class",
        parent.getAttribute("class") + " spr-start-position-parent-on-drag"
      );
      parent.appendChild(sP);
    }
  }

  _createSectionPreview(el) {
    const body = this.documentIframe.querySelector("body");

    this._dropPreview = this.documentIframe.createElement("div");
    this._dropPreview.innerHTML =
      el.tagName.toLowerCase() + "." + el.classList[0];
    this._dropPreview.className = "preview-element-on-drag";

    body.appendChild(this._dropPreview);
  }

  _setPositionMarker(e, dragSection, sprEditEl) {
    if (
      sprEditEl === this.options.container ||
      !this._belongsTo(this.options.container, sprEditEl)
    )
      return;

    const boundingSprEditEl = sprEditEl.getBoundingClientRect();
    const height = boundingSprEditEl.height;
    const top = boundingSprEditEl.top;
    if (e.clientY < top + height / 2) {
      sprEditEl.parentElement.insertBefore(this._marker, sprEditEl);
    } else {
      sprEditEl.parentElement.insertBefore(this._marker, sprEditEl.nextSibling);
    }
  }

  setPointDragMoveEelement(el, parentElCurGrabbing, parent, next) {
    const nextHistory = el.nextElementSibling;

    if (next) {
      parentElCurGrabbing.insertBefore(el, next);
    } else {
      parentElCurGrabbing.appendChild(el);
    }

    const currPageObj = this.getActivePageObject();
    const activeItem = this.leftPanel.cPanels[
      "project-pages"
    ].getActivePageItem(currPageObj.id);

    this.setStep(() => {
      const currentPageObj = this.getActivePageObject();
      if (currPageObj && currPageObj.id !== currentPageObj.id) {
        this.leftPanel.cPanels["project-pages"].changeActivePage(
          currPageObj,
          activeItem,
          currPageObj.id
        );
      }
      this.setPointDragMoveEelement(
        el,
        parent,
        parentElCurGrabbing,
        nextHistory
      );
    });
  }
}

export default DragAndDrop;
