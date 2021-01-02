const min15 = document.getElementById("min15");
const startBtn = document.getElementById("start");

min15.volume = 0.08;
// console.group("min15=", min15);
// console.log("min15=", min15);
// console.table("min15=", min15);
// console.dir("min15=", min15);
// console.dir(min15);
// min15.muted ? (min15.muted = false) : (min15.muted = true);
// min15.muted = false;
// min15.play();

const timer = () => {
  console.log("start clicked=");
  const moment = new Date();
  const minutes = moment.getMinutes();
  console.log("minutes=", minutes);
  const lastMinutes = 15 - (minutes % 15);
  console.log("lastMinutes=", lastMinutes);

  switch (minutes) {
    case 00:
      console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 15:
      console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    case 30:
      console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
    case 45:
      console.log("minutes=", minutes);
      min15.play();
      setInterval(() => {
        min15.play();
      }, 15 * 60 * 1000);
      break;
    default:
      console.log("minutes", minutes);
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

startBtn.onclick = timer;

// window.addEventListener("load", min15play);
