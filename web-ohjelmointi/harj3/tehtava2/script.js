let react = document.getElementById('react');
let angular = document.getElementById('angular');
let vuejs = document.getElementById('vuejs');

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

react.addEventListener('click', showReact, false);
angular.addEventListener('click', showAngular, false);
react.addEventListener('click', showVuejs, false);

//window.onload = showReact;
