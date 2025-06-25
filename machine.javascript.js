// Write a Program to reverse a string in JavaScript.
// function revstring(str){
//  let rev = str.split("").reverse().join("")
//   console.log(rev)
// }
// revstring("Hritik")


// string first letter uppercase
// function firstletteruppercase(str){
//  let string= str.charAt(0).toUpperCase()+ str.slice(1)
//   console.log(string)
// }
// firstletteruppercase("hritik")

// if  this  string inside the array
// function firstletteruppercase(arr){
// let array  = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)   
// console.log(array )
//  }
//  firstletteruppercase(["hritik"]);

// Write a Program to check whether a string is a palindrome string.
// function palindrome(str){ 
//   let newstr = str.split("").reverse().join("")
//   if(newstr == str){
//     console.log("str is palindrome")
//   } else{
//     console.log("better luck next time")
//   }}
// palindrome("naman")

// Find the largest number in an array in JavaScript.
// function largest(arr){
//   let largest = arr[0]
//   for(i = 1; i<arr.length ; i++){
//     if(arr[i] > largest ){
//       largest  = arr[i]
//     }
//   }
//   console.log(largest)
// }
// m 2 function findLargest(arr) {

//   return Math.max(...arr); 
// }

// console.log(findLargest([99, 5, 3, 100, 1]));

// largest([1,2,3,4,5,6])

// Find the smallest number in an array in JavaScript

// function smallest(arr){
//   let small = arr[0]
//   for(i = 1; i< arr.length ; i++){
//     if(arr[i] < small ){
//       small  = arr[i]
//     }
//   }
//   console.log(small )
// }
// smallest([1,2,3,4,5,6])

// m 2 function findsmallest(arr) {

//   return Math.min(...arr); 
// }

// console.log(findsmallest([99, 5, 3, 100, 1]));


// How Remove the first element from an array in JavaScript?

// function removefirst(arr){
//   let remove = arr.slice(1)
//   console.log(remove)
// }
// removefirst([1,2,3])

// How Remove the last element from an array in JavaScript?
// function removelast(arr){
//   let remove = arr.pop()
//   console.log(remove)
// }
// removelast([1,2,3])

// how to write a callbck function


//  function sum(a,b,calculate) {
//   return calculate(a,b)
// }

// let addition = sum(2,3,function(num1,num2){
//   return num1+num2
// })

// console.log(addition)

// Write a code to create an arrow function?
// let sum  =(a,b)=>{
//   return a+b
// }
// console.log(sum(2,4))

// Write a Program to add a property to an object?
// let obj = {
//   ri :"hritik",
//   ti : 22
// }
//  obj.ti = 222;
//  console.log(obj)

//  //Write a Program to delete a property from an object?
//  delete obj.ti
//  console.log(obj)

//  Write a Program to find a sum of an array?

//  function sumarr(arr){
//   let sum= arr.reduce((acc,curr)=>acc+curr)
//   console.log(sum)
//  }
//  sumarr([1,2,3,4])

// Write a Program to check if a number is prime or not?
// function isPrime(num) {
//   if (num <= 1) return false
//   for (let i = 2; i < num; i++) 
//   {
//       if (num % i === 0) 
//        return false
//   }
//    return true
// }
// console.log(isPrime(2));

// Write a Program to print Fibonacci sequence up to n terms?
// function fibonachi(num){
//   let num1 = 0,num2=1,nextnum;
//   console.log("fibonnaci");
//   for(i = 0; i<num; i++){
//     console.log(num1);
//     nextnum = num1+num2;
//     num1 =num2;
//     num2 = nextnum
//   }
//   return nextnum
// }
// console.log(fibonachi(7))

// Write a Program to find factorial of a number?
// function factorial(num){
//   let n =1;
//   for(i=2;i<=num;i++){
//     n = n*i;
//   }
//   return n  ;
// }
// console.log(factorial(5))

// Calculate the Power of a Number in JavaScript?

// function power(base,expo){return base**expo}
// console.log(power(2,3))
 
// Write a Program to print the frequency of elements in an array?

// function frequency(arr){
//   freq = {}
//   for(let i = 0;i<arr.length; i++){
//     if(freq[arr[i]]){
//       freq[arr[i]]++
//     }else{freq[arr[i]]=1}
//   }
//   return freq
// }

// function frequency(arr){
//   let freq= {}
//   for(const ele of arr){
//     if(freq[ele]){
//             freq[ele]++
//           }else{freq[ele]=1} 
//   }
//   return freq
// }
// console.log(frequency([1,1,1,2,2,3,34,44,44,5,6,6]))


