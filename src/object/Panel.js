function Panel(parent) {
    this.super = parent;
    this.element = null;
    this.items = [];
    this.property = ["PageKey", "Key", "BackColor", "Width", "Height", 
                    "IsPrintable", "ExpandTitle", "IsExpandable", "IsExpanded", "ExPageKey", 
                    "IsPrintExpand", "BackImageString", "BackImageWidth", "RunPageAdd", "RunPageLoad", 
                    "RunPageSave", "IsUserSizable", "UserMinHeight", "UserMaxHeight", "Value", 
                    "BackImageAngle", "Pens"];

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

    this.Pens = null;   //펜툴의 경우 Panel에 종속되어 있음(구버전 호환성)
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

    if(this.BackImageString) {
        this.element.append($("<img />", {class: "panelImage", width: this.Width, height: this.Height, src:this.BackImageString}));
    }

    this.element.append($("<div />", {class: "ItemContainer"}));

    //Pen Start(구버전 호환성)
    if(this.Pens) {//펜툴 그리기
        //기존 서식에 있는 펜을 그리기 위한 캔버스
        var penCanvas = $("<canvas />", {class: "penCanvas"});
        penCanvas.attr("width", this.Width);
        penCanvas.attr("height", this.Height);
        var penContext = penCanvas[0].getContext("2d");
        this.element.append(penCanvas);

        var pens = this.Pens.split("|^@@^|");
        for(var i=0; i<pens.length; i++) {

            var nWidth = 1;
            penContext.beginPath();
            var pen = pens[i].split("|^@^|");

            var penLineGroup = pen[1].split(":");
            for(var j=0; j<penLineGroup.length; j++) {
                var penLine = penLineGroup[j].split(",");

                if (j == 0) {
                    penContext.moveTo(penLine[0], penLine[1]);
                } else {
                    penContext.lineTo(penLine[0], penLine[1]);
                }

                nWidth = penLine[2];
            }

            penContext.strokeStyle = pen[0];
            penContext.lineWidth = nWidth;
            penContext.lineCap = "butt";
            penContext.stroke();
            penContext.closePath();
        }
    }
    //Pen End

    var eventCanvas = $("<canvas />", {class: "eventCanvas"});
    eventCanvas.attr("width", this.Width);
    eventCanvas.attr("height", this.Height);
    this.element.append(eventCanvas);

}