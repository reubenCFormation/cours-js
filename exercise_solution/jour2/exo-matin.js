//1) Affichez, via un console.log, chaque elemnt de notre tableau de maniere dynamique (hint: Une boucle!)
var myArray=["first","second","third","fourth","fifth","sixth","seventh","another!"];

for(var i=0;i<myArray.length;i++){
    //console.log(myArray[i]);
}

var restaurants=[{name:"My fast food",items:["Burgers","Kebab","Cookies","Beer"],city:"Paris"},{name:"La brasserie du coin",items:["Ouef mayo","Foie gras","Entrecote","Vin rouge","vin blanc"],city:"Bordeaux"},{name:"La boufe orientale",items:["houmous","falafel","Schawaram","Lebaneh"],city:"Lyon"}];

//2) Avec nos listes de restaruants, affichez en une seul ligne, pour chaque restaurant, "Le restaurant s'apelle {name} et il se trouve a {city}"

for(var i=0;i<restaurants.length;i++){
   // console.log(`Le restaruant s'apelle ${restaurants[i].name} et il se situe a ${restaurants[i].city}`);
}


//3) Toujours avec nos listes de restaruants, affichez en une seul ligne, pour chaque restaurant,  "Le restaurant s'apelle {name} et il a {nombre de plats} sur son menu"
for(var i=0;i<restaurants.length;i++){
    //console.log(`Le restaruant s'apelle ${restaurants[i].name} et il comporte ${restaurants[i].items.length} plats sur son menu`)
}


var myAnimalsObj=[{name:"Mammal",animals:["Dog","Cat","Lion","Wolf","Humans"]},{name:"Reptiles",animals:["Lizard","Snake","Crocodile","Turtles"]},{name:"Amphibians",animals:["Frog","Salamender"]},{name:"Fish",animals:["Sharks"]}];

//4) En vous inspirant du tableau myAnimalsObj!
//a) avec une boucle faites en sorte d'afficher le nom de chacun de nos animaux (Mammal,Reptiles etc) Pensez a la clé name!
//b)Faites en sorte d'afficher chacun de nos animaux qui se trouve dans la clé animals sur chacun de nos objets (pensez a une boucle imbriqué!)

for(var i=0;i<myAnimalsObj.length;i++){
    //console.log(myAnimalsObj[i].name);
}

for(var i=0;i<myAnimalsObj.length;i++){
    //console.log(`Animals de type ${myAnimalsObj[i].name}`);
    
    var animals=myAnimalsObj[i].animals;
    

    for(var j=0;j<animals.length;j++){
        //console.log(animals[j]);
    }

}

// Bonus 1
//5)  Si la clé animals a plus de 3 elements, affichez les informations de notre objet. Affichez le nom de la classe (la clé name) et listez tous les animaux qui appartiennent a cette classe Par exemple, "liste de repitles" et en dessous tous nos reptiles!



//6) Toujours avec le meme tableau (myAnimalsObj), construisez un nouveau tableau et, encore une fois, si nous avons plus de 3 animaux dans notre classe (representé par la clé name), alimenter ce nouveau tableau avec l'objet actuelle qui contient plus de 3 animaux

var manyAnimals=[];

for(var i=0;i<myAnimalsObj.length;i++){
    var animals=myAnimalsObj[i].animals;

    if(animals.length>3){
        manyAnimals.push(myAnimalsObj[i]);
    }
}
/*
console.log(manyAnimals)
*/





// Bonus2
// Nous volouns que un entier qui commencera a zero attiegne une valeur supperiere ou egale a 10000 et tant que cette valeur n'a pas attient les 10,000 nous allons continuer a incrementer sa valeur par un  entier aleatoire entre 0 et 100. Attention! 10,000 en programmation ne sera pas reconnu comme un chiffre! Il faut ecrire 10000!



