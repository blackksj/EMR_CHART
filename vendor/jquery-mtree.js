//트리 메뉴
(function($) {
    $.fn.mtree = function(settings, data) {
        var config = {};

        if(settings) $.extend(config, settings);

        this.each(function() {
            var thisObj = $(this);

            for(var i=0; i<data.length; i++) {
                var depth1 = data;
                //depth1
                var depth1LiObject = $("<li />", {});
                depth1LiObject.html(depth1[i].bec_name+"[<span class='count'></span>]");
                thisObj.append(depth1LiObject);

                if(depth1LiObject.find("> ul").length == 0) depth1LiObject.append("<ul></ul>");
                var depth2 = data[i].children;

                for(var j=0; j<depth2.length; j++) {
                    //depth2
                    var depth2LiObject = $("<li />", {});
                    //depth2LiObject.html("<input type='checkbox' name='bec_id' value='"+depth2[j].bec_id+"' id='tree_"+depth2[j].bec_id+"' /> "+" <label for='tree_"+depth2[j].bec_id+"'>"+depth2[j].bec_name+"</label>");
                    depth2LiObject.html(depth2[j].bec_name+"[<span class='count'></span>]");
                    depth1LiObject.find("> ul").append(depth2LiObject);

                    if(depth2LiObject.find("> ul").length == 0) depth2LiObject.append("<ul></ul>");
                    var depth3 = depth2[j].children;

                    for(var k=0; k<depth3.length; k++) {
                        //depth3
                        if(depth2LiObject.find("> ul .bec_id_"+depth3[k].bec_id).length == 0) {//3뎁스가 생성 안되어있는 상태
                            var depth3LiObject = $("<li />", {class:"bec_id_"+depth3[k].bec_id});

                           //depth3LiObject.append("<input type='checkbox' name='bec_id' value='"+depth3[k].bec_id+"' id='tree_"+depth3[k].bec_id+"' /> "+" <label for='tree_"+depth3[k].bec_id+"'>"+depth3[k].bec_name+"</label>");
                            depth3LiObject.append(depth3[k].bec_name+"[<span class='count'></span>]");
                            depth2LiObject.find("> ul").append(depth3LiObject);

                            if(depth3LiObject.find("> ul").length == 0) depth3LiObject.append("<ul></ul>");

                            var depth4LiObject = $("<li />", {});
                            depth4LiObject.append("<input type='checkbox' name='bec_id' value='"+depth3[k].bec_id+"' id='tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate+"' /> "+" <label for='tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate+"'>"+depth3[k].oec_wdate+'</label>');
                            depth3LiObject.find("> ul").append(depth4LiObject);

                            if(depth3[k].bef_form.trim()) $("#tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate).prop("checked", true);
                        } else {//3뎁스가 생성 되어있는 상태
                            var depth3LiObject = depth2LiObject.find("> ul .bec_id_"+depth3[k].bec_id);

                            var depth4LiObject = $("<li />", {});
                            depth4LiObject.append("<input type='checkbox' name='bec_id' value='"+depth3[k].bec_id+"' id='tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate+"' /> "+" <label for='tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate+"'>"+depth3[k].oec_wdate+'</label>');
                            depth3LiObject.find("> ul").append(depth4LiObject);

                            if(depth3[k].bef_form.trim()) $("#tree_4_"+depth3[k].bec_id+"_"+depth3[k].oec_wdate).prop("checked", true);
                        }

                        if(depth3[k].bef_form.trim()) DataLoad(depth3[k].bef_form);
                    }
                }
            }

            treeCountUpdate();
        });
    };
})(jQuery);