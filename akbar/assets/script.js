var header = document.querySelector('.head');
var drpdwn = document.getElementById('drpdwn');
var list = document.getElementById('list');
var up = document.getElementById('up');
var down = document.getElementById('down');


window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
});

drpdwn.addEventListener('mouseenter', () => {
    drpdwn.classList.add('active');
    drpdwn.classList.remove("closing");
    list.style.padding = "10px 10px 20px 0";
    list.style.textAlign = "center";
    list.style.lineHeight = "40px";
    up.style.display = "inline";
    down.style.display = "none";
});
drpdwn.addEventListener('mouseleave', () => {
    drpdwn.classList.add("closing");
    drpdwn.classList.remove('active');
    down.style.display = "inline";
    up.style.display = "none";
});
drpdwn.addEventListener('click', () => {

    const upDisplay = window.getComputedStyle(up).display;
    const downDisplay = window.getComputedStyle(down).display;

    if (upDisplay === "none" && downDisplay === "inline") {
        up.style.display = "inline";
        down.style.display = "none";
    } else {
        down.style.display = "inline";
        up.style.display = "none";
    }
    drpdwn.classList.toggle("active");
    drpdwn.classList.toggle("closing");
});

var tahun = new Date();
document.getElementById('tahun').innerHTML = tahun.getFullYear();