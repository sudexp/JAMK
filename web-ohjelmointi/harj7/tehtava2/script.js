function drawChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = 'grey';
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ford', 'Opel', 'Toyota'],
      datasets: [
        {
          label: 'Autojen lukumäärät',
          data: [7, 3, 8],
          backgroundColor: [
            'rgba(59, 142, 211, 1.0)',
            'rgba(137, 97, 150, 1.0)',
            'rgba(79, 181, 158, 1.0)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 50,
          fontColor: 'rgba(rgba(30, 30, 30, 1.0)'
        }
      },
      scales: {
        yAxes: [{ barThickness: 100, ticks: { beginAtZero: true } }],
        xAxes: [{ barThickness: 100 }]
      }
    }
  });
  // borderColor: [
  //   'rgba(59, 142, 211, 1.0)',
  //   'rgba(137, 97, 150, 1.0)',
  //   'rgba(79, 181, 158, 1.0)'
  // ],
  // borderWidth: 1 // The data for our dataset // Configuration options go here
}

window.onload = drawChart;
