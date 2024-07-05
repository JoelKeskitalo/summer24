// Gör en array som innehåller 5 st olika frukter av datatypen string.
// gör en array som innehåller 3 olika datatyper, ex. string, number, array.
// console.log() hur många objekt arrayen ovan innehåller.
// I arrayen ovan, hämta cat.
// I arrayen ovan, byt ut hamster mot tiger.
// const fruits = ['Apple', 'Pear', 'Orange', 'Banana', 'Pinapple']
const mixedArray = ['Joel', true, 5, fruits]

const animals = ['Cat', 'Dog', 'Monkey', 'Elephant', 'Hamster']

let indexOfCat = animals.indexOf('Cat')
console.log(indexOfCat)

animals.splice(animals.length, 1, 'Tiger')
console.log(animals)


// Lägg ihop två arrayer 
// Klona en array 
// Mergea två arrayer 
const arrayOne = ['Hej', 'animalsmotherfucker', 5]
const arrayTwo = ['Hejdå!', 'ichbindu', 10]
console.log([...arrayOne, ...arrayTwo])

const mergedArrays = arrayOne.concat(arrayTwo)



// METHODS: .push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()
// skapa en ny array med frukter
// Lägg till en frukt i slutet av arrayen
// Lägg till en frukt i början av arrayen ovan.
// I arrayen ovan, ta bort sista frukten i arrayen.
// I arrayen ovan, ta bort första frukten i arrayen.
// Sätt in en frukt i arrayen ovan på index 1.
// Sätt in tre frukter i arrayen ovan på index 2.

fruits.push('Mango')
fruits.unshift('HejFruit')
fruits.pop()
fruits.shift()
console.log(fruits)

const fruits = ['Apple', 'Pear', 'Pinapple', 'Orange']
fruits.splice(0, 0, 'Strawberry')
fruits.splice(2, 0, 'Kiwi', 'Mandarin')
console.log(fruits)



// Skapa en array med namn
// Ta bort de två sista namnen
const names = ['Johan', 'Taylor Swift', 'Tim', 'Amanda', 'Madao']
names.splice(names.length-2, 2)
console.log(names)


// Skapa en ny array med en lång sträng
// Spegelvänd arrayen
const bigString = ['Johansitterienköpingochförsökerjobbamendetgåricke']
let stringArray = bigString[0].split('')
let reversedStringArray = stringArray.reverse()
let finalWord = reversedStringArray.join('')
console.log(finalWord)


// Kika om strängen ovan innehåller bokstaven x.
// I ovanstående array, hitta vilket position första förekomsten av p har.
const newString = ['alexskasnarttillgimmmmp']
let pluckedString = newString[0]
console.log(pluckedString)
/* if(pluckedString.includes('x')) {
    return console.log('Your string contains the letter x')
} else {
    return console.log('Eeeh go TIM yourself!')
} */

const position = pluckedString.indexOf('p')
console.log(position)

// I strängen ovan, plocka fram de 5 första tecknena.
// I strängen ovan, plocka fram de 7 sista tecknena.
const lazyPeople = 'copemastersallofyou'
const firstFiveLetters = lazyPeople.substring(0, 5)
const lastSevenLetters = lazyPeople.substring(lazyPeople.length - 8)
console.log(firstFiveLetters)
console.log(lastSevenLetters)


// FILTER
const movieArray = ['The Fellowship of the Ring', 'Dune', 'Legend', 'World of Wall Street', 'Limepark: The Movie', 'The Lego Movie']
const filteredArray = movieArray.filter((element) => element.length > 5)
console.log(filteredArray)


// Gör filmerna till objekt och ge de properties: title, year, rating
// och sen lista de som har en rating över 9!


class Movie {
    title
    year
    imdbRating

    constructor(title, year, imdbRating) {
        this.title = title
        this.year = year
        this.imdbRating = imdbRating
    }
}

const movies = [
    new Movie("The Shawshank Redemption", 1994, 9.3),
    new Movie("The Godfather", 1972, 9.2),
    new Movie("The Dark Knight", 2008, 9.0),
    new Movie("Pulp Fiction", 1994, 8.9),
    new Movie("The Lord of the Rings: The Return of the King", 2003, 8.9),
    new Movie("Schindler's List", 1993, 8.9),
    new Movie("Fight Club", 1999, 8.8),
    new Movie("Inception", 2010, 8.8),
    new Movie("The Matrix", 1999, 8.7),
    new Movie("Goodfellas", 1990, 8.7)
]

const highestRatingMovies = movies
    .filter((movie => movie.imdbRating >= 9))
    .map((movie) => movie.title)
console.log(highestRatingMovies) 

movies.map(m => { console.log(m.imdbRating <= 9 && m.title)})

const lowestRatingMovies = movies.reduce((accumulator, movie) => {
    if(movie.imdbRating < 9) {
        accumulator.push(movie.title)
    }

    return accumulator
}, [])

console.log(lowestRatingMovies)

// Hämta ut filmerna som innehåller ordet "the"
const theWord = movies.filter((movie => movie.title.includes('The')))
console.log(theWord)

// Hämta ut filmer som bara innehåller två ord
const twoWords = movies.filter(movie => {
    const wordCount = movie.title.split(' ').length
    return wordCount === 2
})
console.log(twoWords)

// Hämta ut filmer som börjar med bokstaven "t"
const startsWithT = movies.filter(movie => movie.title.charAt(0).toUpperCase() === 'T')
console.log(startsWithT)

// Hämta ut alla filmer som innehåller en vokal
const includesVowels = movies.filter(movie => movie.title.includes('a', 'e', 'i', 'o', 'u', 'y'))
console.log(includesVowels)

// Hämta ut filmer vars titel har minst 3 ord
const threeWordTitle = movies.filter(movie => {
    const titleWordCount = movie.title.split(' ').length
    return titleWordCount >= 3
})
console.log(threeWordTitle)

// Hämta ut alla filmer vars titel har max 3 ord
const maxThreeWordTitle = movies.filter(movie => {
    const titleWordCount = movie.title.split(' ').length
    return titleWordCount <= 3
})
console.log(maxThreeWordTitle)


// SORT
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)


class Person {
    constructor(name, age, occupation, city) {
        this.name = name
        this.age = age
        this.occupation = occupation
        this.city = city
    }
}

const theCrazyPeople = [
    new Person('Amanda', 30, 'Developer', 'Örebro',),
    new Person('Patrik', 36, 'Developer', 'Örebro'),
    new Person('Lasse', 66, 'Pension', 'Nora'),
    new Person('Lars-Olof', 54, 'Hobo', 'Somewhere'),
    new Person('Fredrika', 40, 'Gardener', 'Lindesberg'),
    new Person('Therese', 48, 'Hospice', 'Almby'),
    new Person('Tim', 32, 'Magician', 'Hjarsta')
]

const compareFunction = (a, b) => {
    return a.age - b.age
}

const sortOldPeople = (people, ageLimit) => {
    const oldPeople = people.filter(person => person.age > ageLimit)
    oldPeople.sort()
    return oldPeople
}

console.log(sortOldPeople(theCrazyPeople, 35))


// sortera personer efter ålder, både yngre till äldre och äldre till yngre

// sortera personer alfabetisk ordning

// MAP

// Loop arrays