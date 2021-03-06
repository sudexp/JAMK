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

  class Counter
  {
    public $model;

    function __construct($model)
    {
      $this->model = $model;
      if (isset($_SESSION[$this->model])) {
        $this->count = $_SESSION[$this->model];
      } else {
        $this->count = 0;
        $_SESSION[$this->model] = $this->count;
      }
    }

    function __destruct()
    {
      $this->model = null;
      $this->count = null;
    }

    public function increaseCount()
    {
      $this->count = $this->count + 1;
      $_SESSION[$this->model] = $this->count;
    }
  }

  ?> 
</body>

</html>