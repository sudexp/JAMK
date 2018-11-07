$(document).ready(function() {
  $('#calc').submit(function(e) {
    e.preventDefault();
    const sum = calcSum(getNumbers());
    showResult(sum);
  });
});

// getNumbers :: IO -> [Number]
const getNumbers = () => [$('#number1').val(), $('#number2').val()];

// calcSum :: [Number] -> Number
const calcSum = arr => arr.reduce((acc, n) => acc + parseFloat(n), 0);

// showResult :: Number -> IO(String)
const showResult = sum => $('#result').text('Summa is ' + sum.toFixed(2));
