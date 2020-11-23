<?php
include_once("Voiture.php");

//créer 9 ou  10 voitures

$voiture1 = new Voiture('A5','audi');
$voiture2 = new Voiture('A6','audi');
$voiture3 = new Voiture('A7','audi');
$voiture4 = new Voiture('206','peugeot');
$voiture5 = new Voiture('207','peugeot');
$voiture6 = new Voiture('208','peugeot');
$voiture7 = new Voiture('clio','renault');
$voiture8 = new Voiture('megane','renault');
$voiture9 = new Voiture('twingo','renault');

$audi = array();
$peugeot = array();
$renault = array();

array_push($audi,$voiture1,$voiture2,$voiture3);
array_push($peugeot,$voiture4,$voiture5,$voiture6);
array_push($renault,$voiture7,$voiture8,$voiture9);

//var_dump($audi);