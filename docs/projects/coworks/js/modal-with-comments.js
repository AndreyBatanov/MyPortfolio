//! Модальные окна Оставил, что б потом использовать данный пример с удобными комментами!

//! Находим элементы для модального окна
//! Находим все кнопки, которые могут открывать модальное окно по атрибуту  [data-action="modal"]
const openModelBtns = document.querySelectorAll('[data-action="modal"]');
//! Находим модальное окно по классу  .modal
const modal = document.querySelector(".modal");
//! Находим кнопку, которая закрывает модальное окно по id="closeModal"
const closeModalBtn = document.querySelector("#closeModal");
//! Находим блок, в котором находится содержимое модального окна по классу .modal__body
const modalBody = document.querySelector(".modal__body");

//? Перебираем все кнопки открытия модального окна
openModelBtns.forEach(function (item) {
  //? Вешаем прослушку по клику на каждую кнопку открытия модального окна
  item.addEventListener("click", function () {
    //? Добавляем класс modal--open к блоку с мобильной навигацией для его отображения
    modal.classList.add("modal--open");
    //? Добавляем класс no-scroll к body что бы запретить скролл на странице
    document.body.classList.add("no-scroll");
  });
});
//? Слушаем клик на  кнопку закрытия модального окна
closeModalBtn.addEventListener("click", function () {
  //? Удаляем класс modal--open у блока модального окна для его закрытия
  modal.classList.remove("modal--open");
  // ? Удаляем класс no-scroll у body что бы разрешить скролл на странице
  document.body.classList.remove("no-scroll");
});

//! Закрытие модального окна на оверлее
//? Сушаем клик по модальному окну
modal.addEventListener("click", function () {
  console.log("click");
  //? Удаляем класс modal--open у блока модального окна для его закрытия
  modal.classList.remove("modal--open");
  //? Удаляем класс no-scroll у body что бы разрешить скролл на странице
  document.body.classList.remove("no-scroll");
});
//? Слушаем клик непосредственно внутри модального окна
modalBody.addEventListener("click", function (event) {
  //? Запрещаем кликам из содержимого модального окна "всплывать на верх"
  //? Что бы они не доходили до элемента modal и не закрывали модальное окно
  event.stopPropagation();
});

//! Закрываем модальное окно клавишей Escape
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    //! Вместо (event.keyCode == 27), предпочтительнее использовать (event.key == 'Escape') или (event.code == 'Escape')
    //? Удаляем класс modal--open у блока модального окна для его закрытия
    modal.classList.remove("modal--open");
    //? Удаляем класс no-scroll у body что бы разрешить скролл на странице
    document.body.classList.remove("no-scroll");
  }
});
