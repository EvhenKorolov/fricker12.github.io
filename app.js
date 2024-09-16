let tg = window.Telegram.WebApp;
let user = tg.initDataUnsafe.user;

// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста и фона кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = '#2cab37';

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `Привіт, ${user.first_name} ${user.last_name} Premium(${user.is_premium})`;
usercard.appendChild(p);

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
//tg.BackButton.show();

// Обработка события нажатия на BackButton
//Telegram.WebApp.onEvent("backButtonClicked", function(){
//    window.history.back();
//   tg.BackButton.hide();  // Опционально, скрыть кнопку после нажатия
//});

// Показать кнопку SettingsButton
//tg.SettingsButton.show();

// Обработка события нажатия на SettingsButton
//Telegram.WebApp.onEvent("settingsButtonClicked", function(){
//    console.log("Нажата кнопка Настройки");
//    // Здесь можно реализовать нужную логику для открытия настроек
//});
