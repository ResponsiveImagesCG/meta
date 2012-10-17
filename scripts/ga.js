//Dynamically loads google analytics, but only on github. 
//Google analyitics is not allowed on the W3C because of their privacy policy. 
if(window.location.host === "responsiveimagescg.github.com"){
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-35523667-1']);
	  _gaq.push(['_trackPageview']);
	
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
}