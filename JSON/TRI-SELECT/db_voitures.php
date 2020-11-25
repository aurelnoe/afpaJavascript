<?php

include_once("Voiture.php");

$voitures = [
    new Voiture("RENAULT", "CLIO"), 
    new Voiture("RENAULT", "MEGANE"),
    new Voiture("RENAULT", "KANGOO"),
    new Voiture("CITROEN", "C3"),
    new Voiture("CITROEN", "C4"),
    new Voiture("CITROEN", "C5"),
    new Voiture("FORD", "FOCUS"),
    new Voiture("FORD", "FIESTA"),
    new Voiture("FORD", "MONDEO")
];

if(!empty($_GET) && isset($_GET["marque"]) && isset($_GET["modele"])){
    $voituresRetournees = filterVoitureSelonMarqueEtModele($voitures, $_GET["marque"], $_GET["modele"]); 
}elseif (empty($_GET)){
    // Exécuté uniquement dans le cas où je veux mettre à jour mon tableau
    $voituresRetournees = $voitures;
}elseif(isset($_GET["marque"])){
    $voituresRetournees = filterVoitureSelonMarqueEtModele($voitures, $_GET["marque"]);
}
echo json_encode($voituresRetournees);

function filterVoitureSelonMarqueEtModele(array $voitures, string $marque, string $modele=null) : array {
    $voituresRetournees = [];
    foreach ($voitures as $voiture) {
        if($modele && $marque && $marque == $voiture->marque && $modele == $voiture->modele){
            $voituresRetournees[] = $voiture;
        } elseif(!$modele && $marque && $marque == $voiture->marque){
            $voituresRetournees[] = $voiture;
        } 
    }
}


