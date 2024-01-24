//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function ProSkater(skateColor, skateSize, sakaterWins, skaterAge){
    this.color = skateColor
    this.size = skateSize
    this.wins = sakaterWins
    this.age = skaterAge
    this.specialMove = characterMove
    this.flip = function(){
        console.log('kick flip')
    }
    this.taunt = function(){
        console.log(`don't make me use my ${this.specialMove}`)
    }
    this.hasJob = function(){
        console.log('nope')
    }
} 

let kareemCampbell = new ProSkater('black', 'large', true, 22, 'ghetto bird') //new keyword is used to create a new object on the object that was originally created as ProSkater