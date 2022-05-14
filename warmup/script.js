const name = document.getElementById("name");
let storage = "imkarimkarim";
const changeName = () => {
  if (storage === "imkarimkarim") storage = "alirez";
  else storage = "imkarimkarim";
  name.innerHTML = storage;
};
name.addEventListener("click", changeName);
