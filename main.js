import { login } from "./Login/login.js";
import { logout } from "./Login/logout.js";
import { toDos } from "./Database/todos.js";
import { users } from "./Database/users.js";
import { addToDo } from "./Todos/add.js";
import { renderTodos } from "./Todos/renderTodos.js";

const loginButton = document.querySelector("#loginSubmit");
loginButton.addEventListener("click", login);

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  document.getElementById("greetings").textContent =
    "Salut " + localStorage.getItem("username");
  document.getElementById("login").setAttribute("hidden", true);
  document.getElementById("register").setAttribute("hidden", true);
  document.getElementById("user").removeAttribute("hidden");
}

const logoutButton = document.querySelector("#logout");
logoutButton.addEventListener("click", logout);

renderTodos();

const addTaskButton = document.querySelector("#addEditSubmit");
addTaskButton.addEventListener("click", addToDo);
