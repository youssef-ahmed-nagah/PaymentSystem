window.focusElementById = function (id) {
    var element = document.getElementById(id);
    if (element) {
        element.focus();
    }
};