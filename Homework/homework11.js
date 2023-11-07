/* Task 1
Requirement:
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.*/

console.log('Output for Task1\n');
function countPalindrome(str) {
  let count =0;
  if(str.length === 0) return 0

  str = str.split(" ")
  console.log(str)
  for(let i=0; i< str.length;i++ ){
    if(isPalindrome(str[i])) count++
  }
  return count;
}
function isPalindrome(word) {
  word = word.toLowerCase();
  for(let i=0, j = word.length-1; i <j; i++,j-- ) {
    if(word[i] !== word[j]) return false
  }
  return true;
}
console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome("No palindrome here"));
console.log(countPalindrome(""))

/* Task 2
Requirement:
Write a function named sum() which takes an array of numbers and a boolean value as arguments. It will return the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
 */
console.log('Output for Task2\n');
function sum(arr,bool) {
  let sum = 0

    for(let i = 0; i < arr.length;i++){
      if(bool) {
        if(i%2 === 0) sum+= arr[i]

      } else if(i%2) sum+= arr[i]
    }
  return sum;
}
console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));

/* Task 3
Requirement:
Write a function named nthChars() which takes a string and a number as arguments and returns the string back with every nth characters.​
*/
console.log('\nOutput for Task3');
function nthWord(str, num) {
  let chars = '',i =num-1;
  while(i < str.length) {
    chars+= str[i];
    i+= num
  }
  return chars;
}
console.log(nthWord('Java', 2));
console.log(nthWord('JavaScript', 5));
console.log(nthWord('Java', 3));
console.log(nthWord('Hi', 4));
console.log(nthWord('0123456789', 2));
/* Task 4
Requirement:
Write a function named canFormString() which takes two string arguments and returns true if the second string can be formed by rearranging the characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
 */
console.log('\nOutput for Task4');
function canFormString(str1, str2) {
  str1 = str1.split(" ").join('').toLowerCase();
  str2 = str2.split(" ").join('').toLowerCase();
  const strObj = {}, str2Obj = {};
  for(let i = 0; i <str1.length; i++) {
    strObj[str1[i]]? strObj[str1[i]]++ : strObj[str1[i]] =1
  }

  for(let i = 0; i <str2.length; i++) {
    str2Obj[str2[i]]? str2Obj[str2[i]]++ : str2Obj[str2[i]] =1
  }
  for(let char of str2) {
    if(strObj[char] === undefined) return false;
    if(str2Obj[char] > strObj[char]) return false
  }
  return true;
}
console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123") )

/* Task 5
Requirement:
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
*/
console.log('\nOutput for Task5 ');
function isAnagram(str1, str2) {

  str1 = str1.split(" ").sort().join('').toLowerCase();
  str2 = str2.split(" ").sort().join('').toLowerCase();
  if(str1.length !== str2.length) return false;
  const strObj = {}, str2Obj = {};
  for(let i = 0; i <str1.length; i++) {
    strObj[str1[i]]? strObj[str1[i]]++ : strObj[str1[i]] =1
  }

  for(let i = 0; i <str2.length; i++) {
    str2Obj[str2[i]]? str2Obj[str2[i]]++ : str2Obj[str2[i]] =1
  }

  for(let char of str2) {
    if(strObj[char] === undefined) return false;
    if(str2Obj[char] !== strObj[char]) return false
  }
  return true;
}
console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));

/* Task 6
Requirement:
Write a function named count() which takes an array of numbers and a boolean value as arguments. It will return the total count of the even numbers if the boolean value is true. And return the total count of the odd numbers if the boolean value is false. 
*/
console.log('\nOutput for Task6');
function count(arr, bool) {
  let count = 0
  for(let i =0; i < arr.length; i++) {
    if (bool) {
      if(Math.abs(arr[i]) % 2 === 0) count++
    }
  else if(Math.abs(arr[i])%2) count++
  }
  return count;
}
console.log(count([1, 5, 10], true));
console.log(count([3, 7, 2,5,10], false));
console.log(count([-1, 1, -2, 2], true));
console.log(count([0, -1, 15, 1], false));
console.log(count([1, 2, 3, 4, -4], true));

/* Task 7
 Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied by 2. Return -1 if the given string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12

*/
console.log('\nOutput for Task7');
function sumDigitsDouble(str) {
  let sum = 0;
  for(let i =0; i < str.length; i++) {
    let digit = str.charAt(i)
    if(digit >= '0' && digit <= '9') sum+= +str[i]
  }
  if(sum < 1) return -1;
  else return sum*2;
}
console.log(sumDigitsDouble('JavaScript'));
console.log(sumDigitsDouble('Ja23abc45'));
console.log(sumDigitsDouble('Hi-23'));
console.log(sumDigitsDouble('ab12'));
console.log(sumDigitsDouble('n0numh3r3'));
/* Task 8
Requirement:
Write a function named countOccurrence() which takes two string arguments
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2*/
console.log('\nOutput for Task8');
function countOccurrence(str1, str2) {
    let count = 0;
    str2 = str2.toLowerCase();
    let words = str1.split(' ')
    const sortedStr1 = []
    let sortedStr2 = str2.split('').sort().join('');
   for(let i = 0; i < words.length; i++) {
     let word = words[i].toLowerCase();
    sortedStr1.push(word.split('').sort().join(''))
   }
  //  console.log(sortedStr1, sortedStr2)
   for(let j =0; j < sortedStr1.length; j++) {
    let chars =  sortedStr1[j]
    let k =0, l =0, testChar = "";

    while(k < chars.length && l < sortedStr2.length ) {

      if(chars[k] === sortedStr2[l]) {
        testChar+= chars[k]
        k++;
        l++
      }else k++
      if(testChar === sortedStr2) {
        count++;
        break;
      }
    }
   }
   return count;
  }
console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversations", "IT"));
