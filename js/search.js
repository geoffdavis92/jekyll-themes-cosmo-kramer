var query = location.search,
	parseQuery = function(q) {
		var o = {}, 
			a = [];
		q = q.split('?')[1];
		q = q.split('&');
		q.forEach(function(el,i) {
			var key = el.split('=')[0],
				val = el.split('=')[1];
			a.push(key,val);
			o[key] = val;
			return o;
		})
		return {
			object: o,
			array: a
		};
	},
	searchedTerm = undefined;

function titleAddSearch(query) {
	var search = parseQuery(query).object,
		key = search.author ? ' Authors' : search.date ? ' Dates' : search.tag ? ' Tags' : '',
		val = search.author ? search.author : search.date ? search.date : search.tag ? search.tag : '';
	searchKey.innerText = key;
	searchVal.innerText = val.replace(/\%20/g,' ');
	return searchedTerm;
}

function removePosts(term) {
	var results = document.querySelectorAll('#results article'),
		search = parseQuery(query).array;
	results.forEach(function(post,i) {
		var match;
		var getSearchedPostMeta = function() {
			var x = [].slice.call(post.children).forEach(function(child,i) { 
				var searchVal = search[1].replace(/\%20/g,' ');
				console.log(child.getAttribute('class'), 'post-'+search[0])
				if (child.getAttribute('class').indexOf('post-'+search[0]) >= 0) {
					console.log('match with ',child,'post-'+search[0] ,child.innerText)
					console.log(child.innerText.indexOf(searchVal),searchVal)
					if (child.innerText.indexOf(searchVal) > -1) {
						// return match = true;
						// post.style.display = 'none';
					} else {
						// return match = false;
						post.style.display = 'none';
					}
				} else {
					console.log('no match')
					return match = false;
				}
			});
			return match;
		};
		getSearchedPostMeta();
		// if (!match) {
		// 	post.style.display = 'none';
		// }
	})
}

titleAddSearch(query);
removePosts(searchedTerm);