//Board > View > Page > Panel > Item
var board = null;
var views = [];

//이미지 임시로 저장
var tempImage = null;

$(function() {
    board = new Board(document.querySelector("#contentWrap"));
    board.setSort("DESC");
    
    //폰트 선택
    $("#font_family").on("change", function() {
        document.execCommand("FontName", false, $(this).val());

        $(selectedLastElement).find("font").each(function() {
            if($(this).attr("face") == "돋움") {$(this).css("font-family", "돋움"); }
            if($(this).attr("face") == "돋움체") {$(this).css("font-family", "돋움체"); }
            if($(this).attr("face") == "굴림") {$(this).css("font-family", "굴림"); }
            if($(this).attr("face") == "굴림체") {$(this).css("font-family", "굴림체"); }
            if($(this).attr("face") == "바탕체") {$(this).css("font-family", "바탕체"); }

            $(this).removeAttr("face");
        });
    });
    
    //폰트사이즈 선택
    $("#font_size").on("change", function() {
        document.execCommand("fontSize", false, $(this).val());

            $(selectedLastElement).find("font").each(function() {
            if($(this).attr("size") == 1) {$(this).css("font-size", "10px"); $(this).css("line-height", "10px");}
            if($(this).attr("size") == 2) {$(this).css("font-size", "12px"); $(this).css("line-height", "12px");}
            if($(this).attr("size") == 3) {$(this).css("font-size", "14px"); $(this).css("line-height", "14px");}
            if($(this).attr("size") == 4) {$(this).css("font-size", "16px"); $(this).css("line-height", "16px");}
            if($(this).attr("size") == 5) {$(this).css("font-size", "20px"); $(this).css("line-height", "20px");}
            if($(this).attr("size") == 6) {$(this).css("font-size", "30px"); $(this).css("line-height", "30px");}
            if($(this).attr("size") == 7) {$(this).css("font-size", "40px"); $(this).css("line-height", "40px");}

            $(this).removeAttr("size");
        });

        textHeightChange();
    });
    
    //폰트색상 선택
    $("#font_color").on("change", function() {
        document.execCommand("foreColor", false, $(this).val());

        $(selectedLastElement).find("font").each(function() {
            $(this).css("color", $(this).attr("color"));

            $(this).removeAttr("color");
        });
    });

    //폰트 Bold
    $("#font_bold").on("click", function() {
        document.execCommand("bold", false, true);
    });

    //폰트 underline
    $("#font_underline").on("click", function() {
        document.execCommand("underline", false, true);
    });

    //폰트 italic
    $("#font_italic").on("click", function() {
        document.execCommand("italic", false, true);
    });

    //펜 드로잉
    $("#font_pencil").on("click", function() {
        clearText();
        clearCursor();

        ItemEditMode = e_ItemEditMode_Pen;
    });
    
    //폰트 삽입
    $("#font_text").on("click", function() {
        clearText();
        clearCursor();

        ItemEditMode = e_ItemEditMode_Text;
    });

    //서식 불러오기
    $("#sheet_load").on("change", function() {
        var fileList = $(this)[0].files;

        var reader = new FileReader();
        reader.readAsText(fileList[0], "utf-8");

        reader.onload = function() {
            DataLoad(reader.result);
        }
    });
    
    //이미지 불러오기
    $("#image_load").on("change", function() {
        var fileList = $(this)[0].files;

        var reader = new FileReader();
        reader.readAsDataURL(fileList[0]);

        reader.onload = function() {
            tempImage = reader.result;
            ItemEditMode = e_ItemEditMode_Image;
        }
    });

    $(".fileListFixWrap .fileList .list li").on("click", function() {
        console.log($(this).find("input[name=path]").val());
        $.ajax({
            url: '/sheet/'+$(this).find("input[name=path]").val(),
            type: 'GET',
            success: function(data) {
                // Do something with the result
                DataLoad(data);
            }
        });
    });
});