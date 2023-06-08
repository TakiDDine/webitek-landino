import Core from "../core.js";

/**
 * 2- @class {Sidebar}
 * for create Sidebar element.
 * */
class Sidebar extends Core {
  /**
   * Create HTML Element for Sidebar.
   * */
  constructor() {
    super();
  }
  brand() {
    const img = this.image("../dashboard/assets/images/svg/sidebar_menu/logo.svg", "logo");
    const a = this.create("a", { href: "#" }, img);
    const wrap = this.create("div", { class: "brand" }, a);
    wrap.appendChild(a);
    return wrap;
  }
  user() {
    const img = this.image("../dashboard/assets/images/img/user.jpg", "user");
    const menuIcon = this.create(
      "span",
      { class: "collaps_menu" },
      this.image("../dashboard/assets/images/svg/sidebar_menu/drop-down.svg", "drop down")
    );

    const anchor = this.create("a", { href: "", class: "user" }, img);
    const inderWrapper = this.create("div", { class: "box" }, anchor);
    const menu = this.menu(
      "ul",
      ["الصفحة الرئيسية", "إعدادات الحساب", "الدعم الفني", "تسجيل الخروج"],
      { class: "user_settings", id: "m_n_0"}, false
    );
    const wrap = this.create("div", { class: "user_profile" }, inderWrapper);
    const seperateLine = this.create("hr", { class: "sp" });

    menuIcon.appendChild(menu)
    inderWrapper.append(menuIcon);
    wrap.appendChild(seperateLine);
    
    this.showHideMenu(menuIcon, menu)

    return wrap;
  }
  newProject() {
    const button = this.create("a", {href: "", class: "button"}, "مشروع جديد +");
    const wrap = this.create("div", { class: "new_project" }, button);
    return wrap;
  }
  archive() {
    const archive = this.create("div", { class: "archive" });
    const a = this.create("a", { href: "" });
    const archiveSvg = this.image("../dashboard/assets/images/svg/sidebar_menu/archive.svg", "archive");
    const text = this.create("span", {}, "الأرشيف");
  
    a.append(archiveSvg, text);
    archive.append(this.create("hr", { class: "sp" }), a);
  
    return archive;
  }
  wrapper() {
    const div = this.create("div", { class: "container flex-row" });
    const section = this.create("section", { class: "actions" });
    const mainMenu = this.menu("ul", ["المشاريع", "قوالب", "صفحة الأفيلييت", "المدفوعات"], {class: "main_menu", id: "m_n_1"}, true);

    section.append(
      this.user(),
      mainMenu,
      this.newProject()
    );

    const aside = this.create("aside", { class: "sidebar" }, div);
    const hightLevelElms = this.create("div", {class: "brand-menu"})
    hightLevelElms.append(this.brand(), section)
    div.append(hightLevelElms, this.archive());

    return aside;
  }
}

export default Sidebar