/* Task1
Requirement:
Convert given Strings below to number data types and
find their sum, product, division, subtraction, remainder
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25*/
console.log('Output for Task1\n');
let str1 = "5", str2 = "2";
str1 = Number(str1);
str2 = Number(str2);
console.log(`The sum of the ${str1} and ${str2} is = ${str1 + str2}`);
console.log(`The product of the ${str1} and ${str2} is = ${str1 * str2}`);
console.log(`The subtraction of the ${str1} and ${str2} is =  ${str1 - str2}`);
console.log(`The division of the ${str1} and ${str2} is =  ${str1 / str2}`);
console.log(`The remainder of the ${str1} and ${str2} is = ${str1 % str2}`);
console.log(`The exponentation of the ${str1} and ${str2} is = ${Math.pow(str1 , str2)}`);
/*Task2
Requirement:
Convert given Strings below to number data
types and find the greatest and smallest values
and find the average and absolute difference of
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250 */

console.log('\nOutput for Task2\n');
let s1 = "200", s2 = "-50";
s1 = Number(s1), s2 = Number(s2);
console.log('The greatest value is = ', Math.max(s1,s2));
console.log('The smallest value is = ', Math.min(s1,s2));
console.log('The average is = ', (s1+s2)/2);
console.log('The average is = ', s1,s2);
console.log('The absolute difference is = ', Math.abs(s1-s2));

/*Task3
Requirement:
Write a program that generates 2 random numbers
between 1 and 50 (both 1 and 50 are included)

Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22*/
console.log('\nOutput for Task3\n')
let n1 = Math.ceil(Math.random()*51);
let n2 = Math.ceil(Math.random()*51);
let absDiff = Math.abs(n1-n2)
console.log(`The absolute difference between ${n1} and ${n2} is = ${absDiff}`)
/* Task4
Requirement:
Write a program that generates 5 random numbers
between 1 and 50 (both 1 and 50 are included)

Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3*/

console.log('\nOutput for Task4\n');
let randNum1 = Math.ceil(Math.random()*50);
let randNum2 = Math.ceil(Math.random()*50);
let randNum3 = Math.ceil(Math.random()*50);
let randNum4 = Math.ceil(Math.random()*50);
let randNum5 = Math.ceil(Math.random()*50);
let maxVal = Math.max(randNum1,randNum2,randNum3,randNum4,randNum5);
let minVal = Math.min(randNum1,randNum2,randNum3,randNum4,randNum5);
console.log('The max value = ', maxVal);
console.log('The min value = ',minVal);

/*Task5
Requirement:
Write a program that generates 3 random numbers
between 50 and 100 both included.
First print the numbers
Then, find the sum of these numbers

Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212*/

console.log('\nOutput for Task5\n')
let num1 = Math.floor(Math.random()*(100-50+1))+50;
let num2 = Math.floor(Math.random()*(100-50+1))+50;
let num3 = Math.floor(Math.random()*(100-50+1))+50;
console.log(`The number 1 = ${num1}\nThe number 2 = ${num2}\nThe number 3 = ${num3}\nThe sum of numbers is = ${num1+num2+num3}`);
/*Task6
Requirement:
Write a program that generates 3 random numbers
between 1 and 100 (1 and 100 are included) and find if
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals */
console.log('\nOutput for Task6\n');
let rand1 = Math.ceil(Math.random()*101);
let rand2 = Math.ceil(Math.random()*101);
let rand3 = Math.ceil(Math.random()*101);
console.log('The numbers are', rand1, rand2, rand3);
console.log(rand1>25 && rand2>25 && rand3>25);
/*Task7
Requirement:
Assume you are given a name let name = "David";
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print
them
5. Find the last 3 characters in the name and print
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid*/

console.log('\nOutput for Task7\n');
let myName = "David"
console.log('The length of the name is = ', myName.length)
console.log('The first character in the name is = ', myName[0]);
console.log('The last character in the name is = ', myName[myName.length-1]);
console.log('The first 3 characters in the name are = ', myName.slice(0,3));
console.log('The last 3 characters in the name are = ',myName.slice(-3,myName.length));
