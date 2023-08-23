console.log("Mon compteur!");

var counter=0;
var incrementBtn=document.querySelector(".click-btn");
var decrementBtn=document.querySelector(".click-btn-decrement");

var counterState=document.querySelector(".counter-text");

incrementBtn.addEventListener("click",incrementCounter);

var getWarningDiv=document.querySelector(".warning-div");

decrementBtn.addEventListener("click",decrementBtnFunc)

function incrementCounter(){
    console.log("My button is clicked!");
    
    if(counter<20){
        counter++;
    }

    else{
       getWarningDiv.textContent="Impossible d'incrementer votre compteur!";
    }

    
    counterState.textContent=counter;
   
}

function decrementBtnFunc(){
    
    counterState.textContent=counter;

    if(counter>-20){
        counter--;
    }

    else{
        getWarningDiv.textContent="Impossible de decrementer votre compteur!";
    }
}


