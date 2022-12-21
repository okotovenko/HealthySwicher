// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('load', function () {
	let title = document.querySelectorAll('[data-title]');

	for (let i = 0; i < title.length; i++) {
		let titleElement = title[i];
		for (let j = 0, time = 0; j < titleElement.children.length; j++, time += 0.3) {
			let element = titleElement.children[j];
			element.style = `
			opacity: 1;
			transition: opacity 3s ease ${time}s;
			`
		}
	}

	let animElement = this.document.querySelectorAll('[data-anim]');
	if (animElement.length > 0) {
		animElement.forEach(element => {
			element.classList.add('anim')
		});
	}

})

