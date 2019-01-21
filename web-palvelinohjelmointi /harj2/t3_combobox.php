<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 2 / Tehtävä 3</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 3"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <?php

  $links[0][0] = "<a href='https://www.mtvuutiset.fi/aihe/urheilu/2963748' target='_blank'>MTV Sport</a>";
  $links[0][1] = "<a href='https://yle.fi/urheilu' target='_blank'>Yle Urheilu</a>";
  $links[1][0] = "<a href='https://musicfinland.fi/' target='_blank'>MusicFinland</a>";
  $links[1][1] = "<a href='http://suomenmusiikki.fi/' target='_blank'>Suomen musikki</a>";
  $links[2][0] = "<a href='https://evl.fi/etusivu' target='_blank'>Suomen evankelis-luterilainen kirkko</a>";
  $links[2][1] = "<a href='https://ort.fi' target='_blank'>Suomen ortodoksinen kirkko</a>";

  $form = <<<EOForm
    <form method='get' action={$_SERVER['PHP_SELF']}>
      <select name='topics[]' size='3' multiple>
        <option value='0'>Urheilu</option>
        <option value='1'>Musiikki</option>
        <option value='2'>Kirkko</option>
      </select><br><br>
      <input type='submit' name='button' value='Show links'><br>
    </form>
EOForm;

  echo '<br>' . $form . '<br>';

  if (isset($_GET['button'])) {
    foreach ($_GET['topics'] as $topic) {
      foreach ($links[$topic] as $link) {
        echo $link . '<br>';
      }
    }
    echo '<br>';
  }

  ?>
</body>

</html>