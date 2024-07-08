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

// forEach (arrayer)
const numbersForEach = [1, 2, 3, 4, 5]
numbersForEach.forEach((number) => {
    console.log(number)
})


// forIn (objekt)
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
