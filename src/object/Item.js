function Item(parent) {
    this.super = parent;
    this.element = null;
    //this.items = []; 자식 아이템을 갖는 경우가 있는지 아직 확인안됨
    this.property = itemProperty;

    this.PageKey = null;
    this.PanelKey = null;
    this.ParentItemKey = null;
    this.Key = null;
    this.DataKey = null;
    this.Style = null;
    this.Edit = null;
    this.IsSelectable = null;
    this.IsPrintable = null;
    this.X = null;
    this.Y = null;
    this.Width = null;
    this.Height = null;
    this.Angle = null;
    this.BackColor = null;
    this.BackImageString = null;
    this.BorderColor = null;
    this.BorderWidth = null;
    this.BorderDash = null;
    this.InLineStyle = null;
    this.InLineColor = null;
    this.InLineDash = null;
    this.InLineWidth = null;
    this.InLineCap = null;
    this.Checked = null;
    this.CheckGroup = null;
    this.CheckBoxStyle = null;
    this.CheckBoxAlign = null;
    this.CheckBoxColor = null;
    this.CheckBoxWidth = null;
    this.CheckBoxHeight = null;
    this.CheckBoxLineWidth = null;
    this.CheckStyle = null;
    this.CheckValue = null;
    this.CheckForeColor = null;
    this.CheckBackColor = null;
    this.CheckLineWidth = null;
    this.UnCheckStyle = null;
    this.UnCheckValue = null;
    this.UnCheckForeColor = null;
    this.UnCheckBackColor = null;
    this.UnCheckLineWidth = null;
    this.TextFont = null;
    this.TextColor = null;
    this.TextAlign = null;
    this.TextLineSpacing = null;
    this.TextBorder = null;
    this.TextMaxLine = null;
    this.IsViewOutBound = null;
    this.IsViewText = null;
    this.IsVisible = null;
    this.IsBorderLeft = null;
    this.IsBorderRight = null;
    this.IsBorderTop = null;
    this.IsBorderBottom = null;
    this.IsUserSizable = null;
    this.ChangeHeightItem = null;
    this.ChangeTopItem = null;
    this.TextFormat = null;
    this.EditOnly = null;
    this.ClickLeft = null;
    this.ClickRight = null;
    this.ChangedValue = null;
    this.TabFrom = null;
    this.TabTo = null;
    this.TabEnterFrom = null;
    this.TabEnterTo = null;
    this.IsIncomplete = null;
    this.IncompleteKey = null;
    this.IsWrap = null;
    this.CheckText = null;
    this.UnCheckText = null;
    this.Text = null;

    //텍스트 정렬방식
    this.PropertyTextAlign = ["LeftTop", "LeftMiddle", "LeftBottom", "CenterTop", "CenterMiddle", 
                                "CenterBottom", "RightTop", "RightMiddle", "RightBottom"]; 
}

Item.prototype.createElement = function() {
    if(this.BackImageString) {//BackImageString(이미지)
        var item = $("<img />", {class: "Item", src: this.BackImageString});
        this.element = item;
    } else {
        var item = $("<div />", {class: "Item"});
        this.element = item;
    }
        
    $(this.super.element).find(".ItemContainer").prepend(item);
}

Item.prototype.createPropertyElement = function() {
    //속성을 설정한다.

    this.element.addClass("ItemKey_"+this.Key);
    
    if(this.Style == "1" && !this.BackImageString) this.element.addClass("text");
    if(this.Style == "2" && !this.BackImageString) this.element.addClass("checkbox");
    if(this.BackImageString) this.element.addClass("image");

    //position
    this.element.css("width", (this.Width-1)+"px");//이전 소스의 경우 1px을 줄여야 선이 맞음.
    this.element.css("height", this.Height+"px");
    this.element.css("top", this.Y+"px");
    this.element.css("left", this.X+"px");

    //text align
    var textAlign = this.PropertyTextAlign[this.TextAlign].toLowerCase();
    var align = textAlign.replace(/top|middle|bottom/, "");
    var valign = textAlign.replace(/left|center|right/, "");
    this.element.css("text-align", align);
    this.element.css("vertical-align", valign);

    //text
    if(this.TextFont) {
        if(this.TextFont.split(" ").length == 2) {
            this.element.css("font-family", this.TextFont.split(" ")[1]);
            this.element.css("font-size", this.TextFont.split(" ")[0]);
            if(this.Text) {
                if(this.TextLineSpacing == 0) {
                    if (this.Text.indexOf("|^@^|") > -1) {
                        //this.element.css("line-height", "14px");
                    } else {
                        if(valign == "middle") this.element.css("line-height", this.Height + "px");
                    }
                }
            }

        }

        if(this.TextFont.split(" ").length == 3) {
            this.element.css("font-family", this.TextFont.split(" ")[2]);
            this.element.css("font-size", this.TextFont.split(" ")[1]);
            this.element.css("line-height", this.TextFont.split(" ")[1]);
            if(this.Text) {
                if(this.TextLineSpacing == 0) {
                    if (this.Text.indexOf("|^@^|") > -1) {
                        //this.element.css("line-height", "14px");
                    } else {
                        if(valign == "middle") this.element.css("line-height", this.Height + "px");
                    }
                }
            }
            if(this.TextFont.split(" ")[0] == "bold") this.element.css("font-weight", "bold");
        }
    }

    if(this.TextColor) this.element.css("color", this.TextColor);
    if(this.BackColor) this.element.css("background-color", this.BackColor);
    //this.Style 1:Text, 2:CheckBox

    if(this.IsBorderLeft) this.element.css("border-left", this.BorderWidth+"px");
    if(this.IsBorderRight) this.element.css("border-right", this.BorderWidth+"px");
    if(this.IsBorderTop) this.element.css("border-top", this.BorderWidth+"px");
    if(this.IsBorderBottom) this.element.css("border-bottom", this.BorderWidth+"px");
    this.element.css("border-style", "solid");
    if(this.BorderColor) this.element.css("border-color", this.BorderColor);
    
    //contenteditable attr config
    if(this.Style == "1" && this.Edit == "true") {
        this.element.attr("contenteditable", true);
        //this.element.css("background-color", "#FFFFDF"); //배경색이 바껴야 할까?
    }

    //|^@^| -> <br />로 변경
    if(this.Style == "1") {
        if(this.Text) while (this.Text.indexOf("|^@^|") > -1) {this.Text = this.Text.replace("|^@^|", "<br />");}
        this.element.html(this.Text);
    }

    //checkbox
    if(this.Style == "2") {
        this.element.html("<input type='checkbox' />"+this.Text);
    }

    for(var i=0; i<this.property.length; i++) {
        this.element.append($("<input />", {type: "hidden", name: this.property[i], value: this[this.property[i]]}));
    }
}