<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dmitry Sklyarov [M0394] Harjoitukset 3 / Tehtävä 3</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 3"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
  <?php
  session_start();

  $loggedIn = false;

  $users = array(
    array("id" => "admin", "passwd" => "qwerty12"),
    array("id" => "user", "passwd" => "asdfgh"),
    array("id" => "Ari", "passwd" => "root66")
  );

  if (isset($_POST['id']) && isset($_POST['passwd'])) {
    foreach ($users as $user) {
      if ($_POST['id'] === $user['id'] && $_POST['passwd'] === $user['passwd']) {
        $loggedIn = true;
        $currentUser = $user['id'];
      }
    }
    if ($loggedIn === true) {
      echo "You are logged in as " . $currentUser;
    } else {
      echo "Wrong username or password!";
    }
  }
  ?>
  
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    Username:<br><input type="text" name="id"><br>
    Password:<br><input type="text" name="passwd"><br>
    <input type='submit' name='action' value='Log In'>
  </form>
</body>

</html>