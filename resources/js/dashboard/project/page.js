import Core from "../core.js";


/**
 * 3- @class {Page}
 * for create each Page element.
 * */
class Page extends Core {
  /**
   * Create HTML Element for Pages.
   * */
  constructor() {
    super();
  }
  project() {
    const projectBox = this.create("div", { class: "project__cards" });
    const project = this.create("div", { class: "projects", id: "project" }, projectBox);

    const createProjectTemplate = (projectTitle, menuArray, date, subdomain) => {
      const projectcard = this.create("div", { class: "anshored card" });

      /* Card header */
      const thumbnail = this.create("div", {class: "thumbnail"})
      const menu = this.menu("ul", menuArray, { class: "project_card_settings", id: "m_n_2" }, false);
      const collapsIcon = this.image("../dashboard/assets/images/svg/sidebar_menu/drop-down.svg");
      const collapsMenu = this.create("span", { class: "card_menu_collaps" });

      this.convertImagesToSVG();

      collapsMenu.append(collapsIcon, menu);
      
      const titleLink = this.create("a", { href: "#", class: "" }, "بدون عنوان");
      const title = this.create("h2", { class: "card_title" }, titleLink);
      const head = this.create("div", { class: "card_head" }, title);
      head.append(collapsMenu)

      /* Card info */
      const subDomain = this.create("a", { href: "#", class: "card_subdomain" }, "subdomain.landino.ma");
      const lastUpdate = this.create("time", { class: "date" }, new Date().toLocaleDateString('en-GB'));
      const infos = this.create("div", { class: "card_info" }, subDomain);
      const domainWrapper = this.create("div", {class: "url_link"}, this.create("span", {}, "اخر تحديت "))
      domainWrapper.append(lastUpdate)
      infos.append(domainWrapper)
      projectcard.append(thumbnail, head, infos);

      this.showHideMenu(collapsMenu, menu)

      return projectcard;
    };
    

    const menuArray = ["افتح في نافدة جديدة", "تغيير اسم المشروع", "نسخ الرابط", "تكرار", "حفظ كقالب", "حدف المشروع"];
    projectBox.append(createProjectTemplate("", menuArray, "", ""),createProjectTemplate("", menuArray, "", ""),createProjectTemplate("", menuArray, "", ""),createProjectTemplate("", menuArray, "", ""),createProjectTemplate("", menuArray, "", ""));

    return project;
  }
  wrapper() {
    const pageContainer = this.create("section", { class: "content" });
    const pageHeader = this.header("مشاريع", "مشروع جديد +")
    const pageSearch = this.search("البحت عن مشروع...","../dashboard/assets/images/svg/search_area/search.svg", "search")
    const pageFilterSidebar = this.filterSidebar()
    const pageProjectsElms = this.project()
    pageContainer.append(pageHeader, pageSearch, pageFilterSidebar, pageProjectsElms)

    return pageContainer;
  }
}

export default Page
