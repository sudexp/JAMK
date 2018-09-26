// function showHint(str) {
//   if (str.length == 0) {
//     document.getElementById('txtHint').innerHTML = '';
//     return;
//   } else {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById('txtHint').innerHTML = this.responseText;
//       }
//     };
//     xmlhttp.open('GET', 'ajax-suggest.php?q=' + str, true);
//     xmlhttp.send();
//   }
// }


// function is called when the body is loaded (onload event)
function loadJSON() {
  ajax('GET', 'ajax-suggest.php', function (response) {
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

function showHint(str) {
  if (str.length == 0) {
    document.getElementById('txtHint').innerHTML = '';
    return;
  } else {
    ajaxMock({ method: 'GET', url: '' }, showList);
  }
}

function showList(response) {
  // clear ul
  clearUl()
  // convert response into array
  var results = processResponse(response)
  // for every el of array create li element and append to ul
  // for(){ 
    addLi(..)
}

// Emulate server response:
function ajaxMock(params, callback) {
  setTimeout(function() {
    callback('Aino	Anna	Anni	Antti	Ari');
  }, 1000);
}

function ajax(method, url, showList) {
  let request;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    request = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    request = new ActiveXObject('Microsoft.XMLHTTP');
  }
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      showList(this.responseText);
    }
  };
  request.open(method, url, true);
  request.send();
}

window.onload = loadJSON;
