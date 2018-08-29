window.addEventListener("DOMContentLoaded", beauty);
	let progressBar, contentText, viewPort, displayScroll, input;
function beauty(){
	 progressBar    = document.querySelector(".progressBar > span");
	 contentText    = document.querySelector(".container");
	 viewPort       = document.querySelector(".wrapper");
	 displayScroll  = document.querySelector(".monitor");
	 input          = document.querySelector("input[type='color']");
	 displayScroll.innerHTML = contentText.scrollTop + " px";
	beast();
	window.addEventListener("resize", beast);

	input.addEventListener("input", ()=>{
				
				let color                 = input.value;
				viewPort.style.background = color;
				displayScroll.style.color = color;
			});
}

function beast(){
	let viewportHeight = viewPort.clientHeight;
	let contentHeight  = contentText.scrollHeight;
	let differ         = (contentHeight - viewportHeight) / 100;

	contentText.addEventListener("scroll", ()=>{
		progressBar.style.width = contentText.scrollTop / differ + "%";
		displayScroll.innerHTML = contentText.scrollTop + " px";
	});

}