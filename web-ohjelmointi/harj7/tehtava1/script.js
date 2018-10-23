function showMap() {
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieXVyaWFoYW5pIiwiYSI6ImNqanljZTFrMTBjMGEza25kMjBlZGZkdXYifQ.gxDr4e24ngDBS2ZmLueSuw',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }
  ).addTo(mymap);

  var marker = L.marker([51.5, -0.09]).addTo(mymap);

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap);

  marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  circle.bindPopup('I am a circle.');
  polygon.bindPopup('I am a polygon.');

  /* Eka esimerkki klikkauksesta*/

  /*
  function onMapClick(e) {
      alert("You clicked the map at " + e.latlng);
  }
  
  mymap.on('click', onMapClick);
  */

  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent('You clicked the map at ' + e.latlng.toString())
      .openOn(mymap);
  }

  mymap.on('click', onMapClick);
}

window.onload = showMap;
