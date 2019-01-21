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

  if (isset($_GET['kysymys1'])) {
    $summa += $_GET['kysymys1'];
  }


  if (isset($_GET['kysymys2'])) {
    foreach ($_GET['kysymys2'] as $pojot) {
      $summa += $pojot;
    }
  }

  if (isset($_GET['kysymys3'])) {
    foreach ($_GET['kysymys3'] as $pojot) {
      $summa += $pojot;
    }
  }

  echo "<p>Onneksi olkoon, sait $summa pistettä!</p>";
}

$lomake = <<<EOLomake
  <form method="get" action="{$_SERVER['PHP_SELF']}">
    Kysymys 1: Mikä vaihtoehto on oikea?<br>
    <input type='radio' name='kysymys1' value='1'>Hauki on kala<br>\n
    <input type='radio' name='kysymys1' value='0'>Hauki on linttu<br>\n
    <input type='radio' name='kysymys1' value='0'>Hauki on kissa<br>\n
    <br>
    Kysymys 2: Mitä kirjainlyhenne PHP tarkoittaa puhuttaessa Web-ohjelmoinnista?<br>
    <select name="kysymys2[]">
      <option value='0'>Valitse</option>
      <option value='-2'>Peaceful Human Programing</option>
      <option value='2'>PHP: Hypertext Preprocessor</option>
      <option value='-2'>Professional hypertext parser</option>
    </select><br><br>
    Kysymys 3: Mikä vaihtoehto on oikea?<br>
    <input type='checkbox' name='kysymys3[]' value='3'>Mega on miljoona<br>\n
    <input type='checkbox' name='kysymys3[]' value='-3'>Giga on miljoona<br>\n
    <input type='checkbox' name='kysymys3[]' value='-3'>Tera on miljoona<br>\n
    <br>  
    <input type="submit" name="nappi" value="Nayta pisteet">
  </form>
EOLomake;

echo $lomake;
?>
</body>

</html>