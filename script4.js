
///////////////////////////////////////////Masquer les br
////JAVASCRIPT
// document.querySelector("#deleteBRElement").addEventListener('click', function(e){
// var br = document.querySelectorAll("br");
// for(i=0; i < br.length; i++) {
//     br[i].remove();
// }
// });
//jquery
$(document).ready(function(){
    $("#hide").click(function(){
        $("br").hide("slow");
    });
    $("#show").click(function(){
        $("br").show(2000);
    });
});
//
$("#deleteBRElement").click(function(e) {
$("br").remove();
});

///////////////////////////////////////////////////Afficher/Masquer les inputs

///JAVASCRIPT

let tdList = document.querySelectorAll('td');
let input = document.createElement('input'); input.id = 'modifTable';

window.addEventListener('load', function() {
    for (i = 0; i < tdList.length; i++) {
        tdList[i].addEventListener('click', function change(e){
            var test = e.target;
            var tdContent = test.innerText;
            this.replaceWith(input);
            document.getElementById("modifTable").value = tdContent;

            document.getElementById("modifTable").addEventListener('focusout', function(e){
                e.preventDefault();
                var td = document.createElement('td');
                this.replaceWith(td);
                td.innerText = this.value;
                td.addEventListener('click', change);
            });
        });
    }
});

var table = document.getElementById("table");
var tds = document.getElementsByTagName("td");


for(var i = 0; i < tds.length; i++){
    var td = tds[i];
// quand on clique sur td
    td.addEventListener('click', function (e){
        // on donne des attributs 
        // la valeur de this sera déterminée à partir de la façon dont une fonction est appelée
        this.setAttribute('data-clicked','yes');
        this.setAttribute('data-text',this.innerHTML);

        // on créer l'element input qui prend la place du td
        var input = document.createElement("input");
            input.type = "text";
            // garder la valeur de la cellule dans l'input
            input.value = this.innerHTML;

        // element.onblur = function() enleve le focus 
        input.onblur = function() {
            var td = input.parentElement;
            // le text de base
            var originalText = input.parentElement.getAttribute("data-text");
            // le nouveau text
            var currentText = this.value;

            // si le text de base est different du nouveau alors on garde le nouveau
            if(originalText != currentText) {
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = currentText;
            }
        }
        // clear la td quand on clique
        this.innerHTML = "";

        // fonction target
        var myClickedElement = e.target;
        myClickedElement.appendChild(input);
        // select la valeur par défaut du input l'élément sélectionné
        this.firstElementChild.select();
    })
}

// var tds = document.getElementsByTagName('td');

// for (let i = 0; i < tds.length; i++) 
// {    
//     tds[i].addEventListener('click', function(e){
//     var input = document.createElement("input");
//     input.type="text";
//     var myClickedElement = e.target;   //target : la cible du click
//     myClickedElement.appendChild(input);   //ajouter une valeur apres le click
//     //myClickedElement.onblur();
//     });
// }


// $("td").click(function(e) {
//     var tdContent = $(this).text();
//     $(this).replaceWith("<input id='modifTable' type='text'/>");
//     $("#modifTable").val(tdContent);

//     $("#modifTable").keypress(function(e) {
//         if (e.which == 13) {
//             e.preventDefault();
//             $(this).replaceWith("<td>" + $("#modifTable").val() + "</td>");
//         }
//     });
// });
