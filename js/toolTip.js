function showTooltip(text) {
	var tooltipTextarea = document.getElementById('tooltipTextarea');
	tooltipTextarea.value = text;
}

function hideTooltip() {
	var tooltipTextarea = document.getElementById('tooltipTextarea');
	tooltipTextarea.value = '';
}

function showTooltipDesc(text) {
	var tooltipTextarea = document.getElementById('tooltipTextareaDescription');
	tooltipTextarea.value = text;
}

function hideTooltipDesc() {
	var tooltipTextarea = document.getElementById('tooltipTextareaDescription');
	tooltipTextarea.value = '';
}