function Panel(parent) {
    this.super = parent;
    this.element = null;
    this.items = [];
    this.property = ["PageKey", "Key", "BackColor", "Width", "Height", 
                    "IsPrintable", "ExpandTitle", "IsExpandable", "IsExpanded", "ExPageKey", 
                    "IsPrintExpand", "BackImageString", "BackImageWidth", "RunPageAdd", "RunPageLoad", 
                    "RunPageSave", "IsUserSizable", "UserMinHeight", "UserMaxHeight", "Value", 
                    "BackImageAngle"];

    this.PageKey = null;
    this.Key = null;
    this.BackColor = null;
    this.Width = null;
    this.Height = null;
    this.IsPrintable = null;
    this.ExpandTitle = null;
    this.IsExpandable = null;
    this.IsExpanded = null;
    this.ExPageKey = null;
    this.IsPrintExpand = null;
    this.BackImageString = null;
    this.BackImageWidth = null;
    this.RunPageAdd = null;
    this.RunPageLoad = null;
    this.RunPageSave = null;
    this.IsUserSizable = null;
    this.UserMinHeight = null;
    this.UserMaxHeight = null;
    this.Value = null;
    this.BackImageAngle = null;

    this.createElement();
}

Panel.prototype.createElement = function() {
    var panel = $("<div />", {class: "Panel"});
    this.element = panel;
    
    $(this.super.element).append(panel);
}

Panel.prototype.createPropertyElement = function() {
    this.element.css("width", this.Width+"px");
    this.element.css("height", this.Height+"px");

    for(var i=0; i<this.property.length; i++) {
        this.element.append($("<input />", {type: "hidden", name: this.property[i], value: this[this.property[i]]}));
    }
}