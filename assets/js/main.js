const menuTombol = document.querySelector('.menu-tombol input');
const nav = document.querySelector('nav ul');

menuTombol.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// Tabel Klik
$(document).ready(() => {
    $("td").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
    $("th").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
});

// Anti COPAS, Inspect, Intip Source Code
window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};
document.onkeydown = function (e) {
    return false;
}
navigator.keyboard.lock();