//Delete키 클릭시 
$(document).on("keydown", function(e) {
    if(e.keyCode == 46) {
        if($('.cursorDiv').length) {
            
            console.log($(":focus").length);

            //포커스가 있을때는 삭제가 되지 않아아햠
            //selectedLastElement.remove();
            //clearCursor();
        } 
    }
});