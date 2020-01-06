# bookmarklets
Some JavaScript bookmarklets I use occasionally. These are generally pretty rough since I tend to piece them together on-the-fly and they just need to be minimally functional.

## Dump Cookies
Pops open a page containing cookies for the current site.
```javascript
javscript:function a(e){return c=/; /g,e.replace(c,"<br><br>")}if(document.cookie="",document.cookie.length<1)alert("No cookie from this site!");else with((na=open("","","")).document)write(a("Cookies for "+document.title.link(window.location.href)+" on "+new Date+"<hr>"+document.cookie)),close();
```


## Dump Comments
A bit rough but pops open a page with a decent portion of obvious HTML comments from a page.
```javacsript
javascript:function getNodes%28e%2Co%2Ct%2Cn%2Cc%29%7Bvar d%3D%5B%5D%2Cr%3D%210%3D%3D%3DgetNodes%5Bo%5D%3B%28n%3Dn%7C%7Cdocument.documentElement%29.constructor%3D%3D%3DArray%26%26%28n%3D%7BchildNodes%3An%7D%29%3Bfor%28var s%3Dn.childNodes%2Ci%3D0%2Cl%3Ds.length%3Bi<l%3Bi%2B%2B%29%7Bvar m%3Ds%5Bi%5D%3Bm.childNodes.length%26%26%21c%26%26%28d%3Dd.concat%28getNodes%28e%2Co%2Ct%2Cm%2Cc%29%29%29%2C%28r%3Fm%5Be%5D%3Avoid 0%21%3D%3Dm%5Be%5D%26%26%28t%3F""%5Bt%5D%26%26String%28m%5Be%5D%29%5Bt%5D%28o%29%3Am%5Be%5D%3D%3Do%29%29%26%26%28d%5Bd.length%5D%3Dm%29%7Dreturn d%7Dfunction hjK%28e%29%7Breturn D3p%3D%2F%3B %2Fg%2Ce.replace%28D3p%2C"<br><br>"%29%7Dif%28getNodes.null%3D%210%2CgetNodes%5Bvoid 0%5D%3D%210%2CgetNodes%28"nodeType"%2C8%29.length<1%29alert%28"No comments on this site%21"%29%3Belse with%28%28na%3Dopen%28""%2C""%2C""%29%29.document%29final_comments%3D""%2Ccomments%3DgetNodes%28"nodeType"%2C8%29%2Ccomments.forEach%28function%28e%29%7Bfinal_comments%2B%3D"<p>"%2Be.data%2B"<%2Fp>"%7D%29%2Cwrite%28hjK%28"Comments for "%2Bdocument.title.link%28window.location.href%29%2B" on "%2Bnew Date%2B"<hr>"%2Bfinal_comments%29%29%2Cclose%28%29%3B
```

