const todoForm = document.querySelector(".js-todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("ul");

const TODO_LS ="todoList";

function paintTodo (text){
    console.log(text);
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    createSpan.innerText = text;
    delBtn.innerText= "delete";

    createLi.appendChild(createSpan);
    createLi.appendChild(delBtn);
    todoForm.appendChild(createLi);
    todoInput.value='';
}

function handleSubmit(event){
    event.preventDefault();
    const getList = todoInput.value;
    paintTodo(getList);
}

function todoValue (){
    const getTodo = localStorage.getItem(TODO_LS);

    if(getTodo !== null){

    }
}

function init(){
    todoValue();
    todoForm.addEventListener("submit",handleSubmit);
}

init();