let tg = window.Telegram.WebApp;
// Развернуть приложение на полный экран
tg.expand();

// Установка цвета текста и фона кнопки MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = '#2cab37';

// Получение информации о пользователе из initDataUnsafe
let user = tg.initDataUnsafe.user;
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
    try {
        // Создаем объект с данными для отправки
        let dataToSend = {
            selectedItem: item,  // Данные о нажатой кнопке
            initData: tg.initData // Полный initData для валидации
        };
        
        // Отправка данных в бот
        tg.sendData(JSON.stringify(dataToSend));
        
        tg.MainButton.setText("Данные отправлены!");  // Обновляем текст после отправки
    } catch (error) {
        console.error("Ошибка отправки данных: ", error);
        alert("Не удалось отправить данные. Попробуйте снова.");
    }
});

// Скрыть кнопку, если пользователь снова нажимает
tg.MainButton.onClick(function() {
    tg.MainButton.hide();
});
