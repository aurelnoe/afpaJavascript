
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <title>Véhicules</title>
</head>
<body>
<div class="container-fluid m-auto text-center">

    <div class="my-5">
        <select id="marque">
            <option value="0" selected>-- Selectionner une marque --</option>
            <option value="PEUGEOT">PEUGEOT</option>
            <option value="AUDI">AUDI</option>
            <option value="RENAULT">RENAULT</option>   
        </select>

        <select id="modele">-- Selectionner le modèle --</select>
    </div>

    <table id="tableVehicules" class="table table-dark table-striped border">
        <tr>    
            <thead>    
                <th>Marque</th>
                <th>Modèles</th>
            </thead> 
            <tbody>
            
            </tbody>
        </tr>
    </table>
</div>
</body>
<script src="jquery-3.5.1.min.js"></script>
<script src="script.js"></script>
</html>