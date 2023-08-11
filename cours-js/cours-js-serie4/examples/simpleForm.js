
// ici j'initialise des données que je vais avoir besoin un peu partout dans mon application
var data={
    firstname:"",
    lastname:"",
    message:"",
    errorMsg:"",
    table:document.querySelector(".table"),
    firstNameForm:document.querySelector(".form-firstname"),
    lastNameForm:document.querySelector(".form-lastname"),
    formMessage:document.querySelector(".form-message"),
    messages:[]
}
  // je recupere mes elements du dom et je les lie a des ecouters d'evenments
 
 
  var form=document.getElementById("form");

  form.addEventListener("submit",submitForm);


function submitForm(event){
    // A chaque fois que nous allons soumettre un formulaire,nous allons avoir besoin de faire un event.preventDefault(). Sinon la page va se rafraichir automatiquement et rien ne pourra etre traité
    event.preventDefault();
    
     // si tous mes données ont bien etait rempli dans le formulaire
    if(data.firstNameForm.value!="" && data.lastNameForm.value!="" && data.formMessage.value!=""){
        // si mon message d'erruer n'est pas vide je le vide ici
        if(data.errorMsg!=""){
            data.errorMsg=""
            var errorMsgH6=document.querySelector(".error-msg");
            errorMsgH6.textContent=data.errorMsg;
            errorMsgH6.classList.remove("text-danger");

        }
        // je vais alimenter mon tableau de messages par les données que je viens de saisir

        data.messages.push({firstname:data.firstNameForm.value,lastname:data.lastNameForm.value,message:data.formMessage.value});
        // si j'ai deja des tr dans mon tableau html, je vais les vider pour eviter d'avoir des doublons, de toute facon, tant que je ne vide pas mes data.messages, tout se re affichera comme il le faut
        var tableRows=document.querySelectorAll("tr");
        removeTrs(tableRows);
        // ici j'affiche tous les messages que j'ai saisi
        showMessages(data.table,data.messages);
        clearForm();
        
    }

    // si je n'ai pas remplis tous les champs que il faut dans le formulaire, je vais afficher un message d'erreur

    else{
        
        data.errorMsg="Verifiez que vous ayez bien rempli tous vos champs!";
        var errorMsgH6=document.querySelector(".error-msg");
        errorMsgH6.textContent=data.errorMsg;
        errorMsgH6.classList.add("text-danger");
    }
}


function showMessages(table,messages){
    // si j'ai des messages dans mon data.messages
    if(messages.length>0){
       
        var fields=["prenom","nom","message"];
        if(messages.length==1){
            // j'affiche le th du moment que j'ai le premier message et apres j'arrete. Comme ca j'evite des doublons et j'evite de devoir ecraser mes th a chaque fois
            for(var i=0;i<fields.length;i++){
                var th=document.createElement("th");
                th.textContent=fields[i];
                table.appendChild(th);
            }
        }

        // ici j'affiche mes messages
        
        for(var i=0;i<messages.length;i++){
            // je crée mon tr
            var tr=document.createElement("tr");
            // je boucle sur les clés de mon objet et j'affiche la valeur correspondante dans un td
            var tdFirstName=document.createElement("td");
            var tdLastName=document.createElement("td");
            var tdMessage=document.createElement("td");

            tdFirstName.textContent=messages[i].firstname;
            tdLastName.textContent=messages[i].lastname;
            tdMessage.textContent=messages[i].message;

            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdMessage);
            table.appendChild(tr);
        }
    }
}
// suppression de mes anciens tr. Chaque fois que je rajoute un nouveau message, je supprime les tr qui exitent deja, mais vu que data.messages contient tous ce que il me faut, les tr seront regenerés comme il le faut.
function removeTrs(tableRows){
      
    for(var i=0;i<tableRows.length;i++){
        tableRows[i].remove();
    }

}

// je remets le formulaire a neuf

function clearForm(){
    console.log("CLEAR FORM FUNCTION HAS BEEN CALLED");
    data.firstNameForm.value="";
    data.lastNameForm.value="";
    data.formMessage.value="";
    
}


// Quand notre page est initialisé et le DOM est "pret a ecouter", j'initialise l'application avec la fonction init qui va definir les ecouters d'evenemtns sur nos inputs






