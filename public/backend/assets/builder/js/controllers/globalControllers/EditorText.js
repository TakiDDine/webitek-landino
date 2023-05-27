import Core from "./Core.js";

class EditorText extends Core {
  constructor(el) {
    super();
    this._DOMIdentif = el.tagName.toLowerCase();
    this._DOMEditingEl = el;
    this.wrapContainer = el.parentElement;
    this.overflow = null;
    this.content = el.innerHTML;
    this.href = "";

    this.condition = () => true;

    let li = this.findParent(el, ["section-item", "modal-dialog"]);

    let nav = this.findParent(el, ["nav"]);

    if (nav) {
      this.wrapContainer = this.findParent(this.wrapContainer, ["ul"]);
      let menu = el;
      while (menu) {
        if (
          menu.classList.contains("sub-menu") ||
          menu.classList.contains("mega-menu-container")
        ) {
          menu.classList.add("spr-child-active");
        }
        menu = menu.parentElement;
      }
    }

    if (
      this.documentIframe.querySelector(".edit-typography") &&
      !this._triggerMouseEnter
    ) {
      el.setAttribute("contenteditable", "true");
      if (
        this.currentEditorText &&
        !this.currentEditorText._triggerMouseEnter
      ) {
        this.documentIframe.removeEventListener(
          "mousemove",
          this.currentEditorText.mouseLeave
        );
        this.currentEditorText._DOMEditingEl.removeEventListener(
          "mouseleave",
          this.currentEditorText.mouseLeave
        );
        this.currentEditorText._DOMEditingEl.removeEventListener(
          "mouseup",
          this.currentEditorText.mouseUp
        );
        this.currentEditorText._DOMEditingEl.removeEventListener(
          "keydown",
          this.currentEditorText.keyDown
        );
        this.currentEditorText._DOMEditingEl.removeEventListener(
          "mouseleave",
          this.currentEditorText.mouseLeave
        );
        this.currentEditorText._DOMEditingEl.removeEventListener(
          "paste",
          this.currentEditorText.paste
        );
      } else if (
        this.currentEditorText &&
        this.currentEditorText._triggerMouseEnter
      ) {
        this.currentEditorText.mouseLeave();
      }
      this.currentEditorText = this;

      this.overflow = this.findParent(this.wrapContainer, ["nb-off-canvas"]);

      if (el.parentElement.tagName === "A") {
        this.href = el.parentElement.getAttribute("href");
        el.parentElement.removeAttribute("href");
      }
      let magnific =
        el.classList.contains("video-popup") ||
        el.classList.contains("image-popup") ||
        this.wrapContainer.classList.contains("video-popup") ||
        this.wrapContainer.classList.contains("image-popup");
      if (magnific) {
        this.editingText = true;
        this.windowIframe.editingText = true;
      }

      this.content = el.innerHTML;

      this._triggerMouseEnter = true;
    }

    this.clickIngalleryEditTagA = (e) => {
      if (
        builder.documentIframe.querySelector(".edit-typography") &&
        this._triggerMouseEnter
      ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        el.style.overflow = "visible";
        this.style.zIndex = "10";
      }
    };

    this.mouseUp = (e) => {
      if (this._triggerMouseEnter) {
        this.showActiveButton(this, e);
      }
    };

    this.keyDown = (e) => {
      this._eventKeyboard(e, el);
    };

    this.mouseLeave = (e) => {
      if (this._triggerMouseEnter) {
        if (this._triggerChangeText) {
          let newContent = el.innerHTML;
          this.setStep(() => {
            this._changeContent(el, this.content, newContent);
          });
          this._triggerChangeText = false;
        }

        if (el.parentElement && el.parentElement.tagName === "A") {
          el.parentElement.href = this.href;
        }

        if (
          this.wrapContainer &&
          this.wrapContainer.style.hasOwnProperty("z-index") &&
          this.wrapContainer.style.zIndex === "10"
        ) {
          this.wrapContainer.style.removeProperty("z-index");
        }

        if (
          el.style.hasOwnProperty("overflow") &&
          el.style.overflow === "visible"
        ) {
          el.style.removeProperty("overflow");
        }

        this._triggerMouseEnter = false;
        this._triggerShowControls = false;
        this.editingText = false;

        this.documentIframe.removeEventListener("mousemove", this.mouseLeave);
        this.currentEditorText = null;
        el.removeEventListener("mouseleave", this.mouseLeave);
        el.removeEventListener("mouseup", this.mouseUp);
        el.removeEventListener("keydown", this.keyDown);
        el.removeEventListener("mouseleave", this.mouseLeave);
        el.removeEventListener("paste", this.paste);

        if (this.wrapContainer) {
          this.wrapContainer.removeEventListener(
            "click",
            this.clickIngalleryEditTagA
          );
        }
      }
    };

    this.paste = (e) => {
      e = e.originalEvent || e;
      e.preventDefault();
      let cnt = e.clipboardData.getData("text/plain");
      cnt = cnt.replace(/[\n\r]/i, "<br>");
      this.documentIframe.execCommand("insertHTML", false, cnt);
    };

    this.wrapContainer.addEventListener("click", this.clickIngalleryEditTagA);

    el.addEventListener("mouseup", this.mouseUp);

    el.addEventListener("keydown", this.keyDown);

    el.addEventListener("paste", this.paste);
  }

