//Exercice 1

$("#idBtn").click(function(e){    //Si click sur bouton 
    $.ajax(                        //Appel Ajax
        'exercice1.html',           //Fichier à appeler
        {
            success:function(data) {        //Si trouvé
                alert("Hello World !");     
            },
            error:function() {              //Si pas trouvé
                alert("Erreur détectée lors de l'appel Ajax");
            }
        }
    );
})

// Exercice 2

$("selectAjax").load('exercice2-2.html');


//Exercice 3

$('#my-form').on('submit',function(e) {
    e.preventDefault();
    const prenomInput = $("#input-prenom").val();
    const nomInput = $("#input-nom").val();
    if (prenomInput && nomInput) {
        $("<div>").attr({class:'alert alert-success', role: "alert"}).html('Formulaire correctement rempli').appendTo($("#message").empty());
        $.post(
            
        )
    }
    else{
        $("<div>").attr({class:'alert alert-danger', role: "alert"}).html('Formulaire mal rempli').appendTo($("#message").empty()); 
    }
})