export const events = () => {
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("mouseover", (e) => {
      e.target.parentElement.classList.add("card-hover");
    });
    card.addEventListener("mouseout", (e) => {
      e.target.parentElement.classList.remove("card-hover");
    });
  }
};
