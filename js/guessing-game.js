/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

function generateWinningNumber (){
    return Math.floor(Math.random()* 100);
}

console.log(generateWinningNumber());


function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


  function playersGuessSubmission(num1,num2,num3,num4,num5){
    if (num1 && num2 && num3 && num4 && num5 < 1) {
      return "That is an invalid guess";
    }
    if (num1 && num2 && num3 && num4 && num5 > 100){
      return "That is an invalid guess";
    }
    if (num1 && num2 && num3 && num4 && num5 === NaN){
      return "That is an invalid guess";
    }
    checkGuess();


  }

  function gameObjectMethods(){
    let a = playersGuessSubmission(num1,num2,num3,num4,num5);
    let diff = (generateWinningNumber() - a)
    
    return diff

  }

  function checkGuess(){
    let pastGuesses = [];
    let correctGuess = generateWinningNumber();
    if(playersGuessSubmission == correctGuess){
      return "You win!"
    }
    if(playersGuessSubmission == playersGuessSubmission){
      return "You have already guessed that number";
    }
    if(playersGuessSubmission !== playersGuessSubmission && correctGuess){
      return playersGuessSubmission.push(pastGuesses);
    }
    if(pastGuesses.length >= 5){
      return "You Lose."
    }
    gameObjectMethods();
    if(diff < 10){
      return "You're burning up!"
    }
    if(diff < 25){
      return "You're lukewarm."
    }
    if(diff < 50){
      return "You're a bit chilly"
    }
    if(diff < 100){
      return "You're ice cold!"
    }

    
  }

  

