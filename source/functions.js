(function (app) {

	'use strict';
	app.localFoo = function () {
   
        app.foo =  3;

		var some_value = foo();

		function foo () {
			return 7;
		};

		return some_value;
	};

    app.foo = undefined;

})(window);
