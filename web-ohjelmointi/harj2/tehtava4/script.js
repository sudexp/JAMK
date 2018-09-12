class Calculator {
  constructor(hours, minutes, seconds, distance) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.distance = distance;
  }
  
  get speedKmH() {
    return this.calcKmhPace();
  }

  calcKmhPace() {
    return this.distance / (this.hours + this.minutes / 60 + this.seconds / 3600);
  }

  get speedMinKm() {
    return this.calcMinkmPace();
  }

  calcMinkmPace() {
    return (this.hours * 60 + this.minutes + this.seconds / 60) / this.distance;
  }
}

const speed = new Calculator(1, 13, 13, 20);

console.log(speed.speedKmH, speed.speedMinKm);

// function addition() {
//   var a = parseFloat(document.getElementById('number1').value);
//   var b = parseFloat(document.getElementById('number2').value);
//   // if (isNaN(a) === true) a = 0;
//   // if (isNaN(b) === true) b = 0;
//   var c = a + b;
//   document.getElementById('result').innerHTML = ' Summa = ' + c;
// }