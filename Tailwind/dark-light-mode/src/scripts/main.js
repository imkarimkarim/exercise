/* eslint-disable no-undef */
import { moonIcon, sunIcon } from "./elements.js";
import { avoidFOUC } from "./utils.js";

const store = localStorage;

export const main = () => {
  if (!store.theme) {
    store.theme = "light";
    location.reload();
  }

  const toggleModeButton = document.querySelector("#toggleMode-button");
  toggleModeButton.innerHTML = store.theme === "light" ? moonIcon : sunIcon;
  feather.replace();

  toggleModeButton.addEventListener("click", () => {
    store.theme = store.theme === "light" ? "dark" : "light";
    toggleModeButton.innerHTML = store.theme === "light" ? moonIcon : sunIcon;
    feather.replace();
    avoidFOUC();
  });
};
