// form validation js

var form = document.querySelector('form')

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var inputs = document.querySelectorAll('input[data-required]'),
		errors = [];
	inputs.forEach(function(el,i) {
		var name = el.getAttribute('name'),
			errorLabel = document.querySelector('label.error[for="'+name+'"]');
		if (el.value == '' || el.value == 'false') {
			errorLabel.setAttribute('class','error show')
			errors.push(name);
		} else {
			if (errorLabel.getAttribute('class').indexOf('show') > -1) {
				errorLabel.setAttribute('class','error');
			}
		}
	});
	console.log(errors)
	if (errors.length < 1) {

	}
})