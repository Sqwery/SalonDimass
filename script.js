javascript
function rotateClockHands() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const hourRotation = 30 * hours + minutes / 2;
  const minuteRotation = 6 * minutes + seconds / 10;
  const secondRotation = 6 * seconds;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  const timerElement = document.getElementById('timer');
  const elapsedTime = Math.floor((Date.now() - startDate) / 1000); // Время, прошедшее с момента загрузки страницы в секундах

  if (elapsedTime >= 60) {
    timerElement.textContent = 'Прошла одна минута!';
  } else {
    const remainingTime = 60 - elapsedTime;
    timerElement.textContent = `Осталось ${remainingTime} секунд до одной минуты`;
  }
}

const startDate = Date.now(); // Запоминаем время загрузки страницы

setInterval(rotateClockHands, 1000);