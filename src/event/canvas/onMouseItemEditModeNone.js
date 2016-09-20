//객체를 선택하고 이동
$(document).on("mousedown", ".eventCanvas", function(e) {
    //마우스 오른쪽 클릭 반응 멈춤
    if(e.which == 3) {return;}

    //커서가 존재하는 상태에서 커서와 마우스와의 관계 체크
    if($(e.target).parent().find('.cursorDiv').length) {
        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mouseDownInit = mousePointToCanvas(e);

        var w = objectCursorInit.width = $(e.target).parent().find('.cursorDiv').width();
        var h = objectCursorInit.height = $(e.target).parent().find('.cursorDiv').height();
        var l = objectCursorInit.left = $(e.target).parent().find('.cursorDiv').position().left;
        var t = objectCursorInit.top = $(e.target).parent().find('.cursorDiv').position().top;

        //마우스의 위치가 커서와 일치하는지 확인
        if (pos.y > t - 3 && pos.y < t + h + 3 && pos.x > l - 3 && pos.x < l + w + 3) {
            if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l - 3 && pos.x < l + 3) {//left-top
                mouseCursorStyle = 'leftTop'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l - 3 && pos.x < l + 3) {//left-bottom
                mouseCursorStyle = 'leftBottom'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t + 3 && pos.y < t + h - 3 && pos.x > l - 3 && pos.x < l + 3) {//left-center
                mouseCursorStyle = 'leftCenter'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l + 3 && pos.x < l + w - 3) {//middle-top
                mouseCursorStyle = 'middleTop'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-top
                mouseCursorStyle = 'rightTop'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-bottom
                mouseCursorStyle = 'rightBottom'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t + 3 && pos.y < t + h - 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-center
                mouseCursorStyle = 'rightCenter'; ItemEditMode = e_ItemEditMode_Cursor;
            }
            if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l + 3 && pos.x < l + w - 3) {//middle-bottom
                mouseCursorStyle = 'middleBottom'; ItemEditMode = e_ItemEditMode_Cursor;
            }
        } else {
            mouseCursorStyle = null;
        }
    }

    if(ItemEditMode != e_ItemEditMode_Cursor) {
        clearCursor();
        clearText();
    }

    if(ItemEditMode == e_ItemEditMode_None) {
        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mouseDownInit = mousePointToCanvas(e);

        //마우스 클릭시 해당 영역에 위치한 객체선택
        //.get().reverse() 반대로
        $($(this).parent().find(".Item").get().reverse()).each(function() {
            if(selectedElement == null) {
                if (pos.y > $(this).position().top
                    && pos.y < $(this).position().top + $(this).height()
                    && pos.x > $(this).position().left && pos.x < $(this).position().left + $(this).width()) {

                    if($(this).find("input[name=IsSelectable]").val() == "true") {

                        selectedLastElement = selectedElement = $(this);

                        selectedElementInit.width = $(this).width();
                        selectedElementInit.height = $(this).height();
                        selectedElementInit.left = $(this).position().left;
                        selectedElementInit.top = $(this).position().top;

                        //선택한 객체 상위로 이동
                        $(e.target).parent().find('.ItemContainer').append(selectedElement);
                    } else {
                        if($(this).attr("contenteditable") == "true") {
                            focusElement = $(this);
                            //크롬에서 contenteditable 속성 true인 경우에 Backspace, Delete로 글씨 삭제시 내부 input=hidden Element들이 삭제되는 현상 발생하여 임시로 Element저장
                            tempFucusElementChildElement = [];
                            focusElement.find("input[type=hidden]").each(function() {
                                tempFucusElementChildElement.push($(this));
                            });
                        }
                    }
                }
            }
        });

        if(focusElement) {
            if(focusElement.hasClass('text')) {
                focusElement.focus();
                focusElement.css('z-index', 999999);
            }
        }

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

        if(selectedElement == null) {
            if($(e.target).parent().find('.cursorDiv').length) {
                var w = $(e.target).parent().find('.cursorDiv').width();
                var h = $(e.target).parent().find('.cursorDiv').height();
                var l = $(e.target).parent().find('.cursorDiv').position().left;
                var t = $(e.target).parent().find('.cursorDiv').position().top;

                //커서가 선택되어 있는 상태에서의 마우스 커서 위치에 따른 커서모양 변경
                if (pos.y > t - 3 && pos.y < t + h + 3 && pos.x > l - 3 && pos.x < l + w + 3) {
                    $(".eventCanvas").css("cursor", "default");

                    if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l - 3 && pos.x < l + 3) {//left-top
                        $(".eventCanvas").css("cursor", "nw-resize"); //leftTop
                    }
                    if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l - 3 && pos.x < l + 3) {//left-bottom
                        $(".eventCanvas").css("cursor", "sw-resize"); //leftBottom
                    }
                    if(pos.y > t + 3 && pos.y < t + h - 3 && pos.x > l - 3 && pos.x < l + 3) {//left-center
                        $(".eventCanvas").css("cursor", "w-resize"); //leftCenter
                    }
                    if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l + 3 && pos.x < l + w - 3) {//middle-top
                        $(".eventCanvas").css("cursor", "n-resize"); //middleTop
                    }
                    if(pos.y > t - 3 && pos.y < t + 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-top
                        $(".eventCanvas").css("cursor", "ne-resize"); //rightTop
                    }
                    if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-bottom
                        $(".eventCanvas").css("cursor", "se-resize"); //rightBottom
                    }
                    if(pos.y > t + 3 && pos.y < t + h - 3 && pos.x > l + w - 3 && pos.x < l + w + 3) {//right-center
                        $(".eventCanvas").css("cursor", "e-resize"); //rightCenter
                    }
                    if(pos.y > t + h - 3 && pos.y < t + h + 3 && pos.x > l + 3 && pos.x < l + w - 3) {//middle-bottom
                        $(".eventCanvas").css("cursor", "s-resize"); //middleBottom
                    }
                } else {
                    $(".eventCanvas").css("cursor", "default");
                }
            }
        } else {
            //선택된 객체가 있을 경우에는 객체 이동이나 크기를 변경
            var x_move_pos = pos.x - mouseDownInit.x + selectedElementInit.left;
            var y_move_pos = pos.y - mouseDownInit.y + selectedElementInit.top;

            $(".cursorDiv").css('left', x_move_pos);
            $(".cursorDiv").css('top', y_move_pos);
        }
    }
});

