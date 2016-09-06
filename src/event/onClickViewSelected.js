//view 선택시 view_selected Class 추가
$(document).on("click", ".View", function(e) {
    $(".View").removeClass("View_selected");
    $(this).addClass("View_selected");
});