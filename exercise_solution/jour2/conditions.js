

//1) Creer une variable que vous allez appeler number et donnez lui la valeur 200. Creer une autre variable que vous allez appeler anotherNumber et donnez lui une valeur qui sera inferieur a 200.  Creer une condition pour pouvoir tester si number et supperieur a anotherNumber et affichez qq chose dans un console.log si c'est le cas 

var number=200;
var anotherNumber=150;

if(number>anotherNumber){
   // console.log("Number est supperieur a another number!");
}

//2) Creer une variable que vous allez appeler myName et donnez lui la valeur que vous souhatiez. Enchainer des ifs suivi par des else if pour verifier que notre variable myName est egale a ce que vous aviez choisi et enfin suivi par un else. Faites en sorte de faire que nous allons tomber dans le else

var myName="John Doe";
/*
if(myName=="toto"){
    console.log("c'est toto");
}

else if(myName=="another value"){
    console.log("It's another valuer");
}

else{
    console.log("aucun des cas satisfaits!")
}
*/

//3) Encore une fois creer une variable newNumber et cette fois si, faites une comparaison entre newNumber et un autre numero que vous allez choisir (creer une variable). Faites en sorte d'ecrire plusiers conditions et faites en sorte que au moins deux de ces conditions seront satisfaites
 var number1=100;

 var number2=200;

 if(number1==100 && number2==200){
    console.log("Condtition 1 satisfaite!");
 }

  if(number1>50 && number2>100){
    console.log("Condition 2 satisfaite!")
 }
 //3a) faites en sorte que chaque fois que nous satisfaisons la condition, notre console.log sera afficher
 //3b) ensuite faites en sortes que notre console.log ne sera afficher que une fois (hint:pensez aux else if)

//4) Pour chaque index de notre tableau names, tester si la longeur de notre chaine de caractere est superieur a 5 characteres. Si c'est le cas, faites un console.log de la ligne suivante "conditions rempli!,nous sommes sup a 5!". Sinon, faites un console.log de,"Conditions non rempli!"

var names=["Jeremy","Tom","Reuben","Eli"];

names[0].length

if(names[0].length>5){
    console.log("C'est superieur a 5")
}

else{
    console.log("C'est pas superieur a 5")
}

if(names[3].length>5){
    console.log("C'est superieur a 5")
}

else{
    console.log("C'est pas superieur a 5")
}











