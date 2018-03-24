// var video = document.getElementById("animation");
// aud.addEventListener("ended", function() {
//     alert("The video has ended");
// });

window.onload = function() {
    var video = document.getElementById('animation');
    var skip = document.getElementById('skip_button');
    var wrap = document.getElementById('wrap');

    skip.addEventListener('click', function () {
        video.onended();
    }, false);
    video.onended = function() {
        wrap.remove();
        document.getElementById('background_intro').style.display = 'block';
    };
};

function back(number) {
    $('#instruction-' + (number+1)).hide();
    $('#instruction-' + number).show();
}

function next(number) {
    $('#instruction-' + (number-1)).hide();
    $('#instruction-' + number).show();
}

function start() {
    $('#background_intro').hide();
    $('#intro').hide();
    init();
}