/* Task 1
Requirement
Write a program that outputs all the numbers that are
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7
14
21
.
.
.
.
91
98*/
console.log('Output for Task1\n');
for(let i =1; i<=100; i++){
  let result = i * 7
  if(result <= 100) {
    console.log(result)
  }
}
/* Task 2
Requirement
Write a program that outputs all the numbers that are
divisible by both 2 and 3 starting from 1 to 50 (both
inclusive).
Expected Output:
6
12
18
.
.
36
42
48
*/
console.log('Output for Task2\n');
for(let i =1; i<=50; i++){
  let result = i % 2 === 0 && i % 3 === 0
  if(result) {
    console.log(i)
  }
}
/* Task 3
Requirement
Write a program that outputs all the numbers that are
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
85
.
.
.
60
55
50
*/
console.log('\nOutput for Task3');
for(let i =100; i>=50; i--){
  let result = i % 5 === 0;
  if(result) {
    console.log(i)
  }
}
/* Task 4
Requirement
Write a program that outputs the squares of all numbers
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/
console.log('\nOutput for Task4');
for(let i =0; i<=7; i++){
    console.log(`The square of ${i} is =  ${Math.pow(i,2)}`)
}
/* Task 5
Requirement
Write a program that finds sum of the numbers starting
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output: 55*/
console.log('\nOutput for Task5');
let num =0;
for(let i =1; i<=10; i++){
  num+= i
}
console.log(num)
/* Task 6
Requirement*
Write a program generates a random number between
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.*/
console.log('\nOutput for Task6');
let n = Math.ceil(Math.random()*10);
let factorial = 1;
while(n > 0) {
  factorial*= n;
  n = n-1;
}

console.log(factorial)
/* Task 7
Requirement
Write a program generates a random number between
1 and 100 (both inclusive).
Keep generating a new number till you get a number
that is divisible by 5.
The program should also count how many attempts it
takes to generate such a number.
Eventually, print the random number divisible by 5 with
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took
{attempts} attempt/s to generate it.*/
console.log('\nOutput for Task7');
let count = 1;
let randomNumber;
let flag = true;
while(flag) {
  randomNumber = Math.ceil(Math.random()*100);
  if(randomNumber % 5 === 0) {
    console.log(`The random number is ${randomNumber} and it took ${count} attempt/s to generate it.`);
    flag = !flag
  }
  count++
}


/* Task 8
Requirement
Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]*/
console.log('\nOutput for Task8');
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];
console.log(countries);
let countriesSort = countries.sort();
console.log(countriesSort)
/* Task 9
Requirement
Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true*/
console.log('\nOutput for Task9');
const arr = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];
console.log(arr)
if(arr.includes('Pluto')) console.log(true);
else console.log(false)

