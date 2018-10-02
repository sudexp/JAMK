$(document).ready(function() {
  $('#add').click(function() {
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
  });
});

$(document).on('click', '.delete', function() {
  $(this)
    .parent()
    .remove();
  $('#task').focus();
});

// function removeLi(event) {
//   event.target.remove();
// }

$(document).ready(function() {
  $('#delete').click(function() {
    $('#list').empty();
    $('#task')
      .val('')
      .focus();
  });
});

// function removeList() {
//   let list = document.getElementById('list');
//   while (list.hasChildNodes()) {
//     list.removeChild(list.firstChild);
//     // list.firstChild.remove();
//   }
// }