  showActiveButton(element, eClick) {
    let li = this.findParent(element, ["section-item", "modal-dialog"]);
    let controlGroup = li.querySelector(
      ".wrap-control-element-icons.nowrap" +
        ", .wrap-control-element.type-typography.nowrap"
    );

    let select = this.windowIframe.getSelection();
    try {
      this._range = select.getRangeAt(0);
    } catch (e) {
      console.log("err");
      this.setElByMousePosition(select, eClick);
    }

    if (
      this.main.querySelector(".edit-typography") &&
      element.tagName !== "I" &&
      !navigator.userAgent.match(
        /iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i
      ) &&
      controlGroup
    ) {
      this._triggerShowControls = true;
      setTimeout(() => {
        this._triggerShowControls = false;
      }, 1000);
      controlGroup.style.display = "block";

      let activeButtons = controlGroup.querySelectorAll(".active");

      Array.prototype.forEach.call(activeButtons, (element) => {
        element.classList.remove("active");
      });

      let textAlign = element.className.match(/text-([^ ]*)/i);
      if (textAlign) {
        switch (textAlign[1]) {
          case "left":
            controlGroup.querySelector("button.left").classList.add("active");
            break;
          case "center":
            controlGroup.querySelector("button.center").classList.add("active");
            break;
          case "right":
            controlGroup.querySelector("button.right").classList.add("active");
            break;
        }
      }

      if (!this._DOMEditingEl.contains(select.anchorNode)) {
        this.setElByMousePosition(select, eClick);
      }

      let parentNodeSelect = select.anchorNode.parentNode;
      if (select.anchorNode === this._DOMEditingEl) {
        parentNodeSelect = select.anchorNode;
      }
      let style = parentNodeSelect.nodeName.toLowerCase();

      let activeStyles = [{ style: style, nodeSelect: parentNodeSelect }];
      while (style !== this._DOMIdentif) {
        parentNodeSelect = parentNodeSelect.parentNode;
        style = parentNodeSelect.nodeName.toLowerCase();
        activeStyles.push({ style: style, nodeSelect: parentNodeSelect });
      }
      activeStyles.forEach((element) => {
        switch (element.style) {
          case "strong":
            let bt = controlGroup.querySelector("button.strong");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "em":
            let bt = controlGroup.querySelector("button.em");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "span":
            if (element.nodeSelect.classList.contains("text-uppercase"))
              controlGroup
                .querySelector("button.upper")
                .classList.add("active");
            break;
          case "mark":
            let bt = controlGroup.querySelector("button.mark");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "ins":
            let bt = controlGroup.querySelector("button.ins");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "del":
            let bt = controlGroup.querySelector("button.del");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "bdo":
            let bt = controlGroup.querySelector("button.rtl");
            if (!bt) break;
            bt.classList.add("active");
            break;
          case "a":
            let bt = controlGroup.querySelector("button.link");
            if (!bt) break;
            bt.classList.add("active");
            break;
        }
      });
    }
  }

  setElByMousePosition(select, eClick) {
    var el = this.documentIframe.elementFromPoint(
      eClick.clientX,
      eClick.clientY
    );
    this._range = this.documentIframe.createRange();

    try {
      this._range.setStart(el, 0);
      this._range.setEnd(el, 0);
      select.removeAllRanges();
      select.addRange(this._range);
    } catch (e) {}
  }

