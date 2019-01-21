<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 3 / Tehtävä 2</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 2"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <title>Autolaskuri</title>
  <h3 style=background-color:#fed;color:#000>Autolaskuri</h3>
  <?php

  // Pääohjelma
  session_start();

  // Asetetaan muuttujan arvot cookieilla
  $vw_lkm = '';
  $opel_lkm = '';
  $painike = '';

  if (isset($_POST['painike'])) {
    $vw_lkm   = $_SESSION['vw_lkm'];
    $opel_lkm = $_SESSION['opel_lkm'];
    $painike  = $_POST['painike'];
 }

  // Käytetyt funktiot
  laske_lkm($vw_lkm, $opel_lkm, $painike);
  tee_lomake();
  nayta_tulokset($vw_lkm, $opel_lkm);

  // Alustetaan tai päivitetään autojen lukumääriä:
  // Muodolliset parametrit ovat viittauksia, joten muutetut arvot välittyvät "takaisin" kutsuvaan ohjelmalohkooon
  function laske_lkm(&$vw_lkm, &$opel_lkm, $nappi) {
    // Jotakin autonappia painettu, lisätään kertymää
    if ($nappi == "VW") {
      $_SESSION['vw_lkm']++;
    } elseif ($nappi == "Opel") {
      $_SESSION['opel_lkm']++;
    }
    // Painettiin Nollaa-painiketta tai pyydetään sivua ekaa kertaa
    elseif ($nappi == "Nollaa") {
      $_SESSION['vw_lkm']=0;
	    $_SESSION['opel_lkm']=0;
    }
  }

  function nayta_tulokset($vw_lkm, $opel_lkm) {
    echo "<pre>\n";
    echo "Volkswagenit ... : " .$_SESSION['vw_lkm']. "kpl.\n";
    echo "Opelit ......... : " .$_SESSION['opel_lkm']. "kpl.\n";
    echo "</pre>\n";
  }

  // Tehdään lomake piilokenttineen
  function tee_lomake() {
    ?>
    <!--
      Oleellista on pitää yllä _samassa_ lomakkeessa
      kaikkien autojen kertymiä
    -->
    <form method="post" action="<?php echo $_SERVER {'PHP_SELF'} ?>">
      <input type="submit" value="VW" name="painike">
      <input type="submit" value="Opel" name="painike">
      <input type="submit" value="Nollaa" name="painike">
    </form>
  <?php
  }

?>

</body>

</html>

