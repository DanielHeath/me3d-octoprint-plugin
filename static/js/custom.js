var position = 0;
var max = 400;
var min = 0;

// Button handling 
$(document).ready(function(){
    $("#left").click(function(){
        if (position > min){
            $("#container").animate({left:"+=100vw"});
            position -= 100; 
            $("#left").attr("disabled", true);
            setTimeout(function(){ 
                $("#left").attr("disabled", false);
            }, 500);
            evt.stopPropagation();
            evt.preventDefault(); 
        }
    });
    $("#right").click(function(){
        if (position < max){
            $("#container").animate({left:"-=100vw"});
            position += 100;
            $("#left").attr("disabled", true);
            setTimeout(function(){ 
                $("#left").attr("disabled", false);
            }, 500);
            evt.stopPropagation();
            evt.preventDefault();
        }
    });
    
});

