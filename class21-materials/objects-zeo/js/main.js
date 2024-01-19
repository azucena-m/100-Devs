//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = "black"
stopwatch.shape = "circle" 
stopwatch.brand = 'idk'
stopwatch.model = 10

stopwatch.tellSeconds = function (sec){
    console.log(`the current seconds are ${sec}`)
}

stopwatch.stopNumber = function (min){
    console.log(`the stopwatch stops at ${min} minutes`)
}

