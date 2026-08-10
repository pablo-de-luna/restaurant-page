"use strict"

import prosciutto from "../assets/images/prosciutto.png";
import pepperoni from "../assets/images/pepperoni.png";
import margherita from "../assets/images/margherita.png";

const content = document.querySelector("#content");

const pizzas = [
  {
    image: prosciutto,
    name: "Prosciutto & Arugula",
    description: "Garlic olive oil base topped with melted mozzarella, crispy prosciutto, fresh arugula, and a drizzle of white truffle oil."
  },
  {
    image: pepperoni,
    name: "Double Pepperoni Craze",
    description: "Rich tomato sauce, mozzarella, loaded with crispy cupped pepperoni, finished with fresh basil and shredded parmesan."
  },  
  {
    image: margherita,
    name: "Fresh Basil Margherita",
    description: "House tomato sauce, fresh mozzarella, sweet cherry tomatoes, aromatic basil leaves, and a sprinkle of aged parmesan."
  }
];

export default function generateMenuElements() {
  const menuTitle = document.createElement("div");
  menuTitle.id = "menu-title";
  menuTitle.textContent = "MENU";

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  content.appendChild(menuTitle);
  createAndAppendPizzaCards(menuContainer);
  content.appendChild(menuContainer);
}

function createAndAppendPizzaCards(parentElement) {
  for (let i = 0; i < pizzas.length; i++) {
    const pizzaContainer = document.createElement("div");
    pizzaContainer.className = "pizza-container";

    const pizzaImage = document.createElement("img");
    pizzaImage.src = pizzas[i].image;
    pizzaImage.setAttribute("alt", "pizza image");

    const pizzaTextContainer = document.createElement("div");
    pizzaTextContainer.className = "pizza-text";

    const pizzaName = document.createElement("h1");
    pizzaName.textContent = pizzas[i].name;

    const pizzaDescription = document.createElement("p");
    pizzaDescription.textContent = pizzas[i].description;

    pizzaTextContainer.appendChild(pizzaName);
    pizzaTextContainer.appendChild(pizzaDescription);

    if (i % 2) {
      pizzaContainer.appendChild(pizzaImage);
      pizzaContainer.appendChild(pizzaTextContainer);
    } else {
      pizzaContainer.appendChild(pizzaTextContainer);
      pizzaContainer.appendChild(pizzaImage);
    }

    parentElement.appendChild(pizzaContainer);
  }
}