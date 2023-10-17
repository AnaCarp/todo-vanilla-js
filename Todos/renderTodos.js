import { toDos } from "../Database/todos.js";

export function renderTodos() {
  document.getElementById("toDos").innerHTML = "<h1>My To-Do's</h1>";
  toDos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.id = todo.id;

    const todoTask = document.createElement("span");
    todoTask.textContent = todo.taskName + " ";
    todoTask.classList.add("taskName");
    todoDiv.appendChild(todoTask);

    const todoStatus = document.createElement("span");
    todoStatus.textContent = todo.status + " ";
    todoStatus.classList.add("taskStatus");
    todoDiv.appendChild(todoStatus);

    const todoList = document.getElementById("toDos");
    todoList.appendChild(todoDiv);
  });
}
