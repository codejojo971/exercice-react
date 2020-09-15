// var la portée de var sera la fonction

if(true) {
    var name= "fabio"
}
console.log(name)
// let est quand a lui "block scoped" il a la porté du block
// en JS on a le phenomene de remontée de variable (housted en anglais)
let names
if(true) {
    let names= "fabio"
}
console.log(names)
//avec const on ne peut pas reaffecter une variable
// attention cependant aux types reference (on peut modifier les objects, tableaux,fonctions)
const tableau = [];

tableau.push("cerise");

const number =5;

