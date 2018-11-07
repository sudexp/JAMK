let chart;

function drawChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = 'grey';
  Chart.defaults.global.animation.duration = '3000';
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ford', 'Opel', 'Toyota'],
      datasets: [
        {
          label: 'Lukumäärä (kpl)',
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
      title: {
        display: true,
        text: 'Autojen lukumäärät',
        fontSize: '20',
        fontColor: 'rgba(30, 30, 30, 1.0)'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [{ barThickness: 120 }]
      }
    }
  });
}

function addData(index) {
  chart.data.datasets[0].data[index] += 1;
  chart.update();
}

function resetData() {
  chart.data.datasets[0].data = [0, 0, 0];
  chart.update();
}

window.onload = drawChart;
