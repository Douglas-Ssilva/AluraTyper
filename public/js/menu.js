$("#dropdown").mouseenter(function() {    
    $("#menu").stop().slideDown();
});

$("#dropdown").mouseleave(function() {
    $("#menu").stop().slideUp();
});