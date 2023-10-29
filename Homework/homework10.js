/* Task 1
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24*/
console.log('Output for Task1\n');
function calculateTotalPrice1(fruitObj) {
  //apple= 2.00, orange = 3.29, mango = 4.99, pineapple = 5.25;
  let totalPrice = 0.0;
  for (let key in fruitObj) {
    if (key === 'apple') totalPrice += 2.0 * fruitObj[key];
    else if (key === 'orange') totalPrice += 3.29 * fruitObj[key];
    else if (key === 'mango') totalPrice += 4.99 * fruitObj[key];
    //else if(key === 'pineapple') totalPrice+= 5.25 *fruitObj[key];
    else totalPrice += 5.25 * fruitObj[key];
  }
  return totalPrice.toFixed(2);
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));

/* Task 2
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
 */
console.log('Output for Task2\n');
function calculateTotalPrice2(fruitObj) {
  //apple= 2.00, orange = 3.29, mango = 4.99, pineapple = 5.25;
  let totalPrice = 0.0;
  for (let key in fruitObj) {
    if (key === 'Apple') {
      if (fruitObj[key] > 1)
        totalPrice +=
          2.0 * fruitObj[key] - 0.5 * 2.0 * Math.floor(fruitObj[key] / 2);
      else totalPrice += 2.0 * fruitObj[key];
    } else if (key === 'Orange') totalPrice += 3.29 * fruitObj[key];
    else if (key === 'Mango') {
      if (fruitObj[key] > 3)
        totalPrice += 4.99 * (fruitObj[key] - Math.floor(fruitObj[key] / 4));
      else totalPrice += 4.99 * fruitObj[key];
    } else if (key === 'Pineapple') totalPrice += 5.25 * fruitObj[key];
  }
  return totalPrice.toFixed(2);
}
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); // -> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); // -> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); // -> 0
console.log(
  calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })
); // -> 29.51

/* Task 3
Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string.
Note: Function should return empty string if the number argument is greater than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2)  -> "like"
nthWord("QA stands for Quality Assurance", 4)   -> "Quality"
nthWord("Hello World", 3)  -> ""
nthWord("Javascript", 1)  -> "Javascript”
nthWord("", 1)
  */
console.log('\nOutput for Task3');
function nthWord(str, num) {
  str = str.split(' ');
  if (num > str.length) return '';
  return str[num - 1];
}
console.log(nthWord('I like programming languages', 2));
console.log(nthWord('QA stands for Quality Assurance', 4));
console.log(nthWord('Hello World', 3));
console.log(nthWord('Javascript', 1));
console.log(nthWord('', 1));
/* Task 4
Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, return false otherwise.
Note: An armstrong number is a number that is equal to the sum of cubes of its
digits
Let's take an example to understand it better. Consider the number 153. To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the number of digits, equals the original number.
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, which means 153 is an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
 */
console.log('\nOutput for Task4');
function isArmstrong(num) {
  let armstrongNum = 0;
  if (num === 0) return false;
  let len = String(num).length;
  let number = Number(num);
  while (number > 0) {
    let digit = Math.floor(number % 10);
    armstrongNum += Math.pow(digit, len);
    number = Math.floor(number / 10);
  }
  return num === armstrongNum;
}
console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));

/* Task 5
Write a function named reverseNumber() which takes a number argument and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111

*/
console.log('\nOutput for Task5 ');
function reverseNumber(num) {
  let reverseNum = 0;
  if (num < 10) return num;
  while (num > 0) {
    let digit = Math.floor(num % 10);
    reverseNum = 10 * reverseNum + digit;
    num = Math.floor(num / 10);
  }
  return reverseNum;
}
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(21));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

/* Task 6
Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. It will return the array elements doubled if true or tripled if the boolean value is false.
Examples:
doubleOrTriple([1, 5, 10], true)  -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) -> [9, 21, 6]
doubleOrTriple([-1, -2], true)  -> [-2, -4]
doubleOrTriple([0], false)  -> [0]
doubleOrTriple([-1, 0, 1], true)  -> [-2, 0, 2]
*/
console.log('\nOutput for Task6');
function doubleOrTriple(arr, bool) {
  if (bool === true) return arr.map((el) => el * 2);
  else if (bool === false) return arr.map((el) => el * 3);
}
console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));

/* Task 7
 Write a function named splitString() which takes a string and a number arguments and returns the string back split by the given number.
Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/
console.log('\nOutput for Task7');
function splitString(str, num) {
  let result = '';
  let len = str.length;
  if (len % num !== 0 || num > len) return '';
  return str.slice(0, num) + ' ' + str.slice(num);
}
console.log(splitString('JavaScript', 5));
console.log(splitString('Java', 2));
console.log(splitString('Automation', 3));
console.log(splitString('Hello', 6));
console.log(splitString('12', 1));
