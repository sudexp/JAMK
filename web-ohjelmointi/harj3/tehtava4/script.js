function getNumber(a, b, c, d) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    document.getElementById('summa').innerHTML =
      'Pistemäärä (summa): ' + 'VIRHE!';
  } else {
    countSumma(a, b, c, d);
  }
}

function countSumma(a, b, c, d) {
  let summa = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
  document.getElementById('summa').innerHTML = summa;
  countMark(summa);
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
  document.getElementById('mark').innerHTML = mark;
}
