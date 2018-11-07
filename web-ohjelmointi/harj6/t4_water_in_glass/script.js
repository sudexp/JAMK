function drawToCanvas(depth) {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var colorBottom = '#ebf4fa';
  var colorTop = '#fff';

  fillsegment(ctx, colorBottom, colorTop, depth);
}

function fillsegment(ctx, colorBottom, colorTop, depth) {
  length = 1.0;
  depth = depth / 100;
  var r = 1.0;
  var h = r - depth;
  var base = h * Math.tan(Math.acos(h / r));
  var angleStart = Math.PI / 2 - Math.acos(h / r);
  var angleEnd = Math.PI - angleStart;
  var angledeg = angleStart / (Math.PI / 180);
  ctx.clearRect(0, 0, 800, 400);

  // Ekana ympyrä
  ctx.fillStyle = colorTop;
  ctx.beginPath();
  ctx.arc(400, 200, 150, 0, 2 * Math.PI);
  ctx.stroke();

  // Tokana segmentti
  ctx.beginPath();
  ctx.fillStyle = colorBottom;
  ctx.arc(400, 200, 150, angleStart, angleEnd);
  ctx.closePath(); // Pintaviiva
  ctx.fill();
  ctx.stroke();

  // Tilavuuden laskenta
  var relativeAngle = (angleEnd - angleStart) / (2 * Math.PI);
  var volume = (relativeAngle * Math.PI * r * r - base * h) * length;
  //var volume = ((relativeAngle * Math.PI * r * r) - (r*h)) * length;
  var volumeLiter = volume * 1000;

  // Tekstit
  ctx.fillStyle = '#000000';
  ctx.font = '16px Arial';
  ctx.fillText('Tynnyrin pituus: 100cm', 10, 20);
  ctx.fillText('Tynnyrin halkaisija: 200cm', 10, 35);
  //ctx.fillText("Alkukulma: " + angleStart.toFixed(3) ,10,50);
  //ctx.fillText("Loppukulma: " + angleEnd.toFixed(3) ,10,65);
  ctx.fillText('Tynnyrin tilavuus 3141.59 litraa', 10, 50);
  ctx.font = '18px Arial';
  ctx.fillText('Nestemäärä:', 10, 100);
  ctx.font = 'bold 18px Arial';
  ctx.fillText(volumeLiter.toFixed(2) + ' litraa', 10, 125);
}
