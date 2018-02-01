//Text of those video form=======
var $title = ["2D Animation", "3D Animation", "Whiteboard"];
var $day = ["7", "8", "9"];
var $minute = ["0 - 1 minute", "0 - 2 minute", "0 - 3 minute"];
var $price = ["50000", "60000", "70000"];






$(document).ready(function () {

    // SlickNavMobileMenu
    $(".main-menu ul#main-menu").slicknav({
        allowParentLinks: true,
        prependTo: '.sgs-responsive-menu',
        label: ''
    });


});

jQuery(function () {
    jQuery("a.play").YouTubePopUp({
        autoplay: 1
    }); // Disable autoplay
});

$(document).ready(function () {
    $(".input").focus(function () {
        $(this).parent().addClass("focus")
    });
    $(".input").blur(function () {
        tmpval = $(this).val();
        if (tmpval == '') {
            $(this).parent().removeClass("focus")
        }
    });
});
$(document).ready(function () {
    $(".submit").hover(function () {
        $(this).parent().toggleClass("focus")
    });
});

$(document).ready(function () {
    $(".select-type").hover(function () {
        $(this).toggleClass("focus")
    });
});


//Active button of the title================

$('.type-button-link-1').click(function () {
    $(this).addClass("current");
    $('.type-button-link-2').removeClass("current");
    $('.type-button-link-3').removeClass("current");
});

$('.type-button-link-2').click(function () {
    $(this).addClass("current");
    $('.type-button-link-1').removeClass("current");
    $('.type-button-link-3').removeClass("current");
});

$('.type-button-link-3').click(function () {
    $(this).addClass("current");
    $('.type-button-link-1').removeClass("current");
    $('.type-button-link-2').removeClass("current");
});
//Change the dropdown value===========

$(".type-button-link-1").click(function () {
    $('.video-select-type').addClass("active-1")
    $('.video-select-type').removeClass("active-2")
    $('.test').removeClass("active-3")
    $('.active-1').val("the_title_value1");
});
$(".type-button-link-2").click(function () {
    $('.video-select-type').removeClass("active-1")
    $('.video-select-type').addClass("active-2")
    $('.test').removeClass("active-3")
    $('.active-2').val("the_title_value2");
});
$(".type-button-link-3").click(function () {
    $('.video-select-type').removeClass("active-1")
    $('.video-select-type').removeClass("active-2")
    $('.video-select-type').addClass("active-3")
    $('.active-3').val("the_title_value3");
});





//change the text by use dropdown =================



$('select').on('change', function () {
    var value = $(this).find(':selected').text();
    if (value == '2D Animation') {
        $('.type-button-link-1').addClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').removeClass("current");
        $(".detailes-video h3").text($title[0]);
        $(".detailes-video .day").text($day[0]);
        $(".detailes-video .minute").text($minute[0]);
        $(".detailes-video .price").text($price[0]);
    } else if (value == '3D Animation') {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').addClass("current");
        $('.type-button-link-3').removeClass("current");
        $(".detailes-video h3").text($title[1]);
        $(".detailes-video .day").text($day[1]);
        $(".detailes-video .minute").text($minute[1]);
        $(".detailes-video .price").text($price[1]);
    } else if (value == 'Whiteboard') {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').addClass("current");
        $(".detailes-video h3").text($title[2]);
        $(".detailes-video .day").text($day[2]);
        $(".detailes-video .minute").text($minute[2]);
        $(".detailes-video .price").text($price[2]);
    }
});








//Text change of price and time==================
$(".detailes-video h3").text($title[0]);
$(".detailes-video .day").text($day[0]);
$(".detailes-video .minute").text($minute[0]);
$(".detailes-video .price").text($price[0]);

$(".type-button-link-1").click(function () {
    $(".detailes-video h3").text($title[0]);
    $(".detailes-video .day").text($day[0]);
    $(".detailes-video .minute").text($minute[0]);
    $(".detailes-video .price").text($price[0]);
});

$(".type-button-link-2").click(function () {
    $(".detailes-video h3").text($title[1]);
    $(".detailes-video .day").text($day[1]);
    $(".detailes-video .minute").text($minute[1]);
    $(".detailes-video .price").text($price[1]);
});

$(".type-button-link-3").click(function () {
    $(".detailes-video h3").text($title[2]);
    $(".detailes-video .day").text($day[2]);
    $(".detailes-video .minute").text($minute[2]);
    $(".detailes-video .price").text($price[2]);
});
