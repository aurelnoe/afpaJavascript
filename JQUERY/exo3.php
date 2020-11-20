
<!DOCTYPE html> 

<html> 
    <head> 
        <meta charset=utf-8 /> 
        <title>Change the content of a cell</title> 
        <style type="text/css"> 
            body {margin: 30px;} 
        </style>  
    </head>
    <body> 
        <h1>Ecrire une fonction JavaScript permettant (grace à JQuery) de changer le contenu d'une cellule du tableau suivant.
            La fonction doit prendre trois arguments, l'indice de la ligne, l'indice de colonne et le nouveau texte</h1>

        <table id="myTable" border="1"> 

            <tr>
                <td>Row1 cell1</td> 
                <td>Row1 cell2</td>               
            </tr> 
            <tr>              
                <td>Row2 cell1</td> 
                <td>Row2 cell2</td>              
            </tr> 
            <tr>
                <td>Row3 cell1</td> 
                <td>Row3 cell2</td>
                
            </tr> 

        </table>

        <input type="number">
        <button>Afficher numero colonne</button>
        <input type="number">
        <button>Afficher numero ligne</button>
        <input type="text">
        <button>Afficher la valeur qui va modifier</button>

    </body>

    <script src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript">

    let indiceLigne = $("td");
    let indiceCol = $("#myTable");
    let newText = "AAAA";
    
    function changeContent(indiceLigne,indiceCol,newText)
    {
        $(indiceCol.ready(function(){
            $(indiceLigne).each(function(){
                var lastCol = $(this).html();
                var replaceValue = lastCol.Append(newText);

                $(this).html(replaceContent);
            });
        }))
        
    }

    </script>
</html>
