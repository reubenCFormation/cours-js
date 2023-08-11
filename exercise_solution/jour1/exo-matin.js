//1) J'ai un tableau avec 5 personnes. Afficher la premiere valeur et la derniere valeur de ce tableau. stocker les resultats dans deux variables et faites un console.log de ces deux variable
var persons=["Pierre","Elodie","Virginie","Vincent","Nicolas"];

var person1=persons[0];
var person2=persons[4];
/*
console.log(person1);
console.log(person2);
*/

//2) J'ai un tableau de numeros. Afficher la somme du 2eme et avant dernier element du tableau. Stocker le resultat dans une variable et faites un console.log de cette variable 
var numbers=[10,20,30,40,50,60,65];

var sum=numbers[1]+numbers[5];

 //3) J'ai un tableau d'objets d'etudiants. Affichez la moyenne des notes ainsi que la moyenne des ages dans deux variables differentes et  faites un console.log de ces variables
 var students=[{name:"Pierre",score:15,age:20},{name:"Alicia",score:17,age:21},{name:"Brice",score:16,age:22},{name:"Geraldine",score:18,age:25}];

 var totalScore=students[0].score+students[1].score+students[2].score+students[3].score;
 var averageScore=totalScore/4;
 /*

 console.log(averageScore);
 */

 var totalAge=students[0].age+students[1].age+students[2].age+students[3].age;
 var averageAge=totalAge/4;
/*
 console.log(averageAge);

 */
