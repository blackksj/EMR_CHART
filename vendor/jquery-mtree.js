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
                depth1LiObject.html(depth1[i].bec_name);
                thisObj.append(depth1LiObject);

                if(depth1LiObject.find("> ul").length == 0) depth1LiObject.append("<ul></ul>");
                var depth2 = data[i].children;

                for(var j=0; j<depth2.length; j++) {
                    //depth2
                    var depth2LiObject = $("<li />", {});
                    depth2LiObject.html(depth2[j].bec_name);
                    depth1LiObject.find("> ul").append(depth2LiObject);

                    if(depth2LiObject.find("> ul").length == 0) depth2LiObject.append("<ul></ul>");
                    var depth3 = depth2[j].children;

                    for(var k=0; k<depth3.length; k++) {
                        //depth3
                        if(depth2LiObject.find("> ul .bec_id_"+depth3[k].bec_id).length == 0) {
                            var depth3LiObject = $("<li />", {class:"bec_id_"+depth3[k].bec_id});

                            depth3LiObject.html(depth3[k].bec_id+" "+depth3[k].bec_name+" "+depth3[k].oec_wdate);
                            depth3LiObject.append("test");
                            //depth3LiObject.html("<input type='checkbox' name='bec_id' value='"+depth3[k].bec_id+"' id='tree_"+depth3[k].bec_id+"' /> <a href='#'><label for='tree_"+depth3[k].bec_id+"'>"+depth3[k].oec_wdate+"</label></a>");
                            depth2LiObject.find("> ul").append(depth3LiObject);
                        } else {

                        }
                    }
                }
            }
        });
    };
})(jQuery);