function drawToCanvas(depth) {
  depth = depth / 100;
  let h = 1 - depth;
  let r = 1;
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 800, 400);
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
