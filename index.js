const min15 = document.getElementById("min15");
const min15Indicator = document.getElementById("min15Indicator");

const min30 = document.getElementById("min30");
const min30Indicator = document.getElementById("min30Indicator");

const startBtn = document.getElementById("start");

min15.volume = 0.08;
min15Indicator.textContent = "Volume 15 minutes: " + min15.volume;
min15.onvolumechange = () => {
  min15Indicator.textContent = "Volume 15 minutes: " + min15.volume;
};

min30.volume = 0.08;
min30Indicator.textContent = "Volume 30 minutes: " + min30.volume;
min30.onvolumechange = () => {
  min30Indicator.textContent = "Volume 30 minutes: " + min30.volume;
};

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const saveVolumeSettings = document.getElementById("save");
const resetVolumeSettings = document.getElementById("resetVolumes");

const saveVolumeToLocalStorage = () => {
  try {
    localStorage.setItem("min15Volume", min15.volume + "");
    localStorage.setItem("min30Volume", min30.volume + "");
  } catch (error) {
    console.log(`error`, error);
  }
};

saveVolumeSettings.onclick = saveVolumeToLocalStorage;

resetVolumeSettings.onclick = () => {
  min15.volume = 0.08;
  min30.volume = 0.08;
};

function getVolumeFromLocalStorage() {
  try {
    min15.volume = +localStorage.getItem("min15Volume");
    min30.volume = +localStorage.getItem("min30Volume");
  } catch (error) {
    console.log(`error`, error);
  }
}

window.addEventListener("load", async () => {
  getVolumeFromLocalStorage();
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
    } catch (error) {
      console.log(`error`, error);
    }
  }
});
