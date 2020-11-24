<?php

require_once('Cercle.php');
require_once('Rectangle.php');

$cercle = new MonCercle();
$cercle->setRayon(15);

// afficherSurfaceForme($cercle);
if ($error = true) {
    echo "Erreur : Problème au niveau de la connexion à la BDD";
}
$rectangle = new Rectangle();
$rectangle->setHauteur(15)->setLargeur(5);

// afficherSurfaceForme($rectangle);

function afficherSurfaceForme(Forme $forme){
    echo $forme->calculerSurface() . "\n";
}