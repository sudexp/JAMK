<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Lisää blogimerkintä</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="tyyli.css">
</head>

<body>
  <div id='container'>
    <?php include("config-navbar.php") ?>

    <h2>Lisää blogimerkintä</h2>
    <div class="form-box">
      <form action="blogi-tallenna.php" method="post" enctype="multipart/form-data">
        Otsikko:<br>
        <input type="text" name="otsikko"><br>
        Merkintä:<br>
        <textarea cols="30" rows="4" name="merkinta"></textarea><br>
        File upload:<br>
        <input type="file" name="file"><br><br>
        <input type="submit" name="nappi" value="Tallenna">
      </form>
    </div>
  </div>
</body>

</html>