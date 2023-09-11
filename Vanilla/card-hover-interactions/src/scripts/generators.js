export const cardGenerator = (
  title = "",
  description = "",
  image = "",
  buttonTitle = "",
  alt = ""
) => {
  return `
    <div class="card">
    <div class="card__info">
      <p class="card__info__title">${title}</p>
      <p class="card__info__description">${description}</p>
      <button class="card__info__button">${buttonTitle}</button>
    </div>
    <img class="image" src="${image}" alt="${alt}" />
  </div>`;
};
