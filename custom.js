window.onscroll = function() {
    // Get the scroll height
    var scrollHeight = document.documentElement.scrollHeight;
    // Get the current scroll position
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // Get the client height (viewport height)
    var clientHeight = document.documentElement.clientHeight;

    if (scrollTop > 65) {
        console.log("!!!")
    }
};