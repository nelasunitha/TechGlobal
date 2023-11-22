/* Task 1
Requirement:
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/
function countVC(str) {
  const vowels ='aeiou',consonants = 'bcdfghjklmnpqrstvwxyz', result = {vowels: 0, consonants: 0}
  str.trim();
  if(str.length === 0) return  result
 for(let i = 0; i < str.length; i++) {
  if(vowels.includes(str[i].toLowerCase())) result['vowels']++
  else if(consonants.includes(str[i].toLowerCase())) result['consonants']++
 }

 return result;
}
console.log(countVC('Hello'));
console.log(countVC('Programming'));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""))

/* Task 2
Requirement:
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}

*/
console.log('Output for Task2\n');
function countChars(str) {
  const result = {letters: 0, numbers: 0, specials: 0}
  str.trim();
  if(str.length === 0) return  {}
 for(let i = 0; i < str.length; i++) {
  if(str[i] === " ") continue;
  if(str[i] >= 0 && str[i] < 10) result['numbers']++
  else if(str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') result['letters']++
  else result['specials']++
 }
 if(result['letters'] === 0) delete result['letters'];
 if(result['numbers'] === 0)  delete result['numbers'];
 if(result['specials'] === 0)  delete result['specials'];
 return result;
}
console.log(countChars('Hello'));
console.log(countChars('Programming 123'));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("     "))
console.log(countChars(""))

/* Task 3
Requirement:
Write a function named maxOccurrences() which takes a string argument and returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	-> ""
maxOccurrences("")   		-> ""

 */
console.log('\nOutput for Task3');
function maxOccurrences(str) {

  let maxOccur = -Infinity, maxStr = '';
  const strObj = {};
  for(let i =0; i < str.length; i++) {
    if(str[i] === ' ') continue;
    strObj[str[i]] ? strObj[str[i]]++ : strObj[str[i]] =1;
    if (maxOccur < strObj[str[i]]) {
      maxOccur = strObj[str[i]];
      maxStr = str[i];
    }
  }
  return maxStr;
}
console.log(maxOccurrences('Hello'));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences(["     "]));
console.log(maxOccurrences([""]));
/* Task 4
Requirement:
Write a function named starOut() which takes a string argument and returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""

*/
console.log('\nOutput for Task4');
function starOut(str) {
  str.trim();
  let result = '';
  if(str.length === 0) return  ''
  for(let i = 0; i < str.length; i++) {
  if (str[i] !== '*' && (i === 0 || str[i - 1] !== '*') && (i === str.length - 1 || str[i + 1] !== '*')) {
    result += str[i];
  }
 }
 return result
}
console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("****"));
console.log(starOut("   "));
console.log(starOut(""));

/* Task 5
Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the roman numeral converted to the number. A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666

*/
console.log('\nOutput for Task5');
function romanToInt(roman) {
const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

let result = 0;

for (let i = 0; i < roman.length; i++) {
  const currentVal = romanMap[roman[i]];
  const nextVal = romanMap[roman[i + 1]];

  if (nextVal > currentVal) {
    result += (nextVal - currentVal);
    i++; // Skip the next character since it's already considered
  } else {
    result += currentVal;
  }
}

return result;
}

console.log(romanToInt("I"));                // Output: 1
console.log(romanToInt("IV"));               // Output: 4
console.log(romanToInt("CXII"));             // Output: 112
console.log(romanToInt("MMM"));              // Output: 3000
console.log(romanToInt("MMMDCCCLXXXVIII")); // Output: 3888
console.log(romanToInt("MDCLXVI"));          // Output: 1666
