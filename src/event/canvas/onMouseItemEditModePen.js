var eventContext = null;
var mouse = {x: 0, y: 0};
var last_mouse = {x: 0, y: 0};
var penTempRect = {};
var penRect = {};
var flagPenDrawing = false;

var onPaint = function() {
    eventContext.beginPath();
    eventContext.moveTo(last_mouse.x, last_mouse.y);
    eventContext.lineTo(mouse.x, mouse.y);
    eventContext.closePath();
    eventContext.stroke();
}

$(document).on("mousedown", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Pen) {
        $(e.target).on('mousemove', onPaint);

        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mouseDownInit = mousePointToCanvas(e);

        eventContext = $(e.target)[0].getContext("2d");
        eventContext.lineWidth = 0.5;
        eventContext.strokeStyle = '#000';

        penRect.left = pos.x;
        penRect.top = pos.y;
        penRect.width = 0;
        penRect.height = 0;

        penTempRect.rangeLeft = 0;
        penTempRect.rangeRight = 0;
        penTempRect.rangeTop = 0;
        penTempRect.rangeBottom = 0;

        flagPenDrawing = true;
    }
});

$(document).on("mousemove", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Pen) {
        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mousePointToCanvas(e);

        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = pos.x;
        mouse.y = pos.y;

        //빠르게 드로잉시 약간 밀리는 현상 있어 flag를 넣어봤는데 그래도 밀리내?
        if(flagPenDrawing) {
            if (mouseDownInit.x - pos.x > 0 && mouseDownInit.x - pos.x > penTempRect.rangeLeft) penTempRect.rangeLeft = mouseDownInit.x - pos.x;
            if (mouseDownInit.x - pos.x < 0 && mouseDownInit.x - pos.x < penTempRect.rangeRight) penTempRect.rangeRight = mouseDownInit.x - pos.x;

            if (mouseDownInit.y - pos.y > 0 && mouseDownInit.y - pos.y > penTempRect.rangeTop) penTempRect.rangeTop = mouseDownInit.y - pos.y;
            if (mouseDownInit.y - pos.y < 0 && mouseDownInit.y - pos.y < penTempRect.rangeBottom) penTempRect.rangeBottom = mouseDownInit.y - pos.y;

            if (pos.x < penRect.left) penRect.left = pos.x;
            if (pos.y < penRect.top) penRect.top = pos.y;
        }
    }
});

$(document).on("mouseup mouseout", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Pen) {
        $(e.target).off('mousemove', onPaint);

        flagPenDrawing = false;

        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mousePointToCanvas(e);

        penRect.width = Math.abs(penTempRect.rangeLeft) + Math.abs(penTempRect.rangeRight);
        penRect.height = Math.abs(penTempRect.rangeTop) + Math.abs(penTempRect.rangeBottom);

        penRect.width += 1;
        penRect.height += 1;

        var eventCanvas = $(e.target);
        var eventContext = eventCanvas[0].getContext("2d");

        createCursorPen($(this), penRect);

        //canvas로 생성하는게 나을까 image로 생성하는게 나을까?
        var tempPenCanvas = $("<canvas />", {class: "Item", style: 'width:'+penRect.width+'px; height:'+penRect.height+'px; left:'+penRect.left+'px; top:'+penRect.top+'px;'});
        tempPenCanvas.attr("width", penRect.width);
        tempPenCanvas.attr("height", penRect.height);

        for(var i=0; i<itemProperty.length; i++) {
            tempPenCanvas.append($("<input />", {type: "hidden", name: itemProperty[i]}));
        }

        //Default 속석값 지정
        tempPenCanvas.find("input[name=IsSelectable]").val("true");
        tempPenCanvas.find("input[name=Height]").val(tempPenCanvas.height());

        var tempPenContext = tempPenCanvas[0].getContext("2d");

        eventCanvas.parent().find(".ItemContainer").append(tempPenCanvas);

        var image = new Image();
        image.src = (eventCanvas[0]).toDataURL();
        image.onload = function() {
            tempPenContext.drawImage(image, penRect.left, penRect.top, penRect.width, penRect.height, 0, 0, tempPenCanvas[0].width, tempPenCanvas[0].height);
            eventContext.clearRect(0, 0, eventCanvas[0].width, eventCanvas[0].height);

            ItemEditMode = e_ItemEditMode_None;
        }
    }
});