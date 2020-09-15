const person = {
    name:"Inconnu",
    gender:"Inconnu",
    human: true,
}

const person2 = {
    name: person.name,
    gender: person.gender,
    human : person.human
}



console.log("Person1:" , person);
console.log("Person2:" , person2);

person2.name = "jojo"
console.log("Person1:" , person);
console.log("Person2:" , person2);

//copie à l'aide du spread operator
const person3 = {
    ...person,
    name: "toto"
}
//person3.name="toto"
console.log("Person1:" , person);
console.log("Person2:" , person3);

