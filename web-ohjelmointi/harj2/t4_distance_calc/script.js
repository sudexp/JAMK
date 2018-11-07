// Object Oriented concepts:
// 1. Incaplusation
// 2. Polimorphism
// 3. Inheritance

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
        ((this.hours * 60 + this.minutes + this.seconds / 60) / this.distance) * 100) / 100
    );
  }
}

function outputOnDisplay() {
  const speed = new Calculator(
    parseInt(document.getElementById('hours').value),
    parseInt(document.getElementById('minutes').value),
    parseInt(document.getElementById('seconds').value),
    parseInt(document.getElementById('seconds').value)
  );
  document.getElementById('speed-km-h').innerHTML = speed.speedKmH + ' km/h';
  document.getElementById('speed-km-h').style.display = 'block';
  document.getElementById('speed-min-km').innerHTML = speed.speedMinKm + ' min/km';
  document.getElementById('speed-min-km').style.display = 'block';
}