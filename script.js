
// Функція для оновлення значення поля
function updateWeeklyValue() {
    var currentDate = new Date(); // Поточна дата та час
  var septemberFirst = new Date(currentDate.getFullYear(), 8, 1); // 1 вересня поточного року
  var weekNumber = Math.floor((currentDate - septemberFirst) / (7 * 24 * 60 * 60 * 1000)) + 1; // Номер поточного тижня
 
//   var currentDate = moment(); // Поточна дата та час
//    var septemberFirst = moment().startOf('year').month(8).date(1); // 1 вересня поточного року
//   var weekNumber = currentDate.diff(septemberFirst, 'weeks'); // Номер поточного тижня
  var weeklyValueElement = document.querySelector('.weeklyValue'); // Елемент, який потрібно оновити

  // Перевіряємо, чи номер тижня парний чи непарний
  if (weekNumber % 2 === 0) {
    weeklyValueElement.textContent = 'парне';
  } else {
    weeklyValueElement.textContent = 'непарне';
  }
}

// Викликаємо функцію для першого оновлення значення поля
updateWeeklyValue();

// Встановлюємо інтервал для оновлення значення поля кожний тиждень
setInterval(updateWeeklyValue, 7 * 24 * 60 * 60 * 1000); // Оновлюємо кожні 7 днів

// Функція для відображення поточної дати та часу
function displayDateTime() {
  var dateTimeElement = document.querySelector('.date-time');

  if (dateTimeElement) {
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString(); // Отримуємо рядкове представлення поточної дати та часу

    dateTimeElement.textContent = dateTimeString;
  }
}

// Викликати функцію один раз для відображення початкової дати та часу
displayDateTime();

// Оновлювати дату та час кожну секунду
setInterval(displayDateTime, 1000);
