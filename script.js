
function getWeekNumbers(year) {
  // Визначення дати 1 вересня заданого року
  var septemberFirst = new Date(year, 8, 1); // Місяць вересень (індекс 8, оскільки індекси місяців починаються з 0)

  // Визначення номера тижня для 1 вересня
  var septemberFirstWeek = getWeekNumber(septemberFirst);

  // Визначення дати 1 березня заданого року
  var marchFirst = new Date(year, 2, 1); // Місяць березень (індекс 2)

  // Визначення номера тижня для 1 березня
  var marchFirstWeek = getWeekNumber(marchFirst);

  return {
    septemberFirstWeek: septemberFirstWeek,
    marchFirstWeek: marchFirstWeek
  };
}

// Функція для отримання номера тижня
function getWeekNumber(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function isEvenWeek(weekNumbers) {
  if (weekNumbers.septemberFirstWeek % 2 === 0 || weekNumbers.marchFirstWeek % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function setWeeklyValue() {
  var year = new Date().getFullYear(); // Поточний рік
  var weekNumbers = getWeekNumbers(year); // Отримання номерів тижнів для поточного року
  var weeklyValueElement = document.querySelector('.weeklyValue'); // Елемент з класом "weeklyValue"

  // Визначення, чи є поточний тиждень парним або непарним
  var isEven = isEvenWeek(weekNumbers);

  // Виведення значення у відповідний блок
  if (isEven) {
    weeklyValueElement.textContent = 'Парний';
  } else {
    weeklyValueElement.textContent = 'Непарний';
  }
}

// Виклик функції для встановлення значення
setWeeklyValue();

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

     displayTime();

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
