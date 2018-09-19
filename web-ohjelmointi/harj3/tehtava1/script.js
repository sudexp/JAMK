function addTask(event) {
  if (event) {
    event.preventDefault();
  }
  const re = /^\w{1,}$/;
  const ul = document.getElementById('list');
  const li = document.createElement('li');
  const task = document.getElementById('task');
  const text = document.createTextNode(task.value);
  if (!re.test(task.value)) {
    return;
  }
  ul.appendChild(li);
  li.appendChild(text);
  task.value = '';
}

function removeList() {
  const list = document.getElementById('list');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
