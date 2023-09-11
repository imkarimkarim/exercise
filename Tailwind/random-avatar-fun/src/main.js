export const main = () => {
  const img = document.querySelector("#image");
  img.src = randomAvatar();

  const button = document.querySelector("#randomImage");
  button.addEventListener("click", () => {
    img.src = randomAvatar();
  });
};

const random = () => {
  return Math.floor(Math.random() * 1000);
};

const randomAvatar = () => {
  return `https://avatars.dicebear.com/api/adventurer/${random()}.svg`;
};
