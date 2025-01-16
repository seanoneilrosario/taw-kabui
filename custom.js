window.onscroll = function() {
    // Get the scroll height
    var scrollHeight = document.documentElement.scrollHeight;
    // Get the current scroll position
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // Get the client height (viewport height)
    var clientHeight = document.documentElement.clientHeight;

    console.log("Scroll Height: " + scrollHeight);
    console.log("Scroll Top: " + scrollTop);
    console.log("Client Height: " + clientHeight);
};