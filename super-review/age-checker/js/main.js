//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
// let age = 17

// if(age < 16 ){
//     console.log('tell them they can not drive')
// }else if(age < 18){
//     console.log('tell them they can\'t hate from outside the club, because they can\'t even get in')
// }else if(age < 21){
//     console.log('they can not drink')
// }else if(age < 25){
//     console.log('they can not rent cars affordably')
// }else if(age < 30 || age > 30){
//     console.log('there is nothing left to look forward too')
// }else{
//     console.log('something cool')
// }
//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', valueFromInput)
//Take the value from the input
let age = Number(document.querySelector('input').value)
//Place the result of the conditional in the paragraph
function valueFromInput(){
if(age < 16 ){
    document.querySelector('p').innerText= 'tell them they can not drive'
}else if(age < 18){
    document.querySelector('p').innerText= 'tell them they can\'t hate from outside the club, because they can\'t even get in'
}else if(age < 21){
    document.querySelector('p').innerText= 'they can not drink'
}else if(age < 25){
    document.querySelector('p').innerText= 'they can not rent cars affordably'
}else if(age < 30 || age > 30){
    document.querySelector('p').innerText= 'there is nothing left to look forward too'
}else{
    document.querySelector('p').innerText= 'something cool'
}
}