const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  const className = "input-hide";
  const input = document.querySelector(".input");
  const flag = input.classList.contains(className);
  if (flag) {
    input.classList.remove(className);
  } else {
    input.classList.add(className);
  }
});
