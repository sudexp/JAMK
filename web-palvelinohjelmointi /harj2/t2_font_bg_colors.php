<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 2 / Tehtävä 2</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 2"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
<?php

$taustavarit['Keltainen'] = '#ff0';
$taustavarit['Punainen'] = '#f00';
$taustavarit['Sininen'] = '#00f';
$taustavarit['Harmaa'] = '#ccc';


$taustavari = '#fed';

if (isset($_GET['tvari'])) {
  $taustavari = $_GET['tvari'];
}

$tyyli = <<<EOTyyli
  <style type="text/css">
    body {
      background-color: $taustavari;
    }
  </style>
EOTyyli;

$optiot = '';
foreach ($taustavarit as $varinimi => $varikoodi) {
  $valittu = '';
  if ($taustavari == $varikoodi) $valittu = 'checked';
  $optiot .= "<input type='radio' name='tvari' value='$varikoodi' $valittu>$varinimi<br>\n";
}

$lomake = <<<EOLomake
  <form method="get" action="{$_SERVER['PHP_SELF']}">
    $optiot
    <input type="submit" name="nappi" value="Väritä">
  </form>
EOLomake;

echo $tyyli;
echo $lomake;
?>
</body>

</html>