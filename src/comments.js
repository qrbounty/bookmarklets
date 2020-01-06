function getNodes(e, o, t, n, c) {
    var d = [],
        r = !0 === getNodes[o];
    (n = n || document.documentElement).constructor === Array && (n = {
        childNodes: n
    });
    for (var s = n.childNodes, i = 0, l = s.length; i < l; i++) {
        var m = s[i];
        m.childNodes.length && !c && (d = d.concat(getNodes(e, o, t, m, c))), (r ? m[e] : void 0 !== m[e] && (t ? "" [t] && String(m[e])[t](o) : m[e] == o)) && (d[d.length] = m)
    }
    return d
}

function hjK(e) {
    return D3p = /; /g, e.replace(D3p, "<br><br>")
}
if (getNodes.null = !0, getNodes[void 0] = !0, getNodes("nodeType", 8).length < 1) alert("No comments on this site!");
else with((na = open("", "", "")).document) final_comments = "", comments = getNodes("nodeType", 8), comments.forEach(function(e) {
    final_comments += "<p>" + e.data + "</p>"
}), write(hjK("Comments for " + document.title.link(window.location.href) + " on " + new Date + "<hr>" + final_comments)), close();
