// ! подключение FancyBox
Fancybox.bind("[data-fancybox]", {});

// ! Кнопка скролла наверх страницы 

// Находим кнопку по id scrollToTopBtn
const scrollButton = document.querySelector("#scrollToTopBtn");

// Слушаем событие скролла на странице
window.addEventListener("scroll", function () {
	// console.log('Scroll!!!');
	// console.log('window.innerHeight', window.innerHeight);
	// console.log('window.pageYOffset', window.pageYOffset);

	// Если пользователь проскролил страницу по высоте больше чем высота экрана
	if (window.scrollY > window.innerHeight) {
		// Тогда к кнопке добавляем класс top-link--visible чтобы отобразить её
		scrollButton.classList.add("top-link--visible");
	} else {
		scrollButton.classList.remove("top-link--visible");
	}
});
// ! Поключение смены темы
const btnDarkMode = document.querySelector(".dark-mode-btn");

//! 1. Проверка темной темы на уровне системных настроек
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

//! 2. Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
	btnDarkMode.classList.remove("dark-mode-btn--active");
	document.body.classList.remove("dark");
}

//! Если меняются системные настройки, меняем тему
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (event) => {
		const newColorScheme = event.matches ? "dark" : "light";

		if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
	});

//! Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle("dark-mode-btn--active");
	const isDark = document.body.classList.toggle("dark");

	if (isDark) {
		localStorage.setItem("darkMode", "dark");
	} else {
		localStorage.setItem("darkMode", "light");
	}
};

// ! Поключение аккордеона
accordion("#accordion-1", false);
accordion("#accordion-2");

function accordion(selector, onlyOne = true) {
	const accordionWrapper = document.querySelector(selector);
	const accordionBtns = accordionWrapper.querySelectorAll(".accordion__btn");

	accordionBtns.forEach(function (btn) {
		if (onlyOne) {
			btn.addEventListener("click", showOnlyCurrentContent);
		} else {
			btn.addEventListener("click", showContent);
		}

		function showContent(event) {
			event.preventDefault();

			const currentItem = btn.closest(".accordion__item");
			const currentContent = currentItem.querySelector(".accordion__content");

			currentItem.classList.toggle("active");

			if (currentItem.classList.contains("active")) {
				currentContent.style.maxHeight = currentContent.scrollHeight + "px";
			} else {
				currentContent.style.maxHeight = 0;
			}
		}

		function showOnlyCurrentContent(event) {
			event.preventDefault();

			const currentItem = btn.closest(".accordion__item");
			const currentContent = currentItem.querySelector(".accordion__content");

			// Если кликаем по уже активному элементу, то скрываем его
			if (currentItem.classList.contains("active")) {
				currentItem.classList.remove("active");
				currentContent.style.maxHeight = 0;
			} else {
				// Если клик по неактивному элементу
				// тогда скрываем все остальные
				// и открываем текущий

				// Убираем все активные блоки
				const accordionItems =
					accordionWrapper.querySelectorAll(".accordion__item");
				accordionItems.forEach(function (item) {
					item.classList.remove("active");
				});

				// Скрываем все открытые панели
				const contentBlocks = accordionWrapper.querySelectorAll(
					".accordion__content"
				);
				contentBlocks.forEach(function (block) {
					block.style.maxHeight = 0;
				});

				// Делаем активным текущий блок
				currentItem.classList.add("active");

				// Отображаем текущий контент
				currentContent.style.maxHeight = currentContent.scrollHeight + "px";
			}
		}
	});
}
// ! Поключение модального окна
$(document).ready(function () {

	$("[data-modal=modalWindow]").on("click", function () {
		$(".overlay, #modalWindow").fadeIn("slow");
	});

	$(".modal-order__close").on("click", function () {
		$(".overlay, #modalWindow").fadeOut("slow");
	});

	// ! Подключение валидации формы
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите больше {0} символов!"),
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты",
				},
			},
		});
	}
	validateForms("#order-form");

	// ! Подключаем маску ввода номера телефона
	$("input[name=phone]").mask("+7 (999) 999-99-99");

	// ! Подключаем отправку формы на сервер
	$("form").submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize(),
		}).done(function () {
			$(this).find("input").val("");
			$(".overlay, #modalWindow").fadeOut();
			// $(".overlay, #thanks").fadeIn("slow");

			$("form").trigger("reset");
		});
		return false;
	});
});

