

// // function fun1() {

// // 	var rad = document.getElementsByName('myRadio');
// // 	for (var i=0; i < rad.length; i++) {
// // 		if (rad[i].checked) {
// // 			modalController();
// // 		}
// // 	}
// // }
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
// var chart1 = new Chart(document.getElementById('chartContainer').getContext('2d'), {
// 	type: 'line',
// 	data: {
// 		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// 		datasets: [{
// 			label: 'Test',
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: ['white'],
// 			borderColor: ['white'],
// 			borderWidth: 2
// 		}]
// 	},
// 	options: {
// 	  scales: {
// 		y: {
// 			beginAtZero: true
// 		}
// 	  }
// 	}
//   });
//   var chart2 = new Chart(document.getElementById('chartContainer').getContext('2d'), {
// 	type: 'bar',
// 	data: {
// 		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// 		datasets: [{
// 			label: 'Test',
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: ['white'],
// 			borderColor: ['white'],
// 			borderWidth: 2
// 		}]
// 	},
// 	options: {
// 	  scales: {
// 		y: {
// 			beginAtZero: true
// 		}
// 	  }
// 	}
//   });
//   var chart3 = new Chart(document.getElementById('chartContainer').getContext('2d'), {
// 	type: 'pie',
// 	data: {
// 		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// 		datasets: [{
// 			label: 'Test',
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: ['white'],
// 			borderColor: ['white'],
// 			borderWidth: 2
// 		}]
// 	},
// 	options: {
// 	  scales: {
// 		y: {
// 			beginAtZero: true
// 		}
// 	  }
// 	}
//   });
//   // Обработчик события при изменении выбранного radio button
// document.querySelectorAll('input[name="graph"]').forEach(function(radio) {
//   radio.addEventListener('change', function() {
//     // Очищаем содержимое контейнера
//     document.getElementById('chartContainer').innerHTML = '';

//     // Отображаем выбранный график
//     if (this.value === 'graph1') {
//       chart1.render();
//     } else if (this.value === 'graph2') {
//       chart2.render();
//     } else if (this.value === 'graph3') {
//       chart3.render();
//     }
//   });
// });