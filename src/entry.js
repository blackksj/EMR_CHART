var board = null;
var views = [];

$(function() {
    board = new Board(document.querySelector("#contentWrap"));
    board.setSort("DESC");
});
