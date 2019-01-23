<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Blogi</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="tyyli.css">
</head>

<body>
  <div id='container'>
    <?php include("config-navbar.php") ?>

    <h2>Blogi</h2>

    <?php

    foreach (glob("$datadir/*.txt") as $filename) {
      $filet[] = $filename;
    }

    rsort($filet);

    foreach ($filet as $filename) {
      include($filename);
      echo "<a href='blogi-merkinta.php?id=$filename'>$filename</a>";
      echo "<hr>";
    }

    ?>
  </div>
</body>

</html>