<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Harjoitus 4, Tehtava 1 - Websivu</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 1"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <?php

  class Websivu
  {
    protected $otsikko;
    protected $avainsanat;
    protected $sisalto;

    function __construct($otsikko, $avainsanat)
    {
      $this->otsikko = $otsikko;
      $this->avainsanat = $avainsanat;
    }

    function __destuct()
    {
      $this->otsikko = null;
      $this->avainsanat = null;
      $this->sisalto = null;
    }

    public function asetaBodyelementinSisalto($data)
    {
      $this->sisalto = $data;
    }

    public function naytaSivu()
    {
      echo "<html><head>\n";
      $this->tulostaOtsikkoelementti();
      echo "</head></body>\n";
      echo $this->sisalto;
      echo "</body></html>\n";

    }

    private function tulostaOtsikkoelementti()
    {
      echo "<title>$this->otsikko</title>";
    }

    private function tulostaAvainsanaelementti()
    {
        //return $this->name;
      echo "<meta name=keywords>$this->avainsanat</meta>\n";
    }
  }

  ?> 
</body>

</html>