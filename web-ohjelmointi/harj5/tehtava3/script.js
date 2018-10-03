$(document).ready(function() {
  [1, 2, 3, 4, 5].forEach(i => {
    $(`#h${i}`).click(function() {
      $(`#p${i}`).slideToggle('slow');
    });
  });
});
