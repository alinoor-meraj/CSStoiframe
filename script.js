setTimeout(function() {
		const myframe = document.getElementById("IFRAME_ID");
		//console.log(myframe.contentWindow.document.head);
		const link = document.createElement("link");
		link.href = "YOUR_CSS_FILE_LINK";
		link.rel = "stylesheet";
		myframe.contentWindow.document.head.appendChild(link);
}, 7000);
