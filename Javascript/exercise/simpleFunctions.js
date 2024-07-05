// skriv en funktion som returnerar en rektangels area
const calculateArea = (a, b) => {

    const areaCalculated = a * b
    return console.log(areaCalculated)
}

calculateArea(100, 50)


// skriv en funktion som kontrollerar om en sträng är tom
const emptyString = (string) => {


    if(string.length === 0) {
        return console.log('Your string is empty')
    } else {
        return console.log('Congratulations, you successfully wrote something!!!')
    }
}

emptyString('')


// skriv en funktion som kontrollerar om ett nummer är positivt eller negativt

const positiveOrNegative = (number) => {

    if(isNaN(number)) {
        return console.log('Not a valid number.')
    } else if(number >= 0) {
        return console.log('Your number is positive!')
    } else if (number <= 0) {
        return console.log('Your number is negative!')
    } else {
        return console.log('Your number is neutral')
    }

}

positiveOrNegative()

// Gör ett program som tar emot tre stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.
const biggestNumber = (numberOne, numberTwo, numberThree) => {

    if(isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
        return console.log('All inputs must be valid numbers')
    } else {
        let maxNumber = Math.max(numberOne, numberTwo, numberThree)
        return console.log('Your biggest number is: ' + maxNumber)
    }
}

biggestNumber(100, 50, 10)


// Kolla om en sträng inkluderar ett visst ord Gör ett program som tar en mening som argument och kollar om den innehåller ordet 'hej'
const includesSpecificWord = (sentence) => {
    if(sentence.includes('hej')) {
        return console.log('Your sentence included the word hej.')
    } else {
        return console.log('Your sentence did not include the word hej.')
    }
}

includesSpecificWord('jag heter joel')

// Gör ett program som konverterar Celsius till Fahrenheit, formel: (0°C × 9/5) + 32 = 32°F
const celsiusToFahrenheit = (celsius) => {

    celsiusNumber = parseFloat(celsius)

    const Fahrenheit = (celsiusNumber * 9/5) + 32

    return console.log(celsiusNumber + ' converted to Fahrenheit is: ' + Fahrenheit)
}

celsiusToFahrenheit('40')

// skriv en funktion som gör en grundläggande miniräknare av de 4 räknesätten:
const simpleCalculator = (numberOne, numberTwo, operation) => {

    if(isNaN(numberOne) || isNaN(numberTwo)) {
        return console.log('Please return two valid numbers, and the preffered operation.')
    }

    switch(operation) {
        case 'addition':
            return console.log(numberOne + numberTwo)
        case 'subtraction':
            return console.log(numberOne - numberTwo)
        case 'multiplication':
            return console.log(numberOne * numberTwo)
        case 'division':
            return console.log(numberOne / numberTwo)
    }
}

simpleCalculator(10, 5, 'addition')
simpleCalculator(10, 5, 'subtraction')
simpleCalculator(10, 5, 'multiplication')
simpleCalculator(10, 5, 'division')


// skriv en funktion som kontrollerar om ordet är en pallidrom
const isAPalindrom = (word) => {

    let seperatedWord = word.split('')
    let reversedWord = seperatedWord.reverse()
    let completedReversedWord = reversedWord.join('')

    if(word === completedReversedWord) {
        return console.log('Your word IS a palindrom')
    } else {
        return console.log('Your word is NOT a palindrom')
    }
}

isAPalindrom('lol')

// Skriv en funktion som retunerar längden av det kortaste ordet i en mening

// Skriv en funktion som tar tre parametrar: name, city och favoriteColor. 
// Den ska skriva ut informationen till konsolen i en fullständig mening. Exempel "Välkommen Namn från Göteborg med favvofärg blått". 
// Skriv kod som anropar funktionen med lämpliga värden


