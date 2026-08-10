"use strict"

import heroImg from "../assets/images/herobg.jpg";
import loadMenuPage from "../pages-modules/menu.js"

const content = document.querySelector("#content");

export default function generateHomeElements() {
  // Hero section 
  const heroSection = document.createElement("section");  
  heroSection.id = "home-hero-section";

    const heroLogo = document.createElement("div"); 
    heroLogo.textContent = "PIZZATOP"
    
    const heroMotto = document.createElement("div");
    heroMotto.textContent = "THE BEST PIZZA IN THE WORLD!"

    const heroBg = document.createElement("img");
    heroBg.src = heroImg;

    heroSection.appendChild(heroLogo);
    heroSection.appendChild(heroMotto);
    heroSection.appendChild(heroBg);

  // Info section
  const infoSection = document.createElement("section");
  infoSection.id = "home-info-section";

    // Hours
    const hours = document.createElement("div");
    hours.id = "home-hours-container";

      const hoursTitle = document.createElement("h1");
      hoursTitle.textContent = "HOURS";

      const hoursText = document.createElement("p");
      const hoursTextContent = `Mon-Wed: 11:00 AM - 10:00 PM<br>
                                Thu-Fri: 11:00 AM - 12:AM<br>
                                Sat: 8:00 AM - 4:00 PM`;
      hoursText.innerHTML = hoursTextContent;

      hours.appendChild(hoursTitle);
      hours.appendChild(hoursText);
    
    // Go to menu
    const goToMenu = document.createElement("div");
    goToMenu.id = "home-gotomenu-container";

      const goToMenuButton = document.createElement("button");
      goToMenuButton.textContent = "GO TO MENU";

      goToMenu.appendChild(goToMenuButton);

    // Find Us
    const findUsInfo = document.createElement("div");
    findUsInfo.id = "home-findus-container";

      const findUsTitle = document.createElement("h1");
      findUsTitle.textContent = "FIND US";

      const findUsText = document.createElement("p");
      findUsText.innerHTML = `123 Flavor St., Pizza Town, NY 10001<br>
                              Phone: (555) 123-4567`;

      findUsInfo.appendChild(findUsTitle);
      findUsInfo.appendChild(findUsText);

    infoSection.appendChild(hours);
    infoSection.appendChild(goToMenu);
    infoSection.appendChild(findUsInfo);

  content.appendChild(heroSection);
  content.appendChild(infoSection);

  handleGoToMenuButton();
}

function handleGoToMenuButton() {
  const goToMenuButton = document.querySelector("#home-gotomenu-container > button");

  goToMenuButton.addEventListener("click", () => {
    content.replaceChildren();
    loadMenuPage();
  });
};