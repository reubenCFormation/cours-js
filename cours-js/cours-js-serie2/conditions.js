// 1) Les Conditions: Idée generale
//----------------------------------------------------------------------------------------------------------------------------
// Une condition est une facor de tester la vericité d'une situation. Par exemple, disons que si j'ai plus de 100 euro, j'irai au restaurant. Comment est ce que je vais traduire ceci en code? 
var balance=120;
// comme nous le voyons, dans ce cas, nous allons rentrer dans la condition car selon notre variable balance, nous avons 120 euros disponsible et pour aller au restuarant, il faut juste avoir plus de 100 euros! Nous allons donc rentrer dans la condition

if(balance>100){
    //console.log("j'irai au restuarant");
}


//2) Enchainer plusiers conditions a la fois 
//--------------------------------------------------------------------------------------------------------------------------------
var newBalance=150;
// > (supperier a ) < (inferier a ) >=(supperier ou egal a)  <= (inferireur ou egal a)

// ici nous allons remarquer que nous allons rentrer dans deux de nos conditions conditions
/*
if(newBalance>100){
    console.log("condition nouveau solde supperieur a 100 satisfait")
}

if(newBalance>120){
    console.log("condition nouveau solde supperieur a 120 satisfait")
}

if(newBalance>150){
    console.log("condition nouveau solde supperier ou egal a 150 satisfait")
}
*/



//3) Enchainer un if avec un ou plusiers else if 
//----------------------------------------------------------------------------------------------------------------------------
// comme nous pouvons le constater, lorse que on enchaine un if avec un ou plusiers else if, du moment que notre condition est satisfaite, on s'arrete la et on ne continue pas a tester les conditions, ce qui va dire que nous allons que rentrer dans l'une des conditions!
var newBalance=150;
/*
if(newBalance>100){
    console.log("condition nouveau solde supperieur a 100 satisfait");
}

else if(newBalance>120){
    console.log("condition nouveau solde supperieur a 120 satisfait");
}


else{
    console.log("aucune des deux condition satisfait");
}
*/


//4) Se rabattre sur le else
//--------------------------------------------------------------------------------------------------------------------------------
 var myName="Reuben";

/*
 Remarquer la difference entre le = (simple egale ) et le == (double egale)
 1) Un simple egale est une affirmation (nous declarons que var myName sera egal a Reuben est donc puisque nous l'avons affirmé, myName sera egal a Reuben) 
 2) Un double egale est une comparasion pour determiner si quel que chose est vrai ou pas. Nous nous posons la question, est ce que myName est egale a Johnny? Et puis apres est ce que myName est egal a Nico? Avec le == nous nous posons la question 

 Remarquer le else apres le else if 
 1) Dans ce cas, ni la premiere, ni la deuxieme condition a pu etre satisfaite et donc j'ai du me rabattre sur le else. Nous allons rentrer dans le else lors que aucun des cas au dessus n'a pu etre satisfait, c'est un peu le cas de secours on peux dire. 
 

*/


/*

 if(myName=="Johnny"){
    console.log("Je suis Johnny")
 }

 else if(myName=="Nico"){
    console.log("Je suis Nico")
 }

 else if(myName=="Geraldine"){
    console.log("Je suis Geraldine")
 }

 else{
    console.log("Je suis ni Nico, ni Johnny ni Geraldine")
 }
 */
 

 

 //5) Tester pluseirs choses dans une seul conditions
 //----------------------------------------------------------------------------------------------------------------------------------
 /*
  parfois, nous allons vouloir tester plusiers choses dans une seul condition nous allons le faire avec le symbole &&
  1) Le symbole && est une facon de dire "et". Ainsi nous pouvons tester si un cas  ET une 2eme cas est satisfaite dans une seul condition

  */

  var number=15;
/*
  if(number>20 && number==15){
    console.log("Les deux conditions sont satisfaites")
  }

  else{
    console.log("Les deux conditions ne sont pas satisfaites")
  }
  */
  

  /*
    Nous avons aussi le symbole "||" qui teste si un cas OU un 2eme cas peut etre satisfaite 
    1) dans le cas du || si l'un de cas est satisfait, on va rentrer dans la condition!
    2) Faisons la meme chose mais cette fois ci, au lieu du symbole && on va utiliser le symbole ||
  */
  /*
    if(number>20 || number==15){
        console.log("Au moins l'une des conditions est satisfaite");
     }
    
      else{
        console.log("Les deux conditions ne sont pas satisfaites");
      }
      */

    


//6) Comment les conditions et les Booleans sont liés
  //--------------------------------------------------------------------------------------------------------------------------------
    /*
      1)finalement, une condition nous renvoie un boolean a chaque fois, si c'est "vrai" on rentre dans la condition, si c'est "faux" on ne rentre pas dans la conditions, 
      2)c'est un peu compliqué que ca, parfois nous allons avoir des conditions qui sont vrais mais on ne vas pas rentrer dedans (pensez aux else if) mais globalement, c'est une logique coherente
      3) On peux donc dire que une condition nous renvoie un boolean

    */

      var newNumber=100
      // comme nous le constatons, ces deux cas vont nous renvoyer un boolean (true (si la condition est vrai) ou false si la condition est faux)
      /*
      console.log(newNumber<100);
      console.log(newNumber>=100)
      */
      

//7) Tester une condition sur un Boolean 
 //--------------------------------------------------------------------------------------------------------------------------------------

   /*
      1)Une condition renvoie un boolean, mais nous pouvons aussi tester une condition sur un boolean, est c'est quel que chose que nous allons souvent faire! 
      2) En absence de !, nous testons si une variable est defini (elle existe bel et bien)
      3) avec un ! nous testons si une variable est null, 0, undefined,une chaine de caracteres vide,ou false
      4) C'est un peu compliqué, jespere que avec les exemples ca va s'eclarcir

   */

      var isTrue=true;
      /*
      if(isTrue){
        console.log("C'est vrai")
      }

       else {
        console.log("C'est faux")
      }
      */
      

      var isFalse=false;
      /*
      
      if(!isFalse){
        console.log("C'est faux")
      }

      else{
        console.log("C'est vrai")
      }
      */

      var isDefinedString="Hello this is a string";
      /*
      if(isDefined){
        console.log("La chaine de caractere est bien defini!")
      }

      else{
        console.log("La chaine de caractere n'est pas defini")
      }
      */

      var isEmptyString=""
      /*
      if(!isEmptyString){
        console.log("La chaine n'est pas defini")
      }

      else{
        console.log("La chine est defini")
      }
      */

      
   //8) Difference entre le double et triple egale 
   //------------------------------------------------------------------------------------------------------------------------
      // Nous avons deja vu la difference entre un double et simple egale, mais il y aussi la difference entre un triple et double egale, un triple egale est une version "plus stricte" d'un double egale et va pouvoir differencier entre type, notament lors que nous comparons les chaines de caracteres aux valeurs numeriques

      var stringNum="8";
      var intNum=8;
      
      if(stringNum==intNum){
       // console.log("Le double egale recoonnait une egalité entre une chaine de caracteres et une valeur numerique")
      }

      if(stringNum===intNum){
        //console.log("Le triple egale ne recconait pas une egalité entre une chaine de caractere et une valeur numerique")
      }
      

      

 