$(document).on("mouseup", ".eventCanvas", function(e) {
    //마우스 오른쪽 클릭 반응 멈춤
    if(e.which == 3) {return;}

    if(ItemEditMode == e_ItemEditMode_None) {

        if(selectedElement) {
            selectedElement.css("left", $(".cursorDiv").css("left"));
            selectedElement.css("top", $(".cursorDiv").css("top"));
        }

        clearMouseSelect();
    }
});

$(document).on("mouseout", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {

        if(selectedElement) {
            selectedElement.css("left", $(".cursorDiv").css("left"));
            selectedElement.css("top", $(".cursorDiv").css("top"));
        }

        clearMouseSelect();
    }
});

//Text서식 수정을 위해 div영역에서 더블클릭시 해당 div에 포커스를 위치시킴
$(document).on("dblclick", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_None) {
        var pos = mousePointToCanvas(e);

        $($(this).parent().find(".Item").get().reverse()).each(function() {
            if(focusElement == null) {
                if($(this).attr("contenteditable") != "true") return;

                if (pos.y > $(this).position().top
                    && pos.y < $(this).position().top + $(this).height()
                    && pos.x > $(this).position().left && pos.x < $(this).position().left + $(this).width()) {

                    focusElement = $(this);
                    //크롬에서 contenteditable 속성 true인 경우에 Backspace, Delete로 글씨 삭제시 내부 input=hidden Element들이 삭제되는 현상 발생하여 임시로 Element저장
                    tempFucusElementChildElement = [];
                    focusElement.find("input[type=hidden]").each(function() {
                        tempFucusElementChildElement.push($(this));
                    });
                }
            }
        });

        if(focusElement) {
            if(focusElement.hasClass('text')) {
                focusElement.focus();
                focusElement.css('z-index', 999999);
            }
        }
    }
});