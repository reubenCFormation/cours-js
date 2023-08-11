var firstnameInput=document.querySelector(".firstname-input");
var lastnameInput=document.querySelector(".lastname-input");
var getForm=document.getElementById("form");

getForm.addEventListener("submit",retreiveInformation);


function retreiveInformation(evt){
   
    
    evt.preventDefault();
    console.log("hello world, mon formumaire vient detre envoyé!");

    
    
    console.log("Formulaire envoyés!");
    console.log("firstname saisi");
    console.log(firstnameInput.value);
    console.log("lastname saisi");
    console.log(lastnameInput.value);
    

    // recuperer les valeurs saisi lors d'un formualire. Les variables firstNameInput et lastnameInput sont devenu des "objets" et nous pouvons acceder a leur proprieté value ce qui correspond a ce qui a etait saisi dans le formulaire
    
   
}
