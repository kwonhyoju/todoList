const nameForm = document.querySelector(".js-form");
const nameInput = document.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USERNAME = "currentUser";
const SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(USERNAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = nameInput.value;
  saveName(inputValue);
  currentUserName(inputValue);
}

function askName() {
  nameForm.classList.add(SHOWING);
  nameForm.addEventListener("submit", handleSubmit);
}

function currentUserName(name) {
  nameForm.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `HELLOW ${name}!`;
}

function loadName() {
  const userName = localStorage.getItem(USERNAME);
  if (userName === null) {
    askName();
  } else {
    currentUserName(userName);
  }
}

function init() {
  loadName();
}

init();
