<!DOCTYPE html>

<html>
    <head>
        <meta charset=utf-8 />
    </head>

    <body>

        <h1>Depuis le fichier Html suivant, écrire un script en JQuery permettant de récupérer 
            les attributs suivants depuis le lien :</h1>

        <h2>href - hreflang - rel - target - type</h2>
        <p>
            <a id="ggl" type="text/html" hreflang="fr" rel="nofollow" target="_self" href="http://www.google.com/">Google</a>
        </p>

        <button id="values-btn">Click here to get  attributes value</button>

    </body>

    <script src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript">

        $("#values-btn").click(function(){
            //Retourne la valeur du premier id d'un paragraphe trouvé
            let id = $("a").attr("id");
            let href = $("a").attr("href");
            let hreflang = $("a").attr("hreflang");
            let rel = $("a").attr("rel");
            let target = $("a").attr("target");
            let type = $("a").attr("type");

            alert('id = '+ id + ' ,href = ' + href + ' ,hreflang = ' + hreflang + ' ,rel = ' + rel + ' ,target = ' + target + ' ,type = ' + type);
        });

    </script>

</html>
