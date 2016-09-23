$(document).on("contextmenu", ".Page_Title", function(e) {
    e.preventDefault();
    
    //달력 출력시 z-index가 높은 경우가 있어 clear 필요
    clearText();

    selectedContextElement = $(this);
    var contextMenu = $("<ul />", {class:"rightClickPageTitleContextMenu", style:"left:"+(event.pageX - 5)+"px; top:"+(event.pageY - 5)+"px;"});

    contextMenu.append("<li><input type='hidden' name='menu' value='pageCopy' />페이지 복사(오늘)</li>");
    contextMenu.append("<li><input type='hidden' name='menu' value='dateChange' />일자변경</li>");
    contextMenu.append("<li><input type='hidden' name='menu' value='timeChange' />시간변경</li>");

    $("body").append(contextMenu);
});

$(document).on("mouseenter", ".rightClickPageTitleContextMenu li", function() {
    $(this).addClass("active");
});

$(document).on("mouseleave", ".rightClickPageTitleContextMenu li", function() {
    $(this).removeClass("active");
});

$(document).on("click", ".rightClickPageTitleContextMenu li", function() {
    var menu = $(this).find("input[name=menu]").val();

    //DatePicker
    if(menu == "dateChange") {
        selectedContextElement.find("input[name=dateChange]").remove();
        var dateChange = $("<input />", {name:"dateChange", value:selectedContextElement.parent().find("input[name=Date]").val(), style:"visibility:hidden;"});
        selectedContextElement.append(dateChange);

        dateChange.datepicker({
            dateFormat: "yy-mm-dd",
            changeMonth: true,
            changeYear: true
        }).datepicker("show");
    }

    //TimePicker
    if(menu == "timeChange") {
        selectedContextElement.find("input[name=timeChange]").remove();
        var timeChange = $("<input />", {name:"timeChange", value:selectedContextElement.parent().find("input[name=Time]").val(), style:"visibility:hidden;"});
        selectedContextElement.append(timeChange);

        timeChange.timepicker({
            timeFormat: 'HH:mm:ss',
            controlType: 'select'
        }).timepicker("show");
    }

    $(this).parent().remove();
});

$(document).on("mouseleave", ".rightClickPageTitleContextMenu", function() {
    $(this).remove();
});