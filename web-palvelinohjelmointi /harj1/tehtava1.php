<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 1 / Tehtävä 1</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 1"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <form method="post" action="tehtava1.php">
    Mikä painosi kiloina:<br>
    <input type="text" name="weight"><br>
    <input type="submit" name="button" value="send">
  </form>

  <?php
  if (!isset($_REQUEST['button'])) exit();
  echo "Sinun painosi on <strong>{$_REQUEST['weight']}</strong><br>";
  $ika = $_REQUEST['weight'] - 5;
  echo "Minun painoni on <strong>$ika</strong>, sinulla taitaa olla paino-ongelmia?<p>";
  ?>
</body>

</html>