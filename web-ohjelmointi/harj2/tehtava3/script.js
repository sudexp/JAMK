const printArray = arr => {
  let i;
  let arrContent = '';
  for (i in arr) {
    arrContent += `<p>taulukko[${i}]=${arr[i]}</p>`;
  }
  return arrContent;
}

const arrayCount = arr => arr.length;

const arraySum = arr => arr.reduce((a, b) => a + b)

const arrayAvg = (len, sum) => Math.round((sum / len) * 10) / 10;

const arrData = [11, 22, 33, 44];
const print = printArray(arrData);
const count = arrayCount(arrData);
const summa = arraySum(arrData);
const avg = arrayAvg(count, summa);

function writeResults() {
  document.getElementById('result').innerHTML = `
    <p>
      ${print}
      Lukumäärä on ${count}<br>  
      Summa on ${summa}<br>
      Keskiarvo on ${avg}
    </p>
  `;
}

window.onload = writeResults;