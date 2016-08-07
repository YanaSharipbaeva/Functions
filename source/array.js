(function (app) {
	'use strict';
	
	function onlyDoubledOdds (sourceArray) {
		var result = [];
		var maxSourceLength = 4294967296;
		for (var i = 0; i < sourceArray.length; i++) {
			if (sourceArray.length > maxSourceLength) {
				return result;
			}
			if (sourceArray[i] <= 0  || (!isNumber(sourceArray[i])) ) {
				return result;
			} else if (sourceArray[i] % 2 !== 0) {
				sourceArray[i] *= 2;
				result.push(sourceArray[i]);
			}
			
		}

		function isNumber (el) {
 			return !isNaN(el) && isFinite(el) && typeof el === 'number';			
		} 
		
		return result;		
	}
	
	app.onlyDoubledOdds = onlyDoubledOdds;

})(window);
