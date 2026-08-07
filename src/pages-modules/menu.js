import margherita from "../assets/images/margherita.png";
import pepperoni from "../assets/images/pepperoni.png";
import prosciutto from "../assets/images/prosciutto.png";

const pizzasInfo = [
  {
    name:"Prosciutto & Arugula",
    description:"Garlic olive oil base topped with melted mozzarella, crispy prosciutto, fresh arugula, and a drizzle of white truffle oil."
  },
  {
    name:"Double Pepperoni Craze",
    description:"Rich tomato sauce, mozzarella, loaded with crispy cupped pepperoni, finished with fresh basil and shredded parmesan."
  },  
  {
    name:"Fresh Basil Margherita",
    description:"House tomato sauce, fresh mozzarella, sweet cherry tomatoes, aromatic basil leaves, and a sprinkle of aged parmesan."
  }
];

export default function AddMenuElements() {
// CREATE and APPEND elements
/**
  div#menu-title
  div#menu-container
    div.menu-item-container
      img
      div.item-text
        h1 
        p
    div.menu-item-container
      img
      div.item-text
        h1 
        p
    div.menu-item-container
      img
      div.item-text
        h1 
        p
 */
  const menuTitle = document.createElement("div");
  menuTitle.id = "menu-title";

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

}