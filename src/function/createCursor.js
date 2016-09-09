function createCursor(element) {
    $(".cursorDiv").remove();
    var cursor = $("<div />", {class: "cursorDiv"});
    element.before(cursor);

    cursor.css("width", selectedElementInit.width);
    cursor.css("height", selectedElementInit.height);
    cursor.css("left", selectedElementInit.left);
    cursor.css("top", selectedElementInit.top);

    var cursorRelative = $("<div />", {class: "cursorDivRelative"});
    cursor.append(cursorRelative);

    cursorRelative.append($("<span />", {style:"left:-3px; top:-3px;"}));
    cursorRelative.append($("<span />", {style:"right:-3px; top:-3px;"}));
    cursorRelative.append($("<span />", {style:"left:-3px; bottom:-3px;"}));
    cursorRelative.append($("<span />", {style:"right:-3px; bottom:-3px;"}));
} 