

const numbers = [1,2,3,4,5];
const doubleNumbers = [];

for(i=0; i < numbers.length; i++){
    const element = numbers[i] *2;
    doubleNumbers.push(element)
}


const tripleNumbers = numbers.map(element => element *3)
console.log(tripleNumbers);
console.log(doubleNumbers);