# Bookmarklets
Some JavaScript bookmarklets I use occasionally. These are generally pretty rough since I tend to piece them together on-the-fly and they just need to be minimally functional. I do not claim authorship of any of these, though I've definitely tweaked quite a few of them. Sources have been cited where possible but many of these have been floating around on my systems for years.

## Usage
The snippets below should work fine if pasted into the URL parameter of the new page/bookmark dialogs for Chrome or Firefox.

### Dump Cookies
Pops open a page containing cookies for the current site.
```javascript
javscript:function a(e){return c=/; /g,e.replace(c,"<br><br>")}if(document.cookie="",document.cookie.length<1)alert("No cookie from this site!");else with((na=open("","","")).document)write(a("Cookies for "+document.title.link(window.location.href)+" on "+new Date+"<hr>"+document.cookie)),close();
```


### Dump Comments
A bit rough but pops open a page with a decent portion of obvious HTML comments from a page.
```javacsript
javascript:function getNodes(e,o,t,n,c){var d=[],r=!0===getNodes[o];(n=n||document.documentElement).constructor===Array&&(n={childNodes:n});for(var s=n.childNodes,i=0,l=s.length;i<l;i++){var m=s[i];m.childNodes.length&&!c&&(d=d.concat(getNodes(e,o,t,m,c))),(r?m[e]:void 0!==m[e]&&(t?""[t]&&String(m[e])[t](o):m[e]==o))&&(d[d.length]=m)}return d}function hjK(e){return D3p=/; /g,e.replace(D3p,"<br><br>")}if(getNodes.null=!0,getNodes[void 0]=!0,getNodes("nodeType",8).length<1)alert("No comments on this site!");else with((na=open("","","")).document)final_comments="",comments=getNodes("nodeType",8),comments.forEach(function(e){final_comments+="<p>"+e.data+"</p>"}),write(hjK("Comments for "+document.title.link(window.location.href)+" on "+new Date+"<hr>"+final_comments)),close();
```

