<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 2 / Tehtävä 5</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 5"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
<?php

if (isset($_GET['nappi'])) {
  $summa = 0;
  $summa = $summa + $_GET['kysymys1'];

  if (isset($_GET['kysymys2'])) {
      // if(is_array($_GET['kysymys2'])) {
    foreach ($_GET['kysymys2'] as $pojot) {
      $summa += $pojot;
    }
  }

  echo "<p>Onneksi olkoon, sait $summa pistettä!</p>";
}

$lomake = <<<EOLomake
  <form method="get" action="{$_SERVER['PHP_SELF']}">
    <input type='radio' name='kysymys1' value='1'>Hauki on kala<br>\n
    <input type='radio' name='kysymys1' value='0'>Hauki on linttu<br>\n
    <input type='radio' name='kysymys1' value='0'>Hauki on kissa<br>\n
    <br><br>
    <input type='checkbox' name='kysymys2[]' value='3'>Mega on miljoona<br>\n
    <input type='checkbox' name='kysymys2[]' value='-3'>Giga on miljoona<br>\n
    <input type='checkbox' name='kysymys2[]' value='-3'>Tera on miljoona<br>\n
    <input type="submit" name="nappi" value="Send">
  </form>
EOLomake;

echo $lomake;
?>
</body>

</html>