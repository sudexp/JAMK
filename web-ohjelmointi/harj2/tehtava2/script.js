window.onload = writeResults;

const arr = [11, 22, 33, 44];

let printArray = function() {
  let i;
  let arrContent = '';
  for (i in arr) {
    arrContent += `<p>taulukko[${i}]=${arr[i]}</p>`;
  }
  return arrContent;
};

let arrayCount = function() {
  return arr.length;
};

let arraySum = function() {
  let sum = 0;
  let i;
  for (i of arr) {
    sum += i;
  }
  return sum;
};

let arrayAvg = function() {
  let avg;
  avg = Math.round((sum / arr.length) * 10) / 10;
  return avg;
};

let print = printArray();
let count = arrayCount();
let sum = arraySum();
let avg = arrayAvg();

function writeResults() {
  document.getElementById('result').innerHTML =
    print +
    '<br>' +
    'Lukumäärä on ' +
    count +
    '<br>' +
    'Summa on ' +
    sum +
    '<br>' +
    'Keskiarvo on ' +
    avg;
}
