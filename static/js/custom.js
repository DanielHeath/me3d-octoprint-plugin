
function gotoSlide(id) {
    if (!id) {
        return;
    }
    if (id[0] == "#") {
        id = id.slice(1, id.length)
    }

    if (!document.getElementById(id)) {
        return; // not found!
    }

    location.hash = id
    $(".current-page").removeClass("current-page")
    document.getElementById(id).classList.add("current-page");
}

window.onhashchange = function() {
    gotoSlide(location.hash)
};

$(document).ready(function(){
    window.onhashchange()

    // Button handling
    $("#left").click(function(){
        gotoSlide($(".current-page").prev().attr('id'))
    });
    $("#right").click(function(){
        gotoSlide($(".current-page").next().attr('id'))
    });
});

