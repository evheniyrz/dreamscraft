window.addEventListener("DOMContentLoaded", beauty);

function beauty() {
	const progressBar = document.getElementById("progressIndicator");
	const contentText = document.getElementById("container");
	const viewPort = document.getElementById("wrapper");
	const displayCount = document.getElementById("monitor");
	const input = document.querySelector("input[type='color']");
	const countMonitor = document.getElementById("countMonitor");

	displayCount.innerHTML = contentText.scrollTop + " px";

	beast();

	window.addEventListener("resize", beast);
	input.addEventListener("change", selectColor);

	function selectColor() {
		let color = input.value;
		viewPort.style.background = color;
		displayCount.style.color = color;
	}

	function beast() {
		let viewportHeight = viewPort.clientHeight;
		let contentHeight = contentText.scrollHeight;
		let differ = (contentHeight - viewportHeight) / 100;

		contentText.addEventListener("scroll", () => {
			progressBar.style.width = contentText.scrollTop / differ + "%";
			displayCount.innerHTML = contentText.scrollTop + " px";
			countMonitor.innerHTML = Math.round(contentText.scrollTop / differ) + "%";
		});

	}
	
}

