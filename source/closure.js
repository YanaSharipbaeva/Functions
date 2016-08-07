(function (app) {
	'use strict';

	function closure () {
		var foo = 'some',
		// definitions
			bar = function () {
				var foo = 'some';
				if (typeof foo === 'string') {
					return foo;
				}
			};

		// end of definitions
		foo += 'thing wrong';

		app.foo = foo;
		return bar;
	}

	app.closure = closure;



})(window);
