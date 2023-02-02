var userChoice;
var compChoice;
var wins = 0;
var losses = 0;
var chances = 9;

var guesses = [];

function findLetter(){
var letters  = ['a','b','c','d','e','f','g','h','i',
'j','k','l','m','n','of','p','q','r',
's','t','u','v','w','x','y','z'];

var randomLetter = Math.floor(Math.random() * letters.length);
return letters[randomLetter];
}
function monitor(result){
  if(result === 'win'){
       console.log('You win');
      console.log("Chances: ",chances);
      console.log("Your guesses: ",userGuess);
  }else if (result==='lost'){
    console.log('You lost')
    console.log("Chances: ",chances);
    console.log("Your guesses: ",userGuess);
  }
  console.log("Wins: ",wins);
  console.log("Losses: ",losses);
}

window.addEventListener("keyup", e =>{
  userGuess = e.key.toLowerCase();
  compChoice = findLetter();
  if(userGuess === compChoice){
    wins++;
    guesses.length = 0; 
    monitor('win');
    answer = findLetter();
    guesses=[];
  }else if(chances === 0){
    guesses.push(userGuess);
    losses=0;
    wins=0;
    chances = 9;
    guesses.length = 0;
    console.log(guesses);
    console.log("You don't have a chance to use")
    answer = findLetter();
  }else if(userGuess !== compChoice){
    guesses.push(userGuess);
    losses++;
    monitor('lost');
    console.log(guesses);
    chances--;
    
  }

})
/*function processGuess(e){
const userGuess = e.key.toLowerCase();

if (/^[a-z]+$/.test(userGuess) && guesses.indexOf(userGuess) == -1) {
  guesses.push(userGuess);

  if (userGuess === answer) {
    // the guess is correct
    wins++;
    chances = 9;
    guesses.length = 0; 
    alert(`That's right! The letter is ${answer}`);
    answer = getNewAnswer();
  } else if (chances === 1) {
    // all chances are used
    losses++;
    chances = 9;
    guesses.length = 0;
    alert(`Whoops you lose! The correct letter is ${answer}`);
    answer = getNewAnswer();
  } else if (userGuess !== answer) {
    // the guess is wrong
    alert(`Not ${userGuess}! Try again`);
    chances--;
  }

  let html = `<p>Your previous choice(s): </p> 
    <p> ${guesses.join(", ")} </p> 
    <p>wins: ${wins} </p> 
    <p>losses: ${losses} </p> 
    <p>chances left: ${chances} </p>`;
  document.querySelector("#currentSituation").innerHTML = html;
}
}
let html = `<p>Your previous guess(es): </p> 
<p> ${guesses.join(", ")} </p> 
<p>wins: ${wins} </p> 
<p>losses: ${losses} </p> 
<p>chances left: ${chances} </p>`;
document.getElementById("currentSituation").innerHTML = html;*/