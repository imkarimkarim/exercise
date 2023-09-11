import { main } from "./scripts/main.js";
import { avoidFOUC } from "./scripts/utils.js";

// Check if the DOMContentLoaded has already been completed
if (document.readyState !== "loading") {
  avoidFOUC();
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
