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

/* Task 7
 Requirement
Write a function named arrFactorial() which takes an array of numbers as
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []  */
console.log('\nOutput for Task7');
function arrFactorial(nums) {
  let result = [];
  if(nums.length <=1) return nums;
  for(let i =0; i < nums.length; i++) {
    result[i] = factorial(nums[i])
  }
  return result;
}
function factorial(num) {
  let fact = 1
  while(num > 0) {
    fact*= num;
    num = num -1;
  }
  return fact;
}
console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));
/* Task 8
Requirement
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2.
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ]
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
 */
console.log('\nOutput for Task8');
function categorizeCharacters(word){
  let result = ["","",""];
   for(let i = 0; i < word.length; i++) {
     if((word[i] >= 'A' && word[i] <= 'Z') || (word[i] >= 'a' && word[i] <= 'z'))
      result[0] += word[i];
    else if(word[i] >= 0 && word[i] <= 9) result[1]+= word[i];
    else result[2]+= word[i]
   }
   return result;
 }
 console.log(categorizeCharacters("1234"));
 console.log(categorizeCharacters("abc123$#%"));
 console.log(categorizeCharacters("12ab$%3c%"));
