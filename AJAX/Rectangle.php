<?php

require_once('Forme.php');

class Rectangle implements Forme {

    private $largeur;
    private $hauteur;

    public function calculerPerimetre()
    {
        return ($this->largeur + $this->hauteur) * 2;
    }

    public function calculerSurface()
    {
        return $this->largeur * $this->hauteur;
    }

    /**
     * Get the value of largeur
     */ 
    public function getLargeur()
    {
        return $this->largeur;
    }

    /**
     * Set the value of largeur
     *
     * @return  self
     */ 
    public function setLargeur($largeur)
    {
        $this->largeur = $largeur;

        return $this;
    }

    /**
     * Get the value of hauteur
     */ 
    public function getHauteur()
    {
        return $this->hauteur;
    }

    /**
     * Set the value of hauteur
     *
     * @return  self
     */ 
    public function setHauteur($hauteur)
    {
        $this->hauteur = $hauteur;

        return $this;
    }
}