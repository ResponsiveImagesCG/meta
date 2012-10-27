//Dynamically loads google analytics, but only on github. 
//Google analyitics is not allowed on the W3C because of their privacy policy. 
if(window.location.host.search("responsiveimages.org") >= 0){
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-35760540-1']);
	  _gaq.push(['_trackPageview']);
	  _gaq.push(['_setDomainName', 'responsiveimages.org']);
	
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
}