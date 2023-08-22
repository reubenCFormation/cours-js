//a) Faites en sorte de voir apparaitre dans la console la phrase suivante: "Ma premiere fonction se declenche!"
function myFirstFunction(){
    console.log("Ma toute premiere fonction se declenche!");
}
/*
myFirstFunction();
*/

//1) Avec cette fonction, trouvez un moyen de stocker "hello world" dans une variable EN DEHORS de la fonction returnHelloWorld

function returnHelloWorld(){
    return "hello world";
}
var helloWorldVar=returnHelloWorld();
/*
console.log(helloWorldVar);
*/


//2) Avec cette fonction, trouvez un moyen de pouvoir acceder au contenu de arr EN DEHORS de la fonction returnArray

function returnArray(){
    var arr=["first","second","third","fourth","fifth"];
    return arr;
  
}

/*
var getReturnedArr=returnArray();
console.log(getReturnedArr);
*/



//3) Avec cette fonction, trouvez un moyen d'afficher 3 noms differents dans la console (chaque fois en faisant appel a la fonction). 

function showName(name){
    console.log(name)
}
/*
showName("Reuben");
showName("Tom");
showName("Eli")
*/

//4) Avec cette fonction, trouvez un moyen  d'afficher chaque element d'un tableau de votre choix que vous allez preciser quand vous allez faire appel a la fonction



function showArrIndexes(arr){
    for(var i=0;i<arr.length;i++){
       console.log(arr[i]);
    }
}

var myVarArr=["First","Second","Third"];
var myVarArr1=["hello","goodbye","cyalater"];
/*
showArrIndexes(myVarArr);
showArrIndexes(myVarArr1);
*/


//5) Avec cette fonction, trouvez un moyen de retourner le numero que vous allez passer lors de l'appel de la fonction multiplié par 2.Dans la fonction, stockez ce resultat dans une variable et trouver un moyen d'y acceder EN DEHORS de la fonction 

function multiplyNumByTwo(num){
    var result=num*2;
    return result;
}
/*
console.log(multiplyNumByTwo(15));

var returnMultipliedResult=multiplyNumByTwo(15)
*/

//6 Avec cette fonction, trouvez un moyen de retourner true si notre tableau contient plus de 5 elements, false sinon. C'est a vous de choisir le tableau a passer lors que vous allez faire appel a la fonction

function checkArrLength(arr){
  if(arr.length>5){
    return true;
  }

  else{
    return false;
  }
}
/*
var shortArr=["1","2","3"];

console.log(checkArrLength(shortArr));

var longArr=["long","arr","which","will","return","true"];

console.log(checkArrLength(longArr));
*/


//7 Avec cette fonction, trouvez un moyen d'afficher le nombre de personnes qui sont de civilité homme. Retourner cette valeur dans la fonction et trouvez un moyen d'y acceder EN DEHORS de la fonction
    // utilisez le tableau que je vais donner ici: 
    var data=[{sex:"Male",name:"Jeremy"},{sex:"Female",name:"Amanda"},{sex:"Male",name:"Tom"},{sex:"Female",name:"Jenny"},{sex:"Male",name:"Aaron"}];
    
function showMaleSex(arrObj){
  var counter=0;

   for(var i=0;i<arrObj.length;i++){
     if(arrObj[i].sex=="Male"){
        counter++;
     }
   }

   return counter;
}






