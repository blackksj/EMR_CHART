$(document).on("mousedown", ".eventCanvas", function(e) {
    //마우스 오른쪽 클릭 반응 멈춤
    if(e.which == 3) {return;}

    if(ItemEditMode == e_ItemEditMode_Cursor) {
        console.log("test");
    }    
});

$(document).on("mousemove", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Cursor) {
        var pos = mousePointToCanvas(e);
        
        var x_move_pos = pos.x - mouseDownInit.x;
		var y_move_pos = pos.y - mouseDownInit.y;

        if(mouseCursorStyle == 'leftTop') {			
            if(x_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + objectCursorInit.width - 6);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            }

            if(y_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + objectCursorInit.height - 6);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            }
        }

        if(mouseCursorStyle == 'leftCenter') {			 
            if(x_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + objectCursorInit.width - 6);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            }
        }

        if(mouseCursorStyle == 'leftBottom') {			
            if(x_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + x_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left + objectCursorInit.width - 6);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            }

            if(y_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            }
        }

        if(mouseCursorStyle == 'middleTop') {			
            if(y_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + objectCursorInit.height - 6);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            }
        }

        if(mouseCursorStyle == 'rightTop') {			
            if(x_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            }

            if(y_move_pos < 0) {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            } else {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + y_move_pos);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top + objectCursorInit.height - 6);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            }
        }

        if(mouseCursorStyle == 'rightCenter') {			
            if(x_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            }
        }

        if(mouseCursorStyle == 'rightBottom') {			
            if(x_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').width() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width - Math.abs(x_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                    $(e.target).parent().find('.cursorDiv').css('width', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('left', objectCursorInit.left);
                $(e.target).parent().find('.cursorDiv').css('width', objectCursorInit.width + Math.abs(x_move_pos));
            }

            if(y_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            }
        }

        if(mouseCursorStyle == 'middleBottom') {	
            if(y_move_pos < 0) {
                if($(e.target).parent().find('.cursorDiv').height() > 6) {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height - Math.abs(y_move_pos));
                } else {
                    $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                    $(e.target).parent().find('.cursorDiv').css('height', 6);
                }
            } else {
                $(e.target).parent().find('.cursorDiv').css('top', objectCursorInit.top);
                $(e.target).parent().find('.cursorDiv').css('height', objectCursorInit.height + Math.abs(y_move_pos));
            }
        }
    }    
});

$(document).on("mouseup", ".eventCanvas", function(e) {
    //마우스 오른쪽 클릭 반응 멈춤
    if(e.which == 3) {return;}
    
    if(ItemEditMode == e_ItemEditMode_Cursor) {
        selectedLastElement.css('width', $(e.target).parent().find('.cursorDiv').css('width'));
        selectedLastElement.css('height', $(e.target).parent().find('.cursorDiv').css('height'));
        selectedLastElement.css('left', $(e.target).parent().find('.cursorDiv').css('left'));
        selectedLastElement.css('top', $(e.target).parent().find('.cursorDiv').css('top'));
        
        ItemEditMode = e_ItemEditMode_None;
        mouseCursorStyle = null;
    }
});

$(document).on("mouseout", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Cursor) {
        selectedLastElement.css('width', $(e.target).parent().find('.cursorDiv').css('width'));
        selectedLastElement.css('height', $(e.target).parent().find('.cursorDiv').css('height'));
        selectedLastElement.css('left', $(e.target).parent().find('.cursorDiv').css('left'));
        selectedLastElement.css('top', $(e.target).parent().find('.cursorDiv').css('top'));
        
        ItemEditMode = e_ItemEditMode_None;
        mouseCursorStyle = null;
    }
});