function selectColor(value) {
  const color = document.getElementById('color');
  const style = document.getElementById('color-style');
  const colorStyle = document.getElementById('select-color').value;
  color.innerHTML = value + ' ';
  style.innerHTML = colorNameToHex(colorStyle);
}

function changeColor() {
  const printArea = document.getElementById('print-area');
  const colorStyle = document.getElementById('select-color').value;
  printArea.style.backgroundColor = colorNameToHex(colorStyle);
}

function getColorStyle() {
  const colorStyle = document.getElementById('select-color').value;
  return colorStyle;
}

function colorNameToHex(color) {
  const colors = {
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
  return colors[color];
}

function addParty(event) {
  document.getElementById('party').innerHTML = document.getElementById(
    'party-input'
  ).value;
}
