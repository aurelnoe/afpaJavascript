<?php

class Voiture 
{
    public $modele;
    public $marque;

    public function __construct($newModele,$newMarque)
    {
        $this->modele = $newModele;
        $this->marque = $newMarque;
    }

    public function __toString()
    {
        return
        $this->marque."\n".
        $this->modele;
    }
}
