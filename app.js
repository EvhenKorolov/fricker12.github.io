let tg = window.Telegram.WebApp;

// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста и фона кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = '#2cab37';

let user = tg.initDataUnsafe.user;

document.addEventListener("DOMContentLoaded", () => {
    const userInfoElement = document.createElement('div');
    userInfoElement.textContent = `Привіт, ${user.first_name} ${user.last_name}!`;
    userInfoElement.style.position = 'absolute';
    userInfoElement.style.top = '10px'; // Отступ от верхнего края
    userInfoElement.style.left = '50%';  // Позиционирование по горизонтали
    userInfoElement.style.transform = 'translateX(-50%)'; // Центрирование по горизонтали
    userInfoElement.style.color = '#000';  // Цвет текста можно изменить
    userInfoElement.style.fontSize = '18px';  // Размер шрифта (опционально)
    document.body.appendChild(userInfoElement);
});

let item = "";

// Массив с кнопками
let buttons = document.querySelectorAll(".btn");  // Предположим, что у всех кнопок есть класс 'btn'

// Цикл для назначения обработчиков
buttons.forEach((button, index) => {
    button.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            let buttonNumber = index + 1;
            tg.MainButton.setText(`Вы выбрали жертву №${buttonNumber}!`);
            item = buttonNumber.toString();
            tg.MainButton.show();
        }
    });
});

// Обработчик клика по MainButton
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

// Показать кнопку BackButton
tg.BackButton.show();

// Обработка события нажатия на BackButton
Telegram.WebApp.onEvent("backButtonClicked", function(){
    window.history.back();
    tg.BackButton.hide();  // Опционально, скрыть кнопку после нажатия
});

// Показать кнопку SettingsButton
tg.SettingsButton.show();

// Обработка события нажатия на SettingsButton
Telegram.WebApp.onEvent("settingsButtonClicked", function(){
    console.log("Нажата кнопка Настройки");
    // Здесь можно реализовать нужную логику для открытия настроек
});
