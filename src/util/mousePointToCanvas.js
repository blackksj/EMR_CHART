//마우스 이벤트 발생시 document기준의 포인트 위치를 canvas기준의 위치로 변환
function mousePointToCanvas(event) {
    var x_pos = event.pageX - $(event.target).offset().left;
	var y_pos = event.pageY - $(event.target).offset().top;

    return {"x":x_pos, "y":y_pos};
}