let tg = window.Telegram.WebApp;
tg.showAlert(`Привіт, @${tg.user.username}.`);

// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста и фона кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = '#2cab37';

// Получаем элементы HTML
let sendLinkBtn = document.getElementById("sendLinkBtn");
let linkInput = document.getElementById("linkInput");

// Добавляем событие клика для кнопки отправки
sendLinkBtn.addEventListener("click", function() {
    // Проверка на пустую ссылку
    const link = linkInput.value.trim();
    if (link === '') {
        alert('Введите ссылку');
        return;
    }

    // Проверяем видимость MainButton
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Отправить");
        tg.MainButton.show();
    }
});

// Обработчик события нажатия на MainButton
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    const link = linkInput.value.trim();

    // Проверка на пустую ссылку перед отправкой
    if (link !== '') {
        // Отправляем данные в бота
        tg.sendData(link);
    } else {
        tg.showAlert("Пожалуйста, введите ссылку.");
    }
});

Telegram.WebApp.onEvent("webAppReceiveData", function(data) {
    const resultBlock = document.getElementById("resultBlock");

    // Вставляем полученные данные в блок resultBlock
    resultBlock.innerHTML = data;
});
