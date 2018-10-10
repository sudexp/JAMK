function drawToCanvas(d) {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 1000;
  ctx.clearRect(0, 0, canvas.height, canvas.width);

  const r = 100;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 2 * r, 0 * Math.PI, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  const h = r - d;
  const vari = '#00FFFF';
  const initialAngle = Math.PI / 2 - Math.acos(h / r);

  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    2 * r,
    initialAngle,
    Math.PI - initialAngle
  );
  ctx.fillStyle = vari;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  const l = 100;
  let v = (Math.PI * r * r * l) / 1000;
  v = v.toFixed(2);

  // const base = h * Math.tan(Math.acos(h/r));

  ctx.fillStyle = '#000000';
  ctx.font = '18px Verdana';
  ctx.fillText(`Tyynyrin pituus: ${100} cm`, 20, 30);
  ctx.fillText(`Tyynyrin halkaisija: ${200} cm`, 20, 50);
  ctx.fillText(`Tyynyrin tilavuus: ${v} litraa`, 20, 70);
  ctx.fillText(`Nestemäärä: ${100} litraa`, 20, 100);
}

window.onload = drawToCanvas;
