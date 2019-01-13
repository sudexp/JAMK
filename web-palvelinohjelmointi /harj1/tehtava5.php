<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 1 / Tehtävä 5</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 5"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <form method="get" action="tehtava5.php">
  </form>

  <table>
    <?php
    for ($i = 1; $i <= 7; $i++) {
      $tvari = taustavari();
      echo "<tr bgcolor='$tvari'><td>Rivi $i</td></tr>";
    }

    function taustavari()
    {
      static $ftvari = '#ffffff';

      if ($ftvari == '#ffffff') {
        $ftvari = '#ffff00';
      } else {
        $ftvari = '#ffffff';
      }

      return $ftvari;
    }
        
    // % (jakojannos!?)
    ?>
  </table>
</body>

</html>

