(function (app) {
	'use strict';

	var veryBigArray = [], i = 0;

	while (veryBigArray.length < 20000000) {
		veryBigArray.push(i+=2);
	}

	function quickSearch (searchElement) {
		console.log(searchElement);
		var arrLength = veryBigArray.length;
		for (var i=0; i < arrLength; i++ ){
			if (searchElement < 0) {
				return 'argument should be >= 0';
			} else if (typeof searchElement === 'number' && searchElement % 2 !== 0 ){
				return 'argument should be even';
			} else if ( searchElement === undefined) {
				return 'argument should be defined';
			} else {
				return i;
			}
		}
	}

	app.quickSearch = quickSearch;

})(window);
