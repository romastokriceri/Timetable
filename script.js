function isEvenWeek(date) {
  var currentDate = date || new Date();
  var currentYear = currentDate.getFullYear();
  var januaryFirst = new Date(currentYear, 0, 1);
  var septemberFirst = new Date(currentYear, 8, 1);
  var marchFirst = new Date(currentYear, 2, 1);

  var firstWeekStart;
  if (januaryFirst.getDay() <= 4) {
    firstWeekStart = januaryFirst;
  } else if (septemberFirst.getDay() <= 4) {
    firstWeekStart = new Date(currentYear, 8, 8 - septemberFirst.getDay());
  } else {
    firstWeekStart = new Date(currentYear, 2, 8 - marchFirst.getDay());
  }

  var millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  var weekNumber = Math.floor((currentDate - firstWeekStart) / millisecondsPerWeek) + 1;

  return {
    weekNumber: weekNumber,
    isEven: weekNumber % 2 === 0
  };
}

// Отримуємо посилання на елемент з класом weeklyValue
var weeklyValueElement = document.querySelector('.weeklyValue');

// Отримуємо значення тижня та парності
var weekInfo = isEvenWeek(new Date());

// Встановлюємо текстовий вміст елемента з номером тижня та парністю
// weeklyValueElement.textContent = weekInfo.weekNumber + ' '; ця строка надає номер тиждня
weeklyValueElement.textContent += weekInfo.isEven ? 'Парний' : 'Непарний';

      // Функція для виведення дати
   
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
    }

displayTime();

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
