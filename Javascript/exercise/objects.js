// Lägg till en metod i Book-klassen som returnerar en sträng med en kort beskrivning av boken, inklusive titel, författare och förlag.
// Skapa en metod i Book-klassen som kontrollerar om boken har fler än ett visst antal sidor (som passeras som argument) och returnerar true eller false.
// Lägg till en metod i Book-klassen som uppdaterar priset på boken till ett nytt värde som passeras som argument.
// Skapa en metod i Book-klassen som beräknar och returnerar priset per sida på boken.
// Lägg till en metod i Book-klassen som tar en procentuell rabatt som argument och sänker priset på boken med denna rabatt.
// Skapa en metod i Book-klassen som returnerar true om boken är skriven av en viss författare (som passeras som argument), annars false.
// Lägg till en metod i Book-klassen som jämför antalet sidor med en annan bok (som också är ett Book-objekt) och returnerar vilken bok som har fler sidor.
// Skapa en metod i Book-klassen som returnerar true om boken är publicerad av ett visst förlag (som passeras som argument), annars false.
// Lägg till en metod i Book-klassen som tar ett antal exemplar som argument och returnerar totalpriset för detta antal böcker.
// Skapa en metod i Book-klassen som jämför priset med en annan bok (som också är ett Book-objekt) och returnerar vilken bok som är dyrare.


class Book {
    constructor(title, author, publisher, numPages, price) {
        this.title = title,
        this.author = author,
        this.publisher = publisher,
        this.numPages = numPages,
        this.price = price
    }

    bookDescription() {
        const description = `${this.title}, ${this.author}, ${this.publisher}, ${this.numPages}, ${this.price}`
        return description
    }

    pagesController(pages) {
        parseInt(pages)
        if(this.numPages > pages) {
            return console.log('Your book is longer than ' + pages)
        } else {
            return console.log('Your book is shorter than ' + pages)
        }
    }

    updatePrice(newPrice) {
        if(isNaN(newPrice)) {
            return console.log('Give a correct number')
        }
        this.price = newPrice
        return console.log('The pricing on your book has been updated to: ' + newPrice)
    }

    pricePerPage() {
        const calculation = this.numPages / this.price
        return calculation
    }

    percentDiscount(percent) {
        const decimalPercent = percent / 100
        const discount = this.price * decimalPercent
        const newPrice = this.price - discount
        return newPrice
    }

    searchAuthor(author) {
        if(this.author.includes(author)) {
            return console.log('Congratulations, you found the correct author')
        } else {
            return console.log('Wrong author')
        }
    }

    comparePages(theOtherBook) {
        if(this.numPages > theOtherBook.numPages) {
            return `${this.title} has more pages than your ${theOtherBook.numPages}!`
        } else {
            return `God damn you! ${theOtherBook.numPages} is more pages than ${this.title} has!`
        }
    }

    checkPublisher(searchPublisher) { // joels f00king book man
        if(this.publisher.includes(searchPublisher)) {
            return true
        } else {
            return false
        }
    }

    totalPrice(bookOne, bookTwo) {
        const totalPrice = bookOne.price + bookTwo.price
        return console.log(totalPrice)
    }

    comparePrice(secondBook) {

        let comparisonResult = this.price - secondBook.price

        if(this.price > secondBook.price) {
            return console.log(`${this.title} is more expensive than ${secondBook.title} by ${comparisonResult} SEK!`)
        } else if(secondBook.price > this.price) {
            return console.log(`${secondBook.title} is more expensive than ${this.title} by ${comparisonResult} SEK!`)
        }
    }
}


const joelsBook = new Book('The Book of Luls', 'J.Keskitalo', 'Noob AB', 600, 300)
const dennisBook = new Book('The Book of Madao', 'D.Jansson', 'Kabuki District', 500, 450)

console.log(joelsBook.comparePrice(dennisBook))


console.log(joelsBook.bookDescription())
console.log(joelsBook.pagesController('500'))
console.log(joelsBook.updatePrice(500))
console.log(joelsBook.price)
console.log(joelsBook.pricePerPage())
console.log(joelsBook.percentDiscount(25))
console.log(joelsBook.searchAuthor('D.Jansson'))
console.log(joelsBook.comparePages(dennisBook))
console.log(dennisBook.comparePages(joelsBook))
console.log(joelsBook.checkPublisher('Noob AB'))
console.log(joelsBook.totalPrice(joelsBook, dennisBook))


