//Write your pseduo code first! 
//ask for celsius value 
//enter the value and click
//print out the conversion of censius to farenheight

document.querySelector('#convert').addEventListener('click', converter)

function converter(){
    let enterVal = Number(document.querySelector('input').value)
    let temp = enterVal * 1.8 + 32
    document.querySelector('h1').innerText = temp
}

