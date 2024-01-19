//---Easy
//create a function that subtracts two numbers and alerts the difference
function difference(num1, num2){
    alert(num1 -num2)
}

difference(2, 2)


//create a function that divides three numbers and console logs the quotient
function quotient( div1, div2, div3){
   console.log(div1 / div2 / div3)
}

quotient(10, 2,2)
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsAndReturn(mul1, mul2, mul3){
    return mul1 * mul2 * mul3

}
let product = multiplyThreeNumsAndReturn(2, 2, 2)
alert(product)

//advanced of above
function turnIntoMoney(){
    let product = multiplyThreeNumsAndReturn(2, 2, 2)
    alert('$' + product)
}
turnIntoMoney()


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1, n2, n3){
    return (n1 + n2) % n3
}
console.log(addTwoAndDivide(3,3,2))
//---Hard
//create a function that takes in 4 numbers. 
//Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value.
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function multiplyTwoLogOrAlert(n1, n2, n3, n4){
    let firstTwo = n1 * n2
    if(firstTwo > 100){
        console.log(n3 + n4)
    }else if(firstTwo < 100){
        console.log(n3 - n4)
    }else if(firstTwo === 100){
        alert((n1 * n2 * n3) % n4)
    }
}
multiplyThreeNumsAndReturn(10,12,5,5)