/* Task 10
Requirement
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/
console.log('\nOutput for Task10');
const names = [ 'Azrael', 'Tom', 'Sylvester', 'Garfield' ];
console.log(names.sort());
console.log(names.includes('Azrael') && names.includes('Felix'));

/* Task 11
Requirement
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75*/
console.log('\nOutput for Task11');
const numsArr = [10.5, 20.75, 70, 80, 15.75];
console.log(numsArr);
for(let i =0; i< numsArr.length; i++) {
  console.log(numsArr[i]);
}
/* Task 12
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P',
ignoring cases.
-Output how many elements has 'book' or 'pen' partial
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4
Requirement*/
console.log('\nOutput for Task12');
const stationery = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(stationery);
let count1 = 0, count2 = 0;
for(let i =0; i < stationery.length; i++) {
  let ele = stationery[i].toLowerCase();
  if(ele.startsWith('b') || ele.startsWith('p')) count1++;
  if(ele.includes('book') || ele.includes('pen')) count2++;
}
console.log('Elements starting with "B" or "P" = ', count1);
console.log('Elements having "book" or "pen" = ', count2);
/* Task 13
Requirement
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2*/
console.log('\nOutput for Task13');
const elements = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(elements)
let greaterTen =0, lessTen = 0, equalsTen = 0;
for(let i =0; i < elements.length; i++) {
  if(elements[i] < 10) lessTen++;
  else if(elements[i] > 10) greaterTen++;
  else  equalsTen++;
}
console.log('Elements that are more than 10 = ', greaterTen);
console.log('Elements that are less than 10 = ', lessTen);
console.log('Elements that are 10 = ', equalsTen);
/* Task 14
Requirement
Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest
value of same index from first 2 arrays and output the
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]*/
console.log('\nOutput for Task14');
const arr1 = [5, 8, 13, 1, 2];
const arr2 = [ 9, 3, 67, 1, 0 ];
console.log(arr1, '\n', arr2);
const resArr = [];
for(let i =0; i< arr1.length; i++) {
  if(arr1[i] > arr2[i]) resArr.push(arr1[i]);
  else resArr.push(arr2[i])
}
console.log(resArr);
/* Task 15
Requirement
Write a function named as firstDuplicate() which takes an
array argument and returns the first duplicated number in the
array when invoked.
NOTE: Make your code dynamic that works for any array and
return -1 if there are no duplicates in the array. For two
elements to be considered as duplicated, value and data types
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1*/
console.log('\nOutput for Task15');
function firstDuplicate(arr) {

  for(let i =0; i< arr.length; i++) {
    if(arr.slice(i+1).includes(arr[i])) return arr[i];
  }
  return -1;
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))
/* Task 16
Requirement
Write a function named as getDuplicates() which takes an
array argument and returns all the duplicated elements in the
array when invoked.
NOTE: Make your code dynamic that works for any array and
return empty array if there are no duplicates in the array. For
two elements to be considered as duplicated, value and data
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]*/
console.log('\nOutput for Task16');
function getDuplicates(arr) {
  const duplicates =[];
  for(let i =0; i< arr.length; i++) {
    if(duplicates.includes(arr[i])) continue;
    if(arr.slice(i+1).includes(arr[i])) duplicates.push (arr[i]);
  }
  return duplicates;
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

/* Task 17
Requirement
Write a function named as reverseStringWords() which takes a string
as an argument and returns string back with each word separately
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you
consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""*/
console.log('\nOutput for Task17');
function reverseStringWords(str) {
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

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello") );
console.log(reverseStringWords(""));
console.log(reverseStringWords("    ") );
/* Task 18
Requirement
*Write a function named as getEvens() which takes 2 number
arguments and returns all the even numbers as an array
stored from smallest even number to greatest even number
when invoked.
NOTE: Make your code dynamic that works for any numbers
and return empty array if there are no even numbers in the
range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/
console.log('\nOutput for Task18');
function getEvens(s,g) {
  let smallest = Math.min(s,g);
  let greatest = Math.max(s,g);
  let result = [];
  for(let i =smallest; i <=greatest; i++) {
    if(i % 2 === 0) result.push(i);
  }
  return result;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));
/*
 Task 19
Requirement
Write a function named as getMultipleOf5() which takes 2
number arguments and returns all the numbers divisible by 5
as an array stored from first found match to last found match
when invoked.
NOTE: Make your code dynamic that works for any numbers
and return empty array if there are no numbers divisible by 5
in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]*/
console.log('\nOutput for Task19');
function getMultipleOf5(s,g) {
  let smallest = Math.min(s,g);
  let greatest = Math.max(s,g);
  let result = [];
  for(let i =smallest; i <=greatest; i++) {
    if(i % 5 === 0) result.push(i);
  }
  if(s > g) return result.reverse();
  else return result;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));
/* Task 20
Requirement
Write a function named as fizzBuzz() which takes 2 number
arguments and returns a string composed with below
requirements when invoked.
•You need to find all the numbers within the range of given 2
numbers (both inclusive) and store them in a string from
smallest to greatest number with a ' | ' separator for each
number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5
to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> 13 | 14 | FizzBuzz | 16 | 17 | Fizz
fizzBuzz(12, 5) -> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
fizzBuzz(5, 5) -> Buzz
fizzBuzz(9, 6) -> Fizz | 7 | 8 | Fizz*/
console.log('\nOutput for Task20');
function fizzBuzz(s,g) {
  let smallest = Math.min(s,g);
  let greatest = Math.max(s,g);
  let result = [];
  for(let i =smallest; i <=greatest; i++) {
    if(i % 5 === 0 && i % 3 === 0) result.push('FizzBuzz');
    else if(i % 3 === 0) result.push('Fizz');
    else if(i % 5 === 0) result.push('Buzz');
    else result.push(i);
  };
 return result.join(' | ');
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));
