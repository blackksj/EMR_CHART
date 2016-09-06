function Board(selector) {
    this.element = selector;
    this.views = [];

    this.width = 750;
    this.height = null;
    this.sort = "ASC";

    this.createElement(selector);
}

Board.prototype.createElement = function(selector) {
    var board = $("<div />", {class: "Board", width: this.width+"px"});
    board.append($("<input />", {type: "hidden", name: "sort", value: this.sort}));
    
    $(selector).append(board);   
}

Board.prototype.setSort = function(value) {
    this.sort = value;
    $(this.element).find("input[name=sort]").val(this.sort);
}