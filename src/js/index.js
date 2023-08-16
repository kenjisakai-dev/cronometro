function bootstrap() {
  document.addEventListener('click', (event) => {
    const elementValue = event.target.value;

    if (elementValue === 'start') {
      startTime();
    }
    if (elementValue === 'pause') {
      pauseTime();
    }
    if (elementValue === 'restart') {
      restartTime();
    }
  });
}

bootstrap();

const buttons = document.querySelectorAll('button');
let ticker;
let timer = 0;

function startTime() {
  ticker = setInterval(function () {
    createTime(timer);
  }, 1000);

  startButton();
}

function pauseTime() {
  clearInterval(ticker);

  pauseButton();
}

function restartTime() {
  clearInterval(ticker);
  timer = 0;
  createTime();

  restartButton();
}

function createTime() {
  const date = new Date(timer);
  const time = date.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC',
  });

  displayTime(time);
  timer += 1000;
}

function displayTime(time) {
  const resultTime = document.querySelector('.time');

  resultTime.textContent = time;
}

function startButton() {
  buttons[0].style.backgroundColor = 'rgb(149, 211, 190)';
  buttons[0].disabled = true;
  buttons[0].style.cursor = 'auto';

  buttons[1].style.backgroundColor = 'rgb(0, 187, 125)';
  buttons[1].disabled = false;
  buttons[1].style.cursor = 'pointer';

  buttons[2].style.backgroundColor = 'rgb(0, 187, 125)';
  buttons[2].disabled = false;
  buttons[2].style.cursor = 'pointer';
}

function pauseButton() {
  buttons[0].style.backgroundColor = 'rgb(0, 187, 125)';
  buttons[0].disabled = false;
  buttons[0].style.cursor = 'pointer';

  buttons[1].style.backgroundColor = 'rgb(149, 211, 190)';
  buttons[1].disabled = true;
  buttons[1].style.cursor = 'auto';
}

function restartButton() {
  buttons[0].style.backgroundColor = 'rgb(0, 187, 125)';
  buttons[0].disabled = false;
  buttons[0].style.cursor = 'pointer';

  buttons[1].style.backgroundColor = 'rgb(149, 211, 190)';
  buttons[1].disabled = true;
  buttons[1].style.cursor = 'auto';

  buttons[2].style.backgroundColor = 'rgb(149, 211, 190)';
  buttons[2].disabled = true;
  buttons[2].style.cursor = 'auto';
}
