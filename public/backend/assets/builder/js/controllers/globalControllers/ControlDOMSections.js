class ControlDOMSections {
  constructor(arrControl, Obj, className, ObjControl) {
    return this.getGroupControl(arrControl, Obj, className, ObjControl);
  }

  getGroupControl(Controls, Obj, className, ObjControl) {
    const arrControl = Obj.classList.contains("edit-typography")
      ? Controls.editTypography
      : Controls.controlsElements;
    const buttonGroup = document.createElement("div");
    buttonGroup.className = className;
    buttonGroup.dataset.controls = JSON.stringify(Controls.controlsElements);
    if (Controls.editTypography)
      buttonGroup.dataset.typography = JSON.stringify(Controls.editTypography);
    if (Controls.elementSettings)
      buttonGroup.dataset.settings = JSON.stringify(Controls.elementSettings);
    if (Controls.elementStyle)
      buttonGroup.dataset.style = JSON.stringify(Controls.elementStyle);
    if (Controls.settingsSection)
      buttonGroup.dataset.settings = JSON.stringify(Controls.settingsSection);
    if (Controls.dragItems)
      buttonGroup.dataset.dragItems = JSON.stringify(Controls.dragItems);
    if (Controls.context)
      buttonGroup.dataset.context = JSON.stringify(Controls.context);
    buttonGroup.setAttribute("role", "group");
    buttonGroup.dataset.objControl = ObjControl ? "editor-text" : "";

    if (buttonGroup.classList.contains("wrap-control")) {
      const wrapper = document.createElement("div");
      const flexdirection =
        (Obj && Obj.tagName === "NAV") ||
        Obj.parentElement.dataset.group === "sep" ||
        Obj.parentElement.dataset.group === "separators"
          ? " flex-row flex-wrap flex-sm-nowrap"
          : "";
      wrapper.className =
        "wrapper d-flex justify-content-center align-items-center" +
        flexdirection;
      buttonGroup.appendChild(wrapper);
      const div = document.createElement("div");
      div.className = "d-flex";

      if (arrControl) {
        arrControl.forEach(function (element) {
          const match = element.match(/\((.*)\)/);
          const optClass = match ? match[1] : null;
          const Class = element.match(/[^(]*/);
          if (element === "ID") {
            wrapper.appendChild(new window[Class](Obj, ObjControl, optClass));
          } else if (element === "SettingsSection") {
            div.appendChild(
              new window[Class](
                Obj,
                ObjControl,
                optClass,
                Controls.settingsSection
              )
            );
          } else {
            div.appendChild(new window[Class](Obj, ObjControl, optClass));
          }
        });
      }

      wrapper.appendChild(div);
    } else {
      if (arrControl) {
        arrControl.forEach(function (element) {
          const match = element.match(/\((.*)\)/);
          const optClass = match ? match[1] : null;
          const Class = element.match(/[^(]*/);
          if (/ElementStyle/.test(element)) {
            buttonGroup.appendChild(
              new window[Class](
                Obj,
                ObjControl,
                optClass,
                Controls.elementStyle
              )
            );
          } else if (/FormSettings/.test(element)) {
            return null;
          } else if (/ElementSettings/.test(element)) {
            buttonGroup.appendChild(
              new window[Class](
                Obj,
                ObjControl,
                optClass,
                Controls.elementSettings
              )
            );
          } else {
            buttonGroup.appendChild(
              new window[Class](Obj, ObjControl, optClass)
            );
          }
        });
      }
    }

    return buttonGroup;
  }
}
export default ControlDOMSections;
