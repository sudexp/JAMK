function addTask() {
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.addEventListener('click', removeLi, false);
  let task = document.getElementById('task');
  let text = document.createTextNode(task.value);
  ul.appendChild(li);
  li.appendChild(text);
  task.value = '';
}

function removeList() {
  let list = document.getElementById('list');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function removeLi(event) {
  event.target.remove();
}
