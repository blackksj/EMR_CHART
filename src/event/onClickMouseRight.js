$(document).on("contextmenu", ".eventCanvas", function(e) {
    e.preventDefault();

    selectedContextElement = null;
    var pos = mousePointToCanvas(e);

    $($(this).parent().find(".Item").get().reverse()).each(function() {
        if(selectedContextElement == null) {
            if (pos.y > $(this).position().top
                && pos.y < $(this).position().top + $(this).height()
                && pos.x > $(this).position().left && pos.x < $(this).position().left + $(this).width()) {

                selectedContextElement = $(this);

                if(selectedContextElement.find("input[name=ClickRight]").val()) {
                    var clickRight = selectedContextElement.find("input[name=ClickRight]").val();

                    var arrClickRight = clickRight.split("|^@@^|");
                    var arrContextMenu = arrClickRight[1].split("|^@^|");

                    if(arrContextMenu[0] == "LIST") {
                        var contextMenu = "<ul class='rightClickContextMenu' style='left:"+(event.pageX - 5)+"px; top:"+(event.pageY - 5)+"px;'>";
                        for(var i=1; i<arrContextMenu.length; i++) {
                            if(arrContextMenu[i]) contextMenu += "<li>"+arrContextMenu[i]+"</li>";
                        }
                        contextMenu += "</ul>";

                        $("body").append(contextMenu);
                    }
                }
            }
        }
    });
});

$(document).on("mouseenter", ".rightClickContextMenu li", function() {
    $(this).addClass("active");
});

$(document).on("mouseleave", ".rightClickContextMenu li", function() {
    $(this).removeClass("active");
});

$(document).on("click", ".rightClickContextMenu li", function() {
    selectedContextElement.html("test");
});

$(document).on("mouseleave", ".rightClickContextMenu", function() {
    $(this).remove();
});