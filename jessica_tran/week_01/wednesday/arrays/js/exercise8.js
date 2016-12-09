//THE WORD GUESSER
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

var wordArray = ['F','O', 'O', 'D'];
var guessArray = ['_', '_', '_', '_'];

/*Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.*/


// if 'letter' is equal to an element in the wordArray at an index of i, replace the element inside the guessArray at the index of i with the 'letter'.
var guessLetter = function (letter){
  for (var i = 0; i<wordArray.length; i++){
    if (letter.toUpperCase() === wordArray[i] ){
      guessArray[i] = letter.toUpperCase();
      console.log ("Congratulations, you found a new letter!")
    }
  }

  // if wordArray and guessArray as a string is equal, then the user has won.
  console.log(guessArray);
  if (wordArray.toString() === guessArray.toString()){
    console.log ("Congratulations, you have found the word and have won the game!");
  }
}

//introduction to the game, tells user what to type.
console.log(guessArray + " Type in 'guessLetter('x')' and replace x with your guess");


// guessLetter('O');
// guessLetter('F');
// guessLetter('D');
