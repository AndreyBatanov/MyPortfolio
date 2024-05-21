//! Мобильная навигация

//! Находим кнопку открытия мобильной навигации по id
const mobileNavBtnOpen = document.querySelector("#openMobileNav");

//! Находим кнопку закрытия мобильной навигации по id
const mobileNavBtnClose = document.querySelector("#closeMobileNav");

//! Находим блок с мобильной навигацией по классу
const mobileNav = document.querySelector(".mobile-nav");




//? Вешаем прослушку на кнопку открытия мобильной навигации
mobileNavBtnOpen.addEventListener('click', function () {
  //? Добавляем класс mobile-nav--open к блоку с мобильной навигацией
  mobileNav.classList.add('mobile-nav--open');
  //? Добавляем класс no-scroll к body что бы запретить скролл на странице
  document.body.classList.add('no-scroll');
});

//? Вешаем прослушку на кнопку закрытия мобильной навигации
mobileNavBtnClose.addEventListener('click', function () {
  //? Удаляем класс mobile-nav--open у блока с мобильной навигацией
  mobileNav.classList.remove('mobile-nav--open');
  // ? Удаляем класс no-scroll у body что бы разрешить скролл на странице
  document.body.classList.remove('no-scroll');
});

//! Закрываем мобильную навигацию по клику по элементам (ссылкам, кнопкам) внутри мобильной навигации

//? Находим элементы (ссылкы, кнопки) внутри блока мобильной навигции
const mobileNavLinks = mobileNav.querySelectorAll('a, button');

//? Перебираем все элементы(ссылки, кнопки) внутри мобильной навигации
mobileNavLinks.forEach(function (item) {
  //? На каждый элемент item в мобилтной навигции вешаем прослушку
  item.addEventListener('click', function () {
    //? Удаляем класс mobile-nav--open. Закрываем блок с мобильной навигацией
    mobileNav.classList.remove('mobile-nav--open');
    // ? Удаляем класс no-scroll у body что бы включить скролл на странице
    document.body.classList.remove('no-scroll');

  });
});