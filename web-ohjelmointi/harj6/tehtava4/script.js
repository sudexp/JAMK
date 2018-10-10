let initialized = false;
let canvas, ctx;
const r = 100;
const l = 100;
const color = '#00FFFF';

function initCanvas() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 1000;
  ctx.clearRect(0, 0, canvas.height, canvas.width);
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 2 * r, 0 * Math.PI, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function drawWater(initialAngle) {
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    2 * r,
    initialAngle,
    Math.PI - initialAngle
  );
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function showStat(initialAngle) {
  // Calculate volume of cylinder:
  let v = (Math.PI * r * r * l) / 1000;
  v = v.toFixed(2);

  // Draw stats
  let s = 0;
  s = (((r * r) / 2) * (initialAngle - Math.sin(initialAngle)) * l) / 1000;
  s = s.toFixed(2);

  ctx.fillStyle = '#000000';
  ctx.font = '18px Verdana';
  ctx.fillText(`Tyynyrin pituus: ${100} cm`, 20, 30);
  ctx.fillText(`Tyynyrin halkaisija: ${200} cm`, 20, 50);
  ctx.fillText(`Tyynyrin tilavuus: ${v} litraa`, 20, 70);
  ctx.fillText(`Nestemäärä: ${s} litraa`, 20, 100);
}

function init() {
  initCanvas();
  drawCircle();
}

function drawToCanvas(d) {
  initCanvas();
  // Calculate params:
  const h = r - d;
  const initialAngle = Math.PI / 2 - Math.acos(h / r);
  drawWater(initialAngle);
  drawCircle();
  showStat(initialAngle);
}

window.onload = init;
