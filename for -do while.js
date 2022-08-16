"use strict"

// For loop :

for (let i = 0; i <= 5; i++) {
    console.log(i)
}





///////////for of /////////////

const a = [1, 2, 3, 4, 5]
for (const num of a) {
    console.log(num * num)
}


///////////////////Creating of an array with given array///////////////////
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] ** 2)

}
console.log(newArr);






///////////////while loop : ////////////////

let j = 0
while (j <= 5) {
    console.log(i)
    j++
}




/////////////////////////// Do While/////////////
let s = 0
do {
    console.log(i)
    s++
} while (i <= 5)