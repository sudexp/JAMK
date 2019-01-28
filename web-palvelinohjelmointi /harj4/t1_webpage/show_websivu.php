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

function __autoload($class_name)
{
  require_once $class_name . '.class.php';
}

// Datan alustus
$title = "Esimerkkikotisivu";
$bodynsisalto = "<h1>Esimerkkikotisivu</h1>\n<p>Lorem Ipsum</p>\n";
$avainsanat = "kotska , sivu";

$munkotisivu = new Websivu($title, $avainsanat);
$munkotisivu->asetaBodyelementinSisalto($bodynsisalto);
$munkotisivu->naytaSivu();

?>
</body>

</html>