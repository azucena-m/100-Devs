//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShows{
    constructor(name, genre, year, popularity){
        this.name = name
        this.genre = genre
        this.year = year
        this.popularity = popularity
    }
    stop(){
        alert('staaappp')
    };
    play(){
        alert(`played ${this.name}`)
    };
    skipIntro(){
        console.log('skipping intro')
    }
}

let bridgerton = new MakeNetflixTVShows('Bridgerton', 'Drama', 2021, 'very popular')

