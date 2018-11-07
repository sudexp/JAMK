$(document).ready(function() {
  $('#add').click(addTask);
  $('#delete').click(removeList);
  $(document).on('click', '.delete', removeTask);
  $('form').on('submit', event => {
    event.preventDefault();
    addTask();
  });
});

function addTask() {
  const task = $('#task').val();
  const re = /^\w{1,}$/;
  if (!re.test(task)) {
    return;
  }
  $('#list').append(
    $('<li>' + task + '<span class="delete"> &times</span></li>')
  );
  $('#task')
    .val('')
    .focus();
}

function removeTask() {
  $(this)
    .parent()
    .remove();
  $('#task').focus();
}

function removeList() {
  $('#list').empty();
  $('#task')
    .val('')
    .focus();
}
