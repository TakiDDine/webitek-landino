import Core from "./Core.js";

class SectionPreview extends Core {
  constructor(section) {
    if (
      section.name === undefined ||
      section.groupName === undefined ||
      section.overallJs === undefined ||
      section.html === undefined ||
      section.style === undefined ||
      section.script === undefined ||
      section.preview === undefined
    ) {
      throw new ReferenceError("Expected variables section and groupName");
    }
    super();
    this.name = section.name;
    this.groupName = section.groupName;
    this.overallJs = section.overallJs;
    this.html = section.html;
    this.style = section.style;
    this.script = section.script;
    this.preview = section.preview;
    this._selfDOM = null;
  }

  getDOMSelf() {
    if (this._selfDOM) {
      return this._selfDOM;
    }
    const li = document.createElement("li");
    const h6 = document.createElement("h6");

    li.className =
      "wrap-hover d-flex justify-content-center align-items-center";
    li.dataset.group = this.groupName;
    li.dataset.name = this.name;

    h6.className = "text-center text-white";
    h6.innerHTML = this.name.split("-").join(" ");

    const img = new Image();
    img.src = this.preview;

    const i = document.createElement("i");
    i.className = "icon-blr-plus add-section";

    li.appendChild(img);
    li.appendChild(i);

    this._selfDOM = li;

    return li;
  }

  get(sections) {
    return new Section({ sectionPreview: this, sections: sections });
  }
}

export default SectionPreview;
