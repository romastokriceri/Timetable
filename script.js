
// Функція для оновлення значення поля
function updateWeeklyValue() {
  var currentDate = moment(); // Поточна дата та час
   var septemberFirst = moment().startOf('year').month(8).date(1); // 1 вересня поточного року
  var weekNumber = currentDate.diff(septemberFirst, 'weeks'); // Номер поточного тижня
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

 // Функція для виведення часу
    function displayTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      hours = formatTimeElement(hours);
      minutes = formatTimeElement(minutes);
      seconds = formatTimeElement(seconds);

      var timeString = hours + ':' + minutes + ':' + seconds;
      document.querySelector('.time').textContent = timeString;
    }

    function formatTimeElement(timeElement) {
      return timeElement < 10 ? '0' + timeElement : timeElement;
      
      // Функція для виведення дати
    }
    function displayDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth()+1;
      var year = currentDate.getFullYear();

  // Форматуємо місяць та день у двозначний вигляд, якщо потрібно
  month = formatTimeElement(month);
  day = formatTimeElement(day);
  year =  String(year).slice(-2);

      var dateString = day + ':' + month + ':' + year + ',';
      document.querySelector('.date').textContent = dateString;
    }
    
   displayTime();
   displayDate();

    setInterval(displayTime, 1000);

var currentDate = new Date();
var dayOfWeek = currentDate.getDay(); // Отримуємо день тижня (0 - неділя, 1 - понеділок, і т.д.)

var monday = document.querySelector('.Monday');
var tuesday = document.querySelector('.Tuesday');
var wednesday = document.querySelector('.Wednesday');
var thursday = document.querySelector('.Thursday');
var friday = document.querySelector('.Friday');


// Встановлюємо кольори тексту для кожного дня тижня
switch (dayOfWeek) {
  case 1:
    monday.style.color = 'var(--highlighted-text)';
    break;
  case 2:
    tuesday.style.color = 'var(--highlighted-text)';
    break;
  case 3:
    wednesday.style.color = 'var(--highlighted-text)';
    break;
  case 4:
    thursday.style.color = 'var(--highlighted-text)';
    break;
  case 5:
    friday.style.color = 'var(--highlighted-text)';
     break;
case 6:
   friday.style.color = 'var(--font-title-color)';
   break;
default:
    break;
}


// TODO: ЗРОБИ фу-цію, що пише який сьогодні тиждень, переробити ії так, щоб ця фун-ція показувала парний сьогодні тиждень чи ні та вважати тиждень де є 1 вересня та 1 березня непарними за замовчуванням



