// La Concetenation 
 // en javascript, la concatenation nous permet de joindre deux valeurs ensemble, on peux rajouter deux chaines de caracteres differentes, on peux rajouter une chaine de caractere avec une valeur numerique, on peux rajouter une chaine de caractere en dur avec une valeur dynamique (une variable) etc. 

 //1) Joindre une chaine de caractere en dur avec une valeur dynamique 
 //-----------------------------------------------------------------------------------------------------------------------
  // en javascript la concatenation se fait avec le symbole +
    var myName="Reuben";
    /*
    console.log("Bonjour je m'apelle"+" "+myName);
    */
    

    // on peux aussi concatener plusiers valuers ensembles 
    var firstBook="Rever";
    var secondBook="Sharko";
    /*
    console.log("Aujourd'hui, j'ai lu "+firstBook+" "+"et "+secondBook);
    */
    

//2) Joindre une chaine de caracteres avec un numero resultera en une chaine de caracteres!
    var number=10;
    var stringNumber="10";
    var result=number+stringNumber;
  /*
    console.log(typeof result);
    */
    

//3) On est meme capable de faire une concatenation avec un tableau!, le tableau va pouvoir se "derouler succesivement!" Magique!
 var myArray=["titi","toto","tata","? de la magie"];
 /*
 console.log("que se passe t'il si je fais une concatenation avec "+myArray+" "+"se passera");
 */

 //4) Une facon bien plus facile de faire une concatenation! (les backticks et les ${}!)
 /*
   console.log(`Bonjour tout le monde je m'apemme ${myName} et j'ai ${number} ans et je suis deja chauve!`)
   */
  
