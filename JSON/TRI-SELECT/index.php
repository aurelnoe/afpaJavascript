<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
    <div class="container-fluid m-auto text-center">
        <div class="my-5">
            <select name="marque" id="marque">
                <option value="">-- Sélectionnez une marque --</option>
                <option value="RENAULT">RENAULT</option>
                <option value="CITROEN">CITROEN</option>
                <option value="FORD">FORD</option>
            </select>

            <select name="modele" id="modele">
                <option value="">-- Sélectionnez un modèle --</option>
            </select>
        </div>
        <div>
            <table class="table table-dark table-striped border">
                <thead>
                    <th>Marque</th>
                    <th>Modèle</th>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</body>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
</html>