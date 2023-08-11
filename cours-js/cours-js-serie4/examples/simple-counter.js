// ici, j'initialise une variable counter et je lui affecte la valeur de 0
var counter=0;

// ici je recupere la div qui contient la classe nommé "counter-state"
var getCounterState=document.querySelector(".counter-state");
// Ici je precise que cette div avec la classe counter state prendra la valeur de notre compteur
getCounterState.textContent=counter;

// ici je cible notre bouton pour incrementer notre compteur
var incrementBtn=document.querySelector(".increment");

//ici je cible notre bouton pour decrementer notre compteur
var decrementBtn=document.querySelector(".decrement");

// ici je precise mes ecouters d'evenments

// lors que je clique sur incrementBtn, la fonction incrementCounter se declenchera 
incrementBtn.addEventListener("click",incrementCounter);
// lors que je clique sur decrementBtn, la fonction decrementCounter se declenchera
decrementBtn.addEventListener("click",decrementCounter);

function incrementCounter(){
    // ici j'incremente ma variable counter et je precise a getCounterState (la div avec la classe "counter-state", de se mettre a jour) avec textContent
   counter++
   
   getCounterState.textContent=counter
}

function decrementCounter(){
    // ici je decremente ma variable counter et je precise a getCounterState (la div avec la classe "counter-state", de se mettre a jour) avec textContent
    
    counter--
    getCounterState.textContent=counter

    
}