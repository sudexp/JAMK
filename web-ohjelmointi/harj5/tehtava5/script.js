$(document).ready(function() {
  $('#name').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: 'ajax-suggest.php',
        data: {
          q: request.term
        },
        success: function(data) {
          var suggestions = data.split('\t');
          response(suggestions);
        }
      });
    }
  });
});
