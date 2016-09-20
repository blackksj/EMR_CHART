function textHeightChange() {
    if(focusElement) {
        focusElement.css("height", "");

        if(parseFloat(focusElement.find("input[name=Height]").val()) < focusElement.height()) {
            focusElement.css("height", focusElement.height());
        } else {
            focusElement.css("height", focusElement.find("input[name=Height]").val()+"px");
        }

        if(focusElement.closest(".Panel").height() < focusElement.height()) {
            focusElement.closest(".Panel").css("height", focusElement.height());
            focusElement.closest(".Panel").find(".eventCanvas").css("height", focusElement.height());
        }
        
        //ChangeHeightItem값이 있을경우 해당 키의 Item도 같이 Height값을 변경
        if(focusElement.find("input[name=ChangeHeightItem]").val()) {
            var arrChangeHeightItem = focusElement.find("input[name=ChangeHeightItem]").val().split(",");

            for(var i=0; i<arrChangeHeightItem.length; i++) {
                focusElement.closest(".Panel").find(".ItemKey_"+arrChangeHeightItem[i]).css("height", focusElement.height());
            }
        }
    }
}