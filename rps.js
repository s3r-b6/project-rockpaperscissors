// Piedra:0 | Papel:1 | Tijera: 2
// 2>1 => gana 1 (piedra)
// 3>2 => gana 2 (tijera)
// 1>3 ?????
function PlayRPS() {
  let CompChoice;
  function computerPick() {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random <= 3) {
      CompChoice = 0;
    } else if (random > 3 && random <= 6) {
      CompChoice = 1;
    } else if (random > 6 && random <= 10) {
      CompChoice = 2;
    }
  }

  /*
    no entiendo bien el concepto, pero funciona; esta es la demostración más fácil pero  (https://math.stackexchange.com/q/391185):
    % 3, option k beats option k+1 and is beaten by option k−1

    muy interesante: https://en.wikipedia.org/wiki/Modular_arithmetic
  */

  function GameRPS(userChoice) {
    computerPick();
    if (userChoice == CompChoice) {
      document.body.append("Empate!");
    } else if ((userChoice + 1) % 3 == CompChoice % 3) {
      document.body.append("Gana el PC!");
    } else {
      document.body.append("Tú ganas!");
    }
  }

  //la idea es cambiar los elementos visibles por invisibles y viceversa.
  function showUserPick() {
    const rPlace = document.getElementsByClassName("user-selection-r");
    const pPlace = document.getElementsByClassName("user-selection-p");
    const sPlace = document.getElementsByClassName("user-selection-s");
    setTimeout(() => {
      //hace invisibles los botones
      var elems = document.querySelectorAll(".button");
      [].forEach.call(elems, function (el) {
        el.className += " invisible";
      });
      if ((userChoice = 0)) {
        rPlace.className.replace("finalPick");
      } else if ((userChoice = 1)) {
        pPlace.className.replace("finalPick");
      } else if ((userChoice = 2)) {
        sPlace.className.replace("finalPick");
      }
    }, 200);
  }

  const piedra = document.getElementById("piedra-us");
  const papel = document.getElementById("papel-us");
  const tijera = document.getElementById("tijera-us");

  //(https://stackoverflow.com/a/24050476) Para pasarle un argumento al eventhandler inline hay que usar una función anónima
  //Tb esta es la razón por la que el addEventListener no estaba funcionando

  piedra.onclick = () => {
    GameRPS(0);
    showUserPick();
  };
  papel.onclick = () => {
    GameRPS(1);
    showUserPick();
  };
  tijera.onclick = () => {
    GameRPS(2);
    showUserPick();
  };

  document.querySelector("#replay-b").onclick = () => {
    var elems = document.querySelectorAll(".button");
    [].forEach.call(elems, function (el) {
      el.className = "button";
    });
  };
  // Tb se puede usar el bind (pasa a la función un array con parámetros):
  //tijera.onclick = GameRPS.bind(this, [2]);

  //idea: cambiar con css la opacidad de los items de forma que aparezca la solución en lugar de spawnearla?

  //el botón de restart aquí lo que haría sería restablecer?
}
window.onload = PlayRPS;
