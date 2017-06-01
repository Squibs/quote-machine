onclickFlag = true;

function ajax_request() {
	$(".content").hide();
	$(".title").hide();
	$(".source").hide();
	$(".loading").show();


	setTimeout(function() {
		$.ajax({
			url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
			success: function(data) {

				post = data.shift();
				var contentLength = Math.floor(($(".note-card").width() * 470) * 0.0018);

				if (post.content.length > contentLength) {
					errorControl++;
					ajax_request();
				} else {
					$(".title").html(post.title);
					$(".content").html(post.content);

					$(".loading").hide();
					$(".content").show();
					$(".title").show();
					$(".source").show();

					onclickFlag = true;

					if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
						$(".source").html('Source: ' + post.custom_meta.Source);
						$('a[href^="http://"]').attr('target','_blank');
					} else {
						$(".source").text('');
					}
				}
			},

			error: function() {
				if (errorControl < 2) {
					errorControl++;
					ajax_request();
				} else {
					$(".loading").hide();
					$(".content").show();
					$(".title").show();
					$(".source").show();

					onclickFlag = true;

					$(".content").html("<p>There was an error.</p>");
					return;
				}
			},

			cache: false
		});


	}, 0);
}

$(".quote-link").on("click", function(e) {
	
	e.preventDefault();
	errorControl = 0;

	if (onclickFlag === true) {
		onclickFlag = false;
		ajax_request();
	} else {
		return;
	}
});


$(".twitter-link").on("click", function() {
	window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp,SquibsVids&text=" + encodeURIComponent('"' + $(post.content).text().trim() + '"' + " - " + post.title), '_blank');
});