$(document).ready(function() {

  if("ontouchstart" in window
   || (navigator.maxTouchPoints > 0)
   || (navigator.msMaxTouchPoints > 0)){
        document.documentElement.className += " touch";
}

$(".touch .touchdropdown").on('mouseenter', function(e){
    $(this).data("touch", 0);
});
$(".touch .touchdropdown").on('click', function(e){
    $(this).data("touch", $(this).data("touch") + 1);
    if($(this).data("touch") < 2){
        return false;
    }
});
$("html").on('click', function(e){
    $(".touch .touchdropdown").data("touch", 0);
});

// menu events
$(".touchdropdown").on('mouseenter', function(e){
    openMenu($(this));
});
$(".touchdropdown").on('mouseleave', function(e){
    closeMenu($(this));
});
$(".touchdropdown").on('click', function(e){
    // prevent html click event that closes menu
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
});
$("html").on('click', function(e){
    // close menu when clicking outside
    closeMenu($(".touchdropdown"));
});

function openMenu(path){
    // replace and add custom behaviour
    path.find("ul").css("display", "block");
}
function closeMenu(path){
    // replace and add custom behaviour
    path.find("ul").css("display", "none");
}


    //ALL CODE GOES IN HERE
});
