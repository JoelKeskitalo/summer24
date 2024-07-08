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




/* class Movie { */
    constructor(title, director, imdbRating, runtime) {
        this.title = title
        this.director = director
        this.imdbRating = imdbRating
        this.runtime = runtime
    }
}

/* class MovieLibrary { */
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
const numbersArray = [1, 2, 3, 4, 5]

const findTheBiggestNumber = (numbersArray) => {

    let maxNumber = numbersArray[0]

    for (let i = 0; i < numbersArray.length; i++) {

        if(numbersArray[i] > maxNumber) {
            maxNumber = numbersArray[i]
        }
    }

    return console.log(maxNumber)

}

findTheBiggestNumber(numbersArray)




// FOR EACH LOOPS 
// Loopa ut ovanstående array och console.log() varje pryl.
// Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.

const exampleArray = ['Shogun', 36, true, 'Baldurs Gate 3']

exampleArray.forEach((element) => console.log(element))
exampleArray.forEach((element, index) => {
    console.log(`Element:${element}, Index: ${index}`)
})


const numbers = [10, 20, 30, 40, 50]

const additionForEach = (array) => {

    if(array.length === 0) {
        return console.log('Please enter a valid array of numbers')
    }

    let result = 0

    array.forEach((number) => {
        result += number
    })

    console.log(result)
    return result

}

additionForEach(numbers)

const subtractionForEach = (array) => {
    let result = 0

    array.forEach((element) => {
        result =- element
    })

    console.log(result)
    return result
}

subtractionForEach(numbers)


/* const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */
const oddNumbers = (array) => {

    let oddNumbers = 0

    array.forEach((element) => {
        if(!element % 2 === 0) {
            oddNumbers += element
        }
    })

    console.log(oddNumbers)
    return oddNumbers
}

oddNumbers(newNumbers)


// WHILE LOOPS 
let n = 0
while (n < 3) {
    n++
}
console.log(n)


// Skapa en while-loop som kör 100 varv. console.log() ut varje varv.
let varv = 0
while (varv <= 99) {
    varv++
}
console.log(varv)

const anotherNumbersArray = [1, 2, 3, 4, 5]

const arraySum = (array) => {

    let total = 0
    let i = 0

    while (i < array.length) {
        total += array[i]
        i++
    }

    console.log(total)
    return total

}

arraySum(anotherNumbersArray)


// filtrera

const filterNumbers = (numbersArray) => {
    cleanNumbers = numbersArray.filter((number) => number % 2 === 0)
    return console.log(cleanNumbers)
}

filterNumbers(newNumbers)


const newNumbers = [5, 13, 364, 1, 25, 800, 17, 85, 5, 360]

const filterWithWhile = (numbersArray) => {
    let i = 0
    let evenNumbers = []
    let oddNumbers = []


    while (i < numbersArray.length) {
        i++
        if(numbersArray[i] % 2 === 0) {
            evenNumbers.push(numbersArray[i])
        } else if(!numbersArray[i] % 2 === 0) {
            oddNumbers.push(numbersArray[i])
        }
    }

    console.log(`Even numbers: ${evenNumbers}`)
    console.log(`Odd numbers: ${oddNumbers}`)

    return
}

filterWithWhile(newNumbers)

// FOR OF ... LOOPS
const array1 = ['a', 'b', 'c', 'd']
for (const element of array1) {
    console.log(element)
}


const books = ['Harry Potter', 'Lord of the Rings', 'The Tale of the Madao', 'Will he ever Bloom?']
for (book of books) {
    console.log(book)
}


class Library {
    constructor() {
        this.movies = []
    }

    listMovies() {
        this.movies.forEach((movie) => {
            console.log(movie)
        })
    }

    addMovie(movie) {
        this.movies.push(movie)
        console.log(`Movie added successfully!`)
    }

    searchMovie(title) {
        for (const movie of this.movies) {
            if(movie.includes(title)) {
                console.log(`Movie found: ${title}`)
            }
        }
    }

    searchDirector(director) {
        for (const movie of this.movies) {
            if(movie.director.includes(director)) {
                console.log(`${director} is indeed in our database of movies`)
            } else {
                console.log(`Could not find the movie director`)
            }
        }
    }
    
    highestRating() {
        let highestRating = this.movies[0]

        this.movies.forEach((movie) => {
            if(movie.imdbRating > highestRating.imdbRating) {
                highestRating = movie
            }
        })
        console.log(`Your highest rating movie is ${highestRating.title}`)
    }

    lowestRating() {
        let lowestRating = this.movies[0]

        this.movies.forEach((movie) => {
            if(movie.imdbRating < lowestRating.imdbRating) {
                lowestRating = movie
            }
        })
        console.log(`Your lowest rated movie is: ${lowestRating.title}`)
    }
}

const movieLibrary = new Library()

class Movie {
    constructor(title, director, imdbRating, releaseYear, genre ) {
        this.title = title
        this.director = director
        this.imdbRating = imdbRating
        this.releaseYear = releaseYear
        this.genre = genre
    }
}

const movie1 = new Movie('The Shawshank Redemption', 'Frank Darabont', 9.3, 1994, 'Drama');
const movie2 = new Movie('The Godfather', 'Francis Ford Coppola', 9.2, 1972, 'Crime');
movieLibrary.addMovie(movie1)
movieLibrary.addMovie(movie2)
movieLibrary.listMovies()
movieLibrary.highestRating()
movieLibrary.lowestRating()



const movie3 = new Movie('The Dark Knight', 'Christopher Nolan', 9.0, 2008, 'Action');
const movie4 = new Movie('Pulp Fiction', 'Quentin Tarantino', 8.9, 1994, 'Crime');
const movie5 = new Movie('The Lord of the Rings: The Return of the King', 'Peter Jackson', 8.9, 2003, 'Fantasy');
const movie6 = new Movie('Schindler\'s List', 'Steven Spielberg', 8.9, 1993, 'Biography');
const movie7 = new Movie('Fight Club', 'David Fincher', 8.8, 1999, 'Drama');
const movie8 = new Movie('Inception', 'Christopher Nolan', 8.8, 2010, 'Sci-Fi');
const movie9 = new Movie('The Matrix', 'Lana Wachowski, Lilly Wachowski', 8.7, 1999, 'Sci-Fi');
const movie10 = new Movie('Goodfellas', 'Martin Scorsese', 8.7, 1990, 'Biography');


