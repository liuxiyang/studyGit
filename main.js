requirejs.config({
	paths : {
		jquery : 'jquery.min'
	}
});

requirejs(['jquery', 'validata'],function($, validata){
	console.log('something change');
	console.log('我又更改了....');
	console.log('track change....');


	console.log('I am a new branch');
	console.log('I am a new branch22');
});