requirejs.config({
	paths : {
		jquery : 'jquery.min'
	}
});

requirejs(['jquery', 'validata'],function($, validata){
	console.log('something change');
});