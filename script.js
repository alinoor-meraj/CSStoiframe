setTimeout(function() {
		const sheets = document.styleSheets;
		const myframe = document.getElementById("twitter-widget-0");
		//console.log(myframe.contentWindow.document.head);
		const link = document.createElement("link");
		link.href = "YOUR_CSS_FILE_LINK";
		link.rel = "stylesheet";
		myframe.contentWindow.document.head.appendChild(link);
}, 7000);
