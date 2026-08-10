"use strict"

import aboutImage from "../assets/images/about-image.jpg";

const content = document.querySelector("#content");

export default function generateAboutElements() {
  const title = document.createElement("div");
  title.id = "about-title"
  title.textContent = "About us";

  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-container";

    // Info
    const infoContainer = document.createElement("div");

      const infoTitle = document.createElement("h1");
      infoTitle.textContent = "Our story";

      const infoStory = document.createElement("p");
      infoStory.innerHTML = story;

      const contactButton = document.createElement("button");
      contactButton.textContent = "Contact us!"

      infoContainer.appendChild(infoTitle);
      infoContainer.appendChild(infoStory);
      infoContainer.appendChild(contactButton);

      // Image
    const image = document.createElement("img");
    image.src = aboutImage;
    image.setAttribute("height", "600");
    image.setAttribute("width", "400");

    aboutContainer.appendChild(infoContainer);
    aboutContainer.appendChild(image);
    
  content.appendChild(title);
  content.appendChild(aboutContainer);
}

  const story = `PIZZATOP started the way good neighborhood restaurants usually
  do: with a family that loved feeding people and a big idea that a perfect pizza
  could bring everyone together. Our grandparents first opened the doors with a 
  simple recipe, a wood-fired oven, and a lot of heart, and over time that same 
  warmth turned into the place you see today. We still make our pizzas the 
  old-fashioned way, with plenty of care and a little extra love in every pie.
  <br>
  <br>
  We're the kind of spot where kids laugh over a slice, neighbors stop by after 
  work, and someone always remembers your favorite topping. Whether you're digging 
  into the Double Pepperoni Craze or sharing a Fresh Basil Margherita with the 
  table, we want every visit to feel like coming home. At PIZZATOP, it's not just 
  about pizza—it's about the stories, the smiles, and the feeling of being welcomed 
  like family.`;
