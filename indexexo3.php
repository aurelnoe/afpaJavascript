<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <div style="text-align: center">
        <div class="custom-control custom-checkbox">
            <input type="checkbox">
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox">
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox">
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox">
        </div>
    </div>
    <div class="text-center">
        <button class="btn btn-success" onclick="gereCheckbox('input',1)">Cocher</button>
        <button class="btn btn-danger" onclick="gereCheckbox('input',0)">Décocher</button>
    </div>
</body>
    <script src="script3.js" type="text/javascript"></script>
</html>