// var video = document.getElementById("animation");
// aud.addEventListener("ended", function() {
//     alert("The video has ended");
// });

window.onload = function() {
    var video = document.getElementById('animation');
    var skip = document.getElementById('skip_button');
    video.onended = function() {
        video.remove();
        skip.remove();
        document.getElementById('background_intro').style.display = 'block';
    };
};

function next (number) {
    // document.getElementById('instructions').style.display = 'none'
    $('#instruction-' + (number-1)).hide();
    $('#instruction-' + number).show();
}
function start() {
    // document.getElementById('instructions').style.display = 'none'
    $('#background_intro').hide();
    $('#intro').hide();
    init();
}