// *Variables*
// Create a variable and console log the value
let red = "apple";

console.log(red)

// Create a variable, add 10 to it, and alert the value
let increaseNumber = 0
alert(increaseNumber = increaseNumber + 10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(n1, n2, n3, n4){
    const total = n1 - n2 - n3 - n4
    alert(total)
}

subtractFourNumbers(100,20,20,20)

// Create a function that divides one number by another and returns the remainder
function dividesTwoNumbers(num1, num2) {
    return num1 / num2
}

console.log(dividesTwoNumbers(10,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoNumbers(number1, number2){
    const number= number1 + number2

    if(number > 50){
        alert('Jumanji')
    }else {
        console.log('not Jumanji')
    }
}

addsTwoNumbers(20, 20)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNumbers(x1, x2, x3) {
    const product = x1 * x2 * x3
    if(product % 3 === 0){
        alert('ZEBRA')
    }else{

    }
}

multiplysThreeNumbers(3,3,3)