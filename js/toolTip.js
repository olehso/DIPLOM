function showTooltip(text) {
	var tooltipTextarea = document.getElementById('tooltipTextarea');
	tooltipTextarea.value = text;
}

function hideTooltip() {
	var tooltipTextarea = document.getElementById('tooltipTextarea');
	tooltipTextarea.value = '';
}