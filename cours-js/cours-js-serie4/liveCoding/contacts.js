var data={
    contacts:[],
    firstNameInput:document.querySelector(".firstname-input"),
    lastNameInput:document.querySelector(".lastname-input"),
    descriptionInput:document.querySelector(".description-input"),
    contactsList:document.querySelector(".contacts-list"),
    form:document.getElementById("form")

};

data.form.addEventListener("submit",submitContact);

function submitContact(){
    window.event.preventDefault();
    
    if(data.firstNameInput!="" && data.lastNameInput!="" && data.descriptionInput!=""){
         data.contacts.push({firstname:data.firstNameInput.value, lastname:data.lastNameInput.value, description:data.descriptionInput.value });
         console.log(data.contacts);
         emptyForm();
         data.contactsList.textContent="";
         showContacts();
    }

    else{
        console.log("Votre formumaire est vide!")
    }



}

function emptyForm(){
    data.firstNameInput.value=""
    data.lastNameInput.value=""
    data.descriptionInput.value=""
}


function showContacts(){
    var contacts=data.contacts;
    for(var i=0;i<contacts.length;i++){
        var divParent=document.createElement("div");
        divParent.classList.add("d-flex","justify-content-around");
        var divFirstName=document.createElement("div");
        var divLastName=document.createElement("div");
        var divDescription=document.createElement("div");
        divFirstName.classList.add("col-4")
        divLastName.classList.add("col-4")
        divDescription.classList.add("col-4")

        divFirstName.textContent=contacts[i].firstname;
        divLastName.textContent=contacts[i].lastname;
        divDescription.textContent=contacts[i].description;

        divParent.appendChild(divFirstName)
        divParent.appendChild(divLastName)
        divParent.appendChild(divDescription)

        data.contactsList.appendChild(divParent);

        

     
    }
}