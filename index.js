const min15 = document.getElementById("min15");
const min30 = document.getElementById("min30");

const startBtn = document.getElementById("start");

min15.volume = 0.08;
min30.volume = 0.08;

let started = false;

// console.group("min15=", min15);
// console.log("min15=", min15);
// console.table("min15=", min15);
// console.dir("min15=", min15);
// console.dir(min15);
// min15.muted ? (min15.muted = false) : (min15.muted = true);
// min15.muted = false;
// min15.play();

const timer15 = () => {
  // console.log("start clicked=");
  const moment = new Date();
  const minutes = moment.getMinutes();
  // console.log("minutes=", minutes);
  const lastMinutes = 15 - (minutes % 15);
  // console.log("lastMinutes=", lastMinutes);

  switch (minutes) {
    case 00:
      // console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 15:
      // console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 30:
      // console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
    case 45:
      // console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    default:
      // console.log("minutes", minutes);
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.dir(min15);
          min15.play();
          resolve("Успіх!"); // Є! Все пройшло добре!
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
  // console.log("start clicked=");
  const moment = new Date();
  const minutes = moment.getMinutes();
  // console.log("minutes=", minutes);
  // const lastMinutes = 36 - (minutes % 30);
  let lastMinutes;
  console.log("minutes - 36=", minutes - 36);
  minutes - 36 < 0
    ? (lastMinutes = minutes + 36 - minutes)
    : (lastMinutes = 36 + (minutes - 36));

  console.log("lastMinutes=", lastMinutes);

  switch (minutes) {
    case 06:
      // console.log("minutes=", minutes);
      min30.play();
      setInterval(() => {
        min30.play();
      }, 30 * 60 * 1000);
      break;
    case 36:
      // console.log("minutes=", minutes);
      min30.play();
      setInterval(() => {
        min30.play();
      }, 30 * 60 * 1000);
      break;
    default:
      console.log("lastMinutes=", lastMinutes);
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.dir(min15);
          min30.play();
          resolve("Успіх!"); // Є! Все пройшло добре!
        }, lastMinutes * 60 * 1000);
      }).then((data) => {
        setInterval(() => {
          min30.play();
        }, 30 * 60 * 1000);
      });
      break;
  }
};

startBtn.onclick = (params) => {
  console.dir(startBtn);
  if (!started) {
    startBtn.textContent = "Timers are started";
    started = true;
  }
  // else {
  //   startBtn.textContent = "Sart timers";
  //   started = false;
  // }
  timer15();
  timer30();
};

// window.addEventListener("load", min15play);
