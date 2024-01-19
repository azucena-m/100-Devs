//--- Easy
//create a variable and assign it a number
let assignNum = 10
//minus 10 from that number
assignNum = assignNum - 10
//print that number to the console
console.log(assignNum)
//--- Medium
//create a variable that holds a value from the input
let inputValue = Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
inputValue += 25
//alert that number
alert(inputValue)
//--- Hard
//create a variable that holds the h1
 const holdH1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
holdH1.addEventListener('click', addsFirstTwo)

function addsFirstTwo(){
    console.log(assignNum + inputValue)
}