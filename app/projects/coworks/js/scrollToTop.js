//! Находим по id scrollToTopBtn кнопку
const scrollButton = document.querySelector('#scrollToTopBtn');
// console.log(scrollButton); //? вывод элемента ввиде тега
// console.dir(scrollButton); //? вывод элемента ввиде объекта

//! слушаем событие скролла на странице

// console.log('window.innerHeight', window.innerHeight);
// console.log('window.pageYOffset', window.pageYOffset);
window.addEventListener('scroll', function () {
  //? Условие: если пользователь проскролил по высоте больше чем высота экрана
  if (window.scrollY > window.innerHeight) {
    //? тогда к кнопке добавляем класс top-link--visible, что бы отобразить ее
    scrollButton.classList.add('top-link--visible');

  } else {
    scrollButton.classList.remove('top-link--visible');
  }
});
