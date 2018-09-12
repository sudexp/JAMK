function addition() {
  var a = parseInt(document.getElementById('number1').value);
  var b = parseInt(document.getElementById('number2').value);
  // if (isNaN(a) === true) a = 0;
  // if (isNaN(b) === true) b = 0;
  var c = a + b;
  document.getElementById('result').innerHTML = ' Summa = ' + c;
}