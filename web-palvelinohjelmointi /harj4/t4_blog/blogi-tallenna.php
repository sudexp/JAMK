<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Tallensit blogimerkinnän</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="tyyli.css">
</head>

<body>
  <div id='container'>
    <?php include("config-navbar.php") ?>

    <h2>Tallensit blogimerkinnän</h2>
    <?php
    // Lisätään viesti

    $aikaleima = date("Y-m-d--H-i-s");
    define("BLOGI_FILE", "$datadir/$aikaleima.txt");

    if (isset($_GET['nappi'])) {
      if (!$fp = @fopen(BLOGI_FILE, "w")) {
        echo "fopen virhe!";
        exit();
      }

        // Valmistellaan merkintä
      $_GET['merkinta'] = nl2br($_GET['merkinta']);

      $blogimerkinta = <<<BLOGIMERKINTA
        <div class='merkinta'>
          <h4>{$_GET['otsikko']}</h4>
          <p>{$_GET['merkinta']}</p>
        </div>
BLOGIMERKINTA;

        //Kirjoitetaan merkintä tiedostoon
      fwrite($fp, $blogimerkinta);
      fclose($fp);
    }

    echo $blogimerkinta;

    ?>
  </div>
</body>

</html>