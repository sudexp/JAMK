$(document).ready(function() {
  showHints();
  $('form').on('submit', ev => {
    ev.preventDefault();
  });
});

function showHints() {
  $('#name').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: 'ajax-suggest.php',
        data: {
          q: request.term
        },
        success: function(data) {
          const suggestions = data.split('\t');
          response(suggestions);
        }
      });
    }
  });
}

function showName() {
  const name = $('#name').val();
  alert(name);
}
