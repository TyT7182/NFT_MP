if (window.location.pathname == '/') {


	let input_def = document.getElementById('input_search-def');
	let input_simple = document.getElementById('input_search-simple');
	let searchIco_1 = document.getElementById('search-ico-1');
	let searchIco_2 = document.getElementById('search-ico-2');
	let searchIco_3 = document.getElementById('search-ico-3');
	let searchIco_4 = document.getElementById('search-ico-4');
	let searchIco_5 = document.getElementById('search-ico-5');
	let searchIco_6 = document.getElementById('search-ico-6');
	let text_error = document.getElementById('text_error');


	if (window.location.pathname == '/') {
		
	}

	// фокус и расфокус

	// input_def.onfocus = function(event) {
	// 	input_def.style.border = "2px solid #3772FF";
	// 	searchIco_1.style.fill = "#3772FF";
	// }
	// input_def.onblur = function(event) {
	// 	input_def.style.border = "2px solid #E6E8EC";
	// 	searchIco_1.style.fill = "#777E90";
	// }
	input_simple.onfocus = function(event) {
		input_simple.style.border = "2px solid #3772FF";
		
	}
	input_simple.onblur = function(event) {
		input_simple.style.border = "2px solid #353945";
		
	}




	// Различные состояния def инпутов

	// input_def.oninput = function(event) {
	// 	if (input_def.value == '') {
	// 		searchIco_2.style.display = 'none';
	// 	}
	// 	if (input_def.value != 0) {
	// 		searchIco_2.style.display = 'block';
	// 	}
	// 	if (input_def.value == "error") {
	// 		searchIco_2.style.display = 'none';
	// 		searchIco_3.style.display = 'block';
	// 		input_def.style.border = "2px solid #EF466F";
	// 		searchIco_1.style.fill = "#EF466F";
	// 		text_error.style.display = 'block';
	// 	};
	// 	if (input_def.value != "error") {
	// 		searchIco_3.style.display = 'none';
	// 		input_def.style.border = "2px solid #3772FF";
	// 		searchIco_1.style.fill = "#777E90";
	// 		text_error.style.display = 'none';

	// 	};
	// 	console.log(input_def.value);

	// }



	input_simple.oninput = function(event) {

		if (input_simple.value != 0) {
			
		}
		if (input_simple.value == "error") {
			input_simple.style.border = "2px solid #EF466F";
			searchIco_4.style.display = 'block';
		};
		if (input_simple.value != "error") {
			input_simple.style.border = "2px solid #3772FF";
			searchIco_4.style.display = 'none';
		};
		if (input_simple.value == "okay") {
			input_simple.style.border = "2px solid #45B26B";
			searchIco_5.style.display = 'block';
		};
		if (input_simple.value != "okay") {
			searchIco_5.style.display = 'none';
		};


	}












	

}

