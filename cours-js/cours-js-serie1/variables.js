
//1) Les Variables (pourquoi en avons nous besoin?)
//---------------------------------------------------------------------------------------------------------------------
/*
console.log("Actuellement je suis content");
console.log("Actuellement je suis triste");
console.log("Actuellement je suis enervé");
console.log("Actuellement je suis amusé");
*/


/*
Comme nous pouvons le constater, il est pas trés compliqué d'afficher a notre programme comment on se sent.On peux continuer a ecrire ligne apres ligne notre etat actuelle. Neanmoins, chaque fois que on va devoir changer son etat actuelle, on va devoir de nouveau re-ecrire son etat actuelle. On pourra se retrouver avec beaucoup de console.log! 


Ca ne serai pas bien de stocker comment on se sent dans un seul endroit et que ensuite notre programme puisse recconaitre comment on se sent et puisse l'exploiter un peu partout?

C'est pour cela que nous avons crée des variables! 
*/

// example d'une variable
/*
    1) mot clé Var
    2)le nom de la variable (ce que l'ordinateur stockera en memoire)
    3) La valeur qui sera affecté a la variable
*/
var howIFeel="Je suis content";


/*
console.log(howIFeel);
*/





//2)Les Types differentes de variables 
//--------------------------------------------------------------------------------------------------------------------------------
 //globalement, nous avons 5 types de variables principales en javascript 
 /*
    1)Les chaines de caracteres
    2)Les valeurs numerique (flottants, entiers)
    3)Les booleans
    4)Les tableaux
    5)Les objets

 */

//3) Les chaines de caracters 
//---------------------------------------------------------------------------------------------------------------------------------
  // une chaine de caractere est delimité par un guillemet d'ouvertrue et un guillemet de fermeture, on peux plus globalement voir une chaine de caractere comme du texte pur 

  var myName="Reuben";
  /*
  console.log("mon nom au debut");
  console.log(myName);
  */
  
  
  // je rajoute mon nom de famille a la fin de mon nom! Et c'est comme ca que nous pouvons modifier une variable, on n'a pas besoin de redeclarer la variable avec le mot clé var car elle existe deja!
  myName="Reuben Chouraki"
  /*
  console.log("mon nom a la fin");
  console.log(myName);
  */
  

  //4) Les valeurs numerique
  //----------------------------------------------------------------------------------------------------------------------------------
  
   // nous avons deux grandes types de valeurs numeriques, les flottants et les entiers 
   /*
    1) les flottants sont de numero de decimal, nous allons voir plus tard comment les traiter avec les fonctions predefini
    2) Les entiers (on va se focaliser dessus pour le moment)
   */

   // Je declare une variable int et je lui affecte la valeur de 10 
    var int=10;
    
    
    console.log("int avant incrementation");
    console.log(int);
    
    
   // je decide que je veux incrementer la valeur stocké dans int par 5 
    int+=5;
    /*
    console.log("int apres incrementation");
    console.log(int);
    */
    
   // je decide de decrementer int par 5 
   int-=5;
   /*
   console.log("int apres decrementation");
   console.log(int);
   */
   
   // enfin, nous pouvons ecrire un raccourci quand nous souhaitons incrementer ou decrementer de seulment 1 (le raccourci peux s'ecrire ++ pour incrementer par un ou -- pour decrementer par un)

   //5) Les valeurs boolean 
   //-----------------------------------------------------------------------------------------------------------------------------------------
    /*
        1)On verra plus en detail les valeurs booleans plus tard, mais globalement une valeur booleans et une valeur binaire qui sera soit vraux ou faux 
        2) true pour vrai
        3) false pour faux
    */

        // exemple: 
        var isTrue=true;
        
        var isFalse=false;
        
