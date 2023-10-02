/* Task 1
Write a function named fizzBuzz1() which takes a number argument and
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5.
Otherwise, it will return the number itself.
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"*/
console.log('Output for Task1\n');
function fizzBuzz1(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';
  else return num;
}
console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

/* Task 2
Write a function named fizzBuzz2() which takes a number argument and
returns and array consist of numbers starting from 1 to given number. However,
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ]
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'.
13, 14,  'FizzBuzz' ]
fizzBuzz2(2)  -> [ 1, 2 ]
  */
console.log('Output for Task2\n');
function fizzBuzz2(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

//
/* Task 3
Write a function named findSumNumbers() which takes a string argument
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
 */
console.log('\nOutput for Task3');
function findSumNumbers(str){
  let num ='',sum =0
  for(let i = 0; i< str.length;i++) {
    if(!isNaN(str[i])) {
      num += str[i]
    }else if(num !== '') {
      sum+= +num;
      num = ""
    }
  }
  if(num !== '') sum+= +num;
   return sum;
}
console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));
// console.log(noVowel("AEOxyz"));
// console.log(noVowel("Javascript"));
// console.log(noVowel(""))
// console.log(noVowel("125$"));
// /* Task 4
// Requirement
// Write a function named no13() which takes an array of numbers as argument
// and return a new array with all 13s replaced with 0s.
// Examples:
// no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4]
// no13([13, 2, 3])  -> [0, 2, 3]
// no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
// no13([])  -> []
// */
// console.log('\nOutput for Task4');
// function no13(nums){
//   let result = [];
//   for(let i =0; i < nums.length;i++) {
//     if(nums[i] === 13) result.push(0);
//     else result.push(nums[i])
//   }
//   return result;
// }
// console.log(no13([1, 2, 3 ,4]));
// console.log(no13([13, 2, 3]) );
// console.log(no13([13, 13, 13 , 13, 13]));
// console.log(no13([]));

// /* Task 5
// Requirement:
// Write a function named middleInt() which takes three number arguments and return the middle number.
// Examples:
// middleInt(1, 2, 2)  -> 2
// middleInt(5, 5, 8)  -> 5
// middleInt(5, 3, 5)  -> 5
// middleInt(1, 1, 1)  -> 1
// middleInt(-1, 25, 10)  -> 10
// */
// console.log('\nOutput for Task5');
// function middleInt(n1, n2, n3){
//   let result = [n1, n2, n3]
//   result.sort((a,b) => a - b);
//   return result[1];
// }
// console.log(middleInt(1, 2, 2));
// console.log(middleInt(5, 5, 8));
// console.log(middleInt(5, 3, 5));
// console.log(middleInt(1, 1, 1));
// console.log(middleInt(-1, 25, 10));

// /* Task 6
// Requirement:
// Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.
// Examples:
// sumOfDigits("Javascript")  -> 0
// sumOfDigits("John’s age is 29")  -> 11
// sumOfDigits("$125.0")  -> 8
// sumOfDigits("")  -> 0
// */
// console.log('\nOutput for Task6');
// function sumOfDigits(str){
//   let sum =0;
//   for(let i =0; i < str.length; i++){
//     if(!isNaN(str[i])) sum+= +str[i];
//     //if(!isNaN(str[i])) sum+= Number(str[i]);
//   }
//   return sum;
// }
// console.log(sumOfDigits("Javascript"));
// console.log(sumOfDigits("John’s age is 29"));
// console.log(sumOfDigits("$125.0"));
// console.log(sumOfDigits(""));

// /* Task 7
//  Requirement
// Write a function named arrFactorial() which takes an array of numbers as
// argument and return the array with every number replaced with their factorials.
// Examples:
// arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
// arrFactorial([0, 5])  -> [1,120]
// arrFactorial([5 , 0, 6])  -> [120, 1, 720]
// arrFactorial([])  -> []  */
// console.log('\nOutput for Task7');
// function arrFactorial(nums) {
//   let result = [];
//   if(nums.length <=1) return nums;
//   for(let i =0; i < nums.length; i++) {
//     result[i] = factorial(nums[i])
//   }
//   return result;
// }
// function factorial(num) {
//   let fact = 1
//   while(num > 0) {
//     fact*= num;
//     num = num -1;
//   }
//   return fact;
// }
// console.log(arrFactorial([1, 2, 3 ,4]));
// console.log(arrFactorial([0, 5]));
// console.log(arrFactorial([5 , 0, 6]));
// console.log(arrFactorial([]));
// /* Task 8
// Requirement
// Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2.
// Examples:
// categorizeCharacters("1234")  -> [ '' , '1234', '' ]
// categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
// categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
//  */
// console.log('\nOutput for Task8');
// function categorizeCharacters(word){
//   let result = ["","",""];
//    for(let i = 0; i < word.length; i++) {
//      if((word[i] >= 'A' && word[i] <= 'Z') || (word[i] >= 'a' && word[i] <= 'z'))
//       result[0] += word[i];
//     else if(word[i] >= 0 && word[i] <= 9) result[1]+= word[i];
//     else result[2]+= word[i]
//    }
//    return result;
//  }
//  console.log(categorizeCharacters("1234"));
//  console.log(categorizeCharacters("abc123$#%"));
//  console.log(categorizeCharacters("12ab$%3c%"));
