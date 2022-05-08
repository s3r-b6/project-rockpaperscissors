// Piedra:0 | Papel:1 | Tijera: 2  || 2>1 || 3>2 || 1>3 ?????????

//función que contiene todo el código
function PlayRPS() {
  //función que genera aleatoriamente el pick del ordenador
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

  /* modular arithmetic:
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

  //hace invisibles los botones
  function makeinv(item) {
    let elems = document.querySelectorAll(item);
    [].forEach.call(elems, function (el) {
      el.className += " invisible";
    });
  }
  //hace visibles los botones
  function makevis(item) {
    let elems = document.querySelectorAll(item);
    [].forEach.call(elems, function (el) {
      el.classList.remove("invisible");
    });
  }

  function showPicks() {
    let rPlaceU = document.querySelector(".user-selection-r");
    let pPlaceU = document.querySelector(".user-selection-p");
    let sPlaceU = document.querySelector(".user-selection-s");

    let rPlaceC = document.querySelector(".comp-selection-r");
    let pPlaceC = document.querySelector(".comp-selection-p");
    let sPlaceC = document.querySelector(".comp-selection-s");

    //USER
    setTimeout(() => {
      makeinv(".button.user");

      //hace aparecer el pick
      if ((userChoice = 0)) {
        rPlaceU.classList.replace("f-inv", "f-vis");
      } else if ((userChoice = 1)) {
        pPlaceU.classList.replace("f-inv", "f-vis");
      } else if ((userChoice = 2)) {
        sPlaceU.classList.replace("f-inv", "f-vis");
      }

      //
    }, 200);

    //PC
    setTimeout(() => {
      //hace invisibles los botones
      makeinv(".button.pc");

      //hace aparecer el pick
      if ((CompChoice = 0)) {
        rPlaceC.classList.replace("f-inv", "f-vis");
      } else if ((CompChoice = 1)) {
        pPlaceC.classList.replace("f-inv", "f-vis");
      } else if ((CompChoice = 2)) {
        sPlaceC.classList.replace("f-inv", "f-vis");
      }
    }, 600);
  }

  const piedra = document.getElementById("piedra-us");
  const papel = document.getElementById("papel-us");
  const tijera = document.getElementById("tijera-us");

  //(https://stackoverflow.com/a/24050476) Para pasarle un argumento al eventhandler inline hay que usar una función anónima
  //Tb esta es la razón por la que el addEventListener no estaba funcionando
  // Tb se puede usar el bind (pasa a la función un array con parámetros):
  //tijera.onclick = GameRPS.bind(this, [2]);

  piedra.addEventListener("click", () => {
    GameRPS(0);
    showPicks();
  });
  papel.addEventListener("click", () => {
    GameRPS(1);
    showPicks();
  });
  tijera.addEventListener("click", () => {
    GameRPS(2);
    showPicks();
  });

  //if bool partida terminada = true then make visible the replay button?

  document.querySelector("#replay-b").addEventListener("click", () => {
    //vuelve al pick invisible
    let elements = document.querySelectorAll(".f-vis");
    [].forEach.call(elements, function (el) {
      el.classList.replace("f-vis", "f-inv");
    });
    //vuelve visibles a los botones
    setTimeout(() => makevis(".button"), 200);
  });

  //TODO: entender el scope porque esto es un desastre.
}
window.onload = PlayRPS;
