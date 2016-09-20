$(document).on("contextmenu", ".Page_Title", function(e) {
    e.preventDefault();

    var contextMenu = $("<ul />", {class:"rightClickContextMenu", style:"left:"+(event.pageX - 5)+"px; top:"+(event.pageY - 5)+"px;"});

    contextMenu.append("<li>페이지 복사(오늘)</li>");
    contextMenu.append("<li>일자변경</li>");
    contextMenu.append("<li>시간변경</li>");
    $("body").append(contextMenu);
});