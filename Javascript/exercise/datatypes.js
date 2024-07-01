// Gör ett program som tar emot två stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.
const biggestValue = (numberOne, numberTwo) => {

    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number' || isNaN(numberOne) || isNaN(numberTwo)) {
        return console.log('Invalid number(s)')
    }

    if (numberOne > numberTwo) {
        return console.log('Your first number, ' + numberOne + ' is bigger than your second number, ' + numberTwo)
    } else if (numberTwo > numberOne) {
        return console.log('Your second number, ' + numberTwo + ' is bigger than your first number, ' + numberOne)
    } else {
        return console.log('Your numbers are the same')
    }
}

biggestValue()


// Gör ett program som tar ett number och ta reda på om talet är jämt eller udda.
const evenOrOdd = (number) => {
    if (isNaN(number)) {
        return console.log('Not a valid number')
    }

    if (number % 2 === 0) {
        return console.log('Your number is even!')
    } else {
        return console.log('Your number is odd!')
    }
}

evenOrOdd()


// Gör ett program som ska sitta i en sensor på lisebergs åkattration Helix. För att få åka helix ska man vara minst 150cm lång. Programmet ska skriva ut true eller false.
const personOne = {
    name: 'Amanda',
    height: 140,
    age: 12
}

const personTwo = {
    name: 'GIGA-Tim',
    height: 195,
    age: 35
}

const canRide = (person) => {
    if (person.height > 150) {
        return console.log('You are allowed to ride the HELIX!')
    } else {
        return console.log('You are not allowed to ride the HELIX!')
    }
}

canRide(personTwo)

// På Liseberg finns 4 olika åkband; small, medium, large och platinum. För att få åka Balder krävs large eller platinum. 
// Gör ett program som kollar ens åkband och skriver ut ifall man får åka Balder eller inte.


class Person {
    constructor(name, age, access, weight, height ) {
        this.name = name
        this.age = age
        this.access = access

        this.weight = weight
        this.height = height
    }

    canRide = () => {
        return this.access === 'large' || this.access === 'platinum'
    }

    calculateBMI = () => {
        return this.weight / (this.height * this.height)
    }

}

const patrik = new Person('Patrik', 5, 'small', 109, 1.51)
const dennis = new Person('Dennis', 86, 'platinum', 56, 1.62 )


console.log(dennis.canRide(), dennis.calculateBMI(), patrik.calculateBMI())

// BMI ( Body Mass Index ) sägs vara ett hälsomått som visar på under eller övervikt. Det bör dock tas med en nypa salt då vi alla människor är unika ( och awesome! ).
// formel: kroppsvikt i kg / (kroppslängd i meter * kroppslängd i meter)




// Gör ett program som tar ett nummer ( 1-7 ) och skriver ut vilken veckodag numret motsvarar. Ex. 1 = måndag, 3 = untzdag. Om numret inte motsvarar någon veckodag skall programmet skriva ut false.

// Gör ett program som tar ett nummer ( 1-12 ) och skriver ut vilken månad numret motsvarar. Ex. 1 = januari, 10 = oktober. Om numret inte motsvarar någon månad skall programmet skriva ut false.

