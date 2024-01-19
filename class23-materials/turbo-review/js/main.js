// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = 'this is a sentence that is also a string'
alert(str.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = 'This is a sentencde for a jr. dev'
console.log(str.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPaperScissors() {
//     const choices = ['rock', 'paper', 'scissors']
//     const randomChoice = Math.floor(Math.random() * choices.length)
//     return choices[randomChoice]
// }

function rockPaperScissors(){
    let random = Math.random()
    if(random < .22){
        return 'rock'
    } else if (random < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}
    
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takesAChoiceOfRockPaperScissors(choice){
    let botChoice = rockPaperScissors()
    if((choice === 'rock' && botChoice === 'scissors') ||
    (choice === 'scissors' && botChoice === 'paper') ||
    (choice === 'paper' && botChoice === 'rock')){
        console.log("winner")
    } else if (choice === botChoice){
        console.log('tied')
    } else {
        console.log('loser')
    }
}

takesAChoiceOfRockPaperScissors('paper') 
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
