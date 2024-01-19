// *Variables*
// Create a variable and console log the value
const num = 10
console.log(num)
// Create a variable, add 10 to it, and alert 
//the value
let newNum = 0
alert(newNum + 10)
// *Functions*
// Create a function that subtracts 4
// numbers and alerts the difference
function subractFourAndAlert(n1,n2,n3,n4){
    alert(n1 - n2 - n3 - n4)
}
subractFourAndAlert(50,10,10,10)

// Create a function that divides one 
//number by another and returns the remainder
function divAndReturnRem(n1,n2){
    return n1 % n2
}
console.log(divAndReturnRem(15,2))

// *Conditionals*
// Create a function that adds two 
//numbers and if the sum is greater than 
//50 alert Jumanji
function addTwoAlertJumanji(n1, n2){
    let sum = n1 + n2
    if(sum > 50){
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50,20)

// Create a function that multiplys three
// numbers and if the product is divisible by 
//3 alert ZEBRA
function multiplyThreeAndZebra(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0){
        alert('ZEBRA')
    }
}
multiplyThreeAndZebra(3,3,3)

//*Loops*
//Create a function that takes in a word and 
//a number. Console log the word x times where 
//x was the number passed in

function takesWordAndNumber(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}
takesWordAndNumber('apple',3)