// Инициализация объекта Telegram Web App
let tg = window.Telegram.WebApp;

// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";  // Белый текст
// Установка цвета фона кнопки MainButton
tg.MainButton.color = '#2cab37';

// Получаем элементы HTML по их идентификаторам
let sendLinkBtn = document.getElementById("sendLinkBtn");
let linkInput = document.getElementById("linkInput");

// Добавляем событие клика для кнопки отправки
sendLinkBtn.addEventListener("click", function() {
    // Проверка, видна ли MainButton в данный момент
    if (tg.MainButton.isVisible) {
        // Если видна, скрываем кнопку
        tg.MainButton.hide();
    } else {
        // Если не видна, устанавливаем текст и показываем кнопку
        tg.MainButton.setText("Отправить");
        tg.MainButton.show();
    }
});

// Обработчик события нажатия на MainButton
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    // Отправляем данные, введенные в поле linkInput
    // sendData принимает строку, поэтому передаем значение из поля
    tg.sendData(linkInput.value);
});

// Пример кнопки, которая также может показать MainButton
//let btn = document.getElementById("btn");
//btn.addEventListener("click", function() {
//   // Устанавливаем новый текст для MainButton
//    tg.MainButton.setText("Сообщение отправлено!");
//   // Показываем MainButton
//    tg.MainButton.show();
//    // Отправляем тестовые данные
//    tg.sendData("sendTestMessage");
//});
