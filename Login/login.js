import { users } from "../Database/users.js";

export function login(e) {
  e.preventDefault();

  const loginEmail = document.querySelector("#loginEmail");
  const loginPassword = document.querySelector("#loginPassword");

  console.log(
    `vrei sa te autentifici ${loginEmail.value} si ${loginPassword.value}}`
  );

  let user = users.filter(function (user) {
    return user.email === loginEmail.value;
  });
  console.log(user[0]);
  if (user[0]) {
    console.log("utilizator gasit:" + user[0]);
    if (user[0].password === loginPassword.value) {
      console.log("utilizator autentificat");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", user[0].name);

      document.getElementById("login").setAttribute("hidden", true);
      document.getElementById("register").setAttribute("hidden", true);
      document.getElementById("user").removeAttribute("hidden");
    } else {
      console.log("parola gresita!");
    }
  } else {
    console.log("utilizatorul nu exista");
  }
}
