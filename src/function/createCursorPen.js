function createCursorPen(element, object) {
    $(".cursorDiv").remove();
    var cursor = $("<div />", {class: "cursorDiv"});
    element.before(cursor);

    cursor.css("width", object.width);
    cursor.css("height", object.height);
    cursor.css("left", object.left);
    cursor.css("top", object.top);

    var cursorRelative = $("<div />", {class: "cursorDivRelative"});
    cursor.append(cursorRelative);

    cursorRelative.append($("<span />", {style:"left:-3px; top:-3px;"}));
    cursorRelative.append($("<span />", {style:"right:-3px; top:-3px;"}));
    cursorRelative.append($("<span />", {style:"left:-3px; bottom:-3px;"}));
    cursorRelative.append($("<span />", {style:"right:-3px; bottom:-3px;"}));
}