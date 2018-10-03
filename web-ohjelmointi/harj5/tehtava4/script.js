$(document).ready(function() {
  loadData(showHouses);
});

function loadData(callback) {
  $.ajax({
    url: 'houses.json',
    cache: false,
    error: function(xhr) {
      alert('An error occured: ' + xhr.status + ' ' + xhr.statusText);
    }
  }).done(callback);
}

function showHouses(data) {
  $.each(data.houses, function(index, value) {
    var div = $(`<div class="houseContainer"></div>`);
    var img = $(`<img class="houseImage" src="${value.image}">`);
    var header = $(`<p class="header">${value.address}</p>`);
    var size = $(`<p>${value.type}</p>`);
    var text = $(`<p class="description">${value.description}</p>`);
    var price = $(`<p class="price">${value.price}</p>`);
    div.append(img, header, size, text, price);
    $('#houses').append(div);
  });
}
