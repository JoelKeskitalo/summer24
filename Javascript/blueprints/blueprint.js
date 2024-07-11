// for (arrayer)
const numbersFor = [1, 2, 3, 4, 5]
for (let i = 0; i < numbersFor.length; + i++) {
    console.log(numbers[i])
}

// while (arrayer)
const numbersWhile = [1, 2, 3, 4, 5]
let i = 0
while (i < numbersWhile.length) {
    console.log(numbersWhile[i])
    i++
}

// do-while (arrayer)
const numbersDoWhile = [1, 2, 3, 4, 5]
let i = 0
do {
    console.log(numbersDoWhile[i])
    i++
} while (i < numbersDoWhile.length)


// for... of (arrayer)
const numbersForOf = [1, 2, 3, 4, 5]
for (const number of numbersForOf) {
    console.log(number)
}

// forIn (objekt)
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// forEach (arrayer)
const numbersForEach = [1, 2, 3, 4, 5]
numbersForEach.forEach((number) => {
    console.log(number)
})

// filter
const array = ['joel', 'amanda', 'tim', 'patrik']
const result = array.filter((name) => name.length > 3)
console.log(result)

// map 
const array1 = [1, 2, 3, 4, 5]
const doubled = array1.map((number) => number * 2)
console.log(doubled)

// reduce
const arrayTest = [1, 2, 3, 4, 5]
const initialValue = 0
const sumWithInitial = arrayTest.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
console.log(sumWithInitial)

// find (returns the first element that satisfies the provided testing function)
const findArray = [1, 2, 3, 4, 5]
const found = findArray.find((element) => element > 3)
console.log(found)

// findIndex (returns the index of the first element that satisfies the provided testing function)
const array2 = [1, 2, 3, 4, 5]
const isLargeNumber = (element) => element > 3
console.log(array2.findIndex(isLargeNumber))

// concat
const array3 = [1, 2, 3, 4, 5]
const array4 = [6, 7, 8, 9, 10]
const concatedArrays = array3.concat(array4)
console.log(concatedArrays)

// slice
const animals = ['Dog', 'Cat', 'Monkey', 'Pig']
console.log(animals.slice(1))

// splice
const moreAnimals = ['Boar', 'Giraffe', 'Tiger', 'Rhino']
console.log(moreAnimals.splice(1))