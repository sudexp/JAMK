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

$taustavarit['Keltainen'] = '#ffff00';
$taustavarit['Punainen'] = '#ff0000';
$taustavarit['Sininen'] = '#0000ff';
$taustavarit['Harma'] = '##808080';
$tekstivarit['Violetti'] = '#C71585';
$tekstivarit['Vihrea'] = '#008000';
$tekstivarit['Oranssi'] = '#ffa500';
$tekstivarit['Valkoinen'] = '#ffffff';

$taustavari = '#fceedf';
$tekstivari = '#000000';

if (isset($_GET['taustavari'])) {
  $taustavari = $_GET['taustavari'];
}

if (isset($_GET['tekstivari'])) {
  $tekstivari = $_GET['tekstivari'];
}

$tyyli = <<<EOTyyli
  <style type="text/css">
    body {
      background-color: $taustavari;
      color: $tekstivari;
    }
  </style>
EOTyyli;

$taustaoptio = '';
$tekstioptio = '';

foreach ($taustavarit as $varinimi => $varikoodi) {
  $valittu = '';
  if ($taustavari == $varikoodi) $valittu = 'checked';
  $taustaoptio .= "<input type='radio' name='taustavari' value='$varikoodi' $valittu>$varinimi<br>\n";
}

foreach ($tekstivarit as $varinimi => $varikoodi) {
  $valittu = '';
  if ($tekstivari == $varikoodi) $valittu = 'checked';
  $tekstioptio .= "<input type='radio' name='tekstivari' value='$varikoodi' $valittu>$varinimi<br>\n";
}

$lomake = <<<EOLomake
  <form method="get" action="{$_SERVER['PHP_SELF']}">
    <table>
      <tr>
        <td>Taustavari:</td>
        <td>$taustaoptio</td>
      </tr>
        <td>Tekstivari:</td>
        <td>$tekstioptio</td>
      </tr>
    </table>
    <input type="submit" name="nappi" value="Väritä">
  </form>
EOLomake;

echo $tyyli;
echo $lomake;
?>
</body>

</html>