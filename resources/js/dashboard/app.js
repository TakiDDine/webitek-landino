import Core from "./core.js";
import Sidebar from "./sidebar/sidebare.js";
import Page from "./project/page.js";

document.addEventListener("DOMContentLoaded", function() {
  const core = new Core();
  const sidebar = new Sidebar();
  const page = new Page();
  
  const appElement = document.getElementById("app");
  const lead = core.create("div", { class: "lead" });

  lead.append(sidebar.wrapper(), page.wrapper());
  appElement.appendChild(lead);
  
  core.render();
  core.convertImagesToSVG();

});