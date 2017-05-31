$(".genQuote").on("click", function() {
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
		$(".quotes").html(JSON.stringify(json));
	});
});