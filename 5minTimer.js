const min5 = document.getElementById("min5");
const min5Bell = document.getElementById("min5Bell");

min5Bell.volume = 0.08;

function startTimer(duration = 5 * 60, display = min5) {
  let timer = duration,
    minutes,
    seconds;
  return setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

min5.onclick = () => {
  const countDownId = startTimer(10);
  setInterval(() => {
    clearInterval(countDownId);
    min5Bell.play();
    min5.textContent = "5 min timer";
  }, 10 * 1000);
};
