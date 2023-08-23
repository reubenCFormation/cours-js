var getHoverText=document.querySelector(".hover-text");


function addBlueOnEnter(){
    // noter le mot clé this. C'st une facon de cibler l'element sur lequel nous appelons l'evenment! Ici, dans les deux cas, l'evenment se produit sur notre balise avec la classe hover-text et donc le mot clé this va correspondre a cette div avec la classe ".hover-text" C'est un raccourci pour avoir de nouveau besoin de re ecrire "document.querySelector(".hover-text")   


    getHoverText.classList.add("blue-text");
    
}

function removeBlueOnLeave(){
   
  
    getHoverText.classList.remove("blue-text");

}


getHoverText.addEventListener("mouseover",addBlueOnEnter);

getHoverText.addEventListener("mouseleave",removeBlueOnLeave);
