// BOUCLES


//1) Les Boucles:comment ca marche? 
// Une boucle sert principalement a repeter les memes instructions plusiers fois. Si nous voudrions faire un console.log de 0 a 100 sans une boucle, on serai forcé a ecrire 100 fois un console.log. Ca serai en effet trés fastideux! C'est pour cela que nous avons inventé les boucles!
    /*
      Une boucle a 3 partie principales: 
      1) La condition d'initialisation
      2) La condition de fin 
      3) L'incrementation 
      

    */
    // decortiquons ensemble cette boucle 
     /*
        1) Premier partie, nous initialisons une variable i et nous lui affectons la valeur de 0 au debut
        2) Nous allons continuer a incrementer la valeur de i jusq'au moment ou i n'est plus inferier a 30 
        3) A chaque tour de boucle, nous allons incrementer i par un
        4) Noter les ; pour separer la condition d'initialisation et la condition de fin

     */
    
   /*
      for(var i=0;i<30;i++){
        console.log(i);
      }

      */
      
      

//2) A quoi ca va vraiment nous servir? 
      // Nous pouvons bien le deviner, on va rarement afficher 0 a 30 dans la console, ca n'a aucun interet! Mais imaginons que nous avons un tableau d'etudiants, et que nous souhaterai afficher le nom de chaque etudiant dans la console...la ca pourrai nous servir!

      var students=["Tom","Eli","Bill","Peyton","Asante","Wes","Jenny","Sarah","Clara","Emily"];
      
      // Ici i commencera a 0 et continuera a s'incrementer jusq'au moment ou il ne sera plus infereiur a la longeur du tableau. Nous allons ainsi pouvoir acceder a l'index correspondant!
      
      for(var i=0;i<students.length;i++){
       // console.log(students[i])
      }
      

//3) Nous pouvons construire des tableaux vides et les alimenter a l'aide d'une boucle et en combinant des conditions!
 //----------------------------------------------------------------------------------------------------------------
      // ici j'ai un tableau vide
    var studentsWithLongName=[];

    for(var i=0;i<students.length;i++){
        if(students[i].length>4){
            // si je tombe dans la condition, j'alimente le tableau a l'aide d'un push!
            studentsWithLongName.push(students[i]);
        }
    }
    /*
    console.log("Etudiants avec un long prenom");
    console.log(studentsWithLongName);
    */
    
    

// 4 Les boucles imbirqués 
  //-----------------------------------------------------------------------------------------------------------------------------
    // parfois, on va se trouver avec des tableau dans des tableaux, ce sont des tableaux multidimensionelle, et la, une boucle ne va pas suffire! C'est pour cela que nous allons devoir faire une boucle dans une boucle!
     var multiArray=[["firstFirst","secondFirst","thirdFirst"],["firstSecond","secondSecond","thirdSecond"],["firstThird","secondThird","thirdThird"]];

     for(var i=0;i<multiArray.length;i++){
        // remarquer que la boucle imbriqué utilise une nouvelle variable (j et non i!)
        //console.log(multiArray[i]);
        
        for(var j=0;j<multiArray[i].length;j++){
            
            //console.log(multiArray[i][j]);
          
        }
     }

//5) Boucler sur des tableaux d'objets 
  //------------------------------------------------------------------------------------------------------------------------------------------
        // Comme nous l'avons deja vu, nous avons aussi des objets. On aussi vu hier que lorse que nous avons plusiers etudiants avec les memes caracteristiques (age, moyenne,nom) il etait beaucoup plus simple de mettre plusiers objets dans un tableau au lieu de devoir construire un grand objet avec beaucoup de clés unique. 

    // reprenons notre talbeau d'hier
    var studentsObjects=[{age:24,score:15,name:"Tom"},{age:23,score:17,name:"Eli"},{age:30,score:16,name:"Heloise"},{age:22,score:20,name:"Parfait"}];

    // comment afficher en une ligne, les informations de chacun de nos etudiants via une boucle? Et aussi decouvrir une nouvelle facon de concaterner!

    for(var i=0;i<studentsObjects.length;i++){
        
        console.log(`L'etudiant s'appelle ${studentsObjects[i].name} il/elle a ${studentsObjects[i].age}  ans et a une moyenne de ${studentsObjects[i].score}`)
        
    }


// 6) Boucler sur des objets!
//----------------------------------------------------------------------------------------------------------------------------------------
  // on ne vas pas forcement le faire trés souvent, mais il est probablement important de savoir que on peux aussi boucler sur des objets 
    var myObj={name:"Reuben",age:33,city:"Paris",languages:["French","English"]}
    for(key in myObj){
        /*
        console.log(typeof key)
        console.log(`La clé ${key} correspond a la valeur ${myObj[key]}`)
        */
    }

//7) Boucle while 
//--------------------------------------------------------------------------------------------------------------------------------------

 // Une boucle while sera utilisé lors que nous nous trouvons dans une situation imprevisible, souvent ca arrivera pendant un jeu mais on va utiliser les boucles while dans chaque cas de figure ou le comportement de l'utilisateur ne sera pas previsible
 
 /*
    1) une boucle while va continuer a s'effectuer tant que la condition que elle teste reste vrai
    2) il faut faire attention a ne pas se retrouver dans un cas de figure que sera toujours vrai, sinon on va creer une boucle infini!
 */

    // exemple 
    var number=0;
    /*
    while(number<10){
        
        //number++;
        //console.log("on reste dans la boucle while")
        
    }
    */
    /*
    console.log("nous avons terminé la boucle while");
    console.log(number);
    */

    