//객체를 선택하고 이동
$(document).on("mousedown", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {
        var pos = mouseDownInit= mousePointToCanvas(e);
        
        //마우스 클릭시 해당 영역에 위치한 객체선택
        //.get().reverse() 반대로
        $($(this).parent().find(".Item").get().reverse()).each(function() {
            if(selectedElement == null) {
                if (pos.y > $(this).position().top
                    && pos.y < $(this).position().top + $(this).height()
                    && pos.x > $(this).position().left && pos.x < $(this).position().left + $(this).width()) {

                    selectedLastElement = selectedElement = $(this);

                    selectedElementInit.width = $(this).width();
                    selectedElementInit.height = $(this).height();
                    selectedElementInit.left = $(this).position().left;
                    selectedElementInit.top = $(this).position().top;

                    $(e.target).parent().find('.ItemContainer').append(selectedElement);			
                }
            }
        });
        
        if(selectedElement) {
            createCursor($(this));
        } else {
            clearCursor();
        }
    }    
});

$(document).on("mousemove", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {
        var pos = mousePointToCanvas(e);
                                
        if(selectedElement != null) {
            //선택된 객체가 있을 경우에는 객체 이동이나 크기를 변경
            var x_move_pos = pos.x - mouseDownInit.x + selectedElementInit.left;
            var y_move_pos = pos.y - mouseDownInit.y + selectedElementInit.top;

            $(".cursorDiv").css('left', x_move_pos);
            $(".cursorDiv").css('top', y_move_pos);

            //selectedElement.css('left', x_move_pos);
            //selectedElement.css('top', y_move_pos);

            //$(e.target).parent().find('.cursorDiv').css('left', x_move_pos);
            //$(e.target).parent().find('.cursorDiv').css('top', y_move_pos);				
        }
    }
});

$(document).on("mouseup", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {

        selectedElement.css("left", $(".cursorDiv").css("left"));
        selectedElement.css("top", $(".cursorDiv").css("top"));

        clearMouseSelect();
    }
});

$(document).on("mouseout", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {

        selectedElement.css("left", $(".cursorDiv").css("left"));
        selectedElement.css("top", $(".cursorDiv").css("top"));

        clearMouseSelect();
    }
});