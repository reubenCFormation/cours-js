//1) Les Objets
//---------------------------------------------------------------------------------------------------------------------------
  /*
    -- Un objet en javascript nous permet de stocker des valeurs sous forme de clé et de valeurs
    -- exemple: var myObj={key1:"value1",key2:"value2"}
    -- pour acceder a valeur de key1 dans cette objet, il faut ecrire myObj.key1!
    
  */

    // maintenant, imaginons un etudiant qui aurai un age, une moyenne et bien evidement, un nom
     var student1={age:28,score:16,name:"Pierre"}
     // pour acceder a l'age et la moyenne de l'etudiant
     /*
      console.log(student1.score);
      
      console.log(student1.age);

      console.log(student1.name);
      */
      
     

      // maintenant que se passe t'il si on a un 2eme etudiant? 
      var students={age:25,score:14,name:"Pierre",age:22,score:18,name:"Vincent"};
     /*
      console.log(students.age);
      console.log(students.score);
      */
    

      // on voit bien que les 2eme clés ont ecrasé les premieres clés car comme j'ai dit, chaque clé dans un objet doit poreter une nom unique, allors comment faire pour distinguer entre plusiers etudiants si on veux mesurer les memes metriques (score,age,name)? 
      /*
        1) solution1):creer un gros objets avec des clés nommé differement 
            ex: var students={ageStudent1:20,scoreStudent1:19,nameStudent1:"Pierre",ageStudent2:21,scoreStudent2:14,nameStudent2:"Elodie"}
            // mais ici on voit bien que si on a une dizaine d'etudiants, on va devoir a chaque fois ecrire une nouvelle valeur de clé, cela peux devenir fastideux et nous induire en erreur 

        2) Solution 2): Creer un tableaux d'objets! On sait que les tableaux peuvent stocker plusiers types de valeurs et donc bien sur, ils peuvent stocker des objets!

      */

        var studentsObjects=[{age:24,score:15,name:"Tom"},{age:23,score:17,name:"Eli"},{age:30,score:16,name:"Heloise"},{age:22,score:20,name:"Parfait"}];
      

        // pour acceder a l'age de notre premier etudiant 
         /*
          console.log("age de mon premier etudiant")
          console.log(studentsObjects[0].age);
          */
          
          
         // pour acceder au nom de notre prmeier etudiant 
         /*
          console.log("nom de mon premier etudiant")
          console.log(studentsObjects[0].name);
          */
          
          

          // pour acceder a l'age de notre dernier etudiant 
        /*
          console.log("age de mon dernier etudiant")
          console.log(studentsObjects[3].name);
          */
          


  // 2) Une autre facon d'acceder a la clé de notre objet!
      // parfois,on va voir on va devoir acceder a une clé sous forme de chaine de caracteres cette a dire que la valeur de notre clé sera ecrite comme une chaine de caracteres et non comme une clé d'un objet!
       var myObj={restaurant:"Five Guys",food:"Burgers and fries",location:"all arround paris"};
       var restaurantKey="restaurant"
       // ceci ne va pas fonctionner et va nous renvoyer undefined!
       /*
       console.log(myObj.restaurantKey)

       // ceci fonctionnera!
       console.log(myObj[restaurantKey]);
       */
         

          

          
        
        
          
       
