// FOR LOOPS

// Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
// Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
// Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
// Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
// Skapa en enkel tabell för multiplikation av ett nummer, till exempel 7:console.log() sjuans gångertabell Ex.
// Sök i en array: Skapa en funktion som tar en array och ett sökord som argument och returnerar alla element som innehåller sökordet.
const testArray = ['Joel', 'Amanda', 'Tim', 'Patrik']

for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i])
}

for(let i = 10; i > 0; i--) {
    console.log(i)
}


const fruits = ['Apple', 'Banana', 'Pear', 'Orange']

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}.${fruits[i]}`)
}


for(let i = 2; i <= 20; i++) {
    console.log(i)
}

for(let i = 5; i <= 50; i++) {
    console.log(i)
}

for(let i = 0; i <= 7; i++) {
    console.log(i * 7)
}


// loopa ut föjande array och skriv ut det på sidan

const movieArray = ['Dune', 'The Fellowship of the Ring', 'American Gangster', 'Toy Story']

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i])
}




class Movie {
    constructor(title, director, imdbRating, runtime) {
        this.title = title
        this.director = director
        this.imdbRating = imdbRating
        this.runtime = runtime
    }
}

class MovieLibrary {
    constructor() {
        this.movies = []

    }

    addMovie(movie) {
        return this.movies.push(movie)
    }

    searchTitle(titleSearch) {
        if (typeof titleSearch !== 'string' || titleSearch.length === 0) {
            return []
        } else {
            titleSearch = titleSearch.charAt(0).toUpperCase() + titleSearch.slice(1).toLowerCase()
            this.movies.filter((movie) => movie.title.includes(titleSearch))
            console.log(`${titleSearch} found!`)
        }
    }

    removeMovie(movieToRemove) {
        movieToRemove = movieToRemove.charAt(0).toUpperCase() + movieToRemove.slice(1).toLowerCase()
        this.movies = this.movies.filter((movie) => movie.title !== movieToRemove)
        console.log(`Movie successfully deleted: ${movieToRemove}`)
    }

}

const library = new MovieLibrary()
library.addMovie(new Movie("The Shawshank Redemption", "Frank Darabont", 9.3, "142 min"))
console.log(library)
library.searchTitle('the shawshank redemption')
library.removeMovie()

new Movie("The Godfather", "Francis Ford Coppola", 9.2, "175 min")
new Movie("The Dark Knight", "Christopher Nolan", 9.0, "152 min")
new Movie("12 Angry Men", "Sidney Lumet", 9.0, "96 min")
new Movie("Schindler's List", "Steven Spielberg", 8.9, "195 min")






// Hitta högsta numret i en array med en For loop

// Loopa ut ovanstående array och console.log() varje pryl.

// Loopa ut ovanstående Object och console.log() varje key.


// FOR EACH LOOPS 

// Loopa ut ovanstående array och console.log() varje pryl.

// Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.


// WHILE LOOPS 

// Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.


// FOR OF ... LOOPS