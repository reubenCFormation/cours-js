/*
1)La methode querySelectorAll va nous permettre de recuperer toutes les balises qui "match" avec la valeur que nous allons passer entre parentheses
2) Cette methode va nous renvoyer un tableau de nos balises sous forme d'objets!
3) nous allons pouvoir effectuer un traitement sur chaque balise individuelle a l'aide d'une boucle!
*/

// exemple: Ici, je vais recuperer toutes les balises qui contiennent la classe .div-list
var getDivs=document.querySelectorAll(".div-list");
console.log(getDivs);
// ici que se passe t'il si nous essayone d'appliquer du contenu textuelle a tous nos divs? 
/*
getDivs.textContent="J'essaye d'appliquer du contenu a tous mes divs a la fois Mais ca ne marchera pas!"
getDivs.classList.add("new-class");
*/

/*
    1) comme nous le voyons, ca ne marche pas! 
    2)et c'est tous simple, nous avons un tableau de divs, nous pouvons pas changer le style sur le tableau entier a la fois.
    3) nous pouvons que faire des modifications sur nos balises en y accedant "individuellement" objet par objet
    4) nous allons donc devoir boucler sur nos tableaux d'objets!
*/
// ici je boucle sur mes objets de div et je change le contenu textuelle ainsi que le style de chacune!


for(var i=0;i<getDivs.length;i++){
    /*
    getDivs[i].textContent=`Je suis le numero ${i+1} de la liste divs!`
    getDivs[i].classList.add("text-primary","m-2");
    */
    
    // si nous sommes avant le 3eme tour de boucle
    
    if(i<2){
        getDivs[i].textContent="Je suis soit la 1er soit le 2eme dib"
        getDivs[i].classList.add("text-primary","ml-15");
    }
    // sinon j'applique un style different
    else{
        getDivs[i].textContent="Je commence ici a partir de la 3eme div"
        getDivs[i].classList.add("text-warning","ml-30");
    }
    
    
    
   
}





