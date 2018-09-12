// Template:
// let inc = x => x+1;
// let inc = function(x) { return x + 1; };

const arr = [11, 22, 33, 44];

let printArray = arr => {
  let i;
  let arrContent = '';
  for (i in arr) {
    arrContent += `<p>taulukko[${i}]=${arr[i]}</p>`;
  }
  return arrContent;
}

let arrayCount = arr => arr.length;


// let arraySum = arr => {
//   let sum = arr.reduce((a, b) => a + b)
//   return sum;
// }

let arraySum = arr => arr.reduce((a, b) => a + b)

let arrayAvg = (len, sum) => {
  const avg = Math.round((sum / len) * 10) / 10;
  return avg;
}

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