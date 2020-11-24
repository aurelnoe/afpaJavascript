<?php
include_once("Voiture.php");

//créer 9 ou  10 voitures

$voitures = [
    new Voiture('A5','AUDI'),
    new Voiture('A6','AUDI'),
    new Voiture('A7','AUDI'),
    new Voiture('206','PEUGEOT'),
    new Voiture('207','PEUGEOT'),
    new Voiture('208','PEUGEOT'),
    new Voiture('clio','RENAULT'),
    new Voiture('megane','RENAULT'),
    new Voiture('twingo','RENAULT')
];

$voituresRetournees = [];

//Affichage
if (!empty($_GET) && isset($_GET["marque"]) && !isset($_GET["afficher"])) {
    $voituresRetournees = filterVoitureParMarqueEtModele($voitures,$_GET["marque"]);
    afficheOption($voituresRetournees);
}else if (empty($_GET)) {
        $voituresRetournees = $voitures;
}else if ( isset($_GET["marque"]) && isset($_GET["modele"])) {
    $voituresRetournees = filterVoitureParMarqueEtModele($voitures,$_GET["marque"],$_GET["modele"]);        
}else if ( isset($_GET["marque"])) {
    $voituresRetournees = filterVoitureParMarqueEtModele($voitures,$_GET["marque"]);
}

foreach ($voitures as $voiture){
    echo "<tr></td>" . $voiture->marque . "<td></td>" . $voiture->modele . "<td></tr>";
}

function afficheOption(){
    echo "<option value=''>-- Selectionner un modèle --</option>";
    foreach ($voituresRetournees as $voiture){
        echo "<option value='" . $voiture->modele . "'>" . $voiture->modele . "</option>";
    }
}

function filterVoitureParMarqueEtModeleEtModele(array $array,string $marque,string $modele=null){
    $voituresRetournees = [];
    foreach ($voitures as $voiture) {
        if ($marque && $modele && $marque == $voiture->marque && $modele == $voiture->modele) {
            $voituresRetournees[] = $voiture;
        }else if ($modele && $marque == $voiture->marque){
            $voituresRetournees[] = $voiture;
        }
    }
    return $voituresRetournees;
}
