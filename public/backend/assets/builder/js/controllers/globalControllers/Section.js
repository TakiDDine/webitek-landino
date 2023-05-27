import SectionPreview from "./SectionPreview.js";

class Section extends SectionPreview {
  constructor(options) {
    super();
    if (options.sectionPreview === undefined) {
      throw new ReferenceError("Expected variables options");
    }

    if (
      options.mode !== "load" &&
      options.mode !== "copy" &&
      !(options.sectionPreview instanceof SectionPreview)
    ) {
      throw new TypeError("Expected type of SectionPreview");
    }

    this.sectionPreview = options.sectionPreview;
    this.name = options.name || options.sectionPreview.name;

    if (options.mode === "load") {
      this._selfDOM = options.li;
      this._initExtension(options);
    } else if (options.mode === "copy") {
      this._selfDOM = options.li;
    } else {
      this._createDOMSection(options.sections);
    }
  }

  getDOMSelf() {
    return this._selfDOM;
  }

  _initExtension(args) {
    const li = args.li;
    const section = args.section || li.children[0];
    const script = args.script || li.querySelector("script");

    if (section.classList.contains("modal")) {
      this.createPopupThumb(section);
    }

    if (
      section.classList.contains("modal-alert") ||
      section.classList.contains("modal-panel")
    ) {
      this.createPopupThumb(section);
    }

    const form = section.querySelector("form");
    if (form) {
      this.addNewForm(form, section);
    }

    const map = section.querySelector(".g-map");
    if (map) {
      const id = this.addNewGMap(map, section, script);
      this.changeIdGMapInScript(script, id);
    }

    const countDown = section.querySelector(".countdown");
    if (countDown) {
      if (/(countdown\(\s*')[^']*/i.test(script.innerHTML)) {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        const year = date.getFullYear();
        const month =
          (date.getMonth() + 1).toString().length < 2
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        const day =
          date.getDate().toString().length < 2
            ? "0" + date.getDate()
            : date.getDate();
        const dateStr = year + "/" + month + "/" + day + " 23:59:59";
        script.innerHTML = script.innerHTML.replace(
          /(countdown\(\s*')[^']*/i,
          "$1" + dateStr
        );
      }

      const id = this.addNewCountDown(countDown, section);
      this.changeIdCountDownInScript(script, id);
    }

    const instaffed = section.querySelector(".instafeed");
    if (instaffed && args.mode !== "load") {
      const id = this.addNewInstafeed(instaffed, section);
      this.changeIdInstafeedInScript(script, id);
    }

    const twitterfeed = section.querySelector(".twitterfeed");
    if (twitterfeed && args.mode !== "load") {
      const id = this.addNewTwitterfeed(twitterfeed, section);
      this.changeIdTwitterfeedInScript(script, id);
    }

    const navsTabs = li.querySelectorAll(".nav-tabs");
    if (navsTabs) {
      Array.from(navsTabs).forEach((navTabs, indx) => {
        this.copySectionWithNavTab(navTabs, indx, li);
      });
    }

    const accordions = li.querySelectorAll(".accordion");
    if (accordions) {
      Array.from(accordions).forEach((accordion) => {
        this.copySectionWithAccordion(accordion, li);
      });
    }

    const carousels = li.querySelectorAll(".carousel");
    if (carousels) {
      Array.from(carousels).forEach((carousel) => {
        this.copySectionWithCarousel(carousel, li);
      });
    }

    const parallaxs = li.querySelectorAll(".parallax");
    if (parallaxs) {
      Array.from(parallaxs).forEach((parallax) => {
        this.copySectionWithParallax(parallax, li);
      });
    }

    const sliders = li.querySelectorAll(".slider");
    if (sliders) {
      Array.from(sliders).forEach((slider) => {
        this.copySectionWithSlider(slider, li);
      });
    }

    const videos = li.querySelectorAll(".video-container");
    if (videos) {
      Array.from(videos).forEach((video) => {
        this.copySectionWithVideo(video, li);
      });
    }
  }

  _createDOMSection(sections) {
    const ul = document.createElement("ul");
    ul.className = "sortable";
    ul.setAttribute("data-sections-count", sections.length);

    sections.forEach((section) => {
      const li = document.createElement("li");
      li.appendChild(section);
      ul.appendChild(li);
    });

    this._selfDOM = ul;
  }

  copySectionWithNavTab(navTabs, indx, li) {
    const newNavTabs = navTabs.cloneNode(true);
    const section = li.children[indx];
    section.appendChild(newNavTabs);
  }

  copySectionWithAccordion(accordion, li) {
    const newAccordion = accordion.cloneNode(true);
    const section = li.querySelector(".accordion").parentNode;
    section.appendChild(newAccordion);
  }

  copySectionWithCarousel(carousel, li) {
    const newCarousel = carousel.cloneNode(true);
    const section = li.querySelector(".carousel").parentNode;
    section.appendChild(newCarousel);
  }

  copySectionWithParallax(parallax, li) {
    const newParallax = parallax.cloneNode(true);
    const section = li.querySelector(".parallax").parentNode;
    section.appendChild(newParallax);
  }

  copySectionWithSlider(slider, li) {
    const newSlider = slider.cloneNode(true);
    const section = li.querySelector(".slider").parentNode;
    section.appendChild(newSlider);
  }

  copySectionWithVideo(video, li) {
    const newVideo = video.cloneNode(true);
    const section = li.querySelector(".video-container").parentNode;
    section.appendChild(newVideo);
  }
}

export default Section;
