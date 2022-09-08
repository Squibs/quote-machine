onclickFlag = true;

var post;

function ajax_request() {
	$(".content").hide();
	$(".title").hide();
	$(".source").hide();
	$(".loading").show();


	setTimeout(function() {
		// $.ajax({
		// 	url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		// 	success: function(data) {
    
    // api url changed
    $.ajax({
			url: `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&timestamp=${new Date().getTime()}`,
      type: 'GET',
      async: true,
      dataType: 'json',
			success: function(data) {
				post = data[0];
				var contentLength = Math.floor(($(".note-card").width() * 470) * 0.0018);

				if (post.content.length > contentLength) {
					errorControl++;
					ajax_request();
				} else {
					$(".title").html(post.title.rendered);
					$(".content").html(post.content.rendered);

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
	window.open("https://twitter.com/intent/tweet?related=freeCodeCamp,SquibsVids&text=" + encodeURIComponent('"' + $(post.content.rendered).text().trim() + '"' + " - " + $(post.title.rendered).text().trim()), '_blank');
});
