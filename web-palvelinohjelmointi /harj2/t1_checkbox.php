<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 2 / Tehtävä 1</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 1"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
<?php
$tired = '';
$pain = '';
$friday = '';

if (isset($_GET['tired'])) {
    echo "Väsyttää ankarasti!\n";
    $tired = 'checked';
}

if (isset($_GET['pain'])) {
    echo "Taas on pää kipee!\n";
    $pain = 'checked';
}

if (isset($_GET['friday'])) {
    echo "Taas on perjantai!\n";
    $friday = 'checked';
}

$form = <<<EOForm
  <form method="get" action="t1_checkbox.php">
    <input type="checkbox" name="tired" $tired>Väsy<br>
    <input type="checkbox" name="pain" $pain>Perjantai<br>
    <input type="checkbox" name="friday" $friday>Pää pipi<br>
    <input type="submit" name="button" value="Tunne jotain">
  </form>
EOForm;

echo $form;
?>
</body>

</html>