$(document).ready(function() {
  showHints();
  $('form').on('submit', ev => {
    ev.preventDefault();
  });
});

let suggestions;

function showHints() {
  $('#name').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: 'ajax-suggest.php',
        data: {
          q: request.term
        },
        success: function(data) {
          suggestions = data.split('\t');
          response(suggestions);
        }
      });
    }
  });
}

function showName() {
  const name = $('#name').val();
  alert(name);
  alert(suggestions.join(', '));
}
