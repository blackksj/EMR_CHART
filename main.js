var board=null,views=[];$(function(){board=new Board(document.querySelector("#contentWrap")),board.setSort("DESC")});
function DataLoad(E){for(var e=E.split("|^@4@^|"),a=new View,t=new Page(a),A=null,P=null,r=0;r<e.length;r++){var _=e[r].split("|^@3@^|");switch(_[0]){case"PAGE_NAMEVALUE":for(var l=_[1].split("|^@2@^|"),s=0;s<l.length;s++){var G=l[s].split("|^@1@^|");G[1]&&(t[G[0]]=G[1])}t.createPropertyElement();break;case"PANEL_NAMEVALUE":A=new Panel(t);for(var l=_[1].split("|^@2@^|"),s=0;s<l.length;s++){var G=l[s].split("|^@1@^|");G[1]&&(A[G[0]]=G[1])}A.createPropertyElement(),t.panels.push(A);break;case"ITEM_NAMEVALUE":P=new Item(A);for(var l=_[1].split("|^@2@^|"),s=0;s<l.length;s++){var G=l[s].split("|^@1@^|");G[1]&&(P[G[0]]=G[1])}P.createPropertyElement(),A.items.push(P)}}a.pages.push(t),views.push(a)}$(function(){GetCommandArgs("PAGE_KEY|^@^|00001|^@@^|PAGE_TITLE|^@^|00002|^@@^|PAGE_LOCKED|^@^|0","PAGE_KEY,PAGE_TITLE,PAGE_DATE,PAGE_TIME,PAGE_KIND,PAGE_LOCKED,PAGE_LOCKEDNAME,PAGE_SIGN,VIEW_KIND,PAGE_SELECT,PAGE_MODIFIED,REG_NAME,PAGE_INOUT,PAGE_DEPT,PAGE_PRINT,PAGE_PRINTNAME");DataLoad(data),DataLoad(data)});
function GetCommandArgs(r,e){var t=e.toUpperCase().split(","),a=new Array;if(r&&r.length>0){for(var n=r.split("|^@@^|"),l=0;l<n.length;l++){var o=n[l].split("|^@^|");a[o[0].toUpperCase()]=o[1]}for(var l=0;l<t.length;l++)t[l]=a[t[l]],t[l]||(t[l]="")}else for(var l=0;l<t.length;l++)t[l]="";return t}
function clearCursor(){$(".cursorDiv").remove()}
function clearMouseSelect(){selectedElement=null,selectedElementInit={}}
function createCursor(e){$(".cursorDiv").remove();var t=$("<div />",{"class":"cursorDiv"});e.before(t),t.css("width",selectedElementInit.width),t.css("height",selectedElementInit.height),t.css("left",selectedElementInit.left),t.css("top",selectedElementInit.top);var s=$("<div />",{"class":"cursorDivRelative"});t.append(s),s.append($("<span />",{style:"left:-4px; top:-4px;"})),s.append($("<span />",{style:"right:-4px; top:-4px;"})),s.append($("<span />",{style:"left:-4px; bottom:-4px;"})),s.append($("<span />",{style:"right:-4px; bottom:-4px;"}))}
var data="PAGE_NAMEVALUE|^@3@^|Key|^@1@^|1|^@2@^|Title|^@1@^|새서식|^@2@^|Style|^@1@^|0|^@2@^|Date|^@1@^||^@2@^|Time|^@1@^||^@2@^|IsPrintable|^@1@^|true|^@2@^|HeadPrint|^@1@^|A|^@2@^|FootPrint|^@1@^|A|^@2@^|SheetKey|^@1@^||^@2@^|Value|^@1@^||^@4@^|PANEL_NAMEVALUE|^@3@^|PageKey|^@1@^|1|^@2@^|Key|^@1@^|1|^@2@^|BackColor|^@1@^|rgba(255,255,255,1)|^@2@^|Width|^@1@^|720|^@2@^|Height|^@1@^|300|^@2@^|IsPrintable|^@1@^|true|^@2@^|ExpandTitle|^@1@^||^@2@^|IsExpandable|^@1@^|false|^@2@^|IsExpanded|^@1@^|true|^@2@^|ExPageKey|^@1@^||^@2@^|IsPrintExpand|^@1@^|false|^@2@^|BackImageString|^@1@^||^@2@^|BackImageWidth|^@1@^|720|^@2@^|RunPageAdd|^@1@^||^@2@^|RunPageLoad|^@1@^||^@2@^|RunPageSave|^@1@^||^@2@^|IsUserSizable|^@1@^|false|^@2@^|UserMinHeight|^@1@^|300|^@2@^|UserMaxHeight|^@1@^|1000|^@2@^|Value|^@1@^||^@2@^|BackImageAngle|^@1@^|0|^@4@^|PANEL_NAMEVALUE|^@3@^|PageKey|^@1@^|1|^@2@^|Key|^@1@^|2|^@2@^|BackColor|^@1@^|rgba(255,255,255,1)|^@2@^|Width|^@1@^|720|^@2@^|Height|^@1@^|300|^@2@^|IsPrintable|^@1@^|true|^@2@^|ExpandTitle|^@1@^|새서식|^@2@^|IsExpandable|^@1@^|false|^@2@^|IsExpanded|^@1@^|true|^@2@^|ExPageKey|^@1@^|1|^@2@^|IsPrintExpand|^@1@^|false|^@2@^|BackImageString|^@1@^||^@2@^|BackImageWidth|^@1@^|720|^@2@^|RunPageAdd|^@1@^||^@2@^|RunPageLoad|^@1@^||^@2@^|RunPageSave|^@1@^||^@2@^|IsUserSizable|^@1@^|false|^@2@^|UserMinHeight|^@1@^|300|^@2@^|UserMaxHeight|^@1@^|1000|^@2@^|Value|^@1@^||^@2@^|BackImageAngle|^@1@^|0|^@4@^|ITEM_NAMEVALUE|^@3@^|PageKey|^@1@^|1|^@2@^|PanelKey|^@1@^|2|^@2@^|ParentItemKey|^@1@^|-1|^@2@^|Key|^@1@^|1|^@2@^|DataKey|^@1@^||^@2@^|Style|^@1@^|1|^@2@^|Edit|^@1@^|true|^@2@^|IsSelectable|^@1@^|false|^@2@^|IsPrintable|^@1@^|true|^@2@^|X|^@1@^|67|^@2@^|Y|^@1@^|43|^@2@^|Width|^@1@^|293|^@2@^|Height|^@1@^|167|^@2@^|Angle|^@1@^|0|^@2@^|BackColor|^@1@^|rgba(255,255,255,1)|^@2@^|BackImageString|^@1@^||^@2@^|BorderColor|^@1@^|rgba(0,0,0,1)|^@2@^|BorderWidth|^@1@^|0|^@2@^|BorderDash|^@1@^||^@2@^|InLineStyle|^@1@^|0|^@2@^|InLineColor|^@1@^|rgba(0,0,0,1)|^@2@^|InLineDash|^@1@^||^@2@^|InLineWidth|^@1@^|1|^@2@^|InLineCap|^@1@^|butt|^@2@^|Checked|^@1@^|false|^@2@^|CheckGroup|^@1@^||^@2@^|CheckBoxStyle|^@1@^|1|^@2@^|CheckBoxAlign|^@1@^|1|^@2@^|CheckBoxColor|^@1@^|rgba(0,0,0,1)|^@2@^|CheckBoxWidth|^@1@^|12|^@2@^|CheckBoxHeight|^@1@^|12|^@2@^|CheckBoxLineWidth|^@1@^|1|^@2@^|CheckStyle|^@1@^|1|^@2@^|CheckValue|^@1@^||^@2@^|CheckForeColor|^@1@^|rgba(0,0,0,1)|^@2@^|CheckBackColor|^@1@^|rgba(255,255,255,0)|^@2@^|CheckLineWidth|^@1@^|2|^@2@^|UnCheckStyle|^@1@^|0|^@2@^|UnCheckValue|^@1@^||^@2@^|UnCheckForeColor|^@1@^|rgba(0,0,0,1)|^@2@^|UnCheckBackColor|^@1@^|rgba(255,255,255,0)|^@2@^|UnCheckLineWidth|^@1@^|1|^@2@^|TextFont|^@1@^|12px 돋움체|^@2@^|TextColor|^@1@^|rgba(0,0,0,1)|^@2@^|TextAlign|^@1@^|1|^@2@^|TextLineSpacing|^@1@^|0|^@2@^|TextBorder|^@1@^|0|^@2@^|TextMaxLine|^@1@^|0|^@2@^|IsViewOutBound|^@1@^|false|^@2@^|IsViewText|^@1@^|true|^@2@^|IsVisible|^@1@^|true|^@2@^|IsBorderLeft|^@1@^|true|^@2@^|IsBorderRight|^@1@^|true|^@2@^|IsBorderTop|^@1@^|true|^@2@^|IsBorderBottom|^@1@^|true|^@2@^|IsUserSizable|^@1@^|false|^@2@^|ChangeHeightItem|^@1@^||^@2@^|ChangeTopItem|^@1@^||^@2@^|TextFormat|^@1@^||^@2@^|EditOnly|^@1@^|false|^@2@^|ClickLeft|^@1@^||^@2@^|ClickRight|^@1@^||^@2@^|ChangedValue|^@1@^||^@2@^|TabFrom|^@1@^|0|^@2@^|TabTo|^@1@^|0|^@2@^|TabEnterFrom|^@1@^|0|^@2@^|TabEnterTo|^@1@^|0|^@2@^|IsIncomplete|^@1@^|false|^@2@^|IncompleteKey|^@1@^||^@2@^|IsWrap|^@1@^|false|^@2@^|CheckText|^@1@^||^@2@^|UnCheckText|^@1@^||^@2@^|Text|^@1@^|Text1|^@4@^|ITEM_NAMEVALUE|^@3@^|PageKey|^@1@^|1|^@2@^|PanelKey|^@1@^|2|^@2@^|ParentItemKey|^@1@^|-1|^@2@^|Key|^@1@^|2|^@2@^|DataKey|^@1@^||^@2@^|Style|^@1@^|2|^@2@^|Edit|^@1@^|true|^@2@^|IsSelectable|^@1@^|false|^@2@^|IsPrintable|^@1@^|true|^@2@^|X|^@1@^|418|^@2@^|Y|^@1@^|59|^@2@^|Width|^@1@^|85|^@2@^|Height|^@1@^|65|^@2@^|Angle|^@1@^|0|^@2@^|BackColor|^@1@^|rgba(255,255,255,0)|^@2@^|BackImageString|^@1@^||^@2@^|BorderColor|^@1@^|rgba(0,0,0,1)|^@2@^|BorderWidth|^@1@^|0|^@2@^|BorderDash|^@1@^||^@2@^|InLineStyle|^@1@^|0|^@2@^|InLineColor|^@1@^|rgba(0,0,0,1)|^@2@^|InLineDash|^@1@^||^@2@^|InLineWidth|^@1@^|1|^@2@^|InLineCap|^@1@^|butt|^@2@^|Checked|^@1@^|false|^@2@^|CheckGroup|^@1@^||^@2@^|CheckBoxStyle|^@1@^|1|^@2@^|CheckBoxAlign|^@1@^|1|^@2@^|CheckBoxColor|^@1@^|rgba(0,0,0,1)|^@2@^|CheckBoxWidth|^@1@^|12|^@2@^|CheckBoxHeight|^@1@^|12|^@2@^|CheckBoxLineWidth|^@1@^|1|^@2@^|CheckStyle|^@1@^|1|^@2@^|CheckValue|^@1@^||^@2@^|CheckForeColor|^@1@^|rgba(0,0,0,1)|^@2@^|CheckBackColor|^@1@^|rgba(255,255,255,0)|^@2@^|CheckLineWidth|^@1@^|2|^@2@^|UnCheckStyle|^@1@^|0|^@2@^|UnCheckValue|^@1@^||^@2@^|UnCheckForeColor|^@1@^|rgba(0,0,0,1)|^@2@^|UnCheckBackColor|^@1@^|rgba(255,255,255,0)|^@2@^|UnCheckLineWidth|^@1@^|1|^@2@^|TextFont|^@1@^|12px 돋움체|^@2@^|TextColor|^@1@^|rgba(0,0,0,1)|^@2@^|TextAlign|^@1@^|1|^@2@^|TextLineSpacing|^@1@^|0|^@2@^|TextBorder|^@1@^|0|^@2@^|TextMaxLine|^@1@^|0|^@2@^|IsViewOutBound|^@1@^|false|^@2@^|IsViewText|^@1@^|true|^@2@^|IsVisible|^@1@^|true|^@2@^|IsBorderLeft|^@1@^|true|^@2@^|IsBorderRight|^@1@^|true|^@2@^|IsBorderTop|^@1@^|true|^@2@^|IsBorderBottom|^@1@^|true|^@2@^|IsUserSizable|^@1@^|false|^@2@^|ChangeHeightItem|^@1@^||^@2@^|ChangeTopItem|^@1@^||^@2@^|TextFormat|^@1@^||^@2@^|EditOnly|^@1@^|false|^@2@^|ClickLeft|^@1@^||^@2@^|ClickRight|^@1@^||^@2@^|ChangedValue|^@1@^||^@2@^|TabFrom|^@1@^|0|^@2@^|TabTo|^@1@^|0|^@2@^|TabEnterFrom|^@1@^|0|^@2@^|TabEnterTo|^@1@^|0|^@2@^|IsIncomplete|^@1@^|false|^@2@^|IncompleteKey|^@1@^||^@2@^|IsWrap|^@1@^|false|^@2@^|CheckText|^@1@^||^@2@^|UnCheckText|^@1@^||^@2@^|Text|^@1@^|Check2";
$(document).on("click",".View",function(e){$(".View").removeClass("View_selected"),$(this).addClass("View_selected")});
function Board(t){this.element=t,this.views=[],this.width=726,this.height=null,this.sort="ASC",this.createElement(t)}Board.prototype.createElement=function(t){var e=$("<div />",{"class":"Board",width:this.width+"px"});e.append($("<input />",{type:"hidden",name:"sort",value:this.sort})),$(t).append(e)},Board.prototype.setSort=function(t){this.sort=t,$(this.element).find("input[name=sort]").val(this.sort)};
function Item(e){this["super"]=e,this.element=null,this.property=["PageKey","PanelKey","ParentItemKey","Key","DataKey","Style","Edit","IsSelectable","IsPrintable","X","Y","Width","Height","Angle","BackColor","BackImageString","BorderColor","BorderWidth","BorderDash","InLineStyle","InLineColor","InLineDash","InLineWidth","InLineCap","Checked","CheckGroup","CheckBoxStyle","CheckBoxAlign","CheckBoxColor","CheckBoxWidth","CheckBoxHeight","CheckBoxLineWidth","CheckStyle","CheckValue","CheckForeColor","CheckBackColor","CheckLineWidth","UnCheckStyle","UnCheckValue","UnCheckForeColor","UnCheckBackColor","UnCheckLineWidth","TextFont","TextColor","TextAlign","TextLineSpacing","TextBorder","TextMaxLine","IsViewOutBound","IsViewText","IsVisible","IsBorderLeft","IsBorderRight","IsBorderTop","IsBorderBottom","IsUserSizable","ChangeHeightItem","ChangeTopItem","TextFormat","EditOnly","ClickLeft","ClickRight","ChangedValue","TabFrom","TabTo","TabEnterFrom","TabEnterTo","IsIncomplete","IncompleteKey","IsWrap","CheckText","UnCheckText","Text"],this.PageKey=null,this.PanelKey=null,this.ParentItemKey=null,this.Key=null,this.DataKey=null,this.Style=null,this.Edit=null,this.IsSelectable=null,this.IsPrintable=null,this.X=null,this.Y=null,this.Width=null,this.Height=null,this.Angle=null,this.BackColor=null,this.BackImageString=null,this.BorderColor=null,this.BorderWidth=null,this.BorderDash=null,this.InLineStyle=null,this.InLineColor=null,this.InLineDash=null,this.InLineWidth=null,this.InLineCap=null,this.Checked=null,this.CheckGroup=null,this.CheckBoxStyle=null,this.CheckBoxAlign=null,this.CheckBoxColor=null,this.CheckBoxWidth=null,this.CheckBoxHeight=null,this.CheckBoxLineWidth=null,this.CheckStyle=null,this.CheckValue=null,this.CheckForeColor=null,this.CheckBackColor=null,this.CheckLineWidth=null,this.UnCheckStyle=null,this.UnCheckValue=null,this.UnCheckForeColor=null,this.UnCheckBackColor=null,this.UnCheckLineWidth=null,this.TextFont=null,this.TextColor=null,this.TextAlign=null,this.TextLineSpacing=null,this.TextBorder=null,this.TextMaxLine=null,this.IsViewOutBound=null,this.IsViewText=null,this.IsVisible=null,this.IsBorderLeft=null,this.IsBorderRight=null,this.IsBorderTop=null,this.IsBorderBottom=null,this.IsUserSizable=null,this.ChangeHeightItem=null,this.ChangeTopItem=null,this.TextFormat=null,this.EditOnly=null,this.ClickLeft=null,this.ClickRight=null,this.ChangedValue=null,this.TabFrom=null,this.TabTo=null,this.TabEnterFrom=null,this.TabEnterTo=null,this.IsIncomplete=null,this.IncompleteKey=null,this.IsWrap=null,this.CheckText=null,this.UnCheckText=null,this.Text=null,this.PropertyTextAlign=["LeftTop","LeftMiddle","LeftBottom","CenterTop","CenterMiddle","CenterBottom","RightTop","RightMiddle","RightBottom"],this.createElement()}Item.prototype.createElement=function(){var e=$("<div />",{"class":"Item",contenteditable:"true"});this.element=e,$(this["super"].element).find(".ItemContainer").prepend(e)},Item.prototype.createPropertyElement=function(){this.element.css("width",this.Width+"px"),this.element.css("height",this.Height+"px"),this.element.css("top",this.Y+"px"),this.element.css("left",this.X+"px"),this.TextFont&&this.element.css("font-size",this.TextFont.split(" ")[0]),this.TextFont&&this.element.css("font-family",this.TextFont.split(" ")[1]),this.TextColor&&this.element.css("color",this.TextColor);var e=this.PropertyTextAlign[this.TextAlign].toLowerCase();this.element.css("text-align",e.replace(/top|middle|bottom/,"")),this.element.css("vertical-align",e.replace(/left|center|right/,"")),this.element.css("line-height",this.TextCTextLineSpacingolor||"20px"),this.element.html(this.Text);for(var t=0;t<this.property.length;t++)this.element.append($("<input />",{type:"hidden",name:this.property[t],value:this[this.property[t]]}))};
function Page(e){this["super"]=e,this.element=null,this.elementTitle=null,this.panels=[],this.property=["Key","Title","Style","Date","Time","IsPrintable","HeadPrint","FootPrint","SheetKey","Value"],this.Key=null,this.Title=null,this.Style=null,this.Date=null,this.Time=null,this.IsPrintable=null,this.HeadPrint=null,this.FootPrint=null,this.SheetKey=null,this.Value=null,this.init(),this.createElement()}Page.prototype.init=function(){var e=new Date,t=e.getMonth()+1,i=e.getDate(),l=e.getFullYear();this.Date=l+"-"+prependZero(t,2)+"-"+prependZero(i,2);var n=e.getHours(),s=e.getMinutes(),r=e.getSeconds();this.Time=n+":"+prependZero(s,2)+":"+prependZero(r,2)},Page.prototype.createElement=function(){var e=$("<div />",{"class":"Page_Title"});this.elementTitle=e,$(this["super"].element).append(e);var t=$("<div />",{"class":"Page"});this.element=t,$(this["super"].element).append(t)},Page.prototype.createPropertyElement=function(){for(var e=0;e<this.property.length;e++)this.element.append($("<input />",{type:"hidden",name:this.property[e],value:this[this.property[e]]}));this.elementTitle.html(this.Date+" "+this.Time+" "+this.Title)};
function Panel(e){this["super"]=e,this.element=null,this.items=[],this.property=["PageKey","Key","BackColor","Width","Height","IsPrintable","ExpandTitle","IsExpandable","IsExpanded","ExPageKey","IsPrintExpand","BackImageString","BackImageWidth","RunPageAdd","RunPageLoad","RunPageSave","IsUserSizable","UserMinHeight","UserMaxHeight","Value","BackImageAngle"],this.PageKey=null,this.Key=null,this.BackColor=null,this.Width=null,this.Height=null,this.IsPrintable=null,this.ExpandTitle=null,this.IsExpandable=null,this.IsExpanded=null,this.ExPageKey=null,this.IsPrintExpand=null,this.BackImageString=null,this.BackImageWidth=null,this.RunPageAdd=null,this.RunPageLoad=null,this.RunPageSave=null,this.IsUserSizable=null,this.UserMinHeight=null,this.UserMaxHeight=null,this.Value=null,this.BackImageAngle=null,this.createElement()}Panel.prototype.createElement=function(){var e=$("<div />",{"class":"Panel"});this.element=e,$(this["super"].element).append(e)},Panel.prototype.createPropertyElement=function(){this.element.css("width",this.Width+"px"),this.element.css("height",this.Height+"px");for(var e=0;e<this.property.length;e++)this.element.append($("<input />",{type:"hidden",name:this.property[e],value:this[this.property[e]]}));this.element.append($("<div />",{"class":"ItemContainer"})),this.element.append($("<canvas />",{"class":"eventCanvas",width:this.Width,height:this.Height}))};
function View(){this.element=null,this.pages=[],this.createElement()}View.prototype.createElement=function(){var e=$("<div />",{"class":"View"});this.element=e,$(".View").removeClass("View_selected"),e.addClass("View_selected"),$(".Board").prepend(e)};
function mousePointToCanvas(t){var e=t.pageX-$(t.target).offset().left,a=t.pageY-$(t.target).offset().top;return{x:e,y:a}}
function prependZero(n,r){for(;n.toString().length<r;)n="0"+n;return n}
$(document).on("mousedown",".eventCanvas",function(e){if(ItemEditMode==e_ItemEditMode_None){var t=mouseDownInit=mousePointToCanvas(e);$($(this).parent().find(".Item").get().reverse()).each(function(){null==selectedElement&&t.y>$(this).position().top&&t.y<$(this).position().top+$(this).height()&&t.x>$(this).position().left&&t.x<$(this).position().left+$(this).width()&&(selectedLastElement=selectedElement=$(this),selectedElementInit.width=$(this).width(),selectedElementInit.height=$(this).height(),selectedElementInit.left=$(this).position().left,selectedElementInit.top=$(this).position().top,$(e.target).parent().find(".ItemContainer").append(selectedElement))}),selectedElement?createCursor($(this)):clearCursor()}}),$(document).on("mousemove",".eventCanvas",function(e){if(ItemEditMode==e_ItemEditMode_None){var t=mousePointToCanvas(e);if(null!=selectedElement){var s=t.x-mouseDownInit.x+selectedElementInit.left,n=t.y-mouseDownInit.y+selectedElementInit.top;$(".cursorDiv").css("left",s),$(".cursorDiv").css("top",n)}}}),$(document).on("mouseup",".eventCanvas",function(e){ItemEditMode==e_ItemEditMode_None&&(selectedElement.css("left",$(".cursorDiv").css("left")),selectedElement.css("top",$(".cursorDiv").css("top")),clearMouseSelect())}),$(document).on("mouseout",".eventCanvas",function(e){ItemEditMode==e_ItemEditMode_None&&(selectedElement.css("left",$(".cursorDiv").css("left")),selectedElement.css("top",$(".cursorDiv").css("top")),clearMouseSelect())});
var selectedElement=null,selectedLastElement=null,selectedElementInit={},mouseCursorStyle=null,mouseDownInit={},e_ItemEditMode_None=0,e_ItemEditMode_Add=1,e_ItemEditMode_Pen=2,e_ItemEditMode_Eraser=3,e_ItemEditMode_Tab1=4,e_ItemEditMode_Tab2=5,ItemEditMode=e_ItemEditMode_None;