// function is called when the body is loaded (onload event)
function loadJSON() {
  ajax('GET', 'houses.json', function(response) {
    // console.log("response = " + response);
    // create a json object
    const JSONObject = JSON.parse(response);
    const houses = JSONObject.houses;
    //console.log(houses);
    for (let i = 0; i < houses.length; i++) {
      showHouse(houses[i]);
    }
  });
}

function ajax(method, url, callback) {
  let request;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    request = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    request = new ActiveXObject('Microsoft.XMLHTTP');
  }
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  request.open(method, url, true);
  request.send();
}

function showHouse(house) {
  // new div
  const houseDiv = document.createElement('div');
  houseDiv.setAttribute('class', 'houseContainer');

  const img = document.createElement('img');
  img.setAttribute('class', 'houseImage');
  img.setAttribute('src', house.image);
  //console.log("image="+houses[index].image);

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'header');
  const text1 = document.createTextNode(house.address);
  p1.appendChild(text1);

  const p2 = document.createElement('p');
  const text2 = document.createTextNode(house.type);
  p2.appendChild(text2);

  const p3 = document.createElement('p');
  p3.setAttribute('class', 'description');
  const text3 = document.createTextNode(house.description);
  p3.appendChild(text3);

  const p4 = document.createElement('p');
  const text4 = document.createTextNode(house.price);
  p4.appendChild(text4);

  houseDiv.appendChild(img);
  houseDiv.appendChild(p1);
  houseDiv.appendChild(p2);
  houseDiv.appendChild(p3);
  houseDiv.appendChild(p4);

  // houses div
  const housesDiv = document.getElementById('houses');
  housesDiv.appendChild(houseDiv);
}

// window.onload = loadJSON;
