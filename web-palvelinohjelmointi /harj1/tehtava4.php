<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 1 / Tehtävä 4</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <form method="get" action="tehtava4.php">
  </form>

  <?php
  $fin = rand(1, 3);
  $swe = rand(1, 3);
  $nor = rand(1, 3);

  echo "<img src='$fin.jpg'>"; // paras tapa
  echo "<img src='$swe.jpg'>";
  echo "<img src=\"$nor.jpg\">"; // toinen tapa
  ?>
</body>

</html>