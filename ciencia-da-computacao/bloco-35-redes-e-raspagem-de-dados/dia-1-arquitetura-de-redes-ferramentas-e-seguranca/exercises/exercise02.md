# GET 301

(.ambient_dia_1) ➜  api git:(exercicios/bloco35) curl -X GET google.com          
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>


# GET com -L

(.ambient_dia_1) ➜  api git:(exercicios/bloco35) ✗ curl -X GET -L google.com
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="pt-BR"><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){window.google={kEI:'MX7RYu36KtzZ1sQP3tmLgAU',kEXPI:'0,1302536,56873,6059,206,4804,2316,383,246,5,1354,4013,1123753,1197762,639,380089,16115,17444,1953,9287,17572,4859,1361,9291,3028,4745,12835,4020,978,13228,516,3331,10622,22112,629,5081,1593,1279,2742,149,1943,6297,3514,606,2023,1777,520,14670,605,2623,2844,7,4773,826,11851,16320,1851,15756,3,346,230,6459,149,13975,4,1528,2304,7039,20309,1714,3050,2658,7357,11443,2215,21223,5812,2545,4094,4052,3,3541,1,11943,30211,2,14022,1649,724,3875,7868,11623,5679,1021,2380,2719,18242,2,3,6,7769,4568,6256,23421,1252,5835,14967,4333,6089,1395,445,2,2,1,24626,2006,8155,6582,799,2449,593,11638,2163,5178,9623,1,4830,8,1922,5703,3466,610,24,5415,1448,1279,1663,2,1487,38,1059,1465,507,4,1332,1496,7203,6038,1309,4385,36,254,3493,1979,191,118,40,431,18,1647,379,511,240,1,4,1,2,223,2,1,2068,1102,284,2455,552,977,7,122,415,285,4,1,2,2,2,2,1384,54,1438,843,1684,71,1350,105,922,20,1566,243,832,854,746,572,1232,533,11,663,2542,10,315,270,2,1588,10,4,588,14,34,170,2,46,3,34,672,2,98,130,564,251,311,1085,417,308,316,258,718,76,782,2046,349,5381629,1860,3458,148,10,8799634,3311,141,795,19735,1,1,346,426,5,1,259,1,3,1,2,3,1,3,4,1,8,2,1,2,3,89,22,3,23949644,2862027,1180116,1964,2935,159,1358,12221,3405,5860,1379481,2424,12866',kBL:'ecaJ'};google.sn='webhp';google.kHL='pt-BR';})();(function(){
var f=this||self;var h,k=[];function l(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||h}function m(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b}
function n(a,b,c,d,g){var e="";c||-1!==b.search("&ei=")||(e="&ei="+l(d),-1===b.search("&lei=")&&(d=m(d))&&(e+="&lei="+d));d="";!c&&f._cshid&&-1===b.search("&cshid=")&&"slh"!==a&&(d="&cshid="+f._cshid);c=c||"/"+(g||"gen_204")+"?atyp=i&ct="+a+"&cad="+b+e+"&zx="+Date.now()+d;/^http:/i.test(c)&&"https:"===window.location.protocol&&(google.ml&&google.ml(Error("a"),!1,{src:c,glmm:1}),c="");return c};h=google.kEI;google.getEI=l;google.getLEI=m;google.ml=function(){return null};google.log=function(a,b,c,d,g){if(c=n(a,b,c,d,g)){a=new Image;var e=k.length;k[e]=a;a.onerror=a.onload=a.onabort=function(){delete k[e]};a.src=c}};google.logUrl=n;}).call(this);(function(){
google.y={};google.sy=[];google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c])}google.y[c]=[a,b];return!1};google.sx=function(a){google.sy.push(a)};google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};google.bx=!1;google.lx=function(){};}).call(this);google.f={};(function(){
document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"===c||"q"===c&&!a.elements.q.value?!0:!1}else a=!1;a&&(b.preventDefault(),b.stopPropagation())},!0);document.documentElement.addEventListener("click",function(b){var a;a:{for(a=b.target;a&&a!==document.documentElement;a=a.parentElement)if("A"===a.tagName){a="1"===a.getAttribute("data-nohref");break a}a=!1}a&&b.preventDefault()},!0);}).call(this);</script><style>#gbar,#guser{font-size:13px;padding-top:1px !important;}#gbar{height:22px}#guser{padding-bottom:7px !important;text-align:right}.gbh,.gbd{border-top:1px solid #c9d7f1;font-size:1px}.gbh{height:0;position:absolute;top:24px;width:100%}@media all{.gb1{height:22px;margin-right:.5em;vertical-align:top}#gbar{float:left}}a.gb1,a.gb4{text-decoration:underline !important}a.gb1,a.gb4{color:#00c !important}.gbi .gb4{color:#dd8e27 !important}.gbf .gb4{color:#900 !important}
</style><style>body,td,a,p,.h{font-family:arial,sans-serif}body{margin:0;overflow-y:scroll}#gog{padding:3px 8px 0}td{line-height:.8em}.gac_m td{line-height:17px}form{margin-bottom:20px}.h{color:#1558d6}em{font-weight:bold;font-style:normal}.lst{height:25px;width:496px}.gsfi,.lst{font:18px arial,sans-serif}.gsfs{font:17px arial,sans-serif}.ds{display:inline-box;display:inline-block;margin:3px 0 4px;margin-left:4px}input{font-family:inherit}body{background:#fff;color:#000}a{color:#4b11a8;text-decoration:none}a:hover,a:active{text-decoration:underline}.fl a{color:#1558d6}a:visited{color:#4b11a8}.sblc{padding-top:5px}.sblc a{display:block;margin:2px 0;margin-left:13px;font-size:11px}.lsbb{background:#f8f9fa;border:solid 1px;border-color:#dadce0 #70757a #70757a #dadce0;height:30px}.lsbb{display:block}#WqQANb a{display:inline-block;margin:0 12px}.lsb{background:url(/images/nav_logo229.png) 0 -261px repeat-x;border:none;color:#000;cursor:pointer;height:30px;margin:0;outline:0;font:15px arial,sans-serif;vertical-align:top}.lsb:active{background:#dadce0}.lst:focus{outline:none}.tiah{width:458px}</style><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){window.google.erd={jsr:1,bv:1616,de:true};
var f=this||self;var g,h=null!=(g=f.mei)?g:1,m,n=null!=(m=f.sdo)?m:!0,p=0,q,r=google.erd,u=r.jsr;google.ml=function(a,b,d,k,c){c=void 0===c?2:c;b&&(q=a&&a.message);if(google.dl)return google.dl(a,c,d),null;if(0>u){window.console&&console.error(a,d);if(-2===u)throw a;b=!1}else b=!a||!a.message||"Error loading script"===a.message||p>=h&&!k?!1:!0;if(!b)return null;p++;d=d||{};var e=c;c=encodeURIComponent;b="/gen_204?atyp=i&ei="+c(google.kEI);google.kEXPI&&(b+="&jexpid="+c(google.kEXPI));b+="&srcpg="+c(google.sn)+"&jsr="+c(r.jsr)+"&bver="+c(r.bv)+("&jsel="+e);e=a.lineNumber;void 0!==e&&(b+="&line="+
e);var l=a.fileName;l&&(b+="&script="+c(l),e&&l===window.location.href&&(e=document.documentElement.outerHTML.split("\n")[e],b+="&cad="+c(e?e.substring(0,300):"No script found.")));for(var t in d)b+="&",b+=c(t),b+="=",b+=c(d[t]);b=b+"&emsg="+c(a.name+": "+a.message);b=b+"&jsst="+c(a.stack||"N/A");12288<=b.length&&(b=b.substr(0,12288));a=b;k||google.log(0,"",a);return a};window.onerror=function(a,b,d,k,c){q!==a&&(a=c instanceof Error?c:Error(a),void 0===d||"lineNumber"in a||(a.lineNumber=d),void 0===b||"fileName"in a||(a.fileName=b),google.ml(a,!1,void 0,!1,"SyntaxError"===a.name||"SyntaxError"===a.message.substring(0,11)||0<a.message.indexOf("Script error")?2:0));q=null;n&&p>=h&&(window.onerror=null)};})();</script></head><body bgcolor="#fff"><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){var src='/images/nav_logo229.png';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;}
if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();}
}
})();</script><div id="mngb"><div id=gbar><nobr><b class=gb1>Pesquisa</b> <a class=gb1 href="http://www.google.com.br/imghp?hl=pt-BR&tab=wi">Imagens</a> <a class=gb1 href="http://maps.google.com.br/maps?hl=pt-BR&tab=wl">Maps</a> <a class=gb1 href="https://play.google.com/?hl=pt-BR&tab=w8">Play</a> <a class=gb1 href="http://www.youtube.com/?gl=BR&tab=w1">YouTube</a> <a class=gb1 href="https://news.google.com/?tab=wn">Not�cias</a> <a class=gb1 href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1 href="https://drive.google.com/?tab=wo">Drive</a> <a class=gb1 style="text-decoration:none" href="https://www.google.com.br/intl/pt-BR/about/products?tab=wh"><u>Mais</u> &raquo;</a></nobr></div><div id=guser width=100%><nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a href="http://www.google.com.br/history/optout?hl=pt-BR" class=gb4>Hist�rico da Web</a> | <a  href="/preferences?hl=pt-BR" class=gb4>Configura��es</a> | <a target=_top id=gb_70 href="https://accounts.google.com/ServiceLogin?hl=pt-BR&passive=true&continue=http://www.google.com/&ec=GAZAAQ" class=gb4>Fazer login</a></nobr></div><div class=gbh style=left:0></div><div class=gbh style=right:0></div></div><center><br clear="all" id="lgpd"><div id="lga"><img alt="Google" height="92" src="/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png" style="padding:28px 0 14px" width="272" id="hplogo"><br><br></div><form action="/search" name="f"><table cellpadding="0" cellspacing="0"><tr valign="top"><td width="25%">&nbsp;</td><td align="center" nowrap=""><input name="ie" value="ISO-8859-1" type="hidden"><input value="pt-BR" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden"><div class="ds" style="height:32px;margin:4px 0"><div style="position:relative;zoom:1"><input class="lst tiah" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000;padding-right:38px" autocomplete="off" value="" title="Pesquisa Google" maxlength="2048" name="q" size="57"><img src="/textinputassistant/tia.png" style="position:absolute;cursor:pointer;right:5px;top:4px;z-index:300" data-script-url="/textinputassistant/11/pt-BR_tia.js" id="tsuid1" alt="" height="23" width="27"><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){var id='tsuid1';document.getElementById(id).onclick = function(){var s = document.createElement('script');s.src = this.getAttribute('data-script-url');(document.getElementById('xjsc')||document.body).appendChild(s);};})();</script></div></div><br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="Pesquisa Google" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid2" value="Estou com sorte" name="btnI" type="submit"><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){var id='tsuid2';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked = 1;if (this.form.iflsig)this.form.iflsig.disabled = false;}
else top.location='/doodles/';};})();</script><input value="AJiK0e8AAAAAYtGMQTUS3ycEX5YNtY24FKdMS6Pd50iI" name="iflsig" type="hidden"></span></span></td><td class="fl sblc" align="left" nowrap="" width="25%"><a href="/advanced_search?hl=pt-BR&amp;authuser=0">Pesquisa avan�ada</a></td></tr></table><input id="gbv" name="gbv" type="hidden" value="1"><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){
var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(c=0;d=e[c++];)try{new ActiveXObject(d),b="2"}catch(h){}}a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f},0)};}).call(this);</script></form><div id="gac_scont"></div><div style="font-size:83%;min-height:3.5em"><br></div><span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="WqQANb"><a href="/intl/pt-BR/ads/">Solu��es de publicidade</a><a href="/services/">Solu��es empresariais</a><a href="/intl/pt-BR/about.html">Sobre o Google</a><a href="http://www.google.com/setprefdomain?prefdom=BR&amp;prev=http://www.google.com.br/&amp;sig=K_QPAOo9EIaYhgjB1zeRUepyzkd3A%3D">Google.com.br</a></div></div><p style="font-size:8pt;color:#70757a">&copy; 2022 - <a href="/intl/pt-BR/policies/privacy/">Privacidade</a> - <a href="/intl/pt-BR/policies/terms/">Termos</a></p></span></center><script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){window.google.cdo={height:757,width:1440};(function(){
var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight}a&&b&&(a!=google.cdo.width||b!=google.cdo.height)&&google.log("","","/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI);}).call(this);})();</script> <script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){google.xjs={ck:'xjs.hp.0ZdZ9Q3uqrw.L.X.O',cs:'ACT90oHy4Z_9pyHHelHHDTNWhYMuP6DgJw',excm:[]};})();</script>  <script nonce="icB8M3xThTVWxqKzdcGd_Q">(function(){var u='/xjs/_/js/k\x3dxjs.hp.en.Ob9ZD00ZUx4.O/am\x3dAMATAIAEQAI/d\x3d1/ed\x3d1/rs\x3dACT90oE4myh1DULgKPtdN-NWkiN-VjDJsQ/m\x3dsb_he,d';
var d=this||self,e=function(a){return a};var g;var l=function(a,b){this.g=b===h?a:""};l.prototype.toString=function(){return this.g+""};var h={};
function n(){var a=u;google.lx=function(){p(a);google.lx=function(){}};google.bx||google.lx()}
function p(a){google.timers&&google.timers.load&&google.tick&&google.tick("load","xjsls");var b=document;var c="SCRIPT";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);if(void 0===g){b=null;var k=d.trustedTypes;if(k&&k.createPolicy){try{b=k.createPolicy("goog#html",{createHTML:e,createScript:e,createScriptURL:e})}catch(q){d.console&&d.console.error(q.message)}g=b}else g=b}a=(b=g)?b.createScriptURL(a):a;a=new l(a,h);c.src=a instanceof l&&a.constructor===l?a.g:"type_error:TrustedResourceUrl";var f,m;(f=(a=null==(m=(f=(c.ownerDocument&&c.ownerDocument.defaultView||window).document).querySelector)?void 0:m.call(f,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":"")&&c.setAttribute("nonce",f);document.body.appendChild(c);google.psa=!0};google.xjsu=u;setTimeout(function(){n()},0);})();function _DumpException(e){throw e;}
function _F_installCss(c){}
(function(){google.jl={attn:false,blt:'none',chnk:0,dw:false,dwu:true,emtn:0,end:0,ine:false,injs:'none',injt:0,injth:0,injv2:false,lls:'default',pdt:0,rep:0,snet:true,strt:0,ubm:false,uwp:true};})();(function(){var pmc='{\x22d\x22:{},\x22sb_he\x22:{\x22agen\x22:true,\x22cgen\x22:true,\x22client\x22:\x22heirloom-hp\x22,\x22dh\x22:true,\x22dhqt\x22:true,\x22ds\x22:\x22\x22,\x22ffql\x22:\x22pt-BR\x22,\x22fl\x22:true,\x22host\x22:\x22google.com\x22,\x22isbh\x22:28,\x22jsonp\x22:true,\x22msgs\x22:{\x22cibl\x22:\x22Limpar pesquisa\x22,\x22dym\x22:\x22Voc� quis dizer:\x22,\x22lcky\x22:\x22Estou com sorte\x22,\x22lml\x22:\x22Saiba mais\x22,\x22oskt\x22:\x22Ferramentas de inser��o de texto\x22,\x22psrc\x22:\x22Esta pesquisa foi removida do seu\\u003Ca href\x3d\\\x22/history\\\x22\\u003EHist�rico da web\\u003C/a\\u003E\x22,\x22psrl\x22:\x22Remover\x22,\x22sbit\x22:\x22Pesquisa por imagem\x22,\x22srch\x22:\x22Pesquisa Google\x22},\x22ovr\x22:{},\x22pq\x22:\x22\x22,\x22refpd\x22:true,\x22rfs\x22:[],\x22sbas\x22:\x220 3px 8px 0 rgba(0,0,0,0.2),0 0 0 1px rgba(0,0,0,0.08)\x22,\x22sbpl\x22:16,\x22sbpr\x22:16,\x22scd\x22:10,\x22stok\x22:\x22MP7GG2iVafoIutIZaPWJhRnUDLg\x22,\x22uhde\x22:false}}';google.pmc=JSON.parse(pmc);})();</script>        </body></html>% 