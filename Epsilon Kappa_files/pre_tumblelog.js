/*! scripts/pre_tumblelog.js */
(function(){var a=translated_warning_string;var b=function(d){d=d||window.event;var c=d.target||d.srcElement;if(c.type=="password"){if(confirm(a)){b=function(){}}else{c.value="";return false}}};if(typeof document.addEventListener!="undefined"){document.addEventListener("keypress",b,true)}})();(function(){if(typeof __pbpa==="undefined"||__pbpa===false){return}var i={};var j=document.createElement("a");var o=window.addEventListener?"addEventListener":"attachEvent";var e=o==="attachEvent"?"onmessage":"message";var l=false;var m=[];window[o](e,function(q){var p=(q.data&&q.data.split)?q.data.split(";"):"";if(p[0]==="analytics_iframe_ga_non_ajax_received"){l=true}},false);function g(s,q){m.push(q);if(l){while(m.length){var p=m.shift();s.contentWindow.postMessage(p,s.src.split("/analytics.html")[0])}}}var b=function(){var t=document.getElementById("ga_target");if(!t){return true}var s="/";if(typeof this.called_url!=="undefined"){s=this.called_url}j.href=s;s=j.href;var q="unknown_ajax_blog_route";if(j.pathname.match(/^\/page/)){q="/page/:page"}if(j.pathname.match(/^\/api\/read\/json/)){q="/api/read/json"}try{var p=true;var u=["tick_google_analytics",p,s,q].join(";");g(t,u);if(typeof COMSCORE!=="undefined"){var w="tick_comscore;"+s;g(t,w)}}catch(v){}return true};var h=function(){if(typeof __pbpm!=="undefined"&&__pbpm===false){return}try{var u=parseInt(this.getResponseHeader("X-Tumblr-Pixel"));if(!u){return}var p,t="";for(var s=0;s<u;s++){p=this.getResponseHeader("X-Tumblr-Pixel-"+s);if(!p){return}t+=p}var q,w=t.split("--");w.forEach(function(x){x+="&A=1";q=new Image(1,1);q.src=(r=x.replace(/&R=[^&$]*/,""))+("&R="+escape(document.referrer)).substr(0,2000-r.length).replace(/%.?.?$/,"")})}catch(v){}return true};var f=function(){try{if(window._qevents&&window.__qc){__qc.qpixelsent=[];_qevents.push({qacct:"p-19UtqE8ngoZbM"})}}catch(p){}return true};var a=function(){var q="/";if(typeof this.called_url!=="undefined"){q=this.called_url}j.href=q;var p="unknown_ajax_blog_route";if(j.pathname.match(/^\/page/)){p="/page/:page"}if(j.pathname.match(/^\/api\/read\/json/)){p="/api/read/json"}try{var u=window.YAHOO;if(u&&u.rapid){var s={pd:p,_li:0,i_rad:0,i_strm:0};u.rapid.beaconEvent("tpv",s)}}catch(t){}return true};var d=function(p){j.href=p;var q=j.pathname;if(q[0]!=="/"){q="/"+q}if(!q.match(/^\/page\/[0-9]+\/?$/)&&!q.match(/^\/api\/read\/json$/)){return false}if(i[q]){return false}i[q]=1;return true};var k=XMLHttpRequest.prototype.send;var c=XMLHttpRequest.prototype.onCreate;XMLHttpRequest.prototype.send=function(q){var p=this;if(d(this.called_url)){this[o]("load",function(){return h.call(p)},true);this[o]("load",function(){return b.call(p)},false);this[o]("load",function(){return f.call(p)},false);this[o]("load",function(){return a.call(p)},false)}k.call(this,q)};var n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(p,s,q){this.called_url=s;n.call(this,p,s,q)}})();(function(){if(window.location.hash==="#_=_"){if(window.history&&window.history.replaceState){history.replaceState("",document.title,window.location.pathname+window.location.search)}else{window.location.hash=""}}})();