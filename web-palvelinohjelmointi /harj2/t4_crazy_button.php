<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 2 / Tehtävä 4</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 4"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <?php

  $text = isset($_GET['button']) ? $text = $_GET['text'] : '';

  if (isset($_GET['button'])) {
    switch ($text) {
      case '':
        $text = 'Yksi kerta riittaa';
        break;
      case 'Yksi kerta riittaa':
        $text = 'Kaksi kertaa riittaa';
        break;
      case 'Kaksi kertaa riittaa':
        $text = 'Kolme kertaa riittaa';
        break;
      default:
        $text = '';
    }
  }

  $form = <<<EOForm
    <form method='get' action={$_SERVER['PHP_SELF']}>
      <input type=submit name='button' value='Paina minua'>
      <input type='text' name='text' value='$text'>
    </form>
EOForm;

  echo $form;

  ?>
</body>

</html>

