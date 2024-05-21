//! Находим элементы для модального окна
const openModelBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#closeModal");
const modalBody = document.querySelector(".modal__body");

function openModal() {
  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");
}
function closeModal() {
  modal.classList.remove("modal--open");
  document.body.classList.remove("no-scroll");
}
//! Открываем модальное окно кликом по кнопке
openModelBtns.forEach(function (item) {
  item.addEventListener("click", openModal);
});
//! Закрываем модальное окно кликом по кнопке
closeModalBtn.addEventListener("click", closeModal);

//! Закрытие модального окна на оверлее
modal.addEventListener("click", closeModal);

//! Запрещаем кликам из содержимого модального окна "всплывать на верх"
modalBody.addEventListener("click", function (event) {
  event.stopPropagation();
});

//! Закрываем модальное окно клавишей Escape
document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    closeModal();
  }
});
