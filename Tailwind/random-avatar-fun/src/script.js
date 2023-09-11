import { main } from "./main.js";

// Check if the DOMContentLoaded has already been completed
if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