  _eventKeyboard(e, element) {
    if (!(e.keyCode === 13 && element.tagName === "SPAN")) {
      this._triggerChangeText = true;
    }
    if (e.keyCode === 13 && element.tagName === "SPAN") {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      this._setEnterInEndLine(element);
    } else if (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) {
      if (this._triggerMouseEnter) {
        e.preventDefault();
        e.stopPropagation();
        var select = this.windowIframe.getSelection();
        var range = this.documentIframe.createRange();
        range.selectNodeContents(element);
        select.removeAllRanges();
        select.addRange(range);
        this.showActiveButton(element, e);
      }
    }
    if (e.keyCode === 32) {
      e.preventDefault();
      e.stopPropagation();
      this.documentIframe.execCommand("insertText", false, " ");
    }
  }

  _setEnterInEndLine(element) {
    var select = this.windowIframe.getSelection();
    if (
      select.anchorNode.length === select.anchorOffset ||
      select.anchorNode === element
    ) {
      var range = this.documentIframe.createRange();
      var br = document.createElement("br");
      var br2 = document.createElement("br");
      var fragment = document.createDocumentFragment();
      fragment.appendChild(br2);
      if (select.anchorNode === element) {
        var node = select.anchorNode;
        var next = element.childNodes[select.anchorOffset - 1].nextSibling;
      } else {
        var next = select.anchorNode.nextSibling;
        var node = select.anchorNode.parentNode;
      }

      if ((next && next.tagName !== "BR") || !next) {
        fragment.appendChild(br);
      }

      if (next) {
        node.insertBefore(fragment, next);
      } else {
        node.appendChild(fragment);
      }
      range.setStartAfter(br2);
      range.setEndAfter(br2);
      range.collapse(false);
      select.removeAllRanges();
      select.addRange(range);
    } else {
      this.documentIframe.execCommand("insertHTML", false, "<br>");
    }
  }

  _changeContent(el, content, newContent) {
    el.innerHTML = content;
    this.setStep(function () {
      this._changeContent(el, newContent, content);
    });
  }

