$(document).ready(function () {
    // when the mouse enters the img 
    $(".main_img").mouseenter(function () {
        // add this classes
        $(".over_img").addClass("black_color animated infinte bounce");
         $("#main_img").addClass("overlay");
    });
    // when the mouse leaves the img 
    $(".main_img").mouseleave(function () {
        // remove this classes
        $(".over_img").removeClass("black_color animated infinte bounce");
        $("#main_img").removeClass("overlay");
    });
    //   on hover over any card 
    $(".card").hover(function () {
        // toggle animation classes 
        $(this).toggleClass("animated infinte tada");
    });
});