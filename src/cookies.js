document.cookie = '';
function a(b) {
    c = /; /g;
    return b.replace(c, '<br><br>');
}
if (document.cookie.length < 1) {
    alert('No cookie from this site!')
} else {
    with((na = open('', '', '')).document) {
        write(a('Cookie for ' + document.title.link(window.location.href) + ', dd. ' + new Date() + '<hr>' + document.cookie));
        close()
    }
}
