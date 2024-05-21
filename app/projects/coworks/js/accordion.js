//! Находим все блоки для аккордеона по классу .topic
const topics = document.querySelectorAll(".topic");

//? Обходим все блоки аккордеона
topics.forEach(function (topic) {
  //? На каждый блок вешаем прослушку по клику
  topic.addEventListener("click", function (event) {
    //? Проверяем был ли клик внутри кнопки или нет
    //? Проверка идет на то, что клик был совершен на элементе , который размещен внутри кнопки,
    //? То есть внутри блока с классом .topic__btn, в нашем случае это кнопка
    if (event.target.closest(".topic__btn")) {
      //? Добавляем/Убираем у блока класс .topic--open
      //? Если был добавлен вернется true, если удален вернется false
      //? Возвращаемое занчение записываем в константу isOpened
      const isOpened = topic.classList.toggle("topic--open");

      //? Находим картинку
      const img = topic.querySelector(".topic__icon");

      //? Находим содержимое топика(контент)
      const content = topic.querySelector(".topic__content");

      //? Проверяем, если мы добавили класс, то есть блок надо открыть
      //? То открываем его, отображаем на странице
      if (isOpened) {
        img.src = "./img/icons/btn-minus.svg";
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        img.src = "./img/icons/btn-plus.svg";
        content.style.maxHeight = "0";
      }
    }
  });
});
