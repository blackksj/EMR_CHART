$(document).on("mousedown", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Text) {
        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mouseDownInit = mousePointToCanvas(e);

        createRect($(e.target));
    }
});

$(document).on("mousemove", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Text && mouseDownInit.x != null) {
        var pos = mousePointToCanvas(e);

        var x_move_pos = pos.x - mouseDownInit.x;
        var y_move_pos = pos.y - mouseDownInit.y;

        if(x_move_pos > 0) {
            $(e.target).parent().find('.cursorDiv').css('width', x_move_pos);
        } else {
            $(e.target).parent().find('.cursorDiv').css('left', mouseDownInit.x + x_move_pos);
            $(e.target).parent().find('.cursorDiv').css('width', Math.abs(x_move_pos));
        }

        if(y_move_pos > 0) {
            $(e.target).parent().find('.cursorDiv').css('height', y_move_pos);
        } else {
            $(e.target).parent().find('.cursorDiv').css('top', mouseDownInit.y + y_move_pos);
            $(e.target).parent().find('.cursorDiv').css('height', Math.abs(y_move_pos));
        }
    }
});

$(document).on("mouseup", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Text) {
        var w = $(e.target).parent().find('.cursorDiv').css('width');
        var h = $(e.target).parent().find('.cursorDiv').css('height');
        var l = $(e.target).parent().find('.cursorDiv').css('left');
        var t = $(e.target).parent().find('.cursorDiv').css('top');
        
        //ItemKey 생성
        var tempKey = 0;
        $(e.target).parent().find(".ItemContainer .Item").each(function() {
            if(tempKey < parseInt($(this).find("input[name=Key]").val())) tempKey =parseInt($(this).find("input[name=Key]").val());
        });
        tempKey++;

        var text = $('<div/>', {class: 'Item text ItemKey_'+tempKey, style: 'left:'+l+'; top:'+t+'; width:'+w+'; height:'+h+';', tabindex:tempKey, contenteditable: 'true'});
        
        //생성된 Text에 자식 Element속성 생성
        for(var i=0; i<itemProperty.length; i++) {
            text.append($("<input />", {type: "hidden", name: itemProperty[i]}));
        }
        
        //Default 속석값 지정
        text.find("input[name=IsSelectable]").val("true");
        text.find("input[name=Height]").val(text.height());

        $(e.target).parent().find(".ItemContainer").append(text);

        $(e.target).parent().find('.cursorDiv').remove();
        ItemEditMode = e_ItemEditMode_None;
    }
});