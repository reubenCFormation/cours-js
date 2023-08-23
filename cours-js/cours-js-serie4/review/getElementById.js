 /*
 1)cette methode nous permet de pouvoir recuperer un id en particulier dans notre page html et ainsi nous pouvons appliquer des traitements dessus!
 2)noter que nous avons pas besoin de preciser le # car la methode attend deja un id
 */
console.log("J'affiche des informations!!");

 var myId=document.getElementById("myId");
// myId devient un objet

 console.log("get type my id");
 console.log(myId);

 myId.textContent="Hello World!! This is the text content!";

 myId.classList.add("custom-style");



 // maintenant,nous allons pouvoir faire pliens de traitements sur cette id. En voici quel que uns 
  /*
    1)Definir du contenu textuelle 
    2)Definir des styles a la volée
    3)Inserer des enfants de maniere dynamique
    4)Voir l'enfant qui vient d'etre inseré
  */

    //1) definir du contenu textuelle (nous utilisons la proprieté textContent)
   
   

    
