<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Harjoitus 4, Tehtava 3 - Autolaskuri</title>
  <meta name="keywords" lang="fi" content="Dmitry Sklyarov, Jyväskylän ammattikorkeakoulu"/>
  <meta name="description" lang="fi" content="Dmitry Sklyarovin tehtava 3"/>
  <meta name="author" lang="fi" content="Dmitry Sklyarov"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

<body>
<?php

session_start();

function __autoload($class_name)
{
  require_once $class_name . '.class.php';
}

// 1. instantiate array of cars (which also reads value of counters from session):
$counters = array(
  'vw' => new Counter('vw'),
  'opel' => new Counter('opel'),
  'toyota' => new Counter('toyota')
);

//  2. update car from browser post:
// POST: car=vw
if (isset($_POST['car'])) {
  $car = $_POST['car'];
  $counters[$car] . increaseCount();
  print("<p> car increased counter for " . $car);
}

print("<br><pre>POST:");
print_r($_POST);
print("</pre><br>");

print("<br><pre>SESSION:");
print_r($_SESSION);
print("</pre><br>");

// 3. render HTML with form and buttons:
echo "<form method='post'>";
foreach ($counters as $counter) {
  echo "<button type='submit' name='car' value =' . $counter->model . '> ' . $counter->model . ' </button>";
  echo "</form>";
}

// 4. render HTML with the list of cars and their counters:
foreach ($counters as $counter) {
  echo "<p>' . $counter->model . ' : ' . $counter->count . ' </p>";
}

?>
</body>

</html>