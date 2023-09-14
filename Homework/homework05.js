/* Task 1
Requirement
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive  when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3]) */
console.log('Output for Task1\n');
function countPos(arr){
  let count = 0
  for(let i =0; i < arr.length; i++){
    if(arr[i] > 0) count++;
  }
  return count;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]) )
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))

/* Task 2
Write a function named countA() which takes a string
argument and returns how many A or a there are in the
given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp")
countA("QA stands for Quality Assurance")
countA("Cypress")
*/
console.log('Output for Task2\n');
function countA(str){
  let count = 0
  for(let i =0; i < str.length; i++){
    let char = str[i].toUpperCase();
    if(char === 'A') count++;
  }
  return count;
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/* Task 3
Requirement:
Write a function named as countVowels() which takes a
string word as an argument and returns the count of the vowel
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")
*/
console.log('\nOutput for Task3');
function countVowels(str){
  let count = 0, vowels = 'AEOUIaeoui'
  for(let i =0; i < str.length; i++){
    let char = str[i];
    if(vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""))
/* Task 4
Requirement
Write a function named as countConsonants() which takes a
string word as an argument and returns the count of the
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")
*/
console.log('\nOutput for Task4');
function countConsonants(str){
  let count = 0, vowels = 'AEOUIaeoui'
  for(let i =0; i < str.length; i++){
    let char = str[i];
    if(!vowels.includes(char)) count++;
  }
  return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));
/* Task 5
Requirement
Write a function named countWords() which takes a
string argument and returns the total count of words in
the given string when invoked.
NOTE: Be careful about the extra whitespaces before
and after the string.
Examples:
countWords("     Javascript is fun       ")
countWords("Cypress is an UI automation tool.    ")
countWords("1 2 3 4")
*/
console.log('\nOutput for Task5');
function countWords(str){
  let count = 0, words = str.trim();
  for(let i =0; i < words.length; i++){
    let char = words[i];
    if(char === ' ') count++;
  }
  return count;
}
console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));
/* Task 6
Requirement:
Write a function named as factorial() which takes a
number as an argument and returns the factorial of the
number when invoked.
NOTE: Mathematically, the factorial of a non-negative
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) .*/
console.log('\nOutput for Task6');
function factorial(n){
  let result;
  if(n === 0) result = 1;
  result = 1;
  while(n > 0) {
    result*= n;
    n = n-1;
  }
  return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
/* Task 7
Requirement
Write a function named as isPalindrome() which takes a
string word as an argument and returns true if the word is
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  */
console.log('\nOutput for Task7');
function isPalindrome(string) {
  string = string.toLowerCase();
  for(let i =0, j = string.length-1; i<= j; i++,j--) {
    if(string[i] !== string[j]) return false;
  }
  return true;
}
console.log(isPalindrome("Hello") );
console.log(isPalindrome("Kayak") );
console.log(isPalindrome("civic") );
console.log(isPalindrome("abba") );
console.log(isPalindrome("ab  a") );
console.log(isPalindrome("123454321") );
console.log(isPalindrome("A") );
console.log(isPalindrome(""));


/* Task 8
Requirement
Write a function named as countMultipleWords() which takes
an array as an argument and returns the count of the elements
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) */
console.log('\nOutput for Task8');
function countMultipleWords(str){
  let count = 0;
  for(let i =0; i < str.length; i++){
    let word = str[i].trim();
    if(word.includes(' ')) count++;
  }
  return count;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));

/* Task 9
Requirement
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 3
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  */
console.log('\nOutput for Task9');
function count3OrLess(str){
  let count = 0, words = str.split(' ');
  for(let i =0; i < words.length; i++){
    let word = words[i];
    if(word.length <= 3 && word.length > 0) count++;
  }
  return count;
}
console.log(count3OrLess("Hello") );
console.log(count3OrLess("Hi John") );
console.log(count3OrLess("JavaScript is fun") );
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

/* Task 10
Requirement
-Write a function named as isPrime() which takes a number as an argument and returns true if the number
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided
by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/
console.log('\nOutput for Task10');
function isPrime(num){
  if(num <= 1 ) return false;
  else if(num === 2) return true;
  else {
    for(let i =2; i < num; i++) {
      if(num % i === 0) return false;
    }
    return true;
  }
}
console.log(isPrime(5) );
console.log(isPrime(2) );
console.log(isPrime(29) );
console.log(isPrime(-5) );
console.log(isPrime(0) );
console.log(isPrime(1) );


/* Task 11
Requirement
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/
console.log('\nOutput for Task11');
function add(arr1, arr2) {
  let len = Math.max(arr1.length, arr2.length);
  const result = [];
  for(let i = 0; i < len; i++) {
    let sum = 0
    if(arr1[i] === undefined) sum = arr2[i];
    else if(arr2[i] === undefined) sum = arr1[i];
    else sum = arr1[i] + arr2[i];
    result.push(sum);
  }
  return result;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/* Task 12
Requirement
Write a function named as removeExtraSpaces() which takes
a string word as an argument and returns the string back with
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello"
removeExtraSpaces("      Hello    World     ")  -> "Hello
World"
removeExtraSpaces("     JavaScript is          fun")  ->
"JavaScript is fun”
removeExtraSpaces("") -> ""*/
console.log('\nOutput for Task12');
function removeExtraSpaces(str) {
  let result = ""
  let words = str.split(' ');
  for(let i = 0; i < words.length; i++) {
    let word = words[i].trim();
    if(word.length === 0) continue;
    if(word === words[words.length-1]) result+=  word;
    else result= result + word+" "
  }
  return result;
}
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""))
/* Task 13
Requirement
Write a function named findClosestTo10() which takes an
array of numbers as argument and returns the closest element
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally,
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0*/
console.log('\nOutput for Task13');
function findClosestTo10(arr) {
  let closest = null;
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(num === 10) continue;
    if (closest === null || Math.abs(num - 10) < Math.abs(closest - 10) || (Math.abs(num - 10) === Math.abs(closest - 10) && num < closest)) {
      closest = num;
    }
  }
  return closest;
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]) );
/* Task 14
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and .
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true*/
console.log('\nOutput for Task14');
function isEmailValid(str) {
  if(str.length === 0 || str.includes(' ')) return false;
  let email = str.split('@');
  if(email.length !== 2) return false;
  const [firstPart, secondPart] = email;
  if(firstPart.length <=2 || secondPart.length <= 2) return false;
  if(firstPart.includes('@')) return false;
  if(!secondPart.includes('.')) return false;
  let secondParts = secondPart.split('.');
  if(secondParts.length < 2) return false;
  for(const part of secondParts) {
    if(part.length < 2) return false;
  }
  return true;
}
console.log("");
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

/* Task 15
Requirement
Write a function named as isPasswordValid() which takes a
string email as an argument and returns true if the password
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true*/
console.log('\nOutput for Task15');
function isPasswordValid(password) {
  if (password.length < 8 || password.length > 16) {
      return false;
  }

  let hasDigit = false;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasSpecialChar = false;

  for (const char of password) {
    if (char >= '0' && char <= '9') {
        hasDigit = true;
    } else if (char >= 'A' && char <= 'Z') {
        hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
        hasLowerCase = true;
    } else if (char.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)) {
      hasSpecialChar = true;
    }
  }
  if (!(hasDigit && hasUpperCase && hasLowerCase && hasSpecialChar)) {
      return false;
  }
  if (password.includes(" ")) {
      return false;
  }
  return true;
}


console.log(isPasswordValid(""))
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"))
console.log(isPasswordValid("Test1234#"));
