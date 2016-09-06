function Item(parent) {
    this.super = parent;
    this.element = null;
    //this.items = []; 자식 아이템을 갖는 경우가 있는지 아직 확인안됨
    this.property = ["PageKey", "PanelKey", "ParentItemKey", "Key", "DataKey", 
                    "Style", "Edit", "IsSelectable", "IsPrintable", "X", 
                    "Y", "Width", "Height", "Angle", "BackColor", 
                    "BackImageString", "BorderColor", "BorderWidth", "BorderDash", "InLineStyle", 
                    "InLineColor", "InLineDash", "InLineWidth", "InLineCap", "Checked", 
                    "CheckGroup", "CheckBoxStyle", "CheckBoxAlign", "CheckBoxColor", "CheckBoxWidth", 
                    "CheckBoxHeight", "CheckBoxLineWidth", "CheckStyle", "CheckValue", "CheckForeColor", 
                    "CheckBackColor", "CheckLineWidth", "UnCheckStyle", "UnCheckValue", "UnCheckForeColor", 
                    "UnCheckBackColor", "UnCheckLineWidth", "TextFont", "TextColor", "TextAlign", 
                    "TextLineSpacing", "TextBorder", "TextMaxLine", "IsViewOutBound", "IsViewText", 
                    "IsVisible", "IsBorderLeft", "IsBorderRight", "IsBorderTop", "IsBorderBottom", 
                    "IsUserSizable", "ChangeHeightItem", "ChangeTopItem", "TextFormat", "EditOnly", 
                    "ClickLeft", "ClickRight", "ChangedValue", "TabFrom", "TabTo", 
                    "TabEnterFrom", "TabEnterTo", "IsIncomplete", "IncompleteKey", "IsWrap", 
                    "CheckText", "UnCheckText", "Text"];

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

    this.PropertyTextAlign = ["LeftTop", "LeftMiddle", "LeftBottom", "CenterTop", "CenterMiddle", 
                                "CenterBottom", "RightTop", "RightMiddle", "RightBottom"];

    this.createElement();    
}

Item.prototype.createElement = function() {
    var item = $("<div />", {class: "Item"});
    this.element = item;
    
    $(this.super.element).append(item);
}

Item.prototype.createPropertyElement = function() {
    //position
    this.element.css("width", this.Width+"px");
    this.element.css("height", this.Height+"px");
    this.element.css("top", this.Y+"px");
    this.element.css("left", this.X+"px");

    //text
    if(this.TextFont) this.element.css("font-size", this.TextFont.split(" ")[0]);
    if(this.TextFont) this.element.css("font-family", this.TextFont.split(" ")[1]);    
    if(this.TextColor) this.element.css("color", this.TextColor);
    //this.Style 1:Text, 2:CheckBox
    var textAlign = this.PropertyTextAlign[this.TextAlign].toLowerCase();
    
    this.element.css("text-align", textAlign.replace(/top|middle|bottom/, ""));
    this.element.css("vertical-align", textAlign.replace(/left|center|right/, ""));
    this.element.css("line-height", this.TextCTextLineSpacingolor || "20px");

    this.element.html(this.Text);

    for(var i=0; i<this.property.length; i++) {
        this.element.append($("<input />", {type: "hidden", name: this.property[i], value: this[this.property[i]]}));
    }
}