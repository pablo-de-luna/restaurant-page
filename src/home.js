import heroImg from "./assets/images/herobg.jpg";

// CREATE section hero
  /**
   * section#hero-container
   *   h1 logo/text
   *   img hero-img
   *   p motto
   */
// CREATE section info
  /**
   * section#home-info-container
   *  div#home-hours-container
   *    h2 hours
   *    p info
   *  div#home-gotomenu-container
   *    p go to
   *    button menu
   *  div#home-findus-container
   *    h2 find us
   *    p info
   */
  // CREATE Footer#home-footer
    /**
     * p copyright info
     */

function createHomeElements() {
  const content = document.querySelector("#content");

  // Hero section 
  const heroSection = document.createElement("section");  
  heroSection.id = "hero-section";

    const heroLogo = document.createElement("h1"); 
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
  infoSection.id = "info-section";

    const hours = document.createElement("div");
    hours.id = "home-hours-container";

      const hoursTitle = document.createElement("h2");
      hoursTitle.textContent = "HOURS";

      const hoursText = document.createElement("p");
      const hoursTextContent = `Mon-Wed: 11:00 AM - 10:00 PM<br>
                                Thu-Fri: 11:00 AM - 12:AM<br>
                                Sat: 8:00 AM - 4:00 PM`;
      hoursText.innerHTML = hoursTextContent;

      hours.appendChild(hoursTitle);
      hours.appendChild(hoursText);
    
    const goToMenu = document.createElement("div");
    goToMenu.id = "home-gotomenu-container";

      const goToMenuText = document.createElement("div");
      goToMenuText.textContent = "GO TO";
      
      const goToMenuButton = document.createElement("div");
      goToMenuButton.textContent = "MENU";

      goToMenu.appendChild(goToMenuText);
      goToMenu.appendChild(goToMenuButton);

    const findUsInfo = document.createElement("div");
    findUsInfo.id = "findus-container";

      const findUsTitle = document.createElement("h2");
      findUsTitle.textContent = "FIND US";

      const findUsText = document.createElement("p");
      findUsText.innerHTML = `123 Flavor St., Pizza Town, NY 10001<br>
                              Phone: (555) 123-4567`;

      findUsInfo.appendChild(findUsTitle);
      findUsInfo.appendChild(findUsText);

  infoSection.appendChild(hours);
  infoSection.appendChild(goToMenu);
  infoSection.appendChild(findUsInfo);

  //Footer
  const footer = document.createElement("footer");

    const footerText = document.createElement("div"); 
    footerText.textContent = "© 2026 PIZZATOP. All rights reserved.";

  footer.appendChild(footerText);

  content.appendChild(heroSection);
  content.appendChild(infoSection);
  content.appendChild(footer);
}

export default createHomeElements;