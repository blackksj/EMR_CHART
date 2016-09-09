//현재 선택된 Element 저장
var selectedElement = null;
//현재 바로전 선택된 Element 저장
var selectedLastElement = null;
//선택했을 당시의 Element 저장
var selectedElementInit = {};


var mouseCursorStyle = null;
var objectCursorInit = {};

//마우스 클릭한 위치
var mouseDownInit = {};

//--- 아이템 편집모드
var e_ItemEditMode_None = 0;
var e_ItemEditMode_Cursor = 1; //커서를 컨트롤 하기 위한 모드

/*
var e_ItemEditMode_Add = 1;
var e_ItemEditMode_Pen = 2;
var e_ItemEditMode_Eraser = 3;
var e_ItemEditMode_Tab1 = 4;
var e_ItemEditMode_Tab2 = 5;
*/

var ItemEditMode = e_ItemEditMode_None;