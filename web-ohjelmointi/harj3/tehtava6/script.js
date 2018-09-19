function selectColor(value) {
  const color = document.getElementById('color');
  color.innerHTML = 'Valittu väri: ' + value;
}

function changeColor() {
  const printArea = document.getElementById('print-area');
  colorStyle = document.getElementById('select-color').value;
  printArea.style.backgroundColor = colourNameToHex(colorStyle);
}

function colourNameToHex(colour) {
  var colours = {
    beige: '#f5f5dc',
    blue: '#0000ff',
    brown: '#a52a2a',
    gray: '#808080',
    green: '#008000',
    orange: '#ffa500',
    purple: '#800080',
    red: '#ff0000',
    yellow: '#ffff00'
  };
  return colours[colour] || '#ffffff';
}
