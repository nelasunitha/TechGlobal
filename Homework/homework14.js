/* Task 1
Requirement:
Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx")  -> false
repeatingX("Hello Xx World")  -> true
repeatingX("x x")  -> false
repeatingX("")  -> false
repeatingX("xxxxx")  -> true*/
function repeatingX(str) {

 for(let i = 0; i < str.length; i++) {
  str = str.toLowerCase();

  if(!(str.includes('x')) || str.length === 0) return false;
  if(str[i] === 'x' && str[i+1] === 'x') return true;
 }
 return false;
}
console.log(repeatingX('xTechxGlobalx'));
console.log(repeatingX('Hello Xx World'));
console.log(repeatingX("x x"));
console.log(repeatingX("xxxxx"));
console.log(repeatingX(""))


/*Task-2
Requirement:
Write a function named isPerfectSquare() which takes a number as an
argument and checks if it is a perfect square. It returns true if the number is a
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an
integer by itself or as the second exponent of an integer. For example, 25 is a
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25.
However, 21 is not a perfect square number because it cannot be expressed as
the product of two same integers.
Examples:
isPerfectSquare(25) -> true
isPerfectSquare(24) -> false
isPerfectSquare(0)  -> true
isPerfectSquare(1)  -> true
isPerfectSquare(-1)  -> false
isPerfectSquare(144)  -> true*/

console.log('Output for Task2\n');
function isPerfectSquare(num) {
  let sqrRoot =Math.sqrt(num)
  if(Math.round(sqrRoot) === sqrRoot) return true;
  return false;
 }
 console.log(isPerfectSquare(25))// -> true
 console.log(isPerfectSquare(24)) //-> false
 console.log(isPerfectSquare(0))  //-> true
 console.log(isPerfectSquare(1)) // -> true
 console.log(isPerfectSquare(-1)) // -> false
 console.log(isPerfectSquare(144))//  -> true

/*Task-3
Requirement:
Write a function named convertTemperature() which takes a number and a
string arguments to be considered as a temperature value and a unit (either
Celsius or Fahrenheit) as arguments and converts the temperature to the other
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’)  -> 212
convertTemperature(32, 'Fahrenheit’)  -> 0
convertTemperature(0, 'Celsius’)  -> 32
convertTemperature(212, 'Fahrenheit’)  -> 100
convertTemperature(-40, 'Celsius’)  -> -40
convertTemperature(-40, 'Fahrenheit’)  -> -40*/
console.log('Output for Task3\n');
function convertTemperature(value,unit) {
 if(unit === 'Fahrenheit') return (`The temperature in ${unit} is ${(value - 32)* 5/9}`)
 if(unit === 'Celsius') return (`The temperature in ${unit} is ${(value* 9/5)+ 32}`)
 }
 console.log(convertTemperature(100, 'Celsius'))//  -> 212
 console.log(convertTemperature(32, 'Fahrenheit'))//  -> 0
 console.log(convertTemperature(0, 'Celsius') )// -> 32
 console.log(convertTemperature(212, 'Fahrenheit'))//  -> 100
 console.log(convertTemperature(-40, 'Celsius')) // -> -40
 console.log(convertTemperature(-40, 'Fahrenheit') )// -> -40
/*Task-4
Requirement:
Write a function named sumOfEvenNumbers() which takes an array as an
argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )  -> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )  -> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )  -> 0
sumOfEvenNumbers( [ ] )  -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )  -> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] )  -> 150*/
console.log('Output for Task4\n');
function sumOfEvenNumbers(arr) {

    let result = 0;

    for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    }
   }
   return result
  }
  console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ))//  -> 30
  console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ))//  -> 110
  console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) )// -> 0
  console.log(sumOfEvenNumbers( [ ] ) )// -> 0
  console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ))//  -> 6
  console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ))//  -> 150*/
/*Task-5
Requirement:
Write a function named capsOdds() which takes an array argument and returns the array with
all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"])  -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"])  -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])  -> ["Apple", "BANANA",
"123", "456", "Peach", "KIWI"]
capsOdds([ ])  -> [ ]
capsOdds(["John !@#$%", "^&*() Doe"])
*/
console.log('Output for Task5\n');
function capsOdds(arr) {

   for(let i = 0; i < arr.length; i++) {
    if (i % 2 ) {
      arr[i] = arr[i].toUpperCase();
    //
    }
   }
   return arr
  }
console.log(capsOdds(["Hello", "World"])) // -> ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))//  -> ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))//  -> ["Apple", "BANANA","123", "456", "Peach", "KIWI"]
console.log(capsOdds([ ]) )// -> [ ]
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))
