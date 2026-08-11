// THE LORD IS MY SHEPHERD, I LACK NOTHING

"use strict"

import "./style.css";
import loadHomePage from "./pages-modules/home.js";
import loadMenuPage from "./pages-modules/menu.js";
import loadAboutPage from "./pages-modules/about.js";

const content = document.querySelector("#content");
const navButtons = document.querySelectorAll(".nav-button");

const switchPages = () => {
  navButtons.forEach(button => button.addEventListener("click", () => {
    content.replaceChildren();

    switch (button.id) {
      case "home-button":
        loadHomePage();
        break;
      case "menu-button":
        loadMenuPage();
        break;
      case "about-button":
        loadAboutPage();
        break;
    }
  }));
};

const initialize = (() => {
  loadMenuPage();
  // loadHomePage();
  switchPages();
})();