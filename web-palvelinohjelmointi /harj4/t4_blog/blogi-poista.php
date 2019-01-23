<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Blogimerkinnän poistaminen</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="tyyli.css">
</head>

<body>
  <div id='container'>
    <?php include("config-navbar.php") ?>

    <h2>Blogimerkinnän poistaminen</h2>
    <?php

    if (!isset($_GET['id'])) exit();
    $filename = $_GET['id'];
    unlink($filename);
    echo "<p>Poistit blogimekinnän:</p>$filename";

    ?>
  </div>
</body>

</html>