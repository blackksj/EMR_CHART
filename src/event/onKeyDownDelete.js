//Delete키 클릭시 
$(document).on("keydown", function(e) {
    if(e.keyCode == 46) {
        if($('.cursorDiv').length) {
            selectedLastElement.remove();
            clearCursor();
        } 
    }
});