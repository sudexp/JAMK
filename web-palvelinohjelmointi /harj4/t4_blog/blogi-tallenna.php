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

    if (isset($_POST['nappi'])) {
      if (!$fp = @fopen(BLOGI_FILE, "w")) {
        echo "fopen virhe!";
        exit();
      }

        // Valmistellaan merkintä
      $_POST['merkinta'] = nl2br($_POST['merkinta']);

      $blogimerkinta = <<<BLOGIMERKINTA
        <div class='merkinta'>
          <h4>{$_POST['otsikko']}</h4>
          <p>{$_POST['merkinta']}</p>
        </div>
BLOGIMERKINTA;

        //Kirjoitetaan merkintä tiedostoon
      fwrite($fp, $blogimerkinta);
      fclose($fp);
    }

    echo $blogimerkinta;

    if (isset($_FILES['file'])) {
      // check if you can upload an image
      $check = can_upload($_FILES['file']);

      if ($check === true) {
        // upload image to server
        make_upload($_FILES['file']);
        echo "<strong>File uploaded successfully!</strong>";
      } else {
        // display error message
        echo "<strong>$check</strong>";
      }
    }

    function can_upload($file)
    {
	    // if file name is empty, then the file is not selected
      if ($file['name'] == '')
        return 'You have not selected a file.';

      // if the file size is 0, then it did not miss the server settings due to the fact that it is too large
      if ($file['size'] == 0)
        return 'File size is too large.';
	
	    // split file name on a point and we receive array
      $getMime = explode('.', $file['name']);

	    // we are interested in the last element of the array - extension
      $mime = strtolower(end($getMime));

	    // declare an array of valid extensions
      $types = array('jpg', 'png');
	
	    // if the extension is not included in the list of valid - return
      if (!in_array($mime, $types))
        return 'Invalid file type.';
      return true;
    }

    function make_upload($file)
    {	
	  // create a unique name for the image: a random number and name
      $name = mt_rand(0, 10000) . $file['name'];
      copy($file['tmp_name'], 'data2/' . $name);
    }

    ?>
  </div>
</body>

</html>