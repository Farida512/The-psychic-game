var userChoice;
var compChoice;
let wins = 0;
let losses = 0;
let chances = 9;

let guesses = [];

function findLetter() {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'of', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var randomLetter = Math.floor(Math.random() * letters.length);
  return letters[randomLetter];
}



document.addEventListener("keyup", e => {
  userGuess = e.key.toLowerCase();
  compChoice = findLetter();
  if (/^[a-z]+$/.test(userGuess) && guesses.indexOf(userGuess) == -1) {
    guesses.push(userGuess);
    if (userGuess === compChoice) {
      wins++;
      chances = 9;
      guesses.length = 0;
      alert(`That's right! The letter is ${compChoice}`);
      answer = findLetter();
      guesses = [];
    } else if (chances === 0) {
      guesses.push(userGuess);
      losses = 0;
      wins = 0;
      chances = 9;
      guesses.length = 0;
      alert(`Whoops you lose! The correct letter is ${compChoice}`);
      answer = findLetter();
    } else if (userGuess !== compChoice) {
      
      losses++;
      alert(`Not ${userGuess}! Try again`);
      chances--;
    }

    let html = `
        <p>Wins: ${wins} </p> 
        <p>Losses: ${losses} </p> 
        <p>Chances left: ${chances} </p>
        <p>Your guesses so far: </p> 
        <p> ${guesses.join(", ")} </p> `;
    document.querySelector("#container").innerHTML = html;
  }

});
let html = `
                <p>Wins: ${wins} </p> 
                <p>Losses: ${losses} </p> 
                <p>Chances left: ${chances} </p>
                <p>Your guesses so far: </p> 
                <p> ${guesses.join(", ")} </p> `;
document.querySelector("#container").innerHTML = html;