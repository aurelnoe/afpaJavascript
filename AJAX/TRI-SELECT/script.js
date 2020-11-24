$("tbody").load("test.php")

//ALIMENTER LES SELECT
$("#marque").on("change",function(e){
    const marqueSelectionnee = $("#marque :selected").val();
    if (marqueSelectionnee) {
        $("#modele").load("test.php?marque=" + marqueSelectionnee); 
        $("tbody").load("test.php?marque=" + marqueSelectionnee + "&afficher=table")
    }else{
        $("#modele").load("test.php?marque=")
        $("tbody").load("test.php")
    }
    
});

$("#modele").on("change", function(e){
    const modeleSelectionne = $("#modele :selectd").val(); 
    const marqueSelectionnee = $("#marque option:selected")
    if (modeleSelectionne) {
        $("tbody").load("test.php?marque=" + marqueSelectionnee + "modele=" + $modeleSelectionne + "&afficher=table")
    }else{
        $("tbody").load("test.php?marque=" + marqueSelectionnee + "&afficher=table")
    }
})
