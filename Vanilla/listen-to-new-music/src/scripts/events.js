export const events = () => {
  const toggleButton = document.getElementById('nav__toggle-button');
  toggleButton.addEventListener('click', () => {
    toggleNavLinksShow();
  });
};

const toggleNavLinksShow = () => {
  const navLinks = document.getElementById('nav__links');
  navLinks.classList.toggle('nav__links-show');
};
