
//-----------------------------------------------------------------------------------------------------------------------------

 // une methode predefini est un morceau de code que javascript a pu ecrire a notre place pour faire un certain nombre de traitements sur nos variables que ce soit des chaines de caracteres,des tableaux etc. Javascript a ecrit environ 1000 methodes predefinis, il serai evidement impossible de les lister tous ici et il faut savoir que une partie du boulot d'un developpeur est de pouvoir aller sur internet et chercher les methodes que il lui faudra dans un certain cas!

 //1) Methode predefini numero1: (length). La methode length, va nous renvoyer le nombre d'elements qui se trouve dans un tableau ou dans une chaine de caracteres 
 //--------------------------------------------------------------------------------------------------------------------------------
    var array=["first","second","third","fourth","fifth","sixth","seventh","eiegth"];
    // ainsi la longeur du tableau sera 8 car nous avons 8 elements dans notre tableau. A noter que ceci est primordial car parfois nous allons avoir de trés long tableau et bien sur nous allons pas pouvoir compter chaque element a la main
    /*
    console.log("longeur du tableau");
    console.log(array.length);
    */
    
    
    var string="this is a string whose length will be hard to determine";
    /*
    console.log("longeur de la chaine");
    console.log(string.length);
    */
    

 //2) indexOf
//-------------------------------------------------------------------------------------------------------------------------------------
    
    var array=["first","second","third","fourth","fifth","sixth","seventh","eiegth"];

    
    /*
        La methode indexOf nous permet de verifier si un tableau contient une valeur ou pas.
        1) par example array.indexOf("tenth") va nous renvoyer -1 (la valeur n'est pas contenu dans le tableau)
        2) array.indexOf("sixth") nous renverra 5 (l'index correspondant du tableau, souvenons nous que l'indexation commence a 0!)
    */
     /*
        console.log("quand l'element n'est pas trouvé");
        console.log(array.indexOf("tenth"));
        console.log("quand l'element est trouvé");
        console.log(array.indexOf("third"));
        console.log("premier element du tableau");
        console.log(array.indexOf("first"));
        */
    

  //3) charAt 
  //---------------------------------------------------------------------------------------------------------------------------------
    // nous pouvons aussi tester quelle est la lettre qui se trouve a un certain indexe d'une chaine de caracteres (et oui, les chaines de caracteres sont aussi indexé, juste comme les tableaux!) A noter que les espaces sont aussi consideré comme des caracteres!
    // va nous renvoyer t

    var string="this is a string whose length will be hard to determine";
      /*
    console.log(string.charAt(0));
    */
    
    // ecrire string[0] marche aussi et va nous renvoyer la meme valeur!
    
    // va nous renvoyer
    // ecrire string[10] marche  aussi a va nous renvoyer la meme valuer!
    /*    
    console.log(string.charAt(10));
    */

//4) push
//---------------------------------------------------------------------------------------------------------------------------------------
 // la methode push nous permet d'ajouter une valeur a un tableau. Si par exemple, nous voulons rajouter une valeur a notre tableau array: 
 
 var array=["first","second","third","fourth","fifth","sixth","seventh","eiegth"];
 
 /*
 console.log("get array after push");
 console.log(array);
 console.log("get array length after push");
 console.log(array.length);
 */

 //5 Math
 //-------------------------------------------------------------------------------------------------------------------------------------
   // javascript a une "classe" (pas important de savoir ce que c'est pour le moment) natif qui s'apelle Math et avec le quelle on peux faire des choses interessantes. Par example on peux convertir une valeur flottante en entier 
   var float=3.5

   /*
   var roundUp=Math.ceil(float);
   console.log("round up")
   console.log(roundUp);
   */

   /*
   var roundDown=Math.floor(float);
   console.log("round down")
   console.log(Math.floor(float));
   */

   // on peux aussi generer un numero aleatoire  entre 0 et 1 (qui sera une valeur flottante bien sur !)
   var randomNumber=Math.random();
   /*
   console.log("get random number");
   console.log(randomNumber);
   */
   


// 6 typeof 
//--------------------------------------------------------------------------------------------------------------------------------------
 // meme si typeof n'est pas vraiment une fonction, c'est plutot une evaulation, ca va jouer un role primordial pour nous! typeof va nous permettre d'evauler le type d'une variable 

 var string="this is a string whose length will be hard to determine";
  /*
  console.log("type de string");
  console.log(typeof string);
  */
  
  var floatingNumber=340;

 
  

  /*
  console.log("type de float");
  console.log(typeof floatingNumber);
  */

  /*
  
  //  En javascript les tableaux sont finalement une sous categorié d'objets, donc ils sont considerés comme des objets, ils appartiennent a la categorie d'objets mais ils ont evidement leurs properes attributs que nous venons de voir!.Mais si c'est pas clair, ne vous fixez pas la dessus, c'est pas essentielle et a notre niveau c'est pas trés important de comprendre pourquoi.
  console.log("type of Array");
  console.log(typeof array);
  // renverra true qui nous confirme que c'est bien un tableau aussi!
  console.log(Array.isArray(array));
  */

  
  
  
