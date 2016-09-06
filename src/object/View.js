function View() {
    this.element = null;
    this.pages = [];  

    this.createElement(); 
}

View.prototype.createElement = function() {
    var view = $("<div />", {class: "View"});
    this.element = view;

    $(".View input[name=selected]").val(false);

    view.append($("<input />", {type: "hidden", name: "selected", value: true}));
    
    $(".Board").prepend(view);
}