let jsClock = document.querySelector(".js-clock");
let timerText = jsClock.querySelector("h1");

function handleTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const second = time.getSeconds();

  timerText.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  setInterval(handleTime, 1000);
}

init();
