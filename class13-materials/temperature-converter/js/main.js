//Write your pseduo code first! 
//0 -> 32
//write title of dom

//have a form that asks the user to enter 
//a cencius temp 
//convert the celcius temp to f
// print out the f temp to the screen

document.querySelector('#submit').addEventListener('click', convert)

function convert () {
    //need the value that is in celsius
    let temp = document.querySelector('#cel').value
    //convert value from c to f
    temp =  temp  * 9/5 + 32
    //show it
    document.querySelector('#displayTemp').innerText = temp
}



