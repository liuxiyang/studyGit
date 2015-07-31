requirejs.config({
	paths : {
		jquery : 'jquery.min'
	}
});

requirejs(['jquery', 'validata'],function($, validata){
	console.log(validata.isEqual('1',1))
});