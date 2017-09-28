var headers = ["H1"];

$(".school-accordion").click(function(e) {
    var target = e.target,
        name = target.nodeName.toUpperCase();

    if($.inArray(name,headers) > -1) {
        var subItem = $(target).next();

        //slideUp all elements (except target) at current depth or greater
        var depth = $(subItem).parents().length;
        var allAtDepth = $(".school-accordion .school-accordion__container").filter(function() {
            if($(this).parents().length >= depth && this !== subItem.get(0)) {
                return true;
            }
        });
        $(allAtDepth).slideUp("fast");

        //slideToggle target content and adjust bottom border if necessary
        subItem.slideToggle("fast",function() {
            $(".school-accordion :visible:last");
        });
        $(target).css({"background":"#F9A0B8", "color":"white"});
    }
});