function showMap() {
  const mymap = L.map('mapid').setView([62.24, 25.75], 7);

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieXVyaWFoYW5pIiwiYSI6ImNqanljZTFrMTBjMGEza25kMjBlZGZkdXYifQ.gxDr4e24ngDBS2ZmLueSuw',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }
  ).addTo(mymap);

  const yellowIcon = L.icon({
    iconUrl: 'yellow_dot.png', // https://www.flaticon.com/free-icon/map-marker_33622
    iconSize: [32, 32], // size
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [-32, -32] // point from which the popup should open relative to the iconAnchor
  });

  const greenIcon = L.icon({
    iconUrl: 'green_dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [-32, -32]
  });

  const blueIcon = L.icon({
    iconUrl: 'blue_dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [-32, -32]
  });

  const redIcon = L.icon({
    iconUrl: 'red_dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [-32, -32]
  });

  $(document).ready(function() {
    $.ajax({
      url: 'fields.json',
      cache: false
    })
      .fail(function() {
        console.log('fail!');
      })
      .done(function(data) {
        // loop through all courses
        $.each(data.kentat, function(index, kentta) {
          // marker, get position lat and lng
          let marker;
          if (kentta.Tyyppi === 'Kulta') {
            marker = L.marker([kentta.lat, kentta.lng], {
              icon: yellowIcon
            }).addTo(mymap);
          } else if (kentta.Tyyppi === 'Kulta/Etu') {
            marker = L.marker([kentta.lat, kentta.lng], {
              icon: greenIcon
            }).addTo(mymap);
          } else if (kentta.Tyyppi === 'Etu') {
            marker = L.marker([kentta.lat, kentta.lng], {
              icon: blueIcon
            }).addTo(mymap);
          } else {
            marker = L.marker([kentta.lat, kentta.lng], {
              icon: redIcon
            }).addTo(mymap);
          }
        });
      }); // each
  }); // ajax done
}

window.onload = showMap;
