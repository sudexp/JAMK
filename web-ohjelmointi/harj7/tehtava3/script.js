var mymap = L.map('mapid').setView(XXXX XXXX XXXXX);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieXVyaWFoYW5pIiwiYSI6ImNqanljZTFrMTBjMGEza25kMjBlZGZkdXYifQ.gxDr4e24ngDBS2ZmLueSuw', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets'
}).addTo(mymap);

var yellowIcon = L.icon({
  iconUrl: 'yellow-dot.png', // Tämä tiedosto sinun pitää itse hakea jostakin ilmaisesta
  // kokoelmasta esim  https://www.flaticon.com/free-icon/map-marker_33622
  iconSize: [32, 32], // size
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [-32, -32] // point from which the popup should open relative to the iconAnchor
});

// ... muun väriset markkerit samoin


$.ajax({
  url: 'kentat.json'
}).fail(function () {
  console.log("fail!");
}).done(function (data) {
  // loop through all courses
  $.each(data.kentat, function (index, kentta) {
    // marker, get position lat and lng

    //console.log(kentta);
    var marker = L.marker([kentta.lat, kentta.lng], { icon: yellowIcon }).addTo(mymap);

    // ...
    /* Tähän ohjelmakoodi, jolla JSON-tiedoston perusteella voidaan näyttää oikean värinen markkeri */


    /*
 
        Tähän ohjelmakoodi, jossa markkeriin liitetään tapahtumakuuntelija klikkausta varten
        sekä ohjelmoidaan toiminnot sitten popup-ikkunan informaation näyttämiselle JSON-
        tiedostin tietojen perusteella.
    */
  });

}); // each
    }); // ajax done


