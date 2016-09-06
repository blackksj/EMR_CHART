//fill zero
function prependZero(num, len) {
    while(num.toString().length < len) {
        num = "0" + num;
    }
    return num;
}