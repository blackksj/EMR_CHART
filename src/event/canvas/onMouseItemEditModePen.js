var eventContext = null;
var mouse = {x: 0, y: 0};
var last_mouse = {x: 0, y: 0};
var penRect = {};

var onPaint = function() {
    eventContext.beginPath();
    eventContext.moveTo(last_mouse.x, last_mouse.y);
    eventContext.lineTo(mouse.x, mouse.y);
    eventContext.closePath();
    eventContext.stroke();
}

$(document).on("mousedown", ".eventCanvas", function(e) {
    if(ItemEditMode == e_ItemEditMode_Pen) {
        //mouseDownInit 객체 선택시의 초기 상태를 기억
        var pos = mouseDownInit = mousePointToCanvas(e);

        eventContext = $(e.target)[0].getContext("2d");
        eventContext.lineWidht = 1;
        eventContext.strokeStyle = "#000";


    }
});