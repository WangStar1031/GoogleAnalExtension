var strScript = "";
// Mike
strScript += '  window.dataLayer = window.dataLayer || [];';
strScript += '  function gtag(){dataLayer.push(arguments);}';
strScript += '  gtag("js", new Date());';
strScript += '  gtag("config", "UA-142671532-1");';

// Me
// strScript += '  window.dataLayer = window.dataLayer || [];';
// strScript += '  function gtag(){dataLayer.push(arguments);}';
// strScript += '  gtag("js", new Date());';
// strScript += '  gtag("config", "UA-142847578-1");';

var timer = setInterval(function(){
	var head = document.getElementsByTagName("head");
	if( head.length ){
		clearInterval(timer);
		console.log( "Script Injected");

		var s = document.createElement('script');
		// Mike
		s.src = "https://www.googletagmanager.com/gtag/js?id=UA-142671532-1";

		// Me
		// s.src = "https://www.googletagmanager.com/gtag/js?id=UA-142847578-1";

		s.setAttribute("async", "");
		// s.type="text/javascript";
		// s.innerHTML = strScript;
		document.head.appendChild(s);
		var func = document.createElement('script');
		func.innerHTML = strScript;
		document.head.appendChild(func);

		// chrome.tabs.executeScript({
  //         file: 'js/script.js'
  //       });
	}
});