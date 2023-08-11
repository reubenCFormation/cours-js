//1) A partir de ce tableau, trouver un moyen d'afficher la somme de la longeur de chaque element du tableau et stocker ce resultat en une variable. Faites un console.log de ce resultat
var strings=["first string","second string","third string"];

var totalLength=strings[0].length+strings[1].length+strings[2].length;
/*
console.log(totalLength);

*/


//2) A partir de ce tableau d'objets pour chaque element du tableau, afficher le type de chaque clé d'objet dans mon tableau
var typesArr=[{value:"Hello, I am a string"},{value:false},{value:25},{value:30}];
/*
console.log(typeof typesArr[0].value);
console.log(typeof typesArr[1].value);
console.log(typeof typesArr[2].value);
*/

//3) A partir de ce tableau d'objets ecrivez (avec une concatenation) en une seul chaine de caracteres, le type et le nom du premier et avant dernier element du tableau du genre "le premier element du tableau et de type.... et on l'appelle un....."
var animals=[{type:"Mammal",name:"Elephant"},{type:"Mammal",name:"Cat"},{type:"Mammal",name:"Dog"},{type:"Reptile",name:"Crocodile"},{type:"Reptile",name:"Lizzard"}];

var animalDescription="Le type du premier element de mon tableau d'animaux est de "+animals[0].type+" et son nom est "+animals[0].name+" et puis l'avant dernier element de notre tableau est de type "+animals[3].type+" et il s'apelle "+animals[3].name;
/*
console.log(animalDescription);
*/

//4) Rajouter un element au tableau (un objet avec une clé type et une clé name), et faites la meme chose. Bonus: utilisez la methode push pour rajouter au tableau et acceder a l'avant dernier element du tableau de maniere dynamique

var animals=[{type:"Mammal",name:"Elephant"},{type:"Mammal",name:"Cat"},{type:"Mammal",name:"Dog"},{type:"Reptile",name:"Crocodile"},{type:"Reptile",name:"Lizzard"}];

animals.push({type:"Reptile",name:"Snake"});


var animalDescription="Le type du premier element de mon tableau d'animaux est de "+animals[0].type+" et son nom est "+animals[0].name+" et puis l'avant dernier element de notre tableau est de type "+animals[animals.length-2].type+" et il s'apelle "+animals[animals.length-2].name;
/*
console.log(animalDescription);
*/



//5) A partir de ces deux tableaux, verifiez pour chaque element du 2eme tableau, si il est contenu dans le premier tableau.
// Bonus (pour ceux qui veulent decouvrir les conditions et les boucles!): Stockez en une variable le nombre d'elements dans le 2eme tableau qui ne sont pas contenu dans le premier tableau 
var arr1=["Dog","Lizard","Cat","Mouse","Elephant"];
var arr2=["Dog","Rat","Tiger","Wolf","Elephant","Frog"];


//console.log(arr1.indexOf(arr2[0]));
/*
console.log(arr1.indexOf(arr2[1]));
console.log(arr1.indexOf(arr2[2]));
console.log(arr1.indexOf(arr2[3]));
console.log(arr1.indexOf(arr2[4]));
console.log(arr1.indexOf(arr2[5]));
*/




//6) A partir de cette chaine de caractere, créer un tableau (chaque element apres nos virugles sera un element de notre tableau). (Il va falloir chercher pour voir comment transformer une chaine de caracter en tableau). Apres retransformer le tableau un chaine de caraecter mais cette fois si, sans virgules!
var myString="This,will,be,an,array,seperated by,a comma"

var myStringToArr=myString.split(",");
console.log(myStringToArr);


