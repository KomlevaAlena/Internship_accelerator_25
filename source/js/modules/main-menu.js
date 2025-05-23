export const mainMenu = function sliderGallery() {
  const menuButtonClose = document.querySelector('.close-menu__toggle');
  const closeMenu = document.querySelector('.close-menu');
  const menuButtonOpen = document.querySelector('.main-nav__toggle-close');
  const openMenu = document.querySelector('.main-nav__menu');
  menuButtonClose.addEventListener('click', () =>{
    closeMenu.classList.toggle('close-menu--disabled');
    openMenu.classList.remove('main-nav__menu--disabled');
  });
  menuButtonOpen.addEventListener('click', () =>{
    closeMenu.classList.remove('close-menu--disabled');
    openMenu.classList.toggle('main-nav__menu--disabled');
  });
};
