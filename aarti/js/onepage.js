jQuery(document).ready(function(){
    jQuery('.about').hide();
    jQuery('.navbar-nav .propClone').click(function(){
        var showthis = jQuery(this).attr('rel');
        jQuery('.about').hide();
        jQuery('.'+showthis).show();
        jQuery('.navbar-toggle').click();
        // jQuery('#page-head').click();
        jQuery('.page-alt').hide();
        jQuery('html, body').animate({
                                scrollTop: jQuery('#page-head').offset().top - jQuery('#header').height() - 40
                            }, 800);
     });

    jQuery('.contact2-right-tip a').click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
