function treeCountUpdate() {
    $("#mtree li").each(function() {
        $(this).find("> .count").text($(this).find(":checkbox:checked").length+"/"+$(this).find(":checkbox").length);
    });
}