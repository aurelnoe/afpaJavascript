$("tbody").load("db_voitures.php")

$("#marque").on("change", function(e){
    const marqueSelectionnee = $("#marque :selected").val();
    $.getJSON("do_voitures.php=" + marqueSelectionnee,function(data){
        $("body").empty();
        $("#modele").append($("<option value=''>").html("--Sélectionner un modèle--"));
        $.each(data, function(cle, valeur){
            $("#modele").append($("<option value='" + valeur.modele + "'>").html(valeur.modele));
            $("<tr>").append($("<td>").html(valeur.marque), $("<td>").html(valeur.modele)).appendTo($("body"));
        })
    })
})

$("#modele").on("change", function(e){
    const modeleSelectionne = $("#modele :selected").val();
    const marqueSelectionnee = $("#marque option:selected").val();
    let url = modeleSelectionne ? 
            "db_voiture.php?marque=" + marqueSelectionnee + "&modele=" +modeleSelectionne : 
            "db_voiture.php?marque=" + marqueSelectionnee;
    
    
})