var i=0, r=m.rows;
function s(n) {
    if (n === i) return;
    Beep();
    r[i].cells[0].innerText = '';
    i = n;
    r[i].cells[0].innerText = '➔';
};
function go() {
    var link = r[i].getElementsByTagName('a')[0];
    if (link) {
        window.location.href = link.href;
    }
};

var snd = new Audio('./js/beep.wav');
function Beep() {
    snd.currentTime = 0;
    snd.play().catch(function(e){});
};
document.onkeydown = function() {
    var k = event.keyCode;
    if (k == 40) s((i + 1) % r.length);
    if (k == 38) s((i - 1 + r.length) % r.length);
    if (k == 13) go();
};
m.onmouseover = function() {
    var row = event.srcElement;
    while (row && row.tagName != 'TR') row = row.parentNode;
    if (row && row.rowIndex != null) s(row.rowIndex);
};

