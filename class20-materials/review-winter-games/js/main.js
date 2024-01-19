//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function newArrayOfNumbers(nums){
    let newArray = []
    for(let num of nums){
        if(num % 2 === 0) {
            newArray.push(num)
        }
    }
    return newArray
}

console.log(newArrayOfNumbers([1,2,3,4,5,6]))

// function newArrayOfNumbers(nums) {
//     nums.map((newNum) => newNum % 2 === 0)
// }

//lecture answer
function onlyEvens(nums){
    let evens = []

    nums.forEach(n => {
        if(n % 2 === 0){
            evens.push(n)
        }
    })
    return evens
}

console.log(onlyEvens([1,2,3,4,5,6]))