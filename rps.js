document.getElementById("RPS-Button").addEventListener("click", GameRPS());

function GameRPS() {
  const app = document.querySelector("#app");

  const button1 = document.createElement("button");
  button1.classList.add("Botón", "Piedra");
  button1.textContent = "Piedra";
  app.appendChild(button1);

  const button2 = document.createElement("button");
  button2.classList.add("Botón", "Papel");
  button2.textContent = "Papel";
  app.appendChild(button2);

  const button3 = document.createElement("button");
  button3.classList.add("Botón", "Tijera");
  button3.textContent = "Tijera";
  app.appendChild(button3);
}