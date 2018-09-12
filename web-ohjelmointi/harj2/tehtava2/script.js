const arr = [11, 22, 33, 44];

let printArray = function(arr) {
  let i;
  let arrContent = '';
  for (i in arr) {
    arrContent += `<p>taulukko[${i}]=${arr[i]}</p>`;
  }
  return arrContent;
};

let arrayCount = function(arr) {
  const len = arr.length;
  return len;
};

let arraySum = function(arr) {
  let sum = 0;
  let i;
  for (i of arr) {
    sum += i;
  }
  return sum;
};

let arrayAvg = function(len, sum) {
  const avg = Math.round((sum / len) * 10) / 10;
  return avg;
};

const print = printArray(arr);
const count = arrayCount(arr);
const summa = arraySum(arr);
const avg = arrayAvg(count, summa);

function writeResults() {
  document.getElementById('result').innerHTML =
    print +
    '<br>' +
    'Lukumäärä on ' +
    count +
    '<br>' +
    'Summa on ' +
    summa +
    '<br>' +
    'Keskiarvo on ' +
    avg;
}

window.onload = writeResults;
