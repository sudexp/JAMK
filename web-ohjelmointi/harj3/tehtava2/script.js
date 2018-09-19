function showReact() {
  document.getElementById('image').src = 'images/react.png';
}

function showAngular() {
  document.getElementById('image').src = 'images/angular.jpg';
}

function showVuejs() {
  console.log('hello!');
  document.getElementById('image').src = 'images/vuejs.jpg';
}

window.onload = function() {
  const react = document.getElementById('react');
  const angular = document.getElementById('angular');
  const vuejs = document.getElementById('vuejs');
  react.addEventListener('click', showReact, false);
  angular.addEventListener('click', showAngular, false);
  vuejs.addEventListener('click', showVuejs, false);
};
