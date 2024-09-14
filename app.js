let tg = window.Telegram.WebApp;

// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста и фона кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = '#2cab37';

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

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});



