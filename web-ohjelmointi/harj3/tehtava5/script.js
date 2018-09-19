function addTask() {
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  var task = document.getElementById('task');
  var text = document.createTextNode(task.value);
  ul.appendChild(li);
  li.appendChild(text);
  task.value = '';
}

function removeList() {
  var list = document.getElementById('list');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
