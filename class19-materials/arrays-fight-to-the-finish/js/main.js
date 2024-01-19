//Create an array of movie titles. Loop through 
//the array and add each element to the h2.
let movieTitles = ['in it to win it', 'fight to the finish', 'world wide cheersmack']
for(let i = 0; i < movieTitles.length; i++) {
    document.querySelector('h2').innerText += movieTitles[i]
}


//Create an array of numbers. Loop through the 
//array and add three to each number and replace the 
//old number.
let numArray = [1,2,3,4]
numArray.forEach((x,i) => {
    numArray[i] = x + 3
})

//Find the average of all the numbers from 
//question two
let sum = 0
for(let i = 0; i < numArray.length; i++){
    sum += numArray[i]
}
console.log(sum / numArray.length)