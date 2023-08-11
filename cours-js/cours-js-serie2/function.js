// LES FONCTIONS 
//1) Que est ce que c'est une fonction 
 //-------------------------------------------------------------------------------------------------------------------------------------
/*
    les fonction sont des instructions re-utilisables que on va pouvoir ecrire a divers endroits de notre script pour les Noter: 
    1) Quand on decalre une fonction ,on defini ce que la fonction va faire 
    2) Mais pour pouvoir executer la fonction nous avons besoin d'y faire appel 
    3) On peux executer une fonction a divers endroits de notre programme

*/
  // exemple decalaration de fonction 

  function basicFunction(){
     console.log("Ceci est ma premiere fonction!");
     console.log("Ceci est une fonction basique qui va juste faire un console.log");
  }

  // example d'appel a la fonction 
  /*
  basicFunction();
  */

  //2) Le mot clé return 
  //------------------------------------------------------------------------------------------------------------------------------------
    // bien sur, comme nous doutons, on ne va pas ecrire des fonctions juste pour faire un simple console.log. Souvent une fonction va nous servir pour nous retourner une valeur que nous pourrons ensuite stocker dans une variable 
    /*
        une fonction sans aucun retour ne sera pas exploitable en tant que variable. Une fonction sans valeur de retour pourra etre utilisé pour faire un certain traitement etc. Mais on ne pourra pas stocker une valeur dans une variable en y faisant appel!
    */

    /*
        Tout d'abord remarquons ce qui se passe si j'essaye d'acceder a une variable que j'ai initiliasé dans une fonction!

    */
   
        function getLocalVar(){
            var localVar="ceci est une variable locale!";
        }
        // ceci va declencher une erreur, si j'essaye def aire un console.log de localVar en dehors de ma fonction!
        /*
        console.log(lovalVar);
        */
        // pour pouvoir palier a ce probleme, nous allons devoir retourner une valeur dans notre fonction et lors que une valeur est retourné, nous allons pouvoir l'exploiter en dehors de la fonction!

        function returnLocalVar(){
            var localVar="ceci est une variable locale qui pourra etre retourné!";
            return localVar;
        }

        // ici je vais devoir acceder au contenu de localVar en faisant appel a la fonction et en stockant le resultat dans une variable, ainsi je serai retourné le contenu de localVar! 

        var getLocalVar=returnLocalVar();
        /*
        console.log(getLocalVar);
        */

    function returnsNothing(){
        console.log("Si tu ne retourne rien dans ta fonction, tu ne pourra pas l'utiliser pour stocker une variable en dehors d'elle!")
    }
    /*
    var emptyValue=returnsNothing();
    */
    /*
    console.log("Une valuer non defini");
    console.log(emptyValue);
    */

    /*
    console.log("GET STORED VALUE");
    console.log(getStoredStr);
    */
   function returnArray(){
     var arrayToReturn=["first","second","third","fourth","fifth","sixth"];
     return arrayToReturn;
   }

   var getStoredArr=returnArray();
   /*
   console.log("GET STORED VAL");
   console.log(getStoredArr);
   */

   //3) Retourner une seul valeur 
    //-------------------------------------------------------------------------------------------------------------------------------
        // il est important de noter que une fonction ne peux que retourner une seul valeur! C'est pour cela que du moment que une fonction fait un return, nous sortons de la fonction tout de suite! Ca peux parraitre bizarre que une fonction ne peux que retourner une seul valeur mais si on y refelchi, c'est toute a fait logique! Si une variable ne peux que stocker une seul valeur, allors une fonction ne peux que retourner une seul valeur, Si j'ai deux return differents, quelle return choisir? (etant donnée que je ne peux choisir un seul) Le dernier? Dans ce cas, pk avoir mis un premier return? Etc. C'est pour cela que du moment que nous voyons un return, la fonction arrete de s'executer et nous retourne la valeur!

        // exemple 
        
        function testAfterReturn (){
            return "Apres ce return, la suite ne s'executera pas!";
            console.log("Cette ligne ne s'affichera pas");
            console.log("Cette ligne ne s'affichera pas non plus!")
        }
        /*
        console.log(testAfterReturn());
        */

//4) Les parametres 

    //----------------------------------------------------------------------------------------------------------------------------------
        // Un parametre est comme une valeur d'entree dynamique que nous allons donner a la fonction, c'est une valeur que changera d'appel en appel. Imaginons que je souhaite le bienvenue a une personne, je dois prendre en compte son nom! C'est pour cela que la fonction aura un PARAMETRE!

        // exemple 
         function sayHello(name){
            console.log(`Bonjour ${name}`)
         }
         // Lors de notre appel, nous pouvons preciser a QUI nous souhaitons le bienvenue (ce sont nos ARGUMENTS) Une fonction aura donc des PARAMETRES et lors que on appelle une fonction qui prends des parametres on lui passe des ARGUMENTS
         /*
         sayHello("Toto");
         sayHello("Tata");
         */

         // nous pouvons aussi, bien entendu avoir plusiers parametres dans une fonction 

         function sayHelloSeveral(name1,name2){
            console.log(`Bonjour ${name1} et ${name2}`);
         }

//5) Les Parametres par defaut d'une fonction 
        // dans une fonction ,nous avons l'option de preciser une valeur par defaut d'un parametre. Par exemple, parfois nous n'allons pas vouloir utiliser un parametre et dans ce cas, nous allons preciser que sa valeur par defaut sera "null";

   
        // voyons un exemple plus interessant de comment utiliser un parametre par defaut, par exemple lors d'une commande d'un nouveau produit, la plupart du temps nous aurons 10 nouveaux produits mais parfois ca peux varier

        function newInventory(amount=10){
            console.log("get amount");
            console.log(amount);
        }
        /*
        newInventory();
        newInventory(20);
        */
   

//6) Difference entre variable globales et locals
        //---------------------------------------------------------------------------------------------------------------------------
        
        var globalVar="Cette variable sera reconnu partout dans mon script";

        function createLocalVar(){
            /*
            console.log("Variable globale");
            console.log(globalVar);
            */
        
            var localVar="cette variable et locale et si je veux y acceder en dehors de la fonction, je vais devoir retourner la valeur et creer une autre variable en dehors de moi et affecter a cette valeur une appel a moi. Qui est moi? Je suis la fonction!";
            return localVar;
        }
        /*
        createLocalVar();
        */
        // La nous avons un erreur, car localVar a etait defini dans la fonction mais n'a pas etait defini en dehors de la fonction et donc localVar n'est que reconnu "localement" Pour afficher le contenu de localVar, nous allons devoir faire appel a la fonction createLocalVar et stocker cette appel dans une variable
        /*
        console.log("incoming error")
        console.log(localVar);
        */

        var getLocalVar=createLocalVar();
        /*
        console.log("VALEUR DE RETOUR DE LA FONCTION");
        console.log(getLocalVar);
        */

        
        

        

        

        