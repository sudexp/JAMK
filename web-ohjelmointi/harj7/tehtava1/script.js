function showMap() {
  const mymap = L.map('mapid').setView([62.24, 25.74], 14);

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieXVyaWFoYW5pIiwiYSI6ImNqanljZTFrMTBjMGEza25kMjBlZGZkdXYifQ.gxDr4e24ngDBS2ZmLueSuw',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }
  ).addTo(mymap);

  const marker = L.marker([62.24264, 25.747364]).addTo(mymap);

  const circle = L.circle([62.2425, 25.737], {
    color: 'yellow',
    fillColor: '#f8f5d4',
    fillOpacity: 0.5,
    radius: 450
  }).addTo(mymap);

  const polygon = L.polygon([
    [62.239, 25.751],
    [62.239, 25.7565],
    [62.2375, 25.7565],
    [62.2375, 25.751]
  ]).addTo(mymap);

  marker.bindPopup('<b>Keskusta</b><br>Jyväskylä').openPopup();
  circle.bindPopup('Harjun EK');
  polygon.bindPopup('MM-ralli - Kilpailukeskus.');

  /*
  function onMapClick(e) {
      alert("You clicked the map at " + e.latlng);
  }
  mymap.on('click', onMapClick);
  */

  const popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent('You clicked the map at ' + e.latlng.toString())
      .openOn(mymap);
  }

  mymap.on('click', onMapClick);
}

window.onload = showMap;
