<?php

require_once ('Forme.php');

class MonCercle implements Forme {

    private $rayon;
    
    public function calculerSurface(){
        return self::PII * $this->rayon * $this->rayon;
    }

    public function calculerPerimetre(){
        return 2 * $this->rayon * self::PII;
    }

    /**
     * Get the value of rayon
     */ 
    public function getRayon()
    {
        return $this->rayon;
    }

    /**
     * Set the value of rayon
     *
     * @return  self
     */ 
    public function setRayon($rayon)
    {
        $this->rayon = $rayon;

        return $this;
    }
}