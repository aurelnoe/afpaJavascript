/////////////PREMIERE PARTIE


//var a = 1
// var i =prompt("Saisir un nombre positif ")
// if(a>5){
//     console.log("Le nombre est supérieur à 5");//Sur la console
// }
// else{
//     alert("le nombre est inférieur à 5");//Sur la fenetre
// }
 
///////////exercice1 Valeur absolute
//alert(Math.abs(-10));

///////////exercice2 Comparer 2 nombres entiers
// var nb1 = Number(prompt("Entrer un premier nombre entier"));
// var nb2 = Number(prompt("Entrer un deuxième et dernier nombre entier"));
// var total = (nb1 - nb2);
 
// if (total < 0) {
//     alert("La première valeure ("+ nb1 + ") est plus petite que la seconde (" + nb2 + ").");
// }
// else if (total == 0) {
//     alert("Les deux valeurs (" + nb1 + ") sont identiques.");
// }
// else if (total > 0) {
//     alert("La première valeure ("+ nb1 + ") est plus grande que la seconde (" + nb2 + ").");
// }

///////////Exercice3 Pair ou Impaire
// var nb1 = Number(prompt("Entrer un nombre entier"));
// if((nb1%2)==0){
//     alert("Le nombre est pair");
// }
// else{
//     alert("Le nombre est impaire");
// }

///////////Exercice4 Factorielle
//var nbr = Number(prompt("Entrer un nombre entier"));

// function fact(nbr){
//     var i, f = 1;
//     for(i = 1; i <= nbr; i++)  
//     {
//       f = f * i;   // ou f *= i;
//     }  
//     return f;
//   }
//   alert(fact(nbr));

///////////Exercice5
function table_multiplication(nombre)
{
    var nombre;
    var resultat;
    for (i=1; i<=10; i++) {
        resultat=nombre*i;
        window.document.write(nombre+" x "+i+" = "+resultat+"\n\n\n");
	}
}

nombre=window.prompt("Entrez le numéro de la table:","Saisir un entier ici");
table_multiplication(nombre);
