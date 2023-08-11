var firstnameInput=document.querySelector(".firstname-input");
var lastnameInput=document.querySelector(".lastname-input");

firstnameInput.addEventListener("input",showValueFirstName);
lastnameInput.addEventListener("input",showValueLastName);
/*
A chaque fois que nous allons produire un evenment, notre navigateur va automatiquement nous creer un gros objet javascript qui va nous fournir des informations sur l'evenment qui vient de se produire, que ca soit une saisi de texte, un clique etc. Parfois, nous allons vouloir recuperer des informations qui nous serons important par rapport a cette evenment et nous pouvons soit y acceder avec l'objet window (inné a javascript), soit en passant l'evenment qui vient de se produire en parametre. La plupart du temps, nous utilisons des parametres!

*/
function showValueFirstName(){
    
    /*
    console.log("GET EVENT");
    console.log(window.event);
    console.log("GET EVENT TARGET VALUE")
    
    console.log(window.event.target.value);
    */
    
}

function showValueLastName(evt){
    /*
    console.log("last name est saisi")

    
    console.log("GET EVENT TARGET VALUE")
    console.log(evt.target.value);
    */
    
}


