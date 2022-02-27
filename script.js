setTimeout(function() {
		const sheets = document.styleSheets;
		const myframe = document.getElementById("twitter-widget-0");
		console.log(myframe.contentWindow.document.head);
		const link = document.createElement("link");
		link.href = "https://a11.ventures/wp-content/themes/Divi/iframe.css";
		link.rel = "stylesheet";
		myframe.contentWindow.document.head.appendChild(link);
}, 7000);
