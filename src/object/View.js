function View() {
    this.element = null;
    this.pages = [];  

    this.createElement(); 
}

View.prototype.createElement = function() {
    var view = $("<div />", {class: "View"});
    this.element = view;

    //check view_selected start
    $(".View").removeClass("View_selected");
    view.addClass("View_selected");
    //check view_selected end
    
    $(".Board").prepend(view);
}