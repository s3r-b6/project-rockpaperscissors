// Piedra:0 | Papel:1 | Tijera: 2
// 2>1 => gana 1 (piedra)
// 3>2 => gana 2 (tijera)
// 1>3 ?????
// aritmética modular (¿?) usando % se reducen los casos

//UserPick
let userChoice;

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

computerPick();

/* tests
console.log(CompChoice)
userChoice = 0

console.log((userChoice+1)%3)
console.log(CompChoice % 3)

*/

/*
  no entiendo el concepto, pero funciona; esta es una explicación más fácil pero jamás se me habría ocurrido (https://math.stackexchange.com/q/391185):
  % 3, option k beats option k+1 and is beaten by option k−1
*/

function GameRPS() {
  if (userChoice == CompChoice) {
    console.log("Empate!");
  } else if ((userChoice+1)%3 == CompChoice % 3) {
    console.log("Tú ganas!");
  } else{
    console.log("Gana el PC!");
  }
}

GameRPS()