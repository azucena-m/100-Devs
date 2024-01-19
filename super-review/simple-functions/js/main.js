//---Easy
//create a function that subtracts
// two numbers and alerts the difference
function subractTwoNums(n1,n2){
alert(n1 - n2)
}
subractTwoNums(10, 2)
//create a function that divides 
//three numbers and console logs the quotient
function dividesThreeNums(n1,n2,n3){
    console.log(n1/n2/n3)
}
 dividesThreeNums(50,10,2)


//create a function that multiplys 
//three numbers and returns the product
function multplyThreeNums(n1,n2,n3){
   return n1 * n2 *n3
}
 console.log(multplyThreeNums(50,10,2)) //or let returnedNum = multiplysThreeNums(50,10,2), console.log(returnedNum)

//---Medium
//create a function that takes in three numbers. 
//Add the first two numbers and return the 
//remainder of dividing the sum of the first 
//two numbers by the third number
function takesThreeNumsThenAddAndReturnRemainder(n1,n2,n3){
    return (n1+n2) % n3
}
let returnNum = takesThreeNumsThenAddAndReturnRemainder(15,3,3)

//---Hard
//create a function that takes in 4 numbers. 
//Multiply the first two numbers. 
//If the product is greater than 100 add the 
//sum of the last two numbers and console log 
//the value. If the product is less that 100, 
//subtract the difference of the last two numbers 
//and console log the value. If the product is 
//100, multiply the first three numbers together 
//and alert the remainder of dividing the fourth 
//number
function takesFourAndMultOrSum(n1,n2,n3,n4){
    let num = n1 * n2
    if(num > 100){
        console.log(n3 + n4)
    } else if(num < 100){
        console.log(n3 - n4)
    }else{
        alert((num * n3) % n4)
    }
}

takesFourAndMultOrSum(15,15,2,2)