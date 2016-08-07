(function (app) {
	'use strict';

	// definitions
	function Foo () {
		this.someValue = 1;
		this.name = 'Foo';
	}

	Foo.prototype = {
		getName: function () {
			return 'my name is ' + this.name;
		},

		getChildren: function () {
			if (this.children.length === 0) {
				this.children.push('');
			}
			return this.children;
		},
	};

	function Bar () {
		this.someValue = undefined;
		this.name = '';
		this.children= [];
	}

	Bar.prototype =  new Foo();
	// end of definitions

	app.Foo = Foo;
	app.Bar = Bar;

})(window);

  
