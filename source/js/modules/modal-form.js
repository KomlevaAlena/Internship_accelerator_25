// modal-form.js
export const modalForm = function modalDescription() {
  const openModalButton = document.getElementById('modal-open-button');
  const modalWindow = document.getElementById('modal-window');
  const closeModalButton = modalWindow?.querySelector('.modal-form__toggle-close');
  const tagBody = document.body;
  const modalWrapper = document.querySelector('.modal__wrapper');

  // Если хотя бы один элемент не найден — выводим ошибку
  if (!openModalButton || !modalWindow || !closeModalButton || !modalWrapper) {
    console.error('One or more modal elements not found:', {
      openModalButton,
      modalWindow,
      closeModalButton,
      modalWrapper
    });
    return; // Прекращаем выполнение, чтобы не было ошибок
  }

  openModalButton.addEventListener('click', () => {
    modalWindow.classList.toggle('modal-open');
    tagBody.classList.toggle('hidden');
  });

  closeModalButton.addEventListener('click', () => {
    modalWindow.classList.remove('modal-open');
    tagBody.classList.remove('hidden');
  });

  document.addEventListener('mouseup', (e) => {
    if (!modalWrapper.contains(e.target)) {
      modalWindow.classList.remove('modal-open');
      tagBody.classList.remove('hidden');
    }
  });
};
