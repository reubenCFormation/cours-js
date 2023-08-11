
/*
   // RAPPEL
    1) Une fonction est un morceau de instructions que nous pouvons executer a divers endroits dans notre code
    2) Une fonction ne va que s'executer lors que nous faison appel a la fonction
*/
// ici je defini une fonction. Si je ne fais pas appel a la fonction, elle ne s'executera jamais!
function myFunction(){
    
 console.log("ceci est une simple fonction qui va juste faire un console.log et rien d'autre!");
 console.log("et on peux encore faire un console.log!");
}

// ici je l'execute en y faisant appel!
/*
myFunction();
*/




/*
 // MOT CLE RETURN
   1) les variables dans une fonction ne sont que reconnu DANS LA FONCTION. Si j'essaye d'y acceder a une variable dans une fonction, en dehors de la fonction, je vais avoir une erreur! 
   2) C'est pour cela que le return est si important, c'est le seul moyen d'acceder a une variable dans une fonction en DEHORS de la fonction 
   3) Pour pouvoir stocker ce que la fonction nous retourne, nous devons faire appel a la fonction et stocker la valeur retourné par cette fonction dans une variable!

*/


function returnsStr(){
    var string="hello, ceci est une chaine de caracteres";
    return string;
}
// va declencher une erreur!
/*
console.log(string);
*/


// si j'essaye de faire un console.log de string. Je vais voir une erreur du genre "string is not defined" apparaitre!

/*
console.log(string)
*/

// c'est pour cela que nous devons faire appel a la fonction et stocker cette appel dans une variable pour recuperer la valeur d'une variable. Il faut aussi que notre fonction retourne cette valeur!

var getReturnedVal=returnsStr();

/*
console.log(getReturnedVal);
*/




/*
 // LES PARAMETRES 
 1) souvent, lors que nous allons vouloir faire appel a une fonction, nous allons voulour lui passer des valeurs differents chaque fois que nous y faison appel
 2)Pour faire ainsi, lors que nous allons definir une fonction, nous allons devoir preciser que cette fonction prendra un parametre. Nous allons decider de passer le parametre en argument lors que nous faison appel a la fonction!
 3) Il est important de noter que nous pouvons passer un tableau, une chaine de caractere, un objet etc comme valeur du parametre (en argument) lors que nous faison appel a la fonction


*/

            // ici name est le parametre
function sayHello(name){
    console.log(`bonjour ${name} `)
}
// affichera bounjour Laurent car ici name sera egale a "Laurent" car nous passons "Laurent" en argument lors de l'appel a la fonction
/*
sayHello("Laurent");

// affichera bonjour Emilie car ucu bale sera egale a "Emilie" car nous  passons "Emilie" en argument lors de l'appel a la fonction

sayHello("Emilie");

sayHello("Ikrame");
*/



// on peux aussi passer plusiers parametres a une fonction separé par des virgules!

function sayHelloSeveral(name1,name2){
    console.log(`bonjour ${name1} et ${name2}`)
}
// affichera bonjour Emilie et Laurent
/*
sayHelloSeveral("Emilie","Laurent");
*/
// affichera bonjour Jeremy et Johnny
/*
sayHelloSeveral("Jeremy","Johnny");

sayHelloSeveral("Thom","Pauline");
*/


