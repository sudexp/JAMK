function drawToCanvas(depth) {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 800;
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  depth = depth / 100;
  let h = 1 - depth;
  let r = 1;
  let vari = '#fed';
  ctx.beginPath();
  let alkukulma = Math.PI / 2 - Math.acos(h / r);
  // let alfa = ((depth / 200) * Math.Pi) / 2;
  ctx.arc(400, 200, 150, alkukulma, Math.PI - alkukulma);
  // ctx.arc(400, 200, depth, 0, 2 * Math.PI);
  ctx.fillStyle = vari;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

window.onload = drawToCanvas;
