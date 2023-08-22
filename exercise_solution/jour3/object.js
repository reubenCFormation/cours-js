
// Nous savons que des objets on une clé et une valeur.
console.log("HELLLO WOLRD!!");
var myObj={name:"Reuben",age:33,sex:"male"};

// Cependant, des objets peuvent aussi stocker comme clé une fonction! 
var myNewObj={
 stringKey:"String",
 boolKey:false,
 arrayKey:["first","second","third","fourth"],
 // fonction anonyme
functionKey:function(type){
    console.log(`je suis une clé qui a comme valeur une fonction! on appele sa une ${type}`);
}};




// va executer la fonction contenu dans fonction key!

// EXEMPLE

myNewObj.functionKey("methode");





// si c'est plus simple, il est aussi possible de preciser un nom pour une methode 

function myMethod(){
    console.log("un autre example d'une fonction qui est contenu dans une clé d'objet");
}

var namedFunctionObj={
 namedFunc:myMethod,
 
}


// va executer la fonction myMethod


// EXEMPLE
/*
namedFunctionObj.namedFunc()

*/

// nous pouvons aussi alimenter la clé d'un objet a la volée

// ici cette objet a une clé que s'apelle emptyStr qui a comme valeur une chaine de caracteres vide

var emptyStringObj={
    emptyStr:""
}

//Ici je vais alimenter la valeur de emptyStr a la volée 
/*
emptyStringObj.emptyStr="Ici j'alimente la clé empty string"
*/

 // EXEMPLE
/*
console.log(emptyStringObj.emptyStr);
*/



