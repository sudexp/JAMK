function dropHandler(event) {
  event.stopPropagation();
  event.preventDefault();

  let files = event.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  let output = [];
  for (let i = 0, f; (f = files[i]); i++) {
    output.push(
      '<li><strong>',
      escape(f.name),
      '</strong> (',
      f.type || 'n/a',
      ') - ',
      f.size,
      ' bytes, last modified: ',
      f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
      '</li>'
    );

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(event) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = [
          '<img class="thumbnail" src="',
          event.target.result,
          '" title="',
          escape(theFile.name),
          '"/>'
        ].join('');
        document.getElementById('drop_zone').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
  document.getElementById('list').innerHTML =
    '<ul>' + output.join('') + '</ul>';
}

function dragOverHandler(event) {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function init() {
  // Setup the dnd listeners.
  let dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', dragOverHandler, false);
  dropZone.addEventListener('drop', dropHandler, false);
}

window.onload = init;
