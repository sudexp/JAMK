class Calculator {
  constructor(hours, minutes, seconds, distance) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.distance = distance;
  }
  
  get speedKmH() {
    return this.calcSpeedKmH();
  }

  calcSpeedKmH() {
    return (
      Math.round(
        (this.distance /
          (this.hours + this.minutes / 60 + this.seconds / 3600)) *
          100
      ) / 100
    );
  }

  get speedMinKm() {
    return this.calcSpeedMinKm();
  }

  calcSpeedMinKm() {
    return (
      Math.round(
        ((this.hours * 60 + this.minutes + this.seconds / 60) / this.distance) *
          100
      ) / 100
    );
  }
}

//let hours = parseInt(document.getElementById('hours').value);
//let minutes = parseInt(document.getElementById('minutes').value);
//let seconds = parseInt(document.getElementById('seconds').value);
//let distance = parseInt(document.getElementById('seconds').value);

const speed = new Calculator(1, 13, 13, 20);
//const speed = new Calculator(hours, minutes, seconds, distance);

console.log(speed.speedKmH, speed.speedMinKm);

function outputOnDisplay() {
  document.getElementById('speed-km-h').innerHTML = speed.speedKmH + ' km/h';
  document.getElementById('speed-km-h').style.display = 'block';
  document.getElementById('speed-min-km').innerHTML = speed.speedMinKm + ' min/km';
  document.getElementById('speed-min-km').style.display = 'block';
}