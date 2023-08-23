
var myId=document.getElementById("myId");



// je cree une div a la volée
var newDiv=document.createElement("div");
// je defini le contenu textuelle de ma nouvelle div
newDiv.textContent="Je suis l'enfant du div avec l'id myId";
// je lui rajoute une classe bootstrap ainsi que une classe "custom css"
newDiv.classList.add("text-primary","m-2")
// je l'insere comme l'enfant de mon id

myId.appendChild(newDiv);









// je crée une balise p a la volée
var newP=document.createElement("p");
// je lui defini son contenu textuelle
newP.textContent="Je suis l'enfant de la div que nous venons de creer";
// je lui rajoute une classe bootstrap ainsi que une classe "custom css"
newP.classList.add("text-secondary","m-2");
// je l'insere comme enfant de mon div que je viens de creer
newDiv.appendChild(newP);

// je peux maintenant acceder aux enfants de newDiv
console.log(newDiv.children);

