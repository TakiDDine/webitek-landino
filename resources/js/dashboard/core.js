/**
 * @projects.js This is my cool script.
 * @copyright lindino Team
 * @version 1.0.0
 * @date: 02/06/2023
 *
 * @classes
 * 	1- @class {Main}
 * 	2- @class {Main}
 *  3-  @class {Main}
 */


/**
 * 	1- @class {Main}
 */

class Core {
  /**
   * Create HTML Element for Main.
   * for inherit Main methods to instance.
   * */
  constructor() {}
  create(tagName, attributes, content) {
    if (!tagName) {
      return document.createTextNode(content);
    }

    const element = document.createElement(tagName);

    if (attributes) {
      Object.entries(attributes).forEach(([attribute, value]) => {
        element.setAttribute(attribute, value);
      });
    }

    if (content) {
      if (typeof content === "string" || typeof content === "number") {
        element.textContent = content;
      } else if (content instanceof HTMLElement) {
        element.appendChild(content);
      } else {
        throw new Error("Please provide a valid text");
      }
    }

    return element;
  }
  menu(menuType, arr, attributes, hasImg) {
    const nav = this.create("nav", {});
    const ul = this.create(menuType, {});
    const liItems = arr;

    if (attributes) {
      Object.entries(attributes).forEach(([attribute, value]) => {
        nav.setAttribute(attribute, value);
      });
    }

    liItems.forEach((item, index) => {
      const image = hasImg ? this.create('img', { src: `../dashboard/assets/images/svg/sidebar_menu/${index}.svg` }) : null;
      const li = this.create("li", {}, hasImg ? image : "");
      const a = this.create("a", { href: "#" }, hasImg ? image : item);

      if (hasImg) {
        const text = this.create("span", {}, item);
        a.append(text);
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    if (nav.id === "m_n_1") {
      this.changeActiveAnchor(ul);
    }

    nav.appendChild(ul);

    return nav;
  }
  showHideMenu(current, target) {
    /**
     * @method: showHideMenu() use opacity to make show/Hide
     * opacity = 0; by default in css
     **/
    current.addEventListener("click", function () {
      return target.classList.toggle("show")
    })
  }
  button() {
    const button = this.create("button", { class: "button" }, "مشروع جديد");
    return button;
  }
  image(path, alt) {
    const image = this.create("img", { src: path, alt: alt });
    return image;
  }
  header(title, btnTitle) {
    const textWraper = this.create("div", { class: "page__header" });
  
    const headingWrapper = this.create("div", { class: "page__header-wrapper" });
    const headingPage = this.create("h1", { class: "" }, title);
    headingWrapper.appendChild(headingPage);
  
    if (btnTitle) {
      const button = this.create("a", { href: "", class: "button" }, btnTitle);
      headingWrapper.appendChild(button);
    }
  
    textWraper.appendChild(headingWrapper);
  
    const seperateLine = this.create("hr", { class: "sp" });
    textWraper.appendChild(seperateLine);
  
    return textWraper;
  }
  convertImagesToSVG() {
    const imageElements = document.querySelectorAll("img[src$='.svg']");

    imageElements.forEach(imageElement => {
      const imageSrc = imageElement.src;

      fetch(imageSrc)
        .then(response => response.text())
        .then(svgText => {
          const parser = new DOMParser();
          const svgDocument = parser.parseFromString(svgText, "image/svg+xml");
          const svgElement = svgDocument.documentElement;

          imageElement.parentNode.replaceChild(svgElement, imageElement);
        })
        .catch(error => {
          console.error("Error converting image to SVG:", error);
        });
    });
  }
  changeActiveAnchor(menu) {
    const anchorElements = menu.querySelectorAll("a");
    anchorElements.forEach((anchorElement) => {
      anchorElement.addEventListener("click", () => {
        anchorElements.forEach((element) => {
          element.classList.remove("active")
        })
        anchorElement.classList.add("active")
      })
    })
  }
  addActiveClassToCheckbox() {
    const labels = document.querySelectorAll(".filter-container label:not(input)");
    labels.forEach((label) => {
      label.addEventListener("click", (e) => {
        if (e.target === label) {
          e.target.classList.toggle("active");
        }
      });
    });
    
  }
  createInput(attributes) {
    let input = this.create("input")

    if (attributes) {
      for (const attribute in attributes) {
        if (attribute.includes("_")) {
          let newAttr = attribute.replace("_", "-");
          input.setAttribute(newAttr, attributes[attribute]);
          
        } else {
          input.setAttribute(attribute, attributes[attribute]);
        }
      }
    }

    return input
  }
  filterSidebar(data) {
    if (!data) {
      const filterContainer = this.create("div", { class: "filter-container", id: "filter-container" });
  
      // Function for creating a label
      const createLabel = (name, all = false) => {
        const label = this.create("label", {});
        const input = this.createInput({ type: "checkbox", value: "", data_checked: all ? "all" : "" });
        const labelName = this.create("", {}, name);
        label.append(input, labelName);
        return label;
      };
  
      // Labels creation
      const labelNames = ["الكل", "دورات", "منتجات", "سياحة", "شخصي"];
      const labels = [createLabel(labelNames[0], true), ...labelNames.slice(1).map((name) => createLabel(name))];
      filterContainer.append(...labels);
      
      // Add active class to checkboxes
      this.addActiveClassToCheckbox();
  
      return filterContainer;
    } else {
      return "";
    }
  }
  search(placeholder, iconPath, alt) {
    const searchWrapper = this.create("div", {class: "search", id:"search"});
    const searchInput = this.createInput({type: "text", class: "input_search", placeholder: placeholder});
    const searchIconSvg = this.image(iconPath, alt)
    const searchInputWrapper = this.create("div", {class: "search__wraper"}, searchInput);
    searchInputWrapper.append(searchIconSvg)

    searchWrapper.append(searchInputWrapper)

    return searchWrapper
  } 
  render() {
    this.filterSidebar()
  }    
}
export default Core

