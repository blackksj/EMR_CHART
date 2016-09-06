//Board > View > Page > Panel > Item
var board = null;
var views = [];

$(function() {
    board = new Board(document.querySelector("#contentWrap"));
    board.setSort("DESC");
});
