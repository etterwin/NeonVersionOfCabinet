$(document).ready(function() {
    $("#open").click(function() {
        $(this).toggleClass('active');
        $('#open').toggleClass("close-btn");
        $('.nav-mobil').toggleClass("show");
    });
});
