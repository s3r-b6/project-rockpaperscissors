// Piedra:0 | Papel:1 | Tijera: 2  || 2>1 || 3>2 || 1>3 ?????????

//función que contiene todo el código
function PlayRPS() {
  //función que genera aleatoriamente el pick del ordenador
  function computerPick() {
    let random = Math.floor(Math.random() * 10);
    if (random <= 3) {
      return 0;
    } else if (random > 3 && random <= 6) {
      return 1;
    } else if (random > 6 && random <= 10) {
      return 2;
    }
  }

  /* modular arithmetic:
    no entiendo bien el concepto, pero funciona; esta es la demostración más fácil pero  (https://math.stackexchange.com/q/391185):
    % 3, option k beats option k+1 and is beaten by option k−1

    muy interesante: https://en.wikipedia.org/wiki/Modular_arithmetic
  */
  var UserChoice;
  var CompChoice;
  var pointsuser = 0;
  var pointspc = 0;

  //función principal
  function GameRPS() {
    //empate
    if (UserChoice == CompChoice) {
      round--;
    } else if ((UserChoice + 1) % 3 == CompChoice % 3) {
      pointspc++;
      document.getElementById("computer-points").innerText = pointspc;
      if (pointspc == 3) {
        restart("El ordenador gana la partida!");
      }
    } else {
      pointsuser++;
      document.getElementById("player-points").innerText = pointsuser;
      if (pointsuser == 3) {
        restart("Felicidades, tú ganas!");
      }
    }
    function restart(winner) {
      //botón de replay invisible
      //summon winnerscreen; add winner text
      document.getElementById("replay-b").classList.add("f-inv");
      document.getElementById("WinnerScreen").classList.remove("inv");
      document.getElementById("Winner").innerText(winner);
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

  //enseña los picks
  function showPicks() {
    var rPlaceU = document.querySelector(".user-selection-r");
    var pPlaceU = document.querySelector(".user-selection-p");
    var sPlaceU = document.querySelector(".user-selection-s");

    var rPlaceC = document.querySelector(".comp-selection-r");
    var pPlaceC = document.querySelector(".comp-selection-p");
    var sPlaceC = document.querySelector(".comp-selection-s");

    //USER
    setTimeout(() => {
      makeinv(".button.user");

      //hace aparecer el botón de replay
      document.getElementById("replay-b").classList.remove("f-inv");

      //hace aparecer el pick
      if (UserChoice == 0) {
        rPlaceU.classList.replace("f-inv", "f-vis");
      } else if (UserChoice == 1) {
        pPlaceU.classList.replace("f-inv", "f-vis");
      } else if (UserChoice == 2) {
        sPlaceU.classList.replace("f-inv", "f-vis");
      }
    }, 200);

    //PC
    setTimeout(() => {
      //hace invisibles los botones
      makeinv(".button.pc");

      //hace aparecer el pick
      if (CompChoice == 0) {
        rPlaceC.classList.replace("f-inv", "f-vis");
      } else if (CompChoice == 1) {
        pPlaceC.classList.replace("f-inv", "f-vis");
      } else if (CompChoice == 2) {
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

  var round = 0;

  function addRound() {
    round++;
    document.getElementById("contador-rondas").innerText = "Ronda " + round;
  }

  //log debug
  piedra.addEventListener("click", () => {
    UserChoice = 0;
    CompChoice = computerPick();

    console.log("us:" + UserChoice + " vs " + "pc:" + CompChoice);

    GameRPS();
    showPicks();
    addRound();
  });
  papel.addEventListener("click", () => {
    UserChoice = 1;
    CompChoice = computerPick();

    console.log("us:" + UserChoice + " vs " + "pc:" + CompChoice);

    GameRPS();
    showPicks();
    addRound();
  });
  tijera.addEventListener("click", () => {
    UserChoice = 2;
    CompChoice = computerPick();

    console.log("us:" + UserChoice + " vs " + "pc:" + CompChoice);

    GameRPS();
    showPicks();
    addRound();
  });

  //if bool partida terminada = true then make visible the replay button?
  document.querySelector("#replay-b").addEventListener("click", () => {
    //vuelve al pick invisible
    let elements = document.querySelectorAll(".f-vis");
    [].forEach.call(elements, function (el) {
      el.classList.replace("f-vis", "f-inv");
    });
    //se vuelve a si mismo invisible
    document.getElementById("replay-b").classList.add("f-inv");
    //vuelve visibles a los botones
    setTimeout(() => makevis(".button"), 200);
  });
  //restart partida
  document.querySelector("#replay-g").addEventListener("click", () => {
    document.querySelector("#WinnerScreen").classList.add("inv");
    pointspc = 0;
    pointsuser = 0;
    round = 0;
    document.getElementById("contador-rondas").innerText = 'Ronda '+round;
    document.getElementById("computer-points").innerText = pointspc;
    document.getElementById("player-points").innerText = pointsuser;
  });
}
window.onload = PlayRPS;
