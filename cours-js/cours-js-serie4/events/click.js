
var getButton=document.querySelector(".my-button");

/*
     comment fonctionne un ecouter d'evenement? elem.addEventListener("nom de l'evenemnt",fonction a executer)
*/

getButton.addEventListener("click",toggleVisibilityOnClick);

function showClick(){
    console.log("the button has been clicked");
    console.log("La fonction se declenche!!");
   
}

function toggleVisibilityOnClick(){
  
    var getHiddenDiv=document.querySelector(".toggle-div");
    
    
    if(getHiddenDiv.classList.contains("d-none")){
        getHiddenDiv.classList.remove("d-none");
        
    }

    else{
        
        getHiddenDiv.classList.add("d-none")
        
    }
    

    // raccourci (classList a une methode toggle)
    
    /*
        getHiddenDiv.classList.toggle("d-none")
    */
    
    
}