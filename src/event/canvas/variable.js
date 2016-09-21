//현재 선택된 Element 저장
var selectedElement = null;
//현재 바로전 선택된 Element 저장
var selectedLastElement = null;
//선택했을 당시의 Element 저장
var selectedElementInit = {};
//포커스가 있는 Element
var focusElement = null;
//글씨 편집씨 input=hidden 속성이 사라지는 현상이 있어 복구를 위해 저장
var tempFucusElementChildElement = [];

//마우스 오른쪽 버튼으로 선택된 Element 저장
var selectedContextElement = null;

var mouseCursorStyle = null;
var objectCursorInit = {};

//마우스 클릭한 위치
var mouseDownInit = {};

//--- 아이템 편집모드
var e_ItemEditMode_None = 0;
var e_ItemEditMode_Cursor = 1;  //커서를 컨트롤 하기 위한 모드
var e_ItemEditMode_Text = 2;    //텍스트 모드
var e_ItemEditMode_Image = 3;   //이미지 모드
var e_ItemEditMode_Pen = 4;   //펜 모드

/*
var e_ItemEditMode_Add = 1;
var e_ItemEditMode_Pen = 2;
var e_ItemEditMode_Eraser = 3;
var e_ItemEditMode_Tab1 = 4;
var e_ItemEditMode_Tab2 = 5;
*/

var ItemEditMode = e_ItemEditMode_None;