# Bookmarklets
Some JavaScript bookmarklets I use occasionally, collected from around the web and potentially modified by me.

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

### Dump Variables
Will pop open a page containing all javascript variables on the page at the time it bookmarklet was called. (Source: [1](#references))
```javascript
javascript:(function(){var x,d,i,v,st; x=open(); d=x.document; d.open(); function hE(s){s=s.replace(/&/g,"&amp;");s=s.replace(/>/g,"&gt;");s=s.replace(/</g,"&lt;");return s;} d.write("<style>td{vertical-align:top; white-space:pre; } table,td,th { border: 1px solid #ccc; } div.er { color:red }</style><table border=1><thead><tr><th>Variable</th><th>Type</th><th>Value as string</th></tr></thead>"); for (i in window) { if (!(i in x) ) { v=window[i]; d.write("<tr><td>" + hE(i) + "</td><td>" + hE(typeof(window[i])) + "</td><td>"); if (v===null) d.write("null"); else if (v===undefined) d.write("undefined"); else try{st=v.toString(); if (st.length)d.write(hE(v.toString())); else d.write("%C2%A0")}catch(er){d.write("<div class=er>"+hE(er.toString())+"</div>")}; d.write("</pre></td></tr>"); } } d.write("</table>"); d.close(); })();
```

### Dump Scripts
Will pop open a page containing plaintext versions of the scripts present on the page. (Source: [1](#references))
```javascript
javascript:s=document.getElementsByTagName('SCRIPT'); d=window.open().document; /*140681*/d.open();d.close(); b=d.body; function trim(s){return s.replace(/^\s*\n/, '').replace(/\s*$/, ''); }; function add(h){b.appendChild(h);} function makeTag(t){return d.createElement(t);} function makeText(tag,text){t=makeTag(tag);t.appendChild(d.createTextNode(text)); return t;} add(makeText('style', 'iframe{width:100%;height:18em;border:1px solid;')); add(makeText('h3', d.title='Scripts in ' + location.href)); for(i=0; i<s.length; ++i) { if (s[i].src) { add(makeText('h4','script src="' + s[i].src + '"')); iframe=makeTag('iframe'); iframe.src=s[i].src; add(iframe); } else { add(makeText('h4','Inline script')); add(makeText('pre', trim(s[i].innerHTML))); } } void 0
```

### Show Hidden Form Fields
This will show form elements marked as 'hidden'. (Source: [1](#references))
```javascript
javascript:(function(){var i,f,j,e,div,label,ne; for(i=0;f=document.forms[i];++i)for(j=0;e=f[j];++j)if(e.type=="hidden"){ D=document; function C(t){return D.createElement(t);} function A(a,b){a.appendChild(b);} div=C("div"); label=C("label"); A(div, label); A(label, D.createTextNode(e.name + ": ")); e.parentNode.insertBefore(div, e); e.parentNode.removeChild(e); ne=C("input");/*for ie*/ ne.type="text"; ne.value=e.value; A(label, ne); label.style.MozOpacity=".6"; --j;/*for moz*/}})()
```

### Enable Disabled Form Fields
This will allow you to edit form fields that are marked as disabled. (Source: [1](#references))
```javascript
javascript:(function(){var x,k,f,j;x=document.forms;for (k=0;k<x.length;++k){f=x[k];for(j=0;j<f.length;++j){f[j].disabled=false; f[j].readOnly=false;}}})()
```

### Deleet
Converts some 1337 back to a more readable format. (Source: [1](#references))
```javascript
javascript:(function(){ var T=( "| 1 m /\\/\\ m |\\/| w \\/\\/ w |/\\| h |-| h |~| u |_| m |v| n |\\| n /\\/ d |) f |= h }{ i ][ j _| j _] k |< k |{ l |_ p |> p [* r |2 v \\/ x >< y `/ a @ a 4 b 8 e 3 g 6 g 9 o 0 s 5 s $ t + t 7" ).split(" "),i,x,t; function R(t){t=t.toLowerCase();for(i=0;i<T.length;i+=2)while(t.indexOf(T[i+1])!=-1)t=t.replace(T[i+1],T[i]);return t} function F(n,i){t=n.tagName;if(i=n.data)n.data=R(i);if(t!="SCRIPT"&&t!="STYLE")for(i=0;x=n.childNodes[i];++i)F(x)} F(document) })()
```


## References
1. [Jesse Ruderman](https://www.squarefree.com/bookmarklets/forms.html)
