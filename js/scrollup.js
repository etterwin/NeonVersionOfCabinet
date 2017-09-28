$(function () { // run this code on page load (AKA DOM load)

    var scroll_timer;
    var displayed = false;
    var $message = $('#scrollToTop');
    var $window = $(window);
    var top = $(document.body).children(0).position().top;

    $window.scroll(function () {
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function () {
            if($window.scrollTop() <= top)
            {
                displayed = false;
                $message.fadeOut(600);
            }
            else if(displayed == false)
            {
                displayed = true;
                $message.stop(true, true).fadeIn(600).click(function () { $message.fadeOut(600); });
            }
        }, 100);
    });
    $('.scrollup[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});