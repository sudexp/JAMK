<style type='text/css'>
  tr:nth-child(odd) {background: #f1f1f1}
  tr:nth-child(even) {background: #ffffff}
  tr:nth-child(1) {background: #ffeedd}
</style>
<hr>

<?php
// abook-poista.php

include("navbar.php");
require_once('/home/M0394/php-dbconfig/db-init.php');

$tunnus = isset($_REQUEST['tunnus']) ? $_REQUEST['tunnus'] : '';
$sql = <<<SQLEND
  DELETE FROM henkilot
  WHERE tunnus = :tunnus
SQLEND;

$stmt = $db->prepare($sql);
$stmt->bindValue(":tunnus", $tunnus, PDO::PARAM_STR);
$stmt->execute();

$affected_rows = $stmt->rowCount();
echo "$affected_rows poistettiin onnistuneesti";

$db = null;

?>