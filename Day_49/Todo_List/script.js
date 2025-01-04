const form = document.querySelector("form");
const todoInput = document.getElementById("todo");
const todosUL = document.getElementsByClassName("todos")[0];

const todos = JSON.parse(localStorage.getItem("todos"));

console.log(todos);

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = todoInput.value;

  console.log(todo);
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoElm = document.createElement("li");
    if (todo && todo.completed) {
      todoElm.classList.add("completed");
    }

    todoElm.innerText = todoText;

    todoElm.addEventListener("click", () => {
      todoElm.classList.toggle("completed");
      updateLocalStorage();
    });

    todoElm.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElm.remove();
      updateLocalStorage();
    });

    todosUL.append(todoElm);

    todoInput.value = "";

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const todosElms = document.querySelectorAll("li");
  const todos = [];

  todosElms.forEach((todoElm) => {
    todos.push({
      text: todoElm.innerText,
      completed: todoElm.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
