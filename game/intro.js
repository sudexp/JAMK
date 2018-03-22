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