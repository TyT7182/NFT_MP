import Choices from 'choices.js';
if (window.location.pathname == '/') {



	const defSelect = () => {
		const element = document.querySelector('.default');
		const choices = new Choices(element, {
			searchEnabled: false,
			allowHTML: true,
			position: 'up',
			
		});
	};
	defSelect();




	const multiDefault = () => {
		const elements = document.querySelectorAll('.multiDefault');
		elements.forEach(el => {
			const choices = new Choices(el, {
				searchEnabled: false,
				allowHTML: true,
				position: 'up',
				
			});
		})
	};
	multiDefault();




	const shortSelect = () => {
		const element = document.querySelector('.short-sel');
		const choices = new Choices(element, {
			searchEnabled: false,
			allowHTML: true,
			placeholder: false,
			itemSelectText: '',
			position: 'up',
			
		});
		

	};
	shortSelect();
};
if (window.location.pathname == '/upload-2.html') {
	
	const multiDefault = () => {
		const elements = document.querySelectorAll('.multiDefault');
		elements.forEach(el => {
			const choices = new Choices(el, {
				searchEnabled: false,
				allowHTML: true,
				position: 'up',
				
			});
		})
	};
	multiDefault();
}


































