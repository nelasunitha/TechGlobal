/*Task-1
Requirement:
Write a function named toInitials() which takes a string argument considered
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only.
Examples
toInitials( "Joe Doe")  -> "J. D."
toInitials( "Alex Reyes")  -> "A. R."
toInitials( "Tom Cruise")  -> "T. C."
toInitials( "Bruce Willis")  -> "B. W."
toInitials( "Ja Le")  -> "J. L."”*/
function toCamelCase(str) {

  str = str.trim().split(" ");

  let result = `${str[0][0]}. ${str[1][0]}.`
  return result
}
console.log(toCamelCase('Joe Doe'));
 console.log(toCamelCase("Alex Reyes"));
 console.log(toCamelCase("Tom Cruise"));
 console.log(toCamelCase("Bruce Willis"));
 console.log(toCamelCase("Ja Le"))

/*
Task-2
Requirement:
Write a function named hasNumbers() which takes a string argument and
returns true if there is a number and false if there isn’t.
Examples:
hasNumbers("")  -> false
hasNumbers("John is 34 years old")  -> true
hasNumbers("Hello 3")  -> true
hasNumbers("125$")  -> true
hasNumbers("   a   ")  -> false
hasNumbers("      ")  -> false
hasNumbers("!@#$%^&*()_+")  -> false*/
console.log('Output for Task2\n');
function hasNumbers(str) {

  str = str.trim();
  for(let i =0; i < str.length; i++) {
   if(!isNaN(str[i])) return true;

  }
  return false;
}
console.log(hasNumbers(''));
 console.log(hasNumbers('John is 34 years old'));
 console.log(hasNumbers("Hello 3"));
 console.log(hasNumbers("125$"));
 console.log(hasNumbers("   a   "));
 console.log(hasNumbers('      '));
 console.log(hasNumbers("!@#$%^&*()_+"))

/*Task-3
Requirement:
Write a function named elementLength() which takes an array argument and
returns the length of each element as a separate array.
Examples:
elementLength( [ "Hello", "World" ] )  -> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )  -> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] )  -> [ 3, 8, 4 ]
elementLength( [ ] )  -> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )  -> [ 10, 0, 6, 10 ]"*/
console.log('Output for Task3\n');
function elementLength(arr) {
  return arr.map(el =>  el.length)
  // let result = []
  // for(let i =0; i < str.length; i++) {
  //  result.push(str[i].length)
  // }
  // return result;
}
console.log(elementLength([ "Hello", "World" ]));
 console.log(elementLength( ["Apple", "Banana", "Orange", "Pear" ] ));
 console.log(elementLength(["BMW", "Mercedes", "Audi" ]));
 console.log(elementLength([ ]));
 console.log(elementLength(["Trampoline", "", "Tennis", "Basketball" ]));

/*Task-4
Requirement:
Write a function named isArraySumEvenOrOdd() which takes an array of
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] )  -> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] )  ->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”*/
console.log('Output for Task4\n');
function isArraySumEvenOrOdd(elLengths) {
  // let elLengths = arr.map(el =>  el.length)
  let sum =0;
  for(let i =0; i < elLengths.length; i++) {
    sum+= elLengths[i];
  }
  if((Math.abs(sum)%2)) return  "odd"
  else return 'even'
}

console.log(isArraySumEvenOrOdd([ ] ));
console.log(isArraySumEvenOrOdd( [0,-1,-5 ]));
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ));
console.log(isArraySumEvenOrOdd([ 0,0 ]));
console.log(isArraySumEvenOrOdd([ 1,1,1,1,1 ]));

/*Task-5
Requirement:
Write a function named reverse() which takes a string argument and returns the given string
reversed.
Examples:
reverse("Hello World")  -> "dlroW olleH"
reverse("TechGlobal")  -> "labolGhceT"
reverse("Basketball is fun")  -> "nuf si llabteksaB"
reverse("")  -> ""
reverse("Apples 456")  -> "654 selppA"*/
console.log('Output for Task5\n');
function reverse(str) {
let words = str.split(' ').reverse();
const reversedWords = [];
for (const word of words) {
  reversedWords.push(reverseWord(word));
}

return reversedWords.join(" ");
}

function reverseWord(word) {
return word.split("").reverse().join("");
}


console.log(reverse("Hello World"))
console.log(reverse("TechGlobal") );
console.log(reverse("Basketball is fun"));
console.log(reverse(""))
console.log(reverse("Apples 456") )
/* Task-6
Requirement:
Write a function named reverseWords() which takes a string argument and returns a string
with each word within that string reversed but still in the same order as the initial string.
Examples:
reverseWords("Hello World")  -> "olleH dlroW"
reverseWords("TechGlobal")  -> "labolGhceT"
reverseWords("Basketball is fun")  -> "llabteksaB si nuf"
reverseWords("")  -> "”
reverseWords("Apples 456")  -> "selppA 654"*/
console.log('\nOutput for Task6');
function reverseWords(str) {
  const words = str.trim().split(" ");
  const reversedWords = [];

  for (const word of words) {
      reversedWords.push(reverseWord(word));
  }

  return reversedWords.join(" ");
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}
console.log(reverseWords("Hello World"))
console.log(reverseWords("TechGlobal") );
console.log(reverseWords("Basketball is fun"));
console.log(reverseWords(""))
console.log(reverseWords("Apples 456") )
