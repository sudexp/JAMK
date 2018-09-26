<?php
/*

   PHP-ohjelma ajax-suggest.php tarjoaa pienen etunimitietokannan. Ohjelma
   tulostaa sellaiset etunimet tabulaattorein toisistaan erotettuina,
   joiden alkuosa vastaa ohjelman URLin q-parametrin arvoa. Esimerkiksi 
   osoitteella http://student.labranet.jamk.fi/~H1234/ajax-suggest.php?q=a
   ohjelma tulostaisi kaikki a:lla alkavat nimet esim.

   Anni\tAnna\tAnni\tAntti\tAri

   Tämä esimerkki muokattu ohjelmasta:
   http://www.w3schools.com/php/php_ajax_php.asp

 */

 // Array with names
$name[] = "Aino";
$name[] = "Anna";
$name[] = "Anni";
$name[] = "Antti";
$name[] = "Ari";
$name[] = "Bengt";
$name[] = "Bertta";
$name[] = "Birgitta";
$name[] = "Ceb";
$name[] = "Cecilia";
$name[] = "Chelsea";
$name[] = "Danny";
$name[] = "Eeva";
$name[] = "Eija";
$name[] = "Firo";
$name[] = "George";
$name[] = "Hanna";
$name[] = "Ilkka";
$name[] = "Janne";
$name[] = "Jari";
$name[] = "Jutta";
$name[] = "Kalle";
$name[] = "Lukas";
$name[] = "Martti";
$name[] = "Niilo";
$name[] = "Olivia";
$name[] = "Pentti";
$name[] = "Quentin";
$name[] = "Risto";
$name[] = "Sami";
$name[] = "Sani";
$name[] = "Seija";
$name[] = "Seppo";
$name[] = "Sinikka";
$name[] = "Tuija";
$name[] = "Unto";
$name[] = "Veeti";
$name[] = "Wilma";
$name[] = "Xynthia";
$name[] = "Zeus";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach ($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>