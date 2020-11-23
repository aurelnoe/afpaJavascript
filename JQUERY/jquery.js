
 
$("idBtn").on("click",function(e){
    const row = $("idRow").val();
    const col = $("idCol").val();
    const text = $("idText").val();
    modifyCell(row,col,text);
});


 function modifyCell(row,col,text)
 {
    const tr = $("tr").eq(row-1);  //Chercher les tr, si la personne fournie 2 il faut chercher l'indice 1
    tr.children().eq(col-1).html(text);   //Renvoi les enfants de tout les td, recupere ceux de la col fournie - 1, et on met le text dedans
    //$("tr").eq(row-1).children().eq(col-1).html(text);
 }