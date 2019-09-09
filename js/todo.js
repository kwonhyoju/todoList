const todoForm = document.querySelector(".js-todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("ul");

const TODO_LS = "todoList";
let arrayTodo = [];

function deleteTodo(event) {
  const delTodoTarget = event.target;
  const delParent = delTodoTarget.parentNode;
  todoUl.removeChild(delParent);
  const filter = arrayTodo.filter(todo => {
    return todo.id !== parseInt(delParent.id);
  });
  arrayTodo = filter;
  saveLs();
}

function saveLs() {
  const todo_Ls = localStorage.setItem(TODO_LS, JSON.stringify(arrayTodo));
}

function paintTodo(text) {
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  const delBtn = document.createElement("button");
  const createId = arrayTodo.length + 1;
  createSpan.innerText = text;
  delBtn.innerText = "delete";

  delBtn.addEventListener("click", deleteTodo);

  createLi.appendChild(createSpan);
  createLi.appendChild(delBtn);
  todoUl.appendChild(createLi);

  createLi.id = createId;

  todoInput.value = "";

  const todoObj = {
    text,
    id: createId
  };
  arrayTodo.push(todoObj);
  saveLs();
}

function handleSubmit(event) {
  event.preventDefault();
  const getList = todoInput.value;
  paintTodo(getList);
}

function todoValue() {
  const getTodo = localStorage.getItem(TODO_LS);

  if (getTodo !== null) {
    const parsedTodo = JSON.parse(getTodo);
    parsedTodo.forEach(todo => {
      paintTodo(todo.text);
    });
  }
}

function init() {
  todoValue();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
