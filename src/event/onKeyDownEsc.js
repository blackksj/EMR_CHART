//ESC키 클릭시 
$(document).on("keydown", function(e) {
    if(e.keyCode == 27) {
        clearCursor();
        clearText();
    }
});