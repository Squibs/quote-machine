$(".genQuote").on("click", function() {
	$.getJSON("http://api.forismatic.com/api/1.0/", function(json) {
		$(".quotes").html(JSON.stringify(json));
	});
});

