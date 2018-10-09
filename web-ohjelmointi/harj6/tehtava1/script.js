function init() {
  drawSwedenFlag();
  drawGuyanaFlag();
}

function drawSwedenFlag() {
  const canvas = document.getElementById('sweden');
  const ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 1000;
  const colorBlue = '#0000ff';
  const colorYellow = '#ffff00';

  ctx.fillStyle = colorBlue;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colorYellow;
  ctx.fillRect(0, (canvas.height * 2) / 5, canvas.width, canvas.height / 5);

  ctx.fillStyle = colorYellow;
  ctx.fillRect(canvas.width / 3.5, 0, canvas.width / 10, canvas.height);
}

function drawGuyanaFlag() {
  const canvas = document.getElementById('guyana');
  const ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 1000;
  const colorGreen = '#008000';
  const colorWhite = '#ffffff';
  const colorGoldenRod = '#DAA520';
  const colorBlack = '#000000';
  const colorFireBrick = '#b22222';

  ctx.fillStyle = colorGreen;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const x = 5;

  ctx.beginPath();
  ctx.moveTo(0, x / 2);
  ctx.lineTo(canvas.width - 2 * x, canvas.height / 2);
  ctx.lineTo(0, canvas.height - x / 2);
  ctx.closePath();
  ctx.fillStyle = colorGoldenRod;
  ctx.fill();

  ctx.lineWidth = x;
  ctx.strokeStyle = colorWhite;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, x / 2);
  ctx.lineTo((canvas.width - 2 * x) / 2, canvas.height / 2);
  ctx.lineTo(0, canvas.height - x / 2);
  ctx.closePath();
  ctx.fillStyle = colorFireBrick;
  ctx.fill();

  ctx.lineWidth = x;
  ctx.strokeStyle = colorBlack;
  ctx.stroke();
}

window.onload = init;
