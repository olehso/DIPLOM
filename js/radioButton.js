function fun1() {
	var rad = document.getElementsByName('myRadio');
	for (var i=0; i < rad.length; i++) {
		if (rad[i].checked) {
			modalController();
		}
	}
}