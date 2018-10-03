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
    const div = $(`<div class="houseContainer"></div>`);
    const img = $(`<img class="houseImage" src="${value.image}">`);
    const header = $(`<p class="header">${value.address}</p>`);
    const size = $(`<p>${value.type}</p>`);
    const text = $(`<p class="description">${value.description}</p>`);
    const price = $(`<p class="price">${value.price}</p>`);
    div.append(img, header, size, text, price);
    $('#houses').append(div);
  });
}
