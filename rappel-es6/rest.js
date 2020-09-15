// ...rest

const tableau = [11,6,3,50];

//ecrire une fonction qui parcours le tableau, et donne le total de ce tableau
// la fonction sera une arrow fonction
function ajouter(array)
{
    let total=0;
    for (const number of array){
        total += number
    }
    return total
}

console.log(ajouter(tableau))

//rest Operator
const ajouterRest = (...numbers) => {
    let total=0;
    for (const number of numbers){
        total += number
    }
    return total
}
const resultat = ajouterRest(1,4,10)
console.log(resultat);

    