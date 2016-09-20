$(document).on("keydown", function(e) {
    //e.keyCode == 8 - Backspace
    //e.keyCode == 46 - Delete
    if(e.keyCode == 46 || e.keyCode == 8) {

    }

    if(e.keyCode == 46) {
        if(focusElement) {

        }  else {
            //포커스가 있을때는 삭제가 되지 않아아햠
            //selectedLastElement.remove();
            //clearCursor();
        }
    }
});

$(document).on("keyup", function(e) {
    //e.keyCode == 8 - Backspace
    //e.keyCode == 46 - Delete
    if(e.keyCode == 46 || e.keyCode == 8) {
        //크롬에서 Backspace, Delete키 클릭시 자식 Element 삭제되는 현상에 대응 
        if(focusElement.find("input[type=hidden]").length == 0) {
            for(var i=0; i<tempFucusElementChildElement.length; i++) {
                focusElement.prepend(tempFucusElementChildElement[i]);
            }
        }
    }
});