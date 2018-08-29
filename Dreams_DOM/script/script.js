window.addEventListener("DOMContentLoaded", beauty);
	let progressBar, contentText, viewPort, displayCount, input;
function beauty(){
	 progressBar    = document.querySelector(".progressBar > span");
	 contentText    = document.querySelector(".container");
	 viewPort       = document.querySelector(".wrapper");
	 displayCount   = document.querySelector(".monitor");
	 input          = document.querySelector("input[type='color']");
	 displayCount.innerHTML = contentText.scrollTop + " px";
	beast();
	window.addEventListener("resize", beast);

	input.addEventListener("input", ()=>{
				
				let color                 = input.value;
				viewPort.style.background = color;
				displayCount.style.color  = color;
			});
}

function beast(){
	let viewportHeight = viewPort.clientHeight;
	let contentHeight  = contentText.scrollHeight;
	let differ         = (contentHeight - viewportHeight) / 100;

	contentText.addEventListener("scroll", ()=>{
		progressBar.style.width = contentText.scrollTop / differ + "%";
		displayCount.innerHTML = contentText.scrollTop + " px";
	});

}