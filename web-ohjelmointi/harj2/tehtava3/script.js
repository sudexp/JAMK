window.onload = writeResults;

const arr = [11, 22, 33, 44];

// Template:
// let inc = x => x+1;
// let inc = function(x) { return x + 1; };

let printArray = () => {
  let i;
  let arrContent = '';
  for (i in arr) {
    arrContent += `<p>taulukko[${i}]=${arr[i]}</p>`;
  }
  return arrContent;
};

let arrayCount = () => arr.length;


let arraySum = () => {
  let sum = 0;
  let i;
  for (i of arr) {
    sum += i;
  }
  return sum;
};

let arrayAvg = () => {
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
