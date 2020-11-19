var divSon = document.getElementById("divSon");
var divFather = document.getElementById("divFather");
var divGrandFather = document.getElementById("GrandFather");

// divSon.addEventListener('click', function(event){
//     event.stopPropagation();                //Stopper un événement
//     alert("sonDiv clicked");
// });

// divFather.addEventListener('click', function(event){
//     event.stopPropagation();
//     alert("div Father clicked");
// });

divGrandFather.addEventListener('click', function(event){
    var input = document.createElement("input");
    input.type="text";
    var myClickedElement = event.targert;   //target : la cible du click
    myClickedElement.appendChild(input);   //ajouter une valeur apres le click
});