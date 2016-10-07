$(function() {
    var asOpts = GetCommandArgs("PAGE_KEY|^@^|00001|^@@^|PAGE_TITLE|^@^|00002|^@@^|PAGE_LOCKED|^@^|0"
        , "PAGE_KEY,PAGE_TITLE,PAGE_DATE,PAGE_TIME,PAGE_KIND,PAGE_LOCKED,PAGE_LOCKEDNAME,PAGE_SIGN,VIEW_KIND,PAGE_SELECT,PAGE_MODIFIED,REG_NAME,PAGE_INOUT,PAGE_DEPT,PAGE_PRINT,PAGE_PRINTNAME");

    //console.log(asOpts);

    //DataLoad(data);
});

function DataLoad(strVal) {
    //PAGE_NAMEVALUE, PANEL_NAMEVALUE, ITEM_NAMEVALUE를 구분 
    var astrVals1 = strVal.split("|^@4@^|");

    var view = new View();
    var page = new Page(view);
    var panel = null;
    var item = null;

    for (var i = 0; i < astrVals1.length; i++) {
       //PAGE_NAMEVALUE, PANEL_NAMEVALUE, ITEM_NAMEVALUE 값 구분
       var astrVals2 = astrVals1[i].split("|^@3@^|");

        switch (astrVals2[0]) {
            case "PAGE_NAMEVALUE": {
                var astrVals3 = astrVals2[1].split("|^@2@^|");
                
                for (var j = 0; j < astrVals3.length; j++) {
                    var astrVals4 = astrVals3[j].split("|^@1@^|");
                    
                    //page.push
                    if(astrVals4[1]) page[astrVals4[0]] = astrVals4[1];
                }
                page.createPropertyElement();
                break;
            }
            case "PANEL_NAMEVALUE": {
                panel = new Panel(page);
                var astrVals3 = astrVals2[1].split("|^@2@^|");
                
                for (var j = 0; j < astrVals3.length; j++) {
                    var astrVals4 = astrVals3[j].split("|^@1@^|");
                    
                    //panel push
                    if(astrVals4[1]) panel[astrVals4[0]] = astrVals4[1];
                }
                panel.createElement();
                panel.createPropertyElement();
                page.panels.push(panel);
                
                break;
            }
            case "ITEM_NAMEVALUE": {
                item = new Item(panel);
                var astrVals3 = astrVals2[1].split("|^@2@^|");
                
                for (var j = 0; j < astrVals3.length; j++) {
                    var astrVals4 = astrVals3[j].split("|^@1@^|");
                    
                    //intem push
                    if(astrVals4[1]) item[astrVals4[0]] = astrVals4[1];
                }
                item.createElement();
                item.createPropertyElement();
                panel.items.push(item);
                break;
            }
        }
    }
    view.pages.push(page);
    views.push(view);
}