import { toDos } from "../Database/todos.js";
import { renderTodos } from "../Todos/renderTodos.js";
export function addToDo(e) {
  e.preventDefault();
  console.log("vrei sa adaugi un task");
  let newId = toDos[toDos.length - 1].id + 1;
  let newToDo = {};
  newToDo.id = newId;
  newToDo.taskName = document.getElementById("addEditTaskName").value;
  newToDo.status = document.getElementById("addEditTaskStatus").value;

  toDos.push(newToDo);
  console.log(toDos);

  renderTodos();
}
