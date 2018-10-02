$(document).ready(function() {
  $('#calc').submit(function(e) {
    // remove default submit behavior
    e.preventDefault();
    // lue luvut lomakkeelta (ovat merkkijonoja)
    let number1 = $('#number1').val();
    let number2 = $('#number2').val();
    let result = $('#result');
    let sum = parseFloat(number1) + parseFloat(number2);
    result.text('Summa is ' + sum);
  });
});
