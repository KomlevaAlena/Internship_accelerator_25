export const modalForm = function modalDescription() {
  const openModalButton = document.getElementById('modal-open-button');
  const modalWindow = document.getElementById('modal-window');
  const closeModalButton = modalWindow.getElementsByClassName('modal-form__toggle-close')[0];
  const tagBody = document.getElementsByTagName('body');
  const modalWrapper = document.querySelector('.modal__wrapper');

  //   openModalButton.onclick = function (e) {
  //     e.preventDefault();
  //     modalWindow.classList.add('modal-open');
  //     tagBody.classList.add('hidden');
  //   };

  //   closeModalButton.onclick = function (e) {
  //     e.preventDefault();
  //     modalWindow.classList.remove('modal-open');
  //     tagBody.classList.remove('hidden');
  //   };
  //   modalWindow.onmousedown = function (e) {
  //     const target = e.target;
  //     const modalContent = modalWindow.getElementsByClassName('modal__content')[0];
  //     if (e.target.closest(`.${ modalContent.className}`) === null) {
  //       this.classList.remove('modal-open');
  //       tagBody.classList.remove('hidden');
  //     }
  //   };
  // });
  openModalButton.addEventListener('click', () =>{
    modalWindow.classList.toggle('modal-open');
    tagBody.classList.toggle('hidden');
  });
  closeModalButton.addEventListener('click', () =>{
    modalWindow.classList.remove('modal-open');
    tagBody.classList.remove('hidden');
  });
  document.addEventListener('mouseup', (e) => {
    if (!modalWrapper.contains(e.target)) {
      modalWindow.classList.remove('modal-open');
    }
  });
};
