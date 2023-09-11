import { cardGenerator } from "./generators.js";
import { data } from "./data.js";

export const main = () => {
  // generating cards
  const gallery = document.querySelector("#gallery");
  for (let i in data) {
    const { title, description, image, buttonTitle } = data[i];
    gallery.insertAdjacentHTML(
      "beforeend",
      cardGenerator(title, description, image, buttonTitle)
    );
  }
};
