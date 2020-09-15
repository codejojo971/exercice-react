//ecrire une fonction qui retourne le carré du nombre passé en parametre
// version classique
function carre(x) {
   return x*x;
}

const result = carre(5);
console.log(result);

//version Arrow function (function fléché)
const square2 = x => x*x;


const newResult = square2(9);
console.log(newResult);

const ajouter =(a,b) => a+b;

const result3 = ajouter(11,6);
console.log(result3);