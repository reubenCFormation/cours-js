function executeCallback(func){
    
    func();
}

function funcToCall(){
    console.log("le callback est en train d'etre executé!");
    console.log("le callback s'execute encore!")
}

executeCallback(funcToCall);
















