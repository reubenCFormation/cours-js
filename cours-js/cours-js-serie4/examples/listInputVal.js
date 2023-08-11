var data={
    names:[],
    errorMsg:""
}

var nameList=document.getElementById("name-list");

function listNames(){
    // ici je fais appel a ma fonction emptyList pour eviter d'avoir des doublons chaque fois que nous listons les noms vu que chaque fois notre tableau entier de noms sera parcouru
    
    emptyList();
    
    
   console.log(data.names);
    
    
    // Ici je boucle sur mes tableaux de noms et a chaque tour de boucle, je crée une li, je lui donne la classe "custom-list-item" et je lui attribue sont contenu textuelle. Enfin, a chaque tour de boucle le parent nameList va inserer le nouveau li comme enfant
    
    for(var i=0;i<data.names.length;i++){
        var li=document.createElement("li");
        li.classList.add("custom-list-item")
        li.textContent=`${data.names[i].firstname} ${data.names[i].lastname}`;
        
        nameList.appendChild(li);
        
    }
    /*
        var li=document.createElement("li");
        li.classList.add("custom-list-item")
        li.textContent=`${data.names[data.names.length-1].firstname} ${data.names[data.names.length-1].lastname}`;
        
        nameList.appendChild(li);
    */
    
}

// je recupere mes inputs

var getFirstName=document.querySelector(".input-firstname");
var getLastName=document.querySelector(".input-lastname");

// je receupere mon formulaire
var getForm=document.getElementById("form");

getForm.addEventListener("submit",addNames)


function addNames(event){
    // j'empeche la soumission du formulaire par defaut
    event.preventDefault();
    // si nos champs prenom et noms sont bien rempli
   if(getFirstName.value!="" && getLastName.value!=""){
        if(data.errorMsg!=""){
            data.errorMsg="";
            treatErrorMsg();
        }
       
        // je vais alimenter mon tableau par les nouveaux données que je viens d'envoyer
        data.names.push({firstname:getFirstName.value,lastname:getLastName.value});
        // je liste fais appel a la fonction pour lister les noms
        listNames();
        // enfin je vide le formulaire vu que mes données sont deja contenu dans le tableau data.names
        emptyForm();
   }

   else{
    console.log("empty");
    data.errorMsg="Veuillez saisir soit un nom soit un prenom";
    treatErrorMsg();

   }
  
}

function treatErrorMsg(){
    if(data.errorMsg!=""){
        var getErrorMsgDiv=document.querySelector(".error-msg");
        getErrorMsgDiv.textContent=data.errorMsg;
        getErrorMsgDiv.classList.add("text-danger","text-center");
    }

    else{
        var getErrorMsgDiv=document.querySelector(".error-msg");
        getErrorMsgDiv.textContent="";
    }
}


function emptyList(){
 // ici je vide ma liste. Vu que mon tableau data.names conteint TOUTES mes infos, la liste entiere sera regeneré a chaque fois que je fais appel a la fonction listNames
   nameList.textContent="";
}

function emptyForm(){
    // ici apres chaque envoie de mon formulaire je vais vider le nom et le prenom saisi dans le formulaire
    getFirstName.value="";
    getLastName.value="";
}


