console.log("Hello arrays")

/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(50,30));

/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

function maxOfThree(a, b, c) {
  maxOfThree = a;
  if (maxOfThree < b) {
  maxOfThree = b;
  }
  if (maxOfThree < c) {
  maxOfThree = c;
  }
  return maxOfThree;
  };
  console.log(maxOfThree(500, 60, 20));

  // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


   var isVowel = function(char) {
     var vowel = ['a','e','i','o','u'];

      for (var i = 0; i < vowel.length; i++) {
        if (char  === vowel[i]) {
          return true;}
      }
        return false;
      };
      console.log(isVowel('c'));



  /* Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. */



var sumArray = [1,2,3,4].reduce(function(a, b) {
  return a+b;
}, 0);

console.log(sumArray);


/* multiplyArray([1,2,3,4]) should return 24. */

var multiplyArray = [1,2,3,4].reduce(function(a, b) {
  return a*b;
});

console.log(multiplyArray);
