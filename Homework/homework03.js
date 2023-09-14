/* Task1
Requirement:
Write a  program that generates 3 random numbers
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is
greater or equals 50.
Print false if the average of the random numbers is less
than 50.
Test data 1:
20, 70, 25
Expected Output 1:
false
Test data 2:
65, 80, 90
Expected Output 2:
true*/

  console.log('Output for Task1\n');
  let n1 = Math.ceil(Math.random()*100);
  let n2 = Math.ceil(Math.random()*100);
  let n3 = Math.ceil(Math.random()*100);
  let avg = Math.floor((n1+n2+n3)/3)
  // console.log('num', n1,n2,n3,avg )

  if(avg === 50) {
    console.log(true)
  }else {
    console.log( false)
  }
  /* Task-2
  Requirement:
Write a  program that generates 3 random numbers
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1:
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2:
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3:
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4:
DOUBLE MATCH*/
console.log('\nOutput for Task2\n');
let num1 = Math.ceil(Math.random()*3);
let num2 = Math.ceil(Math.random()*3);
let num3 = Math.ceil(Math.random()*3);
// console.log(num1, num2, num3)
if((num1 === num2) && (num2 === num3)){
  console.log('TRIPLE MATCH')
}else{
  if((num1 === num2)||(num2 === num3)|| (num1 === num3)){
    console.log('DOUBLE MATCH');
  }
  else {
    console.log('NO MATCH')
  }

}
/*Task-3
Requirement:
Write a function named as hasA() which takes a string
word as an argument and returns true if given string
has a character "a" or "A", and false otherwise when
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true*/
console.log('\nOutput for Task3\n')
function hasA(word){
  if((word.includes('a') )||( word.includes('A')))  return true;
  else return false;
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

/*Task-4
Requirement:
Write a function named as doubleOrTripleWord()
which takes a string word as an argument and returns
the given word back tripled if the string length is even
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"*/
console.log('\nOutput for Task4\n')
function doubleOrTripleWord(word) {
  if(word.length%2) {
    return word.padStart(2*word.length, word)
  }else {
    return word.padStart(3*word.length, word)
  }
 }
 console.log(doubleOrTripleWord("Tech"));
 console.log(doubleOrTripleWord("Apple")) ;
 console.log(doubleOrTripleWord("") );
 console.log(doubleOrTripleWord("") );
 console.log(doubleOrTripleWord("1") );
 console.log(doubleOrTripleWord("22"));
/*Task-5
Requirement:
Write a function named as firstWord() which takes a
string word as an argument and returns the first word
from the given string when invoked.
NOTE: Return empty string if the given string does not
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""*/
console.log('\nOutput for Task5\n')
function firstWord(word) {
  return word.slice(0, word.indexOf(" "));
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript") );
console.log(firstWord("Hello"));
console.log(firstWord("") );
console.log(firstWord("    "));

/*Task-6
Requirement:
Write a function named as lastWord() which takes a
string word as an argument and returns the last word
from the given string when invoked.
NOTE: Return empty string if the given string does not
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""*/
console.log('\nOutput for Task6\n');
function lastWord(words){
  return words.slice(words.lastIndexOf(' ')+1);
}
console.log(lastWord("Hello World") );
console.log(lastWord("I like JavaScript") );
console.log(lastWord("Hello") );
console.log(lastWord("") );
console.log(lastWord("    "));
console.log();

/*Task-7
Requirement:
Write a function named as firstlastWord() which takes
a string word as an argument and returns the first and
last words from the given string when invoked.
NOTE: Return empty string if the given string does not
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""*/

console.log('\nOutput for Task7\n');
function firstLastWord(words) {
  return words.slice(0, words.indexOf(" "))+words.slice(words.lastIndexOf(' ')+1);
}
console.log(firstLastWord("Hello World") );
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello") );
console.log(firstLastWord("") );
console.log(firstLastWord("    ") );

/*Task-8
Requirement:
Write a function named as startVowel() which takes a
string word as an argument and returns true if given
string starts with a vowel, and false otherwise when
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false*/
console.log('\nOutput for Task8\n');
function startVowel(word) {
  let vowels = "aeiouAEIOU"
  if(vowels.includes(word[0])) return true;
  else return false;
}
console.log(startVowel("Hello") );
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel("") );
console.log(startVowel("    ") );
console.log(startVowel("123") );
/*Task-9
Requirement:
Write a function named as swap4() which takes a
string word as an argument and returns the string back
with its first and last 4 characters swapped when
invoked.
NOTE: Return empty string if the given string does not
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""*/
console.log('\nOutput for Task9\n');
function swap4(word) {
  if(word.length < 8) return '';
  else {
    return word.slice(-4)+word.slice(4,-4)+word.slice(0,4)
  }
}
console.log(swap4("abc") );
console.log(swap4("JavaScript") );
console.log(swap4("TechGlobal") );
console.log(swap4("") );
console.log(swap4("    ") );
console.log(swap4("Apple") );


/*Task-10
Requirement:
Write a function named as swapFirstLastWord()
which takes a string word as an argument and returns
the string back with its first and last words swapped
when invoked.
NOTE: Return empty string if the given string does not
have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/
console.log('\nOutput for Task10\n');
function swapFirstLastWord(words) {
  let firstWord = words.slice(0,words.indexOf(" "));
  let lastWord =words.slice(words.lastIndexOf(' ')+1)
  let middleWord = words.slice(words.indexOf(' '), words.lastIndexOf(' ')+1)
  if(!words.includes(' ') || lastWord.length === 0) return " ";

  else return lastWord+middleWord+firstWord
}
console.log(swapFirstLastWord("Hello World") );
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    ") );
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));