import BaseElement from "../../globalControllers/BaseElement.js";

class BgPosition extends BaseElement {
  constructor(options) {
    if (options === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    this._selfDOM = null;
    this._options = options;

    this._createElement(options);
  }

  _createElement(args) {
    const bgPosition = document.createElement("div");
    const classItem = args.outerClass ? " " + args.outerClass : "";
    bgPosition.className = "item cs-element bg-position" + classItem;
    bgPosition.dataset.order = args.order || 999999;

    const value = args.callback ? args.callback() : "";

    let match = ["", ""];

    if (value !== "none" && value !== "") {
      match = value.split(" ");
    }

    this.horizontal = match[0];
    this.vertical = match[1];

    bgPosition.innerHTML = `<label>${args.title}</label>
        <div class="wrapper d-flex flex-wrap">
          <div class="item top-left"></div>
          <div class="item top-center"></div>
          <div class="item top-right"></div>
          <div class="item center-left"></div>
          <div class="item center-center"></div>
          <div class="item center-right"></div>
          <div class="item bottom-left"></div>
          <div class="item bottom-center"></div>
          <div class="item bottom-right"></div>
        </div>`;

    this.cells = Array.prototype.slice.call(
      bgPosition.querySelector(".wrapper").children
    );

    if (this.vertical === "top" && this.horizontal === "left") {
      this.cells[0].classList.add("active");
    }

    if (this.vertical === "top" && this.horizontal === "center") {
      this.cells[1].classList.add("active");
    }

    if (this.vertical === "top" && this.horizontal === "right") {
      this.cells[2].classList.add("active");
    }

    if (this.vertical === "center" && this.horizontal === "left") {
      this.cells[3].classList.add("active");
    }

    if (this.vertical === "center" && this.horizontal === "center") {
      this.cells[4].classList.add("active");
    }

    if (this.vertical === "center" && this.horizontal === "right") {
      this.cells[5].classList.add("active");
    }

    if (this.vertical === "bottom" && this.horizontal === "left") {
      this.cells[6].classList.add("active");
    }

    if (this.vertical === "bottom" && this.horizontal === "center") {
      this.cells[7].classList.add("active");
    }

    if (this.vertical === "bottom" && this.horizontal === "right") {
      this.cells[8].classList.add("active");
    }

    this._addEventListToBgPositionItems(bgPosition);

    this._selfDOM = bgPosition;
  }

  _addEventListToBgPositionItems(bgPosition) {
    bgPosition.addEventListener("click", (e) => {
      const index = this.cells.indexOf(e.target);
      let val = "";

      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
      } else {
        const activeItem = bgPosition.querySelector(".item.active");
        if (activeItem) {
          activeItem.classList.remove("active");
        }

        e.target.classList.add("active");

        if (index === 0) {
          val = "left top";
        } else if (index === 1) {
          val = "center top";
        } else if (index === 2) {
          val = "right top";
        } else if (index === 3) {
          val = "left center";
        } else if (index === 4) {
          val = "center center";
        } else if (index === 5) {
          val = "right center";
        } else if (index === 6) {
          val = "left bottom";
        } else if (index === 7) {
          val = "center bottom";
        } else if (index === 8) {
          val = "right bottom";
        }
      }

      this.doThis(val);
    });
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

export default BgPosition;
