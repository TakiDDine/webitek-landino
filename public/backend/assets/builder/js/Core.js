class Core {
  constructor() {
    this._videoBg = false;
    this._owlGallery = false;
    this._formSection = false;
    this._parallax = false;
    this._datepicker = false;
    this._countup = false;
    this._countdown = false;
    this._filefield = false;
    this._smooth = false;
    this._magnific = false;
    this._magnificScript = "";
    this._triggerImport = false;
    this.preloader = null;
    this.main = null;
    this.windowIframe = null;
    this.popupThumb = null;
    this.pages = null;
    this.leftPanel = null;
    this.body = null;
    this.ajaxbase = "";
    this.userId = "";
    this.project_id = "";
    this.template = "";
    this.pAgree = "";
    this._init();
  }

  _init() {
    // Initialization logic goes here
  }

  _resetIndExist() {
    this._videoBg = false;
    this._owlGallery = false;
    this._formSection = false;
    this._parallax = false;
    this._datepicker = false;
    this._countup = false;
    this._countdown = false;
    this._filefield = false;
    this._smooth = false;
    this._magnific = false;
    this._setMagnificScript(false);
  }

  _setMagnificScript(arg) {
    if (arg) {
      this._magnificScript = `
          $('.video-popup').each( function(indx, el) {
            if ($(el).closest('.gallery').length === 0) {
              $(el).magnificPopup({
                type: 'iframe',
                iframe: {
                  patterns: {
                    youtube: {
                      index: 'www.youtube.com/',
                      id: 'v=',
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    }
                  }
                },
                disableOn: function() {
                  if (!pAgree || pAgree !== '1') {
                    return false;
                  }
                  return true;
                }
              });
            }
          });
  
          $('.image-popup').each( function(indx, el) {
            if ($(el).closest('.gallery').length === 0) {
              $(el).magnificPopup({
                type: 'image'
              });
            }
          });
        `;
    } else {
      this._magnificScript = "";
    }
  }

  ajax(form, urlAjax, callback, callbackError) {
    const xhr = new XMLHttpRequest();
    const method = "POST";
    const url = `${this.ajaxbase}?mode=${urlAjax}`;
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (xhr.status == 200) {
          if (callback) callback(xhr.responseText);
        } else {
          const res = `There was a problem with the request ${xhr.status}`;
          if (callbackError) callbackError(xhr, res);
        }
      }
    };
    xhr.send(form);
  }

  _callEdit(URL, nameFile) {
    const _this = this;
    const request = new XMLHttpRequest();

    const csrf_field = document
      .getElementById("csrf_field")
      .querySelector("input").value;
    request.responseType = "blob";
    request.onload = function () {
      if (!_this._triggerImport) {
        _this._triggerImport = true;
        const form = new FormData();
        form.append("data", request.response);
        form.append("name_file", nameFile);
        form.append("_token", csrf_field);
        form.append("userId", _this.userId);
        form.append("project_id", _this.project_id);
        form.append("template", _this.template);
        _this.ajax(
          form,
          "import",
          function (data) {
            const preloader = _this.preloader;
            preloader.querySelector(".load").removeAttribute("style");
            document.body.appendChild(preloader);
            document.body.classList.remove("run");

            const datas = _this._prepareContentPagesToSave("no-storage");

            const popup = _this.main.querySelector(".modal.show");
            _this.windowIframe.jQuery(popup).modal("hide");
            Core.prototype.popupThumbArray = [];
            _this.popupThumb.querySelector(".container-thumb").innerHTML = "";
            _this.popupThumb.className = "supra";
            _this.pages.clearPagesObjInArray();

            _this._triggerImport = false;

            try {
              builder._loadProject(data, "load");
            } catch (e) {
              _this.leftPanel.cPanels["project-pages"].createNewProject();
              _this.removePreloader();
              setTimeout(function () {
                _this.body.classList.remove("first-show");
              }, 1600);
            }
          },
          function (xhr, res) {
            document.body.removeChild(inputFile);
            _this._triggerImport = false;
          }
        );
      }
    };
    request.open("GET", URL);
    request.send();
  }

  _elementNoPx(elm) {
    let element = elm;
    if (!/\s/g.test(elm)) {
      const elemArray = elm.split("p");
      const elementDuplicate = elemArray[0];
      const elementNoPx = `${elementDuplicate} ${elementDuplicate} ${elementDuplicate} ${elementDuplicate}`;
      element = elementNoPx;
    } else {
      const elemArray = elm.replace(/px/g, "").split(" ");
      if (elemArray.length === 2) {
        const elementStr = `${elemArray[0]} ${elemArray[1]} ${elemArray[0]} ${elemArray[1]}`;
        element = elementStr;
      } else if (elemArray.length === 3) {
        const elementStr = `${elemArray[0]} ${elemArray[1]} ${elemArray[2]} ${elemArray[1]}`;
        element = elementStr;
      } else if (elemArray.length === 4) {
        const elementStr = `${elemArray[0]} ${elemArray[1]} ${elemArray[2]} ${elemArray[3]}`;
        element = elementStr;
      }
    }
    return element;
  }

  _blockingDivHidder(disabledElm, globalStyleDiv, clickedFrom) {
    const uls = this.main.querySelectorAll("ul");
    const cameFrom = clickedFrom || null;

    if (clickedFrom.nodeName === "STYLE") return;
    Object.values(uls).forEach((ul, idx) => {
      if (
        cameFrom.classList.contains("blr-active-page") &&
        cameFrom.hasChildNodes() &&
        cameFrom.firstElementChild.nodeName == "DIV"
      ) {
        globalStyleDiv.style.overflowY = "hidden";
        disabledElm.style.display = "flex";
      } else {
        globalStyleDiv.style.overflowY = "auto";
        disabledElm.style.display = "none";
      }
    });
  }

  _checkSave_N_Dom(element, saveBtn) {
    const uls = this.main.querySelectorAll("ul");
    Object.values(uls).forEach((ul, idx) => {
      if (ul.classList.contains("blr-active-page") && ul.hasChildNodes()) {
        if (ul.children[0].nodeName === "DIV") {
          if (element.classList.contains("download")) {
            return element.classList.add("disabled");
          }
          element.setAttribute("disabled", "");
          element.parentElement.style.display = "none";
          element.parentElement.style.opacity = "0.5";
        } else {
          if (element.classList.contains("download")) {
            return element.classList.remove("disabled");
          }
          if (
            saveBtn.hasAttribute("disabled") &&
            !element.classList.contains("download")
          ) {
            element.parentElement.style.display = "block";
            element.parentElement.style.opacity = "1";
            element.removeAttribute("disabled");
          }
        }
      }
    });
  }

  _checkTheIframDom() {
    const saveBtn = document.querySelector("#saveBtn__save .db");
    const uls = this.main.querySelectorAll("ul");
    const blockingDiv = document.querySelector(
      "#sidebar_contentHeader-right .global-style__container .before__getting-element"
    );
    const globalStyle = document.querySelector(
      "#sidebar_contentHeader-right .global-style__container"
    );

    Object.values(uls).forEach((ul) => {
      if (ul.classList.contains("blr-active-page") && ul.hasChildNodes()) {
        if (ul.children[0].nodeName === "DIV") {
          saveBtn.setAttribute("disabled", "");
          globalStyle.style.overflowY = "hidden";
          blockingDiv.style.display = "flex";
        } else {
          saveBtn.removeAttribute("disabled");
          globalStyle.style.overflowY = "auto";
          blockingDiv.style.display = "none";
        }
      }
    });
  }

  _deleteTransformFromAttribute(DOM) {
    let sections;
    if (DOM.classList.contains("main")) {
      sections = DOM.querySelectorAll("ul > li");
    } else {
      sections = DOM.querySelectorAll("li");
    }
    sections.forEach((section) => {
      if (section.dataset.name.includes("slider")) {
        const swiperWrapper = section.querySelector(".swiper-wrapper");
        swiperWrapper.style.transform = "translate3d(0px, 0px, 0px)";
      }
    });
  }

  get isDemo() {
    return (
      document.querySelector("body").getAttribute("data-model") === "bootstrap"
    );
  }

  get checkEditPrjID() {
    return this.project_id !== "";
  }

  get isPaused() {
    return this.template ? true : this.checkEditPrjID;
  }

  get afterSaveProjectID() {
    return this.project_id;
  }
}

const core = new Core();
