var navLinks = document.querySelectorAll('nav li'),
	arr = [].slice.call(navLinks);

arr.forEach(function(el,i,arr) {
	el.addEventListener('click',function() {
		var url = el.children[0].getAttribute('href')
		window.location = url;
	})
})