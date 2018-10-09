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
  ctx.closePath();
}

window.onload = drawSwedenFlag;
