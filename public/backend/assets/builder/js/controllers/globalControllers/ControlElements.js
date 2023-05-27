import Core from "./Core.js";

class ControlElements extends Core {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables elements");
    }

    super();

    this._name = options.name;
    this._selfDOM = document.createDocumentFragment();
    this._elements = {};

    this._mode = options.defaultActiveMode;
    this._media = options.defaultActiveMedia;

    this.addElements(options);
  }

  getDOMSelf() {
    for (let el in this._elements) {
      this._selfDOM.appendChild(this._elements[el].getDOMSelf());
    }

    return this._selfDOM;
  }

  getElements() {
    return this._elements;
  }

  changeValues(media, mode) {
    this._media = media;
    this._mode = mode;

    for (let el in this._elements) {
      this._elements[el].selectValue(media, mode);
    }
  }

  addElements(options) {
    options.elements.forEach((el) => {
      console.log("el.name", el.name);
      const elementObj = new window[el.name]({
        ...el,
        tag: options.tag || null,
        controlElements: this,
        mode: this._mode || null,
        mediaMode: this._media || null,
      });
      let itemName = el.itemName || el.name;

      const arrNames = Object.keys(this._elements);
      itemName = this.uniqueName(itemName, arrNames);

      console.log("elementObj", elementObj);
      this._elements[itemName] = elementObj;
      this.globalStyleElements.push(elementObj);
      this._selfDOM.appendChild(elementObj.getDOMSelf());
    });
  }
}
export default ControlElements;
