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
console.log(firstFiveLetters)






// FILTER

// SORT 

// MAP

// Loop arrays