  _setNode(button, tagName, className, href, targetLink) {
    if (this._range) {
      var select = this.windowIframe.getSelection();
      select.removeAllRanges();
      if (this._range.startOffset === this._range.endOffset) {
        var p = this._range.startContainer.parentElement;
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < p.childNodes.length; i++) {
          fragment.appendChild(p.childNodes[i].cloneNode(true));
        }
        p.innerHTML = "";
        this._range.insertNode(fragment);
      }
      select.addRange(this._range);
      var valElBefore = this._DOMEditingEl.innerHTML;
      var insertText = this._range.extractContents();
      Array.prototype.forEach.call(insertText.childNodes, function (n) {
        if (n && n.nodeType === 3 && n.data === "") {
          insertText.removeChild(n);
        }
      });
      var node = document.createElement(tagName);
      if (className === "rtl") {
        node.setAttribute("dir", "rtl");
      } else if (className === "ltr") {
        node.setAttribute("dir", "ltr");
      } else if (className) {
        node.className = className;
      }
      if (href || targetLink) {
        node.href = href;
        node.target = targetLink;
        node.classList.add("smooth");
        this.windowIframe.jQuery(node).smoothScroll({
          speed: 800,
          exclude: [".spr-outline-control", ".spr-oc-show"],
          excludeWithin: [".spr-outline-control", ".spr-oc-show"],
        });
      }
      node.appendChild(insertText);
      this._range.insertNode(node);
      this._range.selectNodeContents(node);
      select.removeAllRanges();
      select.addRange(this._range);

      if (node.parentElement.classList.contains("count-up-data")) {
        node.classList.add("count-up-data");
        node.parentElement.classList.remove("count-up-data");
        if (node.parentElement.className === "") {
          node.parentElement.removeAttribute("class");
        }
      }

      button.classList.add("active");

      var valElAfter = this._DOMEditingEl.innerHTML;

      this.setStep(function () {
        this._setNodePoint(valElBefore, valElAfter);
      });

      return node;
    }
  }

  _removeNode(button, tagName) {
    if (this._range) {
      var fragmentTrigger = false;
      var select = builder.windowIframe.getSelection();
      select.removeAllRanges();
      select.addRange(this._range);
      var valElBefore = this._DOMEditingEl.innerHTML;
      var anhor = select.anchorNode;
      var node = select.anchorNode.parentNode;
      var nodePrev = anhor;

      if (select.anchorNode.nodeType !== 3) {
        while (anhor.nodeType !== 3 && anhor.childNodes.length) {
          node = anhor;
          anhor = anhor.childNodes[0];
          nodePrev = anhor;
        }

        if (!node) return;
      }

      while (node.nodeName.toLowerCase() !== tagName) {
        nodePrev = node;
        node = node.parentNode;
      }

      if (node.childNodes.length > 1) {
        nodePrev = document.createDocumentFragment();
        while (node.childNodes.length > 0) {
          nodePrev.appendChild(node.childNodes[0]);
        }
      }

      var nextNode = node.nextSibling;
      var parent = node.parentNode;
      if (node.classList.contains("count-up-data")) {
        parent.classList.add("count-up-data");
        node.classList.remove("count-up-data");
      }
      parent.removeChild(node);

      var array = [];
      for (var i = 0; i < nodePrev.childNodes.length; i++) {
        if (
          nodePrev.childNodes[i].textContent ||
          nodePrev.childNodes[i].innerText
        ) {
          array.push(nodePrev.childNodes[i]);
        }
      }
      if (nextNode) {
        parent.insertBefore(nodePrev, nextNode);
      } else {
        parent.appendChild(nodePrev);
      }
      if (array.length === 1) {
        this._range.selectNodeContents(array[0]);
      } else if (array.length > 1) {
        this._range.setStart(array[0], 0);
        var text =
          array[array.length - 1].textContent ||
          array[array.length - 1].innerText;
        this._range.setEnd(array[array.length - 1], text.length);
      } else if (nodePrev.nodeType === 3) {
        this._range.selectNodeContents(nodePrev);
      }
      try {
        select.removeAllRanges();
        if (!fragmentTrigger) {
          select.addRange(this._range);
        }
      } catch (e) {}

      button.classList.remove("active");
      button.blur();

      var valElAfter = this._DOMEditingEl.innerHTML;

      this.setStep(function () {
        this._setNodePoint(valElBefore, valElAfter);
      });
    }
  }

  _setNodePointfunction(valElBefore, valElAfter) {
    this._DOMEditingEl.innerHTML = valElBefore;

    this.setStep(function () {
      this._setNodePoint(valElAfter, valElBefore);
    });
  }

  setTextAlign(DOM, button, className) {
    var textAlign = DOM.className.match(/text-(?!muted)([^ ]*)/i);
    if (textAlign) {
      DOM.classList.remove(textAlign[0]);
      button.parentElement
        .querySelector("." + textAlign[1])
        .classList.remove("active");
    }
    DOM.classList.add(className);
    button.classList.add("active");

    this.setStep(function () {
      this.removeTextAlign(DOM, button, className);
    });
  }

  removeTextAlign(DOM, button, className) {
    DOM.classList.remove(className);
    button.classList.remove("active");
    button.blur();

    this.setStep(function () {
      this.setTextAlign(DOM, button, className);
    });
  }

  setBold(button) {
    this._setNode(button, "strong");
  }
  removeBold(button) {
    this._removeNode(button, "strong");
  }
  setItalic(button) {
    this._setNode(button, "em");
  }
  removeItalic(button) {
    this._removeNode(button, "em");
  }
  setMarker(button) {
    this._setNode(button, "mark");
  }
  removeMarker(button) {
    this._removeNode(button, "mark");
  }
  setUnderline(button) {
    this._setNode(button, "ins");
  }
  removeUnderline(button) {
    this._removeNode(button, "ins");
  }
  setStrikethrough(button) {
    this._setNode(button, "del");
  }
  removeStrikethrough(button) {
    this._removeNode(button, "del");
  }
  setUpper(button) {
    this._setNode(button, "span", "text-uppercase");
  }
  removeUpper(button) {
    this._removeNode(button, "span");
  }
  setRtl(button) {
    this._setNode(button, "bdo", "rtl");
  }
  removeRtl(button) {
    this._removeNode(button, "bdo");
  }
  setLtr(button) {
    this._setNode(button, "bdo", "ltr");
  }
  removeLtr(button) {
    this._removeNode(button, "bdo");
  }
  setLink(button, href, targetLink) {
    return this._setNode(button, "a", null, href, targetLink);
  }
}
