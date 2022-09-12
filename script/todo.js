const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // 값을 문자열로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement;      // target : html 요소 중에 무엇을 가리키고 있는지
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);  
    toDoList.appendChild(li);
}

function handleToDoSubmit(evnet) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoOgj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoOgj);
    paintToDo(newTodoOgj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const paresdToDos = JSON.parse(savedToDos);      // 문자열을 다시 배열로 변환
    toDos = paresdToDos;
    paresdToDos.forEach(paintToDo);      // forEach : array 각각 item에 대해 function 실행
}