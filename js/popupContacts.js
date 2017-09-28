$(document).ready(function() {
    $('.popup-btn').click(function(e) {
        $('.popup-wrap').fadeIn(100);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-close').click(function(e) {
        $('.popup-wrap').fadeOut(100);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
});