// Write a Program to count the occurrences of a character in a string in JavaScript?
// function occurence(str, char){
//   return str.split(char).length-1;
// }
                     
// function occurence(str, char){
//   let count = 0
//   for(let i =1; i<=str.length;i++){
//     if(str[i]=== char){
//       count++
//     }
//   }
//   return count
// }

// console.log(occurence('hritik','i'))

// Write a Program to convert Celsius to Fahrenheit in JavaScript?
// function degreceltofehre(num){
//   return (9/5*num)+32
// }
// console.log(degreceltofehre(5))

// Write a Program to convert Fahrenheit to Celsius in JavaScript?
// function fehretodegrecel(num){
//   return (num-32)*5/9
// }
// console.log(fehretodegrecel(5))

// Write a Program to sort an array in Ascending Order in JavaScript?

// function ascendingsorting(arr){
//   return arr.sort((a,b)=> a-b)
// }
// console.log(ascendingsorting([1,566,44,66]))

// function ascendingsorting(arr){
//   return arr.sort()
// }
// console.log(ascendingsorting([1,566,44,66]))

// write a Program to sort an array in Descending Order in JavaScript?

// function Descendingsorting(arr){
//    return arr.sort((a,b)=>b-a)}
//    console.log(Descendingsorting([1,2,3,4,5]))

// Write a Program to merge two arrays in JavaScript?
// function mergearray(arr1,arr2){
//   return  arr = [...arr1, ...arr2]
//   return arr = arr1.concat(arr2)
// }
// console.log(mergearray([1,2,3],[1,2,3]))

// Find the Intersection of Two Arrays in JavaScript?
// function intersection(arr1,arr2){
//   return arr1.filter(item => arr2.includes(item))
// }
// console.log(intersection([1,2,34],[1,4,2]))

// Find the union of Two Arrays in JavaScript?
// function union(arr1,arr2){
//   return arr1.concat(arr2.filter(item => !arr1.includes(item)))
// }
// console.log(union([1,2,3,4],[4,5,6]))

// Check if a Number is Even in JavaScript?

// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(10)); 

// Check if a Number is Odd in JavaScript?
// function isOdd(num) {
//   return num % 2 !==0 ;
// }
// console.log(isOdd(1)); 

// Convert an Array of Strings to Uppercase in JavaScript?

// function arrauppercase(arr){
//   return  arr.join('').toUpperCase().split('')
// }
// console.log(arrauppercase(['a','b']))

// convert first letter of the string to uppercase
// function capitalizeFirstLetterOfEachWord(sentence) {
//   const words = sentence.split(' '); // Split the sentence into an array of words
//   const capitalizedWords = words.map(word => {
//    return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   return capitalizedWords.join(' '); // Join the capitalized words back into a sentence
// }
// console.log(capitalizeFirstLetterOfEachWord('hritik jat'))

// Write a Program to reverse an array in JavaScript?

// let arr = [1,2,3,4,5]
// let rev = arr.reverse()
// console.log(rev)


// Get the last element of an array in JavaScript?
// function lastElement(arr) 
// {
//   return arr[arr.length-1];
//   return arr.slice(-1).pop()
// }

// console.log(lastElement([6, 2, 9, 5]));

// remove falsy values from an array 
// function falsyvalues(arr){
//   return arr.filter(Boolean)
// }
// console.log(falsyvalues([0, 1, false, 2, '', 3, null, undefined, NaN, "hello"]))

// find duplicate element  in an array 
// function findDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) !==index);
// }
// // Example usage:
// console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); // Output: [2, 3]

// // reomove duplicate  from an array 
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// // Example Usage:
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// // Output: [1, 2, 3, 4, 5]


// count vowels in an string

// function  countvowels(str){
//   let vowels = 'aeiouAEIOU'
//  let count = 0;
//  for(let i =0; i<str.length;i++){
//   if(vowels.includes(str[i])){
//     count++
//   }}
//   return count;
// }
// console.log(countvowels("hritik"))

// find unique character in an string 
// function getUniqueChars(str) {
//   return str.split('').reduce((unique, char) => unique.includes(char) ? unique: unique + char);
// }
// console.log(getUniqueChars("hello world")); 

// copy one object to another  

// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { ...obj1 };

// console.log(obj2); 
// // Output: { name: "Alice", age: 25 }