//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums.reduce(acc, c) => acc + c, 0)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums => nums.map( num => num**2) //the right side of nums has an implicit return  


//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log(str.split('').reverse().join('')) //split turns string into array, reverse reverses letters and join gets letter together and turns them back into an array

// function takesAStringAndReverse(){
//     const reverse = str.split('').reduce((accumulator, character) => character + accumulator, '')
//     console.log(reverse)
// }
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => str === (str.split('').reverse().join) //if the string === the string reverse it is a palindrome
palindromeCheck('racecar')

//  
