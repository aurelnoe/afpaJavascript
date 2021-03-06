Exercice 1 :

Modifiez le style du paragraphe suivant en utilisant JQUERY :

<!DOCTYPE html>

<html>

    <head>

        <meta charset=utf-8 />

        <title>JS DOM paragraph style</title>

    </head> 

    <body>

        <p id ='text'>Exercices JQuery</p> 

        <div>

            <button id="jsstyle">Style it !</button>

        </div>

    </body>

</html>

Exercice 2 :

Depuis le fichier Html suivant, écrire un script en JQuery permettant de récupérer 

les atributs suivants depuis le lien :

    - href

    - hreflang

    - rel

    - target

    - type

<!DOCTYPE html>

<html>

    <head>

        <meta charset=utf-8 />

    </head>

    <body>

        <p>

            <a id="ggl" type="text/html" hreflang="fr" rel="nofollow" target="_self" 

               href="http://www.google.com/">Google</a>

        </p>

        <button id="values-btn">Click here to get  attributes value</button>

    </body>

</html>

Exercice 3 :

Ecrire une fonction JavaScript permettant (grace àJQuery) de changer le contenu d'une cellule du tableau suivant.

La fonction doit prendre trois arguments, l'indice de la ligne, l'indice de colonne et le nouveau texte

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

    </body>

</html>

Exercice 4 :

Ecrire une fonction JavaScript permettant (grace à JQuery) permettant de créer un tableau Html.

La fonction peut prendre 2 arguments (le nombre de lignes et le nombre de colonnes)

Pour le contenu des cases afficher (numero_ligne - numero_colonne)

Exercice 5 :

Ecrire un script jquery permettant d'afficher et copier les éléments de la liste déroulante suivante :

<!DOCTYPE html>

<html>

    <head>

        <meta charset=utf-8 />

        <title>Remove items from a dropdown list</title>

    </head>

    <body>

        <form>

            <select id="colorSelect">

                <option>Red</option>

                <option>Green</option>

                <option>White</option>

                <option>Black</option>

            </select>

            <input id="remove-btn" type="button" value="Select and Remove">

        </form>

    </body>

</html>

Ecrire un script Jquery permettant la suppression des éléments de la liste déroulante