
/*
    Avant de poursuivre avec les evenments,il est important de comprendre la notion de callback. Un callback est une fonction qui est mis comme parametre dans une autre fonction.Par exemple, je vais declarer une fonction qui prend un parametre et ce parametre sera une fonction!
*/


function addEventListener(eventType,func){
    // ici nous prenons en parametre une fonction que nous allons executer
    // ainsi lorsque nous faisons appel a la fonction callAnotherFunction, func va s'executer! 
    // rappelons nous que ici nous sommes en train de definir et non d'appeler callAnotherFunction
    
    var eventObj={event:eventType,funcEx:function(){
        
        return "hello world";
    }}
    func(eventObj)
    

     
 /*
    console.log("GET EVENT TYPE");
    console.log(eventType);
    func();
    */
    
}

function myCallback(evt){
    console.log("GET PARAM");
    console.log(evt)
    console.log("GET PARAM");
    console.log(evt.funcEx());
    
    
   // console.log(toto.funcEx());
    console.log("Le callback s'execute et fait un simple console.log");
    console.log("Cette logique est essentielle pour comprendre les ecouters d'evenments");
    
}

// Ici quand je vais faire appel a callAnotherFunction,on passera myCallback



addEventListener("click",myCallback);