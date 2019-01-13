<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 1 / Tehtävä 2</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 2"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <form method="get" action="tehtava2.php">
    Enter the euro currency amount:<br>
    <input type="text" name="euro"><br>
    <input type="submit" name="button" value="send">
  </form>

  <?php
  if (!isset($_REQUEST['button'])) exit();
  $dollar = $_REQUEST['euro'] * 1.15;
  echo "In dollars <strong>{$_REQUEST['euro']}</strong> euro is equal <strong>$dollar</strong>.<p>";
  ?>
</body>

</html>