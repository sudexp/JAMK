// talot-taulukkoon ladataan talojen tiedot palvelimelta
var houses = new Array(); //var houses = [];

// funktiota kutsutaan web-sivulta bodyn onload-tapahtumasta
function loadJSON() {
  ajax('houses.json', function(response) {
    //console.log("response = " + response);
    // create a json object
    var JSONObject = JSON.parse(response);
    houses = JSONObject.houses;
    //console.log(houses);
    for (var i = 0; i < houses.length; i++) {
      showHouse(i);
    }
  });
}

function ajax(url, fn) {
  var req;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else {
    req = new ActiveXObject('Microsoft.XMLHTTP');
  }
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      fn(req.responseText);
    }
  };
  req.open('GET', url, true);
  req.send();
}

function showHouse(index) {
  // new div
  var houseDiv = document.createElement('div');
  houseDiv.setAttribute('class', 'houseContainer');
  var img = document.createElement('img');
  img.setAttribute('class', 'houseImage');
  img.setAttribute('src', houses[index].image);
  //console.log("image="+houses[index].image);
  houseDiv.appendChild(img);

  var p1 = document.createElement('p');
  p1.setAttribute('class', 'header');
  var text = document.createTextNode(houses[index].address);
  p1.appendChild(text);

  var p2 = document.createElement('p');
  var text = document.createTextNode(houses[index].type);
  p2.appendChild(text);

  var p3 = document.createElement('p');
  p3.setAttribute('class', 'description');
  var text = document.createTextNode(houses[index].description);
  p3.appendChild(text);

  var p4 = document.createElement('p');
  var text = document.createTextNode(houses[index].price);
  p4.appendChild(text);

  houseDiv.appendChild(p1);
  houseDiv.appendChild(p2);
  houseDiv.appendChild(p3);
  houseDiv.appendChild(p4);

  // houses div
  var housesDiv = document.getElementById('houses');

  housesDiv.appendChild(houseDiv);
}

// window.onload = loadJSON;
