class ConstructForm {
  constructor() {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    this.innerContent = document.createElement("div");
    this.innerContent.className = "d-flex";
    this.innerContent.innerHTML = `
        <div class="construct-form-sidebar col-md-4">
          <button type="button" class="btn-default sidebar-btn draggable" id="text-field-sidebar-btn">
            <i class="icon-landino-textfield"></i>${lang.textField}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="email-field-sidebar-btn">
            <i class="icon-landino-emailfield"></i>${lang.emailField}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="select-field-sidebar-btn">
            <i class="icon-landino-selectfield"></i>${lang.selectField}
          </button>
          <button type="button" class="btn-primary sidebar-btn draggable" id="phone-sidebar-btn">
            <i class="fa fa-phone"></i>${lang.phoneNumber}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="textarea-sidebar-btn">
            <i class="icon-landino-textarea"></i>${lang.textArea}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="radio-button-sidebar-btn">
            <i class="icon-landino-radiobtn"></i>${lang.radioButton}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="checkbox-sidebar-btn">
            <i class="icon-landino-checkbox"></i>${lang.checkBox}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="date-sidebar-btn">
            <i class="icon-landino-datefield"></i>${lang.date}
          </button>
          <button type="button" class="btn-default sidebar-btn draggable" id="text-sidebar-btn">
            <i class="icon-landino-simpletext"></i>${lang.notation}
          </button>
          <button type="button" class="btn-primary sidebar-btn draggable" id="interface-sidebar-btn">
            <i class="icon-landino-spreadsheetfield"></i>${lang.labels.googleSheets}
          </button>
        </div>
        <div class="construct-form-main col-md-8">
          <div class="construct-form-main-inner droppable"></div>
        </div>`;
    this.iconsArray = [];
  }

  getConstructorForm(outputData) {
    this.initEventListeners();
    this.initDragDrop();

    for (var key in outputData) {
      var obj = outputData[key];

      switch (obj.type) {
        case "textField":
          this._getTextField(obj);
          break;
        case "emailField":
          this._getEmailField(obj);
          break;
        case "phone":
          this._getPhoneField(obj);
          break;
        case "selectField":
          this._getSelectField(obj);
          break;
        case "textarea":
          this._getTextArea(obj);
          break;
        case "radioButton":
          this._getRadioButton(obj);
          break;
        case "checkbox":
          this._getCheckbox(obj);
          break;
        case "dateField":
          this._getDate(obj);
          break;
        case "text":
          this._getText(obj);
          break;
        case "interface":
          this._getGooglField(obj);
          break;
        default:
          console.log("ERROR: object incorrect");
      }
    }

    return this.innerContent;
  }

  initEventListeners() {
    var buttonTextField = this.innerContent.querySelector(
      "#text-field-sidebar-btn"
    );
    buttonTextField.addEventListener("click", function () {
      this._getTextField();
    });

    var buttonEmail = this.innerContent.querySelector(
      "#email-field-sidebar-btn"
    );
    buttonEmail.addEventListener("click", function () {
      this._getEmailField();
    });

    var buttonSelect = this.innerContent.querySelector(
      "#select-field-sidebar-btn"
    );
    buttonSelect.addEventListener("click", function () {
      this._getSelectField();
    });

    var buttonTextarea = this.innerContent.querySelector(
      "#textarea-sidebar-btn"
    );
    buttonTextarea.addEventListener("click", function () {
      this._getTextArea();
    });

    var buttonRadio = this.innerContent.querySelector(
      "#radio-button-sidebar-btn"
    );
    buttonRadio.addEventListener("click", function () {
      this._getRadioButton();
    });

    var buttonCheckbox = this.innerContent.querySelector(
      "#checkbox-sidebar-btn"
    );
    buttonCheckbox.addEventListener("click", function () {
      this._getCheckbox();
    });

    var buttonDate = this.innerContent.querySelector("#date-sidebar-btn");
    buttonDate.addEventListener("click", function () {
      this._getDate();
    });

    var googleURL = this.innerContent.querySelector("#interface-sidebar-btn");
    googleURL.addEventListener("click", function () {
      let elementAppend = document.querySelector(
        ".construct-form-main-inner input[data-supra='GOOGLE_SHEETS']"
      );

      let span = document.createElement("span");
      span.innerHTML =
        "لقد قمت بإضافة حقل جوجل شيتس بالفعل, لايمكنك إضافة حقل أخر";
      span.style.cssText =
        "padding:1rem 0 0 0; color:red; font-weight:bold; font-size:13px; text-align:right; display:block;";

      if (elementAppend) {
        if (!elementAppend.parentElement.querySelector("span")) {
          elementAppend.parentNode.appendChild(span);
        } else {
          return;
        }
      } else {
        this._getGooglField();
      }
    });

    var buttonPhone = this.innerContent.querySelector("#phone-sidebar-btn");
    buttonPhone.addEventListener("click", function () {
      this._getPhoneField();
    });

    var buttonText = this.innerContent.querySelector("#text-sidebar-btn");
    buttonText.addEventListener("click", function () {
      this._getText();
    });
  }

