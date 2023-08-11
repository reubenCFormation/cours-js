/* 
1)La methode du document querySelector nous permet de cibler un element de la page html par son id,sa classe, ou tout simplement le nom de sa balise. Attention, la methode querySelector ne va que retourner un seul resultat et ca sera un objet! Juste comme avec getElementById mais nous pouvons l'utiliser sur des balises divers tandis que getElementById ne fonctionne que sur des id.

*/
// nous allons recuperer le bouton single-btn
var singleBtn=document.querySelector(".single-btn");
// nous allons pouvoir changer son contenu textuelle 
singleBtn.textContent="Le nouveau contenu textuelle de mon bouton";

//Nous pouvons lui rajouter des classes css bien sur!
singleBtn.classList.add("btn","btn-primary")