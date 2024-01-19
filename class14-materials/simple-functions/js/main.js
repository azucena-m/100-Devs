//create a function that adds two numbers and alerts the sum
function adding(sum1, sum2){
    alert(sum1 + sum2)
    //or let sum = sum1 + sum2 
    //alert(sum)
}
adding(1, 2)

//create a function that multiplys three numbers and console logs the product
function multiplysThreeNumbers(num1, num2, num3){
    const product = num1 * num2 * num3
    console.log(product)
}

multiplysThreeNumbers(2, 2, 2)

//create a function that divides two numbers and returns the ???
//return spits out the value to where it was called so in this case int he call argument of dividesTwoNumbers
function dividesTwoNumbers(div1, div2){
    return div1 / div2
}
console.log(dividesTwoNumbers(12,6))