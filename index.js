const min15 = document.getElementById("min15");
const min30 = document.getElementById("min30");

const startBtn = document.getElementById("start");

min15.volume = 0.08;
min30.volume = 0.08;

let started = false;

const timer15 = () => {
  const moment = new Date();
  const minutes = moment.getMinutes();
  const lastMinutes = 15 - (minutes % 15);

  switch (minutes) {
    case 00:
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 15:
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 30:
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
    case 45:
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    default:
      new Promise((resolve, reject) => {
        setTimeout(() => {
          min15.play();
          resolve("Успіх!");
        }, lastMinutes * 60 * 1000);
      }).then((data) => {
        setInterval(() => {
          min15.play();
        }, 15 * 60 * 1000);
      });
      break;
  }
};

const timer30 = () => {
  const moment = new Date();
  const minutes = moment.getMinutes();
  let lastMinutes = 0;

  switch (true) {
    case minutes < 06:
      lastMinutes = 6 - minutes;
      break;
    case minutes === 06:
      min30.play();
      lastMinutes = 30;
      break;
    case minutes < 36:
      lastMinutes = 36 - minutes;
      break;
    case minutes === 36:
      min30.play();
      lastMinutes = 30;
      break;
    case minutes > 36:
      lastMinutes = 30 - (minutes - 36);
      break;
  }
  new Promise((resolve, reject) => {
    setTimeout(() => {
      min30.play();
      resolve("Успіх!");
    }, lastMinutes * 60 * 1000);
  }).then((data) => {
    setInterval(() => {
      min30.play();
    }, 30 * 60 * 1000);
  });
};

startBtn.onclick = (params) => {
  if (!started) {
    startBtn.textContent = "Timers are started";
    started = true;
  }

  timer15();
  timer30();
};
