
<!DOCTYPE html>

<html>

    <head>

        <meta charset=utf-8 />

        <title>JS DOM paragraph style</title>

    </head> 

    <body>
        <h1>Modifiez le style du paragraphe suivant en utilisant JQUERY :</h1>

        <p id ='text'>Exercices JQuery</p> 

        <div>
            <button id="jsstyle">Style it !</button>
       </div>

    </body>
    <script src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript">
        $("#jsstyle").click(function(){
            $("#text").css("color", "red")
        });
    </script>

</html>