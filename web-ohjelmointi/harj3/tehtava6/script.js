function selectColor(value) {
  let color = document.getElementById('color');
  color.innerHTML = 'Valittu väri: ' + value;
}

function changeColor() {
  let printArea = document.getElementById('printarea');
  let colorStyle = printArea.style.backgroundColor;
  colorStyle = document.getElementById('selectcolor').value;
}

// function colourNameToHex(colour) {
//   var colours = {
//     beige: '#f5f5dc',
//     blue: '#0000ff',
//     brown: '#a52a2a',
//     gray: '#808080',
//     green: '#008000',
//     orange: '#ffa500',
//     purple: '#800080',
//     red: '#ff0000',
//     yellow: '#ffff00'
//   };

//   if (typeof colours[colour.toLowerCase()] != 'undefined')
//     return colours[colour.toLowerCase()];

//   return false;
// }
