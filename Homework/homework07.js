/* Task 1
Requirement
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false*/
console.log('Output for Task1\n');
function hasUpperCase(str){
  for(let i =0; i<str.length;i++) {
    if(str[i] >= 'A' && str[i] <= 'Z') return true;
  }
  return false;
}
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase("") )


/* Task 2
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"  */
console.log('Output for Task2\n');
function noDigit(str){
 let result = ""
  for(let i = 0; i < str.length; i++) {
    if(isNaN(str[i]) ||str[i] === " ") result+= str[i];
  }
  return result;
}
console.log(noDigit("") );
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));
console.log();

/* Task 3
Requirement:
Write a function named noVowel() which takes a string argument and returns a
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/
console.log('\nOutput for Task3');
function noVowel(str){
  let result = ""
  let  vowels = 'AEOUIaeoui'
  for(let i =0; i < str.length; i++){
    let char = str[i];
    if(vowels.includes(char)) continue;
    else result+= str[i];
  }
  return result;
}
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""))
console.log(noVowel("125$"));
/* Task 4
Requirement
Write a function named no13() which takes an array of numbers as argument
and return a new array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4]
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/
console.log('\nOutput for Task4');
function no13(nums){
  let result = [];
  for(let i =0; i < nums.length;i++) {
    if(nums[i] === 13) result.push(0);
    else result.push(nums[i])
  }
  return result;
}
console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]) );
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

/* Task 5
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number.
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/
console.log('\nOutput for Task5');
function middleInt(n1, n2, n3){
  let result = [n1, n2, n3]
  result.sort((a,b) => a - b);
  return result[1];
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

/* Task 6
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/
console.log('\nOutput for Task6');
function sumOfDigits(str){
  let sum =0;
  for(let i =0; i < str.length; i++){
    if(!isNaN(str[i])) sum+= +str[i];
    //if(!isNaN(str[i])) sum+= Number(str[i]);
  }
  return sum;
}
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

// /* Task 7
// Requirement
// Write a function named no3and5() which takes an array of integer numbers as
// argument and will return a new array with elements replaced by conditions
// below.
// If element can be divided by 5, replace it with 99
// If element can be divided by 3, replace it with 100
// If element can be divided by both 3 and 5, replace it with 101
// Examples:
// no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
// no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
// no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
//  */
// console.log('\nOutput for Task7');
// function no3and5(nums) {
//   let result = [];
//   for(let i =0; i < nums.length; i++) {
//     if(nums[i] % 3 == 0) result.push(100);
//     else if(nums[i] % 5 == 0) result.push(99);
//     else result.push(nums[i])
//   }
//   return result;
// }
// console.log(no3and5([7, 4, 11, 23, 17]));
// console.log(no3and5([3, 4, 5, 6]));
// console.log(no3and5([10, 11, 12, 13, 14, 15]) );
// /* Task 8
// Requirement
// Write a function named countPrimes() which takes an array of integer
// numbers as argument and will return the number of the prime numbers in the
// given array.
// NOTE: Prime number is a number that can be divided only by 1 and itself .
// NOTE: Negative numbers cannot be prime .
// Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.
// NOTE: Smallest prime number is 2.
// Examples:
// countPrimes([-10, -3, 0, 1])  -> 0
// countPrimes([7, 4, 11, 23, 17])  -> 4
// countPrimes([41, 53, 19, 47, 67])  -> 5
//  */
// console.log('\nOutput for Task8');
// function countPrimes(nums){
//   let count = 0;
//    for(let j = 0; j < nums.length; j++) {
//      let num = nums[j]
//      if(isPrime(num)) count++
//    }
//    return count;
//  }
//  function isPrime(num){
//   if(num <= 1 ) return false;
//   else if(num === 2) return true;
//   else {
//     for(let i =2; i < num; i++) {
//       if(num % i === 0) return false;
//     }
//     return true;
//   }
// }
//  console.log(countPrimes([-10, -3, 0, 1]));
//  console.log(countPrimes([7, 4, 11, 23, 17]));
//  console.log(countPrimes([41, 53, 19, 47, 67]));

// /* Task 9
// Requirement
// Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
// Examples:
// removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 70]
// removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
// removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
// removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
// removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"] */
// console.log('\nOutput for Task9');
// function removeDuplicates(arr){
//   let result = [];
//   for(let i =0; i < arr.length; i++){
//     if(!result.includes(arr[i])) result.push(arr[i]);
//   }
//   return result;
// }

// console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
// console.log(removeDuplicates([1, 2, 5, 2, 3]));
// console.log(removeDuplicates([0, -1, -2, -2, -1]));
// console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
// console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

// /* Task 10
// Requirement
// Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
// Expected Format: nn/nn/nnnn So, it must be presented as <2digits>/<2digits>/<4digits>
// Examples:
// isDateFormatValid("")  -> false
// isDateFormatValid("15/30/2020")  -> false
// isDateFormatValid("10-30-2020 ")  -> false
// isDateFormatValid("10.30.2020")  -> false
// isDateFormatValid("5/30/2020")  -> false
// isDateFormatValid("05/30/2020 ")  -> true
// isDateFormatValid("10/2/2020")  -> false
// isDateFormatValid("10/02/2020 ")-> true
// */
// console.log('\nOutput for Task10');
// function isDateFormatValid(date){
//   if(!date.includes('/')) return false;
//   date = date.split('/');
//   if(+date[0] > 12 || date[0].length !== 2) return false;
//   if(+date[1] > 31 || date[1].length !== 2) return false;
//   if(date[2].length !== 4) return false;
//   else return true;
// }
// console.log(isDateFormatValid(""));
// console.log(isDateFormatValid("15/30/2020"));
// console.log(isDateFormatValid("10-30-2020 "));
// console.log(isDateFormatValid("10.30.2020"));
// console.log(isDateFormatValid("5/30/2020"));
// console.log(isDateFormatValid("05/30/2020"));
// console.log(isDateFormatValid("10/2/2020"));
// console.log(isDateFormatValid("10/02/2020"));


// /* Task 11
// Write a method named secondMax() takes an array argument and returns the second max number from the array.
// NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.
// NOTE: Be careful when there is multiple max numbers.
// Examples:
// secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
// secondMax([3, 4, 5, 6])  -> 5
// secondMax([10])  -> 10
// */
// console.log('\nOutput for Task11');
// function secondMax(nums) {
//   if(nums.length === 1) return nums[0];
//   nums.sort((a,b) => a - b);
//   for(let i =nums.length-1; i >= 0; i--) {
//     if(nums[i] === nums[i-1]) continue;
//     else return nums[i-1];
//   }
// }
// console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
// console.log(secondMax([3, 4, 5, 6]));
// console.log(secondMax([10]));
