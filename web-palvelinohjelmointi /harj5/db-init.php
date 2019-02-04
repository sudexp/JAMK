<?php
// db-init.php
$db = new PDO(
  'mysql:host=mysql.labranet.jamk.fi;dbname=M0394;charset=utf8',
  'M0394',
  'GQ5byGE8VecW5UFtMy9asem4ITuoF1BR'
);

$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>