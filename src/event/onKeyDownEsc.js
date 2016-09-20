//ESC키 클릭시 
$(document).on("keyup", function(e) {
    if(e.keyCode == 27) {
        clearCursor();
        clearText();

        $(".text").focusout();
    }
});