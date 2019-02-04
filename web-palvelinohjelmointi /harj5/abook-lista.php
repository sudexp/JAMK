<style type='text/css'>
  tr:nth-child(odd) {background: #f1f1f1}
  tr:nth-child(even) {background: #ffffff}
  tr:nth-child(1) {background: #ffeedd}
</style>
<hr>

<?php
// abook-lista.php

include("navbar.php");
require_once('/home/M0394/php-dbconfig/db-init.php');

$hakuehto = isset($_GET['hakuehto']) ? $_GET['hakuehto'] : '';

$stmt = haeHenkilot($db, $hakuehto);
sqlResult2Html($stmt);

// 
function haeHenkilot($db, $hakuehto)
{
  $sql = <<<SQLEND
   SELECT tunnus, sukunimi, etunimi, email, osoite, puhnro
   FROM henkilot WHERE sukunimi
   LIKE :hakuehto
SQLEND;

  $stmt = $db->prepare($sql);
  $stmt->bindValue(':hakuehto', "%$hakuehto%", PDO::PARAM_STR);
  $stmt->execute();
  return $stmt;
}

// SQL-kyselyn tulosjoukko HTML-taulukkoon.
function sqlResult2Html($stmt)
{
  $row_count = $stmt->rowCount();
  $col_count = $stmt->columnCount();

  echo "Hakutulokset: " . $row_count . " riviä:<hr>\n";
  echo "<table border='0'>\n";
  $output = <<<OUTPUTEND
  <tr bgcolor='#ffeedd'>
  <td>Tunnus</td><td>Sukunimi</td><td>Etunimi</td>
  <td>Osoite</td><td>Puhnro</td><td>Email</td>
  </tr>
OUTPUTEND;
  echo $output;

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $output = <<<OUTPUTEND
    <tr>
    <td> <a href='abook-muokkauslomake.php?id={$row['tunnus']}'>{$row['tunnus']}</a></td>
    <td>{$row['sukunimi']}</td><td>{$row['etunimi']}</td>
    <td>{$row['osoite']}</td><td>{$row['puhnro']}</td><td>{$row['email']}</td>
   </tr>
OUTPUTEND;
    echo $output;
  }
  echo "</table>\n";
}

?>