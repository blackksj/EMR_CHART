function Page(parent) {
    this.super = parent;
    this.element = null;
    this.panels = [];
    this.property = ["Key", "Title", "Style", "Date", "Time", 
                    "IsPrintable", "HeadPrint", "FootPrint", "SheetKey", "Value"];

    this.Key = null;
    this.Title = null;
    this.Style = null;
    this.Date = null;
    this.Time = null;
    this.IsPrintable = null;
    this.HeadPrint = null;
    this.FootPrint = null;
    this.SheetKey = null;
    this.Value = null;

    this.createElement();
}

Page.prototype.createElement = function() {
    var page = $("<div />", {class: "Page"});
    this.element = page;
    
    $(this.super.element).append(page);
}

Page.prototype.createPropertyElement = function() {
    for(var i=0; i<this.property.length; i++) {
        this.element.append($("<input />", {type: "hidden", name: this.property[i], value: this[this.property[i]]}));
    }
}

Page.prototype.createTitleElement = function() {
    
}