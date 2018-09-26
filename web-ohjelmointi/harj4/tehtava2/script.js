function ajax(method, url, callback) {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
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

function showHint(str) {
  if (str.length == 0) {
    document.getElementById('txtHint').innerHTML = '';
    return;
  } else {
    const url = 'ajax-suggest.php?q=' + str;
    // ajax('GET', url, showList);
    ajaxMock('GET', url, showList);
  }
}

// Emulate server response:
function ajaxMock(method, url, callback) {
  setTimeout(function() {
    callback('Aino	Anna	Anni	Antti	Ari');
  }, 1000);
}

function showList(response) {
  // clear ul
  let ul = document.getElementById('txtHint');
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  const response = this.responseText;
  const arr = response.split('	');
  let i;
  let len = arr.length;
  for (i = 0; i < len; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(arr[i]);
    ul.appendChild(li);
    li.appendChild(text);
    //li.innerHTML = arr[i];
  }
}
