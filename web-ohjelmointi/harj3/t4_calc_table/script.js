function calc() {
  getNumber(
    document.getElementById('input1').value,
    document.getElementById('input2').value,
    document.getElementById('input3').value,
    document.getElementById('input4').value
  );
}

function getNumber(a, b, c, d) {
  if (hasError(a, b, c, d)) {
    document.getElementById('summa').innerHTML = ' VIRHE!';
    document.getElementById('mark').innerHTML = ' VIRHE!';
  } else {
    const summa = countSumma(a, b, c, d);
    showSum(summa);
    const mark = countMark(summa);
    showMark(mark);
  }
}

function hasError(a, b, c, d) {
  return (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    isNaN(d) ||
    a < 0 ||
    a > 6 ||
    b < 0 ||
    b > 6 ||
    c < 0 ||
    c > 6 ||
    d < 0 ||
    d > 6
  );
}

function countSumma(a, b, c, d) {
  return parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
}

function countMark(summa) {
  let mark = 0;
  if (summa <= 12) {
    mark = 0;
  } else if (summa <= 15) {
    mark = 1;
  } else if (summa <= 17) {
    mark = 2;
  } else if (summa <= 19) {
    mark = 3;
  } else if (summa <= 21) {
    mark = 4;
  } else {
    mark = 5;
  }
  return mark;
}

function showSum(summa) {
  document.getElementById('summa').innerHTML = summa;
}

function showMark(mark) {
  document.getElementById('mark').innerHTML = mark;
}
