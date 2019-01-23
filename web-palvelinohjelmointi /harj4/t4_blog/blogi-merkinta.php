<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Blogimerkintä</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="tyyli.css">
</head>

<body>
  <div id='container'>
    <?php include("config-navbar.php") ?>

    <h2>Blogimerkintä</h2>
    <?php

    if (!isset($_GET['id'])) exit();
    $filename = $_GET['id'];
    include($filename);
    echo "<a href='blogi-poista.php?id=$filename'>Poista</a>";
    echo "<hr>";

    ?>
  </div>
</body>

</html>