const weatherSpan = document.querySelector(".js-weather");
const API_KEY = "2b7de9006d7345a8230319eb6b9a8532";
const LS_COORDS = "coords";

function weather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(json) {
      return json.json();
    })
    .then(function(json) {
      const location = json.name;
      const temperature = json.main.temp;
      weatherSpan.innerText = `${location} : ${temperature.toFixed(1)} ℃`;
    });
}

function saveGeoLocation(geo) {
  localStorage.setItem(LS_COORDS, JSON.stringify(geo));
}

function handleError() {
  console.log("error");
}

function handleSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  succesGeoObj = {
    latitude,
    longitude
  };

  saveGeoLocation(succesGeoObj);
  weather(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleSucces, handleError);
}

function loadLocation() {
  const coords = localStorage.getItem(LS_COORDS);
  if (coords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(coords);
    weather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadLocation();
}

init();
