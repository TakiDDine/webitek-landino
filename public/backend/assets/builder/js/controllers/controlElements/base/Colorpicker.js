import BaseElement from "../../globalControllers/BaseElement.js";

class Colorpicker extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    super();
    this._selfDOM = null;
    this._options = options;

    this._createElement(options);
  }

  _createElement(args) {
    const colorpicker = document.createElement("div");
    const classItem = args.outerClass ? ` ${args.outerClass}` : "";
    colorpicker.className = `item cs-element d-flex justify-content-between align-items-center cs-colorpicker${classItem}`;
    colorpicker.dataset.order = args.order || 999999;

    let value = args.callback ? args.callback() : "rgba(0, 0, 0, 0)";
    value = value || "rgba(0, 0, 0, 0)";
    colorpicker.innerHTML = `<label>${args.title}</label>
        <input type="text" class="spectrum">`;

    $(colorpicker)
      .find(".spectrum")
      .spectrum({
        color: value,
        showPalette: true,
        preferredFormat: "hex",
        allowEmpty: false,
        showAlpha: true,
        localStorageKey: "spectrum.weber",
        change: this._listenerToColorpiker.bind(this),
        hide: () => {
          const color = colorpicker.querySelector(".spectrum");
          const color1value = /rgba/.test(
            $(color).spectrum("get").toRgbString()
          )
            ? $(color).spectrum("get").toRgbString()
            : $(color).spectrum("get").toHexString();
          color.value = color1value;

          this.doThis(color1value);
        },
      });

    this._selfDOM = colorpicker;
  }

  _listenerToColorpiker(color) {
    const val = /rgba/.test(color.toRgbString())
      ? color.toRgbString()
      : color.toHexString();

    this.doThis(val);
  }

  doThis(val) {
    const eventCheckSelect = new CustomEvent("custom.event", {
      detail: {
        val: val,
        this: this,
      },
    });
    this._selfDOM.dispatchEvent(eventCheckSelect);
  }
}
export default Colorpicker;
