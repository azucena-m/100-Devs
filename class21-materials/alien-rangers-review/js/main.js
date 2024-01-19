//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let powerRangers = ['mighty morphin', 'alien rangers', 'zeo']
powerRangers.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6,7,8]
let onlyEvens = arr => arr.filter(n => n % 2 === 0)
console.log(onlyEvens(nums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

sumSecondLowAndHigh([2,3,1,5,4])
