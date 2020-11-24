<?php

class Voiture 
{
    public $modele;
    public $marque;

    public function __construct(string $newModele,string $newMarque)
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
