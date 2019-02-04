<style type='text/css'>
  tr:nth-child(odd) {background: #f1f1f1}
  tr:nth-child(even) {background: #ffffff}
  tr:nth-child(1) {background: #ffeedd}
</style>
<hr>

<?php
// abook-muokkaa.php

include("navbar.php");
require_once('/home/M0394/php-dbconfig/db-init.php');

$tunnus = isset($_REQUEST['tunnus']) ? $_REQUEST['tunnus'] : '';
$sukunimi = isset($_REQUEST['sukunimi']) ? $_REQUEST['sukunimi'] : '';
$etunimi = isset($_REQUEST['etunimi']) ? $_REQUEST['etunimi'] : '';
$osoite = isset($_REQUEST['osoite']) ? $_REQUEST['osoite'] : '';
$puhnro = isset($_REQUEST['puhnro']) ? $_REQUEST['puhnro'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';

// echo $sukunimi;
// exit();

$sql = <<<SQLEND
  UPDATE henkilot
  SET
  sukunimi = :sukunimi,
  etunimi = :etunimi,
  osoite = :osoite,
  puhnro = :puhnro,
  email = :email
  WHERE tunnus = :tunnus
SQLEND;

// ":" - prevent sql injection (placeholder)
// php prepare statement and placeholder (php/34.html)

$stmt = $db->prepare($sql);
$stmt->bindValue(':tunnus', "$tunnus", PDO::PARAM_STR);
$stmt->bindValue(':etunimi', "$etunimi", PDO::PARAM_STR);
$stmt->bindValue(':sukunimi', "$sukunimi", PDO::PARAM_STR);
$stmt->bindValue(':osoite', "$osoite", PDO::PARAM_STR);
$stmt->bindValue(':puhnro', "$puhnro", PDO::PARAM_STR);
$stmt->bindValue(':email', "$email", PDO::PARAM_STR);
$stmt->execute();

$affected_rows = $stmt->rowCount();
echo "$affected_rows päivittetiin onnistuneesti";

?>