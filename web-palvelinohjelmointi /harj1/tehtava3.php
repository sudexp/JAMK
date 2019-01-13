<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 1 / Tehtävä 3</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 3"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <form method="get" action="tehtava3.php">
    Enter the number of stars:<br>
    <input type="text" name="stars"><br>
    <input type="submit" name="button" value="send">
  </form>

  <?php
  if (!isset($_REQUEST['button'])) exit();
  $stars = $_REQUEST['stars'];
  for ($i = 1; $i <= $stars; $i++) {
    echo "*";
  }
  ?>
</body>

</html>