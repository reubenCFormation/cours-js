//1) Les tableaux (introduction)
//---------------------------------------------------------------------------------------------------------------------------
    //Imaginons que nous avons une liste de 10 etudiants et que nous voulons les lister, les uns apres les autres? Comment faire?
    /*
        On pourrai creer une variable pour chacun de nos 10 etudiants comme ceci: 
        1) var student1="Toto";
        2) var student2="Tata",;
        3) var student3="Titi";
    */
   

    // neanmoins on peux vite s'apercevoir que de faire cela peux trés vite devenir fastideux, surtout lorsque on va avoir plus de 10 etudiants a lister et c'est pour cela que javascript et presque toute autre langage de programmation a trouver une solution: Les tableaux! Que est un tableaux? Un tableaux est une variable qui nous permettra de stocker plusiers valeurs separés par des virgules!

    //exemple de comment un tableau s'ecrit
    var students=["Toto","Titi","Tata","Francois","Emilie","Alexandre","Alexandra","Marie","Vincent","Nicolas"];

   
    
     /*
        Que dois je faire si je veux acceder a un etudiant en particulier? C'est la ou rentre en jeu l'indexation d'un tableau!
        1) Pour acceder a une valeur de mon tableau, je dois crocheter sur son index, students[index]
        2) Il faut garder en tete le decalage entre l'indexation et l'emplacement de la valeur du tableau. Le premier element de mon tableau correspondera a l'index 0, le 2eme a l'index 1, troisieme a l'index 2 et ainsi de suite, note que il y a un decalage de 1 entre l'emplacement et l'indexation tout simplement parce ce que l'indexation commence a partit de zero!
        
     */

        //Comment acceder a la premiere valuer de notre tableaux (Toto)? 
        /*
         console.log(students[0]);
         */
         
         

         // Comment acceder a la 4eme valeur de mon tableau  (Francois)? 
         /*
         console.log(students[3]);
         */
         
         

        // finalement il est important de noter que chaque valeur dans un tableau peux correspondre a tous types de variables que ca soit des chaines de caractere, des entiers, des booleans, et meme des autres tableaux! Par exemple 

        var mixedArr=["a string",false,["another","array","here"],25];
       
      
         