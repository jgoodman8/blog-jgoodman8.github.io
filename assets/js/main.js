jQuery(document).ready(function ($) {
    var open = false;

    $('svg#toggle-btn').click(function () {
        if (!open) {
            $('#nav-items-mobile').addClass("open");
            open = true;
        } else {
            $('#nav-items-mobile').removeClass("open");
            open = false;
        }
    });

    $(window).resize(function () {
        if (open) {
            $('#nav-items-mobile').removeClass("open");
            open = false;
        }
    });
});
