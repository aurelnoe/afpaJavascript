
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

        <input type="number" id="idRow" min="1" max="3" value="afficher numéro ligne">

        <input type="number" id="idCol" min="1" max="2" value="afficher numéro col">

        <input type="text" id="idText">

        <button id="idBtn">Modifier la cellule</button>

    </body>

    <script src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="jquery.js">

        

    </script>
</html>
