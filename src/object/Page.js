function Page(parent) {
    this.super = parent;
    this.element = null;
    this.elementTitle = null;
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

    this.init();
    this.createElement();
}

Page.prototype.init = function() {
    //set date
    var dt = new Date();

    var month = dt.getMonth()+1;
    var day = dt.getDate();
    var year = dt.getFullYear();

    this.Date = year + '-' + prependZero(month, 2) + '-' + prependZero(day, 2);

    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();

    this.Time = hour + ':' + prependZero(minute, 2) + ':' + prependZero(second, 2);
}

Page.prototype.createElement = function() {
    //create page title
    var page_title = $("<div />", {class: "Page_Title"});
    this.elementTitle = page_title;
    $(this.super.element).append(page_title);

    //create page
    var page = $("<div />", {class: "Page"});
    this.element = page;
    $(this.super.element).append(page);
}

Page.prototype.createPropertyElement = function() {
    for(var i=0; i<this.property.length; i++) {
        this.element.append($("<input />", {type: "hidden", name: this.property[i], value: this[this.property[i]]}));
    }

    //input page title
    this.elementTitle.html(this.Date + ' ' + this.Time + ' ' + this.Title);
}