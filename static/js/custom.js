var position = 0;
var max = 400;
var min = 0;

$(document).ready(function(){
    $("#left").click(function(){
        if (position > min){
            $("#container").animate({left:"+=100vw"});
            position -= 100;
        }
    });
    $("#right").click(function(){
        if (position < max){
            $("#container").animate({left:"-=100vw"});
            position += 100;
        }
    });


});

causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});