//Create a function that has a loop that 
//prints '21' 21 times to the console and 
//then call that function
function savage(){
    for(let i = 1; i <= 21; i++){
        console.log('21')
    }
}
savage()

//Bonus can you make it print '21' 21 
//times to the dom?
function savage(){
    for(let i = 1; i <= 21; i++){
        document.querySelector('h2').innerText += ' 21'
    }
}
savage()