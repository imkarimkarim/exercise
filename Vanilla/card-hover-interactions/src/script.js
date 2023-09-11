import { main } from "./scripts/main.js";
import { events } from "./scripts/events.js";

// Check if the DOMContentLoaded has already been completed
if (document.readyState !== "loading") {
  main();
  events();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