  initDragDrop() {
    var _selfSidebarDrop = this;
    var DragManager = new (function () {
      var dragObject = {};
      var self = this;

      function onMouseDown(e) {
        if (e.which != 1) return;

        if (e.target.closest(".draggable")) {
          var elem = e.target.closest(".draggable");
          var objectClone = elem.cloneNode(true);
          objectClone.style.position = "absolute";
          objectClone.style.width = "200px";
          var shiftX = e.pageX - getCoords(elem).left;
          var shiftY = e.pageY - getCoords(elem).top;
          objectClone.style.border = "1px #aaaaaa dotted";
          objectClone.style.zIndex = 10003000;
          objectClone.style.left = e.pageX - shiftX + "px";
          objectClone.style.top = e.pageY - shiftY + "px";
          dragObject.objectClone = objectClone;
          dragObject.dragType = "sidebar";
          dragObject.elem = objectClone;
        }
        if (e.target.closest(".object-title-bar")) {
          var elem = e.target
            .closest(".object-title-bar")
            .closest(".object-area");
          dragObject.dragType = "title";
          dragObject.elem = elem;
        }

        if (!elem) return;

        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
      }

      function onMouseMove(e) {
        if (!dragObject.elem) {
          return;
        }

        if (!dragObject.avatar) {
          var moveX = e.pageX - dragObject.downX;
          var moveY = e.pageY - dragObject.downY;

          if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            return;
          }

          if (dragObject.dragType == "sidebar") {
            document.body.appendChild(dragObject.objectClone);
          }

          dragObject.avatar = createAvatar(e);
          if (dragObject.dragType == "sidebar") {
            dragObject.avatar.className += " destroy-me";
          }

          if (!dragObject.avatar) {
            dragObject = {};
            return;
          }

          var coords = getCoords(dragObject.avatar);
          dragObject.shiftX = dragObject.downX - coords.left;
          dragObject.shiftY = dragObject.downY - coords.top;

          startDrag(e);
        }

        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + "px";
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + "px";

        selectDropArea(e);

        return false;
      }

      function onMouseUp(e) {
        if (dragObject.avatar) {
          finishDrag(e);
        }
        dragObject = {};
      }

      function finishDrag(e) {
        var dropElem = findDroppable(e);

        if (!dropElem) {
          self.onDragCancel(dragObject);
        } else {
          self.onDragEnd(dragObject, dropElem);
        }
      }

      function createAvatar(e) {
        var avatar = dragObject.elem;
        var old = {
          parent: avatar.parentNode,
          nextSibling: avatar.nextSibling,
          position: avatar.position || "",
          left: avatar.left || "",
          top: avatar.top || "",
          zIndex: avatar.zIndex || "",
        };

        avatar.rollback = function () {
          old.parent.insertBefore(avatar, old.nextSibling);
          avatar.style.position = old.position;
          avatar.style.left = old.left;
          avatar.style.top = old.top;
          avatar.style.zIndex = old.zIndex;
        };

        return avatar;
      }

      function startDrag(e) {
        var avatar = dragObject.avatar;

        if (dragObject.dragType == "sidebar") {
          var modalContainer = document.querySelector("#modal-container");
          modalContainer.appendChild(avatar);
          avatar.style.zIndex = 10009999;
          avatar.style.position = "absolute";
          avatar.style.width = "195px";
        }
        if (dragObject.dragType == "title") {
          var modalContainer = document.querySelector("#modal-container");
          modalContainer.appendChild(avatar);
          avatar.style.width = "348px";
          avatar.style.zIndex = 10009999;
          avatar.style.position = "absolute";
        }
      }

      function selectDropArea(event) {
        dragObject.avatar.hidden = true;
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        var topDropBlock = document.querySelector(".top-drop");
        var bottomDropBlock = document.querySelector(".bottom-drop");

        if (!elem) {
          return;
        }
        if (
          elem.closest(".object-title-bar") == null &&
          elem.closest(".top-drop") == null
        ) {
          var forDestroy = document.querySelector(".top-drop");
          if (forDestroy) {
            var prevObj = forDestroy.previousSibling;
            if (prevObj) {
              prevObj.style.marginBottom = "10px";
            }
            forDestroy.remove();
          }
        }
        if (
          (elem.closest(".toggle-area") == null) &
          (elem.closest(".bottom-drop") == null)
        ) {
          var forDestroy = document.querySelector(".bottom-drop");
          if (forDestroy) {
            var prevObj = forDestroy.previousSibling;
            prevObj.style.marginBottom = "10px";
            forDestroy.remove();
          }
        }

        if (elem.closest(".object-title-bar") != null && !topDropBlock) {
          var objectEl = elem.closest(".object-area");
          var parentEl = elem.closest(".object-area").parentNode;
          var blockForDrop = document.createElement("div");
          blockForDrop.className = "block-for-drop top-drop";
          var insertedElement = parentEl.insertBefore(blockForDrop, objectEl);
          var prevObj = insertedElement.previousSibling;
          if (prevObj) {
            prevObj.style.marginBottom = "0px";
          }
        }

        if (elem.closest(".toggle-area") != null && !bottomDropBlock) {
          if (elem.closest(".toggle-area").lastChild != null) {
            var objectEl = elem.closest(".object-area");
            objectEl.style.marginBottom = "0px";
            var parentEl = elem.closest(".object-area").parentNode;
            var blockForDrop = document.createElement("div");
            blockForDrop.className = "block-for-drop bottom-drop";
            var insertedElement = parentEl.insertBefore(
              blockForDrop,
              objectEl.nextSibling
            );
          }
        }

        dragObject.avatar.hidden = false;
      }

      function findDroppable(event) {
        dragObject.avatar.hidden = true;

        var elem = document.elementFromPoint(event.clientX, event.clientY);

        dragObject.avatar.hidden = false;

        if (elem == null) {
          return null;
        }

        var blockForDrop = document.querySelector(".block-for-drop");
        if (elem.closest(".droppable") != null) {
          if (blockForDrop) {
            if (blockForDrop.className.match("top-drop")) {
              var dropElem = {
                block: blockForDrop.nextSibling,
                type: "insertBefore",
              };
              return dropElem;
            }
            if (blockForDrop.className.match("bottom-drop")) {
              var dropElem = {
                block: blockForDrop.previousSibling,
                type: "insertAfter",
              };
              return dropElem;
            }
          } else {
            var dropElem = {
              block: elem.closest(".droppable"),
              type: "append",
            };
            return dropElem;
          }
        }
      }

      document.onmousemove = onMouseMove;
      document.onmouseup = onMouseUp;
      document.onmousedown = onMouseDown;

      this.onDragEnd = function (dragObject, dropElem) {
        if (dragObject.dragType == "sidebar") {
          var forDestroy = document.querySelector(".block-for-drop");

          if (forDestroy) {
            forDestroy.remove();
          }
          if (dragObject.elem.id.match("text-field-sidebar-btn") != null) {
            _selfSidebarDrop._getTextField(null, dropElem);
          }
          if (dragObject.elem.id.match("email-field-sidebar-btn") != null) {
            _selfSidebarDrop._getEmailField(null, dropElem);
          }
          if (dragObject.elem.id.match("phone-sidebar-btn") != null) {
            _selfSidebarDrop._getPhoneField(null, dropElem);
          }
          if (dragObject.elem.id.match("select-field-sidebar-btn") != null) {
            _selfSidebarDrop._getSelectField(null, dropElem);
          }
          if (dragObject.elem.id.match("textarea-sidebar-btn") != null) {
            _selfSidebarDrop._getTextArea(null, dropElem);
          }
          if (dragObject.elem.id.match("radio-button-sidebar-btn") != null) {
            _selfSidebarDrop._getRadioButton(null, dropElem);
          }
          if (dragObject.elem.id.match("checkbox-sidebar-btn") != null) {
            _selfSidebarDrop._getCheckbox(null, dropElem);
          }
          if (dragObject.elem.id.match("date-sidebar-btn") != null) {
            _selfSidebarDrop._getDate(null, dropElem);
          }
          if (dragObject.elem.id.match("text-sidebar-btn") != null) {
            _selfSidebarDrop._getText(null, dropElem);
          }

          if (dragObject.elem.id.match("phone-sidebar-btn") != null) {
            _selfSidebarDrop._getPhoneField(null, dropElem);
          }
          if (dragObject.elem.id.match("interface-sidebar-btn") != null) {
            if (
              document.querySelectorAll(
                ".construct-form-main-inner .object-interface-item"
              ).length >= 1
            ) {
              forDestroy?.remove();

              document.querySelector(
                ".construct-form-main-inner .object-interface-item input"
              ).style.border = "2px solid red";
              let elementAppend = document.querySelector(
                ".construct-form-main-inner input[data-supra='GOOGLE_SHEETS']"
              );
              let span = document.createElement("span");
              span.innerHTML =
                "لقد قمت بإضافة حقل جوجل شيتس بالفعل, لايمكنك إضافة حقل أخر";
              span.style.cssText =
                "padding:1rem 0 0 0; color:red; font-weight:bold; font-size:13px; text-align:right; display:block;";
              if (elementAppend) {
                if (!elementAppend.parentElement.querySelector("span")) {
                  elementAppend.parentNode.appendChild(span);
                } else {
                  forDestroy?.remove();
                }
              }
            } else {
              _selfSidebarDrop._getGooglField(null, dropElem);
            }
          }
          var forDestroy = document.querySelectorAll(".destroy-me");
          forDestroy[0].remove();
        }

        if (dragObject.dragType == "title") {
          dragObject.elem.style.border = "none";
          if (dropElem.type === "append") {
            dragObject.elem.style.width = "100%";
            dragObject.elem.rollback();
          }
          if (dropElem.type === "insertBefore") {
            var forDestroy = document.querySelector(".block-for-drop");
            if (forDestroy) {
              forDestroy.remove();
            }
            var nextObj = dropElem.block;
            var prev = nextObj.previousSibling;
            if (prev) {
              nextObj.previousSibling.style.marginBottom = "10px";
            }
            dragObject.elem.style.position = "inherit";
            dragObject.elem.style.width = "100%";
            var parentBlock = nextObj.closest(".object-area").parentNode;
            parentBlock.insertBefore(dragObject.elem, nextObj);
          }
          if (dropElem.type === "insertAfter") {
            var forDestroy = document.querySelector(".block-for-drop");
            if (forDestroy) {
              forDestroy.remove();
            }
            if (dropElem.type === "insertAfter") {
              dragObject.elem.style.position = "inherit";
              dragObject.elem.style.width = "100%";
              var previousObj = dropElem.block;
              previousObj.style.marginBottom = "10px";
              var parentBlock = previousObj.closest(".object-area").parentNode;
              parentBlock.insertBefore(
                dragObject.elem,
                previousObj.nextSibling
              );
            }
          }
        }
      };
      this.onDragCancel = function (dragObject) {
        if (dragObject.dragType == "sidebar") {
          dragObject.elem.style.display = "none";

          var forDestroy = document.querySelectorAll(".destroy-me");
          forDestroy[0].remove();
        }
        if (dragObject.dragType == "title") {
          dragObject.elem.style.width = "100%";
          dragObject.avatar.rollback();
        }
      };
    })();

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    }
  }

  getFormElements() {
    var parserData = this._formParser();
    if (parserData != undefined) {
      var documentFragment = document.createDocumentFragment();
      parserData.forEach(function (e) {
        documentFragment.appendChild(e);
      });

      return documentFragment;
    } else {
      return parserData;
    }
  }

  _formParser() {
    var constructForm = this.innerContent.querySelector(
      ".construct-form-main-inner"
    );
    var objects = constructForm.querySelectorAll(".object-area");

    if (objects.length > 0) {
      var outputData = new Array();

      Array.prototype.forEach.call(objects, function (element, i, item) {
        var counter = i;

        if (item[i].className.match("object-textfield-item") != null) {
          var placeholder = item[i].querySelector(".textfield-input").value;
          var attrName = item[i].querySelector(".textfield-name").value;
          if (attrName === "") {
            attrName = "textfield_" + counter;
          }

          var checkbox = item[i].querySelector(".textfield-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var innerContent =
            '<input type="text" class="spr-text-field form-control ' +
            checkbox_class +
            '" placeholder="' +
            placeholder +
            '" name="' +
            attrName +
            '" size="10">';
          var div = document.createElement("div");
          div.className = "form-group text-field-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-interface-item") != null) {
          if (
            /(https?:\/\/)?(www.)?(docs.google.com\/spreadsheets\/d\/)/g.test(
              item[i].querySelector(".interface-input").value
            )
          ) {
            var placeholder = item[i].querySelector(".interface-input").value;

            let coreString = placeholder.split("/spreadsheets/d/");
            let url = window.btoa(coreString[1]?.split("/edit")[0]);

            var innerContent = `<input type="hidden" class="spr-interface-field form-control" data-csrf="${url}" name="interface" disabled>`;

            var div = document.createElement("div");
            div.className = "form-group interface-field-group";
            div.innerHTML = innerContent;

            outputData[i] = div;
          }
        }

        if (item[i].className.match("object-email-item") != null) {
          var placeholder = item[i].querySelector(".email-input").value;
          var attrName = item[i].querySelector(".email-name").value;
          if (attrName === "") {
            attrName = "email_" + counter;
          }
          var checkbox = item[i].querySelector(".email-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var innerContent =
            '<input type="email" class="spr-email-field form-control ' +
            checkbox_class +
            '" placeholder="' +
            placeholder +
            '" name="' +
            attrName +
            '" size="10">';
          var div = document.createElement("div");
          div.className = "form-group email-field-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-phone-item") != null) {
          var placeholder = item[i].querySelector(".phone-input").value;

          var attrName = item[i].querySelector(".phone-name").value;
          if (attrName === "") {
            attrName = "phone_" + counter;
          }

          var checkbox = item[i].querySelector(".phone-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var innerContent = `<input type="tel" class="spr-phone-field form-control ${checkbox_class}" placeholder="${placeholder}" name="${attrName}" size="10">
    `;
          var div = document.createElement("div");
          div.className = "form-group phone-field-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-select-item") != null) {
          var optionsArray = new Array();
          var selectInputs = item[i].querySelectorAll(".select-input");
          var attrName = item[i].querySelector(".select-name").value;
          var check = item[i].querySelector(".check-field-btn.active");
          if (attrName === "") {
            attrName = "select_" + counter;
          }
          var checkbox = item[i].querySelector(".select-checkbox").checked;

          Array.prototype.forEach.call(
            selectInputs,
            function (element, j, item) {
              if (j == 0) {
                var select = check ? "" : " selected";
                optionsArray[j] =
                  '<option value="' +
                  item[j].value +
                  '"' +
                  select +
                  " disabled>" +
                  item[j].value +
                  "</option>";
              } else {
                check = element.parentElement.querySelector(
                  ".check-field-btn.active"
                );
                var select = check ? " selected" : "";
                optionsArray[j] =
                  '<option value="' +
                  item[j].value +
                  '"' +
                  select +
                  ">" +
                  item[j].value +
                  "</option>";
              }
            }
          );

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var icon = item[i].id
            ? this.iconsArray[item[i].id]
            : '<i class="icon icon-landino-selectfield"></i>';

          var innerContent =
            '<select class="spr-select-field form-control ' +
            checkbox_class +
            '" name="' +
            attrName +
            '">' +
            optionsArray.join("") +
            "</select>" +
            icon;
          var div = document.createElement("div");
          div.className = "form-group select-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-textarea-item") != null) {
          var placeholder = item[i].querySelector(".textarea-input").value;
          var attrName = item[i].querySelector(".textarea-name").value;
          if (attrName === "") {
            attrName = "textarea_" + counter;
          }
          var rows = item[i].querySelector(".textarea-rows").value;
          var checkbox = item[i].querySelector(".textarea-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var innerContent =
            '<textarea class="spr-textarea form-control ' +
            checkbox_class +
            '"  placeholder="' +
            placeholder +
            '" rows="' +
            rows +
            '" name="' +
            attrName +
            '"></textarea>';
          var div = document.createElement("div");
          div.className = "form-group textarea-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-radio-item") != null) {
          var valuesArray = new Array();
          var radioLabel = item[i].querySelector(".radiolabel-input").value;
          var attrName = item[i].querySelector(".radio-name").value;
          if (attrName === "") {
            attrName = "radio_" + counter;
          }
          var valuesInputs = item[i].querySelectorAll(".radio-input");

          Array.prototype.forEach.call(
            valuesInputs,
            function (element, i, item) {
              var buttonChecked =
                element.parentElement.querySelector(".check-field-btn");

              var checked = buttonChecked.classList.contains("active");
              var checkedAttribute = "";

              if (checked) {
                var checkedAttribute = 'checked="true"';
              }

              var j = i + 1;
              valuesArray[i] =
                '<label class="radio-inline">' +
                '<input type="radio" class="spr-radio-button" name="' +
                attrName +
                '" id="radio' +
                j +
                '" ' +
                `value="${item[i].value}" ` +
                checkedAttribute +
                ">" +
                '<span class="lbl">' +
                "" +
                item[i].value +
                "" +
                "</span>" +
                "</label>";
            }
          );

          var innerContent =
            '<div class="label-name">' +
            radioLabel +
            "</div>" +
            valuesArray.join("");

          var radio = document.createElement("div");
          radio.className = "spr-radio-block radio";
          radio.innerHTML = innerContent;

          var div = document.createElement("div");
          div.className = "form-group radio-group";
          div.appendChild(radio);

          outputData[i] = div;
        }

        if (item[i].className.match("object-checkbox-item") != null) {
          var label = item[i].querySelector(".checkbox-input").value;
          var attrName = item[i].querySelector(".checkbox-name").value;
          if (attrName === "") {
            attrName = "checkbox_" + counter;
          }
          var checkbox = item[i].querySelector(".checkbox-checkbox").checked;
          var checkbox_class = "";

          if (checkbox) {
            var checkbox_class = "spr-form-required";
          }

          var checked = item[i].querySelector(".checked-checkbox").checked;
          var checkedAttribute = "";

          if (checked) {
            var checkedAttribute = 'checked="true"';
          }

          var innerContent =
            '<input type="checkbox" class="spr-checkbox check ' +
            checkbox_class +
            '" ' +
            'placeholder="' +
            label +
            '" name="' +
            attrName +
            '"' +
            checkedAttribute +
            ">" +
            '<span class="lbl lbl-style">' +
            label +
            "</span>";
          var checkbox = document.createElement("label");
          checkbox.className = "checkbox";
          checkbox.innerHTML = innerContent;

          var div = document.createElement("div");
          div.className = "form-group checkbox-group";
          div.appendChild(checkbox);

          outputData[i] = div;
        }

        if (item[i].className.match("object-date-item") != null) {
          var placeholder = item[i].querySelector(".date-input").value;
          var attrName = item[i].querySelector(".date-name").value;
          if (attrName === "") {
            attrName = "date_" + counter;
          }
          var checkbox = item[i].querySelector(".date-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var icon = item[i].id
            ? this.iconsArray[item[i].id]
            : '<i class="icon icon-landino-datefield"></i>';

          var innerContent =
            '<input type="text" class="spr-date-field form-control datepicker-input ' +
            checkbox_class +
            '" placeholder="' +
            placeholder +
            '" name="' +
            attrName +
            '" size="10">' +
            icon;
          var div = document.createElement("div");
          div.className = "form-group datepicker-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-text-item") != null) {
          var text = item[i].querySelector(".text-div").innerHTML;

          var innerContent = text;
          var div = document.createElement("p");
          if (item[i].dataset.data) {
            div.className = item[i].dataset.data;
          } else {
            div.className = "text text-group txt-form spr-option-no";
          }
          div.innerHTML = innerContent;

          outputData[i] = div;
        }

        if (item[i].className.match("object-file-item") != null) {
          var placeholder = item[i].querySelector(".file-input").value;
          var attrName = item[i].querySelector(".file-name").value;
          if (attrName === "") {
            attrName = "file_" + counter;
          }
          var checkbox = item[i].querySelector(".file-checkbox").checked;

          if (checkbox == true) {
            var checkbox_class = "spr-form-required";
          } else {
            var checkbox_class = "";
          }

          var icon = item[i].id
            ? this.iconsArray[item[i].id]
            : '<img class="icon svg-default" src="builder/images/gallery/icons/attach.svg" alt="icon">';

          var innerContent =
            '<label class="form-control" for="file_' +
            counter +
            '"><span class="placeholder">' +
            placeholder +
            "</span></label>" +
            '<input type="file" name="' +
            attrName +
            '" id="file_' +
            counter +
            '" class="inputfile spr-file-field ' +
            checkbox_class +
            '" data-multiple-caption="{count} files selected" multiple="">' +
            icon;
          var div = document.createElement("div");
          div.className = "form-group file-group";
          div.innerHTML = innerContent;

          outputData[i] = div;
        }
      });
    }

    return outputData;
  }

  _htmlTitleBar(titleLabel) {
    return (
      '<div class="col-md-12 object-title-bar">' +
      titleLabel +
      '<button type="button" class="btn btn-sm btn-default delete-object-btn">' +
      '<i class="icon-landino-trash"></i>' +
      "</button>" +
      "</div>"
    );
  }

  _htmlTextInput(textInputLabel, objectName, type, inputData) {
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      textInputLabel +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<input type="' +
      type +
      '" class="form-control field-input ' +
      objectName +
      '-input" name="' +
      objectName +
      '_input" value="' +
      inputData +
      '">' +
      "</div>" +
      "</div>"
    );
  }

  _htmlGoogleInput(textInputLabel, objectName, type, inputData) {
    return `<div class="form-horizontal field-container row">
      <div class="field-label col-sm-4 control-label">
      ${textInputLabel}
      </div>
      <div class="col-sm-8 input-width">
      <input type="${type}" class="form-control field-input ${objectName}-input" name="${objectName}_input" value="${inputData}" data-supra="GOOGLE_SHEETS">
      </div>
      </div>`;
  }

  _htmlPhoneInput(textInputLabel, objectName, type, inputData) {
    return `<div class="form-horizontal field-container row"><div class="field-label col-sm-4 control-label">${textInputLabel}</div>
        <div class="col-sm-8 input-width">
          <input type="text" class="form-control field-input ${objectName}-input" name="${objectName}_input" value="${inputData}">
        </div>
      </div>`;
  }

  _htmlNamePhoneInput(textInputLabel, objectName, type, inputData) {
    return `<div class="form-horizontal field-container row">
        <div class="field-label col-sm-4 control-label">
          ${textInputLabel}
        </div>
        <div class="col-sm-8 input-width">
          <input type="text" class="form-control field-input name-attr ${objectName}-name" name="${objectName}_input" value="${inputData}">
        </div>
      </div>`;
  }

  _htmlTextInputWithChecked(textInputLabel, objectName, type, inputData) {
    var check = "";
    if (inputData.checked === "true") check = " active";
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      textInputLabel +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<div class="input-group input-group-border">' +
      '<input type="' +
      type +
      '" class="form-control field-input ' +
      objectName +
      '-input" name="' +
      objectName +
      '_input" ' +
      'value="' +
      inputData.label +
      '">' +
      '<span class="input-group-btn align-up">' +
      '<button type="button" class="check-field-btn btn btn-default' +
      check +
      '" title="checked">' +
      '<i class="fa fa-check"></i>' +
      "</button>" +
      "</span>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  _htmlNameInput(textInputLabel, objectName, type, inputData) {
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      textInputLabel +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<input type="' +
      type +
      '" class="form-control field-input name-attr ' +
      objectName +
      '-name" name="' +
      objectName +
      '_input" value="' +
      inputData +
      '">' +
      "</div>" +
      "</div>"
    );
  }

  _htmlTextValue(objectName, options) {
    let value = Core.prototype.translateWord.keywords_ar.popup.form.value;
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      value +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<div class="input-group input-group-border">' +
      '<input type="text" class="form-control field-input ' +
      objectName +
      '-input" required="required" name="' +
      objectName +
      '_input" value="' +
      options +
      '">' +
      '<span class="input-group-btn align-up">' +
      '<button type="button" class="del-field-btn btn btn-default" title="Delete">' +
      '<i class="fa fa-times"></i>' +
      "</button>" +
      "</span>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  _htmlTextValueWithChecked(objectName, options) {
    let value = Core.prototype.translateWord.keywords_ar.popup.form.value;
    let valueText =
      Core.prototype.translateWord.keywords_ar.popup.form.valueText;
    var check = "";
    if (options.checked === "true") check = " active";
    var innerHTML =
      '<div class="field-label col-sm-4 control-label">' +
      value +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<div class="input-group input-group-border">' +
      '<input type="text" class="form-control field-input ' +
      objectName +
      '-input" required="required" name="' +
      objectName +
      '_input" value="' +
      `${options.label ? options.label : valueText}` +
      '">' +
      '<span class="input-group-btn align-up">' +
      '<button type="button" class="del-field-btn btn btn-default" title="Delete">' +
      '<i class="fa fa-times"></i>' +
      "</button>" +
      '<button type="button" class="check-field-btn btn btn-default' +
      check +
      '" title="Check">' +
      '<i class="fa fa-check"></i>' +
      "</button>" +
      "</span>" +
      "</div>" +
      "</div>";
    var div = document.createElement("div");
    div.className = "form-horizontal field-container row";
    div.innerHTML = innerHTML;

    return div;
  }

  _htmlAddButton(objectName) {
    let addValue = Core.prototype.translateWord.keywords_ar.popup.form.addValue;
    return (
      '<div class="field-container button-row">' +
      '<div class="col-sm-12 text-right add-btn-panel">' +
      '<button type="button" class="btn btn-sm add-btn btn-default ' +
      objectName +
      '-add-value-btn" value="' +
      objectName +
      '">' +
      addValue +
      " +" +
      "</button>" +
      "</div>" +
      "</div>"
    );
  }

  _htmlAddButtonNew(objectName) {
    let addValue = Core.prototype.translateWord.keywords_ar.popup.form.addValue;
    return (
      '<div class="field-container button-row">' +
      '<div class="col-sm-12 text-right add-btn-panel">' +
      '<button type="button" class="btn btn-sm adding-btn btn-default ' +
      objectName +
      '-add-value-btn" value="' +
      objectName +
      '">' +
      addValue +
      " +" +
      "</button>" +
      "</div>" +
      "</div>"
    );
  }

  _htmlRowsInput(objectName, inputRowsData) {
    let rows = Core.prototype.translateWord.keywords_ar.popup.form.rows;
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      rows +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<input type="number" class="field-input-number form-control ' +
      objectName +
      '-rows" min="1" placeholder="4" name="' +
      objectName +
      '_rows" value="' +
      inputRowsData +
      '">' +
      "</div>" +
      "</div>"
    );
  }

  _htmlCheckbox(label, objectName, checkBoxData) {
    if (checkBoxData == "true") {
      var checked = "checked";
    } else {
      var checked = "";
    }
    return (
      '<div class="form-horizontal field-container row">' +
      '<div class="field-label col-sm-4 control-label">' +
      label +
      "</div>" +
      '<div class="col-sm-8 input-width">' +
      '<div class="checkbox">' +
      '<input type="checkbox" class="' +
      objectName +
      '-checkbox check" name="' +
      objectName +
      '_checkbox" data-required="' +
      checkBoxData +
      '" ' +
      checked +
      ">" +
      '<span class="lbl"></span>' +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  _appendHtml(innerContent, objectName, dropPlace, data, id) {
    var div = document.createElement("div");
    if (id !== null && id !== undefined) div.id = id;
    div.className = "object-area object-" + objectName + "-item";
    div.innerHTML = innerContent;

    if (data) {
      div.dataset.data = data;
    }

    if (!dropPlace) {
      var parentBlock = this.innerContent.querySelector(
        ".construct-form-main-inner"
      );
      parentBlock.appendChild(div);
    }
    if (dropPlace) {
      if (dropPlace.type === "append") {
        var parentBlock = this.innerContent.querySelector(
          ".construct-form-main-inner"
        );
        parentBlock.appendChild(div);
      }
      if (dropPlace.type === "insertBefore") {
        var nextObj = dropPlace.block;
        var prev = nextObj.previousSibling;
        if (prev) {
          nextObj.previousSibling.style.marginBottom = "10px";
        }

        var parentBlock = nextObj.closest(".object-area").parentNode;
        parentBlock.insertBefore(div, nextObj);
      }
      if (dropPlace.type === "insertAfter") {
        var previousObj = dropPlace.block;
        previousObj.style.marginBottom = "10px";
        var parentBlock = previousObj.closest(".object-area").parentNode;
        parentBlock.insertBefore(div, previousObj.nextSibling);
      }
    }

    var nameAttrInput = div.querySelector(".name-attr");

    if (nameAttrInput != null) {
      nameAttrInput.onkeypress = function (event) {
        function getChar(event) {
          if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode);
          }

          if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which);
          }

          return null;
        }

        if (event.ctrlKey || event.altKey || event.metaKey) return;
        var char = getChar(event);
        if (!char) return;
        var charValidate = char;

        if (!charValidate.match(/^[a-zA-Z0-9_]$/i)) {
          return false;
        }
      };
    }

    var titleBar = div.querySelector(".object-title-bar");
    var content = titleBar.nextElementSibling;
    titleBar.addEventListener(
      "click",
      function () {
        content.classList.toggle("hide");
      },
      false
    );

    var deleteButtons = div.querySelectorAll(".delete-object-btn");
    for (var i = 0; i < deleteButtons.length; i++) {
      var deleteButton = deleteButtons[i];
      deleteButton.onclick = function () {
        var el = this.closest(".object-area");
        el.parentNode.removeChild(el);
      };
    }

    var valueButtons = div.querySelectorAll(".del-field-btn");
    if (valueButtons.length > 0) {
      for (var i = 0; i < valueButtons.length; i++) {
        var valueButton = valueButtons[i];
        valueButton.onclick = function () {
          var el = this.closest(".field-container");
          el.parentNode.removeChild(el);
        };
      }
    }

    var valueButtonsCheck = div.querySelectorAll(".check-field-btn");
    if (valueButtonsCheck.length > 0) {
      for (var i = 0; i < valueButtonsCheck.length; i++) {
        var valueButtonCheck = valueButtonsCheck[i];
        valueButtonCheck.onclick = function () {
          var active = div.querySelector(".check-field-btn.active");

          if (active) {
            active.classList.remove("active");
          }

          if (this !== active) {
            this.classList.add("active");
          }
        };
      }
    }

    var addButtons = div.querySelectorAll(".add-btn");

    if (addButtons.length > 0) {
      for (var i = 0; i < addButtons.length; i++) {
        var addButton = addButtons[i];
        addButton.onclick = function () {
          var objectName = this.getAttribute("value");
          var el = this.closest(".row").querySelector(".value-html-area");
          var innerHTML =
            '<div class="field-label col-sm-4 control-label">' +
            "Value" +
            "</div>" +
            '<div class="col-sm-8 input-width">' +
            '<div class="input-group input-group-border">' +
            '<input type="text" class="form-control field-input ' +
            objectName +
            '-input" required="required" name="' +
            objectName +
            '_input">' +
            '<span class="input-group-btn align-up">' +
            '<button type="button" class="del-field-btn btn btn-default" title="Delete">' +
            '<i class="fa fa-times"></i>' +
            "</button>" +
            "</span>" +
            "</div>" +
            "</div>";
          var div = document.createElement("div");
          div.className = "form-horizontal field-container row";
          div.innerHTML = innerHTML;
          el.appendChild(div);

          var valueButtons = div.querySelectorAll(".del-field-btn");
          for (var i = 0; i < valueButtons.length; i++) {
            var valueButton = valueButtons[i];
            valueButton.onclick = function () {
              var el = this.closest(".field-container");
              el.parentNode.removeChild(el);
            };
          }
        };
      }
    }

    var addingButtons = div.querySelectorAll(".adding-btn");

    if (addingButtons.length > 0) {
      for (var i = 0; i < addingButtons.length; i++) {
        var addingButton = addingButtons[i];
        addingButton.onclick = function () {
          var objectName = this.getAttribute("value");
          var el = this.closest(".row").querySelector(".value-html-area");

          var div = this._htmlTextValueWithChecked(objectName, "");

          el.appendChild(div);

          var valueButtons = div.querySelectorAll(".del-field-btn");
          for (var i = 0; i < valueButtons.length; i++) {
            var valueButton = valueButtons[i];
            valueButton.onclick = function () {
              var el = this.closest(".field-container");
              el.parentNode.removeChild(el);
            };
          }

          var valueButtonsCheck = div.querySelectorAll(".check-field-btn");
          for (var i = 0; i < valueButtonsCheck.length; i++) {
            var valueButtonCheck = valueButtonsCheck[i];
            valueButtonCheck.onclick = function () {
              var scope = this.closest(".value-html-area");
              var active = scope.querySelector(".check-field-btn.active");

              if (active) {
                active.classList.remove("active");
              }

              if (this !== active) {
                this.classList.add("active");
              }
            };
          }
        };
      }
    }
  }

  _getTextField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.textField;
    var inputLabel = lang.placeHolder;
    var objectClass = "textfield";
    var type = "text";

    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getGooglField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form.labels;

    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder
        ? `https://docs.google.com/spreadsheets/d/${window.atob(
            obj.placeholder
          )}/edit`
        : "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.googleSheets;
    var inputLabel = "رابط جوجل شيتس";
    var objectClass = "interface";
    var type = "url";

    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlGoogleInput(inputLabel, objectClass, type, inputData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getEmailField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.emailField;
    var inputLabel = lang.placeHolder;
    var objectClass = "email";
    var type = "email";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getPhoneField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;

    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.phoneField;
    var inputLabel = lang.placeHolder;
    var objectClass = "phone";
    var type = "text";

    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlPhoneInput(inputLabel, objectClass, type, inputData) +
      this._htmlNamePhoneInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getFileField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var id = null;
    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
      if (obj.icon) {
        this.iconsArray.push(obj.icon);
        id = this.iconsArray.length - 1;
      }
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.attachFile;
    var inputLabel = lang.placeHolder;
    var objectClass = "file";
    var type = "text";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace, null, id);
  }

  _getSelectField(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var id = null;
    if (obj != undefined && obj != null) {
      var optionsData = obj.options || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
      if (obj.icon) {
        this.iconsArray.push(obj.icon);
        id = this.iconsArray.length - 1;
      }
    } else {
      var optionsData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.selectField;
    var inputLabel = lang.default;
    var objectClass = "select";
    var type = "text";

    if (optionsData != "") {
      var inputData = obj.options[0].label;
      var htmlInput = this._htmlTextInput(
        inputLabel,
        objectClass,
        type,
        inputData
      );
      var htmlName = this._htmlNameInput(
        lang.fieldName,
        objectClass,
        type,
        nameData
      );
      var htmlValueArray = new Array();
      for (var i = 1; i < optionsData.length; i++) {
        htmlValueArray[i] = this._htmlTextValueWithChecked(
          objectClass,
          optionsData[i]
        ).outerHTML;
      }
      var htmlValue = htmlValueArray.join("");
    } else {
      var inputData = "";
      var htmlInput = this._htmlTextInput(
        inputLabel,
        objectClass,
        type,
        inputData
      );
      var htmlName = this._htmlNameInput(
        lang.fieldName,
        objectClass,
        type,
        nameData
      );
      var options = { label: "" };
      var htmlValue = this._htmlTextValueWithChecked(
        objectClass,
        options
      ).outerHTML;
    }
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      htmlInput +
      htmlName +
      '<div class="value-html-area">' +
      htmlValue +
      "</div>" +
      this._htmlAddButtonNew(objectClass) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace, null, id);
  }

  _getTextArea(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
      var inputRowsData = obj.rows || 4;
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
      var inputRowsData = 4;
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }
    var titleLabel = lang.textArea;
    var inputLabel = lang.placeHolder;
    var objectClass = "textarea";
    var type = "text";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlRowsInput(objectClass, inputRowsData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getRadioButton(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var optionsData = "";
    var nameData = "";

    if ((obj != undefined) & (obj != null)) {
      optionsData = obj.buttons || "";
      nameData = obj.name || "";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.radioButton;
    var inputLabel = lang.label;
    var objectClass = "radio";
    var type = "text";
    if (optionsData != "") {
      var inputData = obj.label;
      var htmlInput = this._htmlTextInput(
        inputLabel,
        objectClass + "label",
        type,
        inputData
      );
      var htmlName = this._htmlNameInput(
        lang.fieldName,
        objectClass,
        type,
        nameData
      );
      var htmlValueArray = new Array();
      for (var i = 0; i < optionsData.length; i++) {
        if (i < 1) {
          htmlValueArray[i] = this._htmlTextInputWithChecked(
            lang.value,
            objectClass,
            type,
            optionsData[i]
          );
        } else {
          htmlValueArray[i] = this._htmlTextValueWithChecked(
            objectClass,
            optionsData[i]
          ).outerHTML;
        }
      }
      var htmlValue = htmlValueArray.join("");
    } else {
      var inputData = { label: "" };
      var htmlInput = this._htmlTextInput(
        inputLabel,
        objectClass + "label",
        type,
        ""
      );
      var htmlName = this._htmlNameInput(
        lang.fieldName,
        objectClass,
        type,
        nameData
      );
      var htmlValueArray = new Array();
      for (var i = 1; i < 3; i++) {
        htmlValueArray[i] = this._htmlTextInputWithChecked(
          lang.value,
          objectClass,
          type,
          inputData
        );
      }
      var htmlValue = htmlValueArray.join("");
    }
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      htmlInput +
      htmlName +
      '<div class="value-html-area">' +
      htmlValue +
      "</div>" +
      this._htmlAddButtonNew(objectClass) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getCheckbox(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var inputData = "";
    var nameData = "";
    var checkBoxData = "false";
    var cheked = "false";

    if ((obj != undefined) & (obj != null)) {
      inputData = obj.label || "";
      nameData = obj.name || "";
      checkBoxData = obj.required || "false";
      cheked = obj.checked || "false";
    }

    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.checkBox;
    var inputLabel = lang.label;
    var objectClass = "checkbox";
    var type = "text";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      this._htmlCheckbox(lang.checked, "checked", cheked) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace);
  }

  _getDate(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var id = null;
    if ((obj != undefined) & (obj != null)) {
      var inputData = obj.placeholder || "";
      var nameData = obj.name || "";
      var checkBoxData = obj.required || "false";
      if (obj.icon) {
        this.iconsArray.push(obj.icon);
        id = this.iconsArray.length - 1;
      }
    } else {
      var inputData = "";
      var nameData = "";
      var checkBoxData = "false";
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }

    var titleLabel = lang.date;
    var inputLabel = lang.placeHolder;
    var objectClass = "date";
    var type = "text";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      this._htmlTextInput(inputLabel, objectClass, type, inputData) +
      this._htmlNameInput(lang.fieldName, objectClass, type, nameData) +
      this._htmlCheckbox(lang.required, objectClass, checkBoxData) +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace, null, id);
  }

  _getText(obj, dropElem) {
    let lang = Core.prototype.translateWord.keywords_ar.popup.form;
    var data;
    if ((obj != undefined) & (obj != null)) {
      var inputData =
        obj.text && obj.text !== lang.getText.paragraphAdded
          ? lang.getText.textAdded
          : lang.getText.paragraphAdded;
      data = obj.class;
    } else {
      var inputData = lang.getText.paragraphAdded;
    }
    if (dropElem != undefined) {
      var dropPlace = dropElem || "";
    }
    var titleLabel = lang.notation;
    var objectClass = "text";
    var innerContent =
      '<div class="row">' +
      this._htmlTitleBar(titleLabel) +
      '<div class="toggle-area col-md-12">' +
      '<div class="field-label text-div">' +
      inputData +
      "</div>" +
      "</div>" +
      "</div>";

    this._appendHtml(innerContent, objectClass, dropPlace, data);
  }
}

export default ConstructForm;
