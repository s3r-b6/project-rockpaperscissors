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
  function showPicks() {
    const rPlaceU = document.getElementsByClassName("user-selection-r");
    const pPlaceU = document.getElementsByClassName("user-selection-p");
    const sPlaceU = document.getElementsByClassName("user-selection-s");

    const rPlaceC = document.getElementsByClassName("comp-selection-r");
    const pPlaceC = document.getElementsByClassName("comp-selection-p");
    const sPlaceC = document.getElementsByClassName("comp-selection-s");

    //hace invisibles los botones
    function makeinv(item) {
      let elems = document.querySelectorAll(item);
      [].forEach.call(elems, function (el) {
        el.className += " invisible";
      });
    };

    //USER
    setTimeout(() => {
      makeinv(".button.user");

      //hace aparecer el pick
      if ((userChoice = 0)) {
        rPlaceU.className.replace("finalPick");
      } else if ((userChoice = 1)) {
        pPlaceU.className.replace("finalPick");
      } else if ((userChoice = 2)) {
        sPlaceU.className.replace("finalPick");
      }

      //
    }, 200);

    //PC
    setTimeout(() => {
      //hace invisibles los botones
      makeinv(".button.pc");

      //hace aparecer el pick
      if ((CompChoice = 0)) {
        rPlaceC.className.replace("finalPick");
      } else if ((CompChoice = 1)) {
        pPlaceC.className.replace("finalPick");
      } else if ((CompChoice = 2)) {
        sPlaceC.className.replace("finalPick");
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

  document.querySelector("#replay-b").addEventListener("click", () => {
    var elems = document.querySelectorAll(".button");
    [].forEach.call(elems, function (el) {
      el.classList.remove("invisible");
    });

    //TODO: arreglar la función que hace aparecer los picks.
  });
}
window.onload = PlayRPS;
