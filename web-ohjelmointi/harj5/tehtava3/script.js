$(document).ready(function() {
  $('#h1').click(function() {
    $('#p1').slideToggle('slow');
  });
  $('#h2').click(function() {
    $('#p2').slideToggle('slow');
  });
  $('#h3').click(function() {
    $('#p3').slideToggle('slow');
  });
  $('#h4').click(function() {
    $('#p4').slideToggle('slow');
  });
  $('#h5').click(function() {
    $('#p5').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('#flip').click(function() {
    $('#panel').slideToggle('slow');
  });
});

// function jqToggle(number) {
//   $('#h' + number).click(function() {
//     $('#p' + number).slideToggle('slow');
//   });
// }
