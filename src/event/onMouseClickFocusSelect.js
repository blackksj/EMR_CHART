$(document).on("mousedown", ".text", function(e) {
    if($(this).css("z-index") == "999999") {
        //textArea에 포커스가 있을경우 다른 object가 선택되었는지 체크하여 다른 object가 있을경우 해당 object로 selection되도록 수정
        var pos = {};
        pos.x = mouseDownInit.x = e.pageX - $(e.target).closest(".Panel").find(".eventCanvas").offset().left;
        pos.y = mouseDownInit.y = e.pageY - $(e.target).closest(".Panel").find(".eventCanvas").offset().top;

        $($(this).closest(".Panel").find(".Item").get().reverse()).each(function() {
            if(selectedElement == null) {
                if (pos.y > $(this).position().top
                    && pos.y < $(this).position().top + $(this).height()
                    && pos.x > $(this).position().left
                    && pos.x < $(this).position().left + $(this).width()) {

                    if($(this).css("z-index") != "999999") {
                        if($(this).find("input[name=IsSelectable]").val() == "true") {
                            selectedLastElement = selectedElement = $(this);

                            selectedElementInit.width = $(this).width();
                            selectedElementInit.height = $(this).height();
                            selectedElementInit.left = $(this).position().left;
                            selectedElementInit.top = $(this).position().top;

                            //선택한 객체 상위로 이동
                            $(e.target).parent().find('.ItemContainer').append(selectedElement);
                        }
                    }
                }
            }
        });

        if(selectedElement) {
            createCursor(selectedElement);
            clearText();
        } else {
            clearCursor();
        }
    }
});