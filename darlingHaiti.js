AOS.init();

function contentHover() {
	var content = document.getElementsByTagName("i");
	for(var i = 0; i < content.length; i++) {
		content[i].addEventListener("mouseover", function() {
			this.classList.add("brandHover");
			this.classList.remove("rotateOut");
		});
		content[i].addEventListener("mouseout", function() {
			this.classList.remove("brandHover");
			this.classList.add("rotateOut");
		});
	}
}
contentHover();

