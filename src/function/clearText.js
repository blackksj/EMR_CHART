function clearText() {
    $('.text').focusout();
    $('.text').css('z-index', 0);

    focusElement = null;
}