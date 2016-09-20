function createRect(element) {
    $(".cursorDiv").remove();
    var cursor = $("<div />", {class: "cursorDiv"});
    element.before(cursor);

    cursor.css("width", 0);
    cursor.css("height", 0);
    cursor.css("left", mouseDownInit.x);
    cursor.css("top", mouseDownInit.y);
}