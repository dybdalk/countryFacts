$(function() {

	$loadingIcon = $(".loading-icon");
	$('#search-button').click(function (){
		$inputText = $("input[name='country-input']").val();
		var url = "https://restcountries.eu/rest/v1/name/" + $inputText;
		var req = $.get(url, function(data) {
			response = data[0];
			$(".name").text(response.name);
			$(".name").attr("href", "https://en.wikipedia.org/wiki/" + response.name);
			$(".capital").text(response.capital);
			$(".population").text(response.population.toLocaleString('en'));
			$(".area").text(response.area.toLocaleString('en'));

			var $search = $(".search");
			var $results = $(".results");
			$search.addClass("hidden");
			$loadingIcon.removeClass("hidden");
			setTimeout(function(){
				$search.addClass("removed");
				setTimeout(function(){
					$results.removeClass("removed");
					$loadingIcon.addClass("hidden");
					setTimeout(function(){
						$results.removeClass("hidden");
					}, 500);
				}, 500);
			}, 500);
		})
		.fail(function(xhr) {
			if(xhr.status == "404"){
				$(".input-text").text($inputText);
				var $search = $(".search");
				var $error = $(".error");
				$search.addClass("hidden");
				$loadingIcon.removeClass("hidden");
				setTimeout(function(){
					$search.addClass("removed");
					setTimeout(function(){
						$error.removeClass("removed");
						$loadingIcon.addClass("hidden");
						setTimeout(function(){
							$error.removeClass("hidden");
						}, 500);
					}, 500);
				}, 500);
			}
			else{
				$(".excuse").text("Looks like something went wrong with the service");
				$(".recourse").text("Try searching again in a few minutes. Or just use Google* to learn things about countries");
				$(".footer").text("*If Google is down, seek shelter immediately and make sure you have access to a two-way radio");
				var $search = $(".search");
				var $error = $(".error");
				$search.addClass("hidden");
				$loadingIcon.removeClass("hidden");
				setTimeout(function(){
					$search.addClass("removed");
					setTimeout(function(){
						$error.removeClass("removed");
						$loadingIcon.addClass("hidden");
						setTimeout(function(){
							$error.removeClass("hidden");
						}, 500);
					}, 500);
				}, 500);
			}
		});
	});

	$("#success-retry").click(function(){
		var $search = $(".search");
		var $results = $(".results");
		$results.addClass("hidden");
		setTimeout(function(){
			$results.addClass("removed");
			setTimeout(function(){
				$search.removeClass("removed");
				setTimeout(function(){
					$search.removeClass("hidden");
				}, 200);
			}, 200);
		}, 200);
	});

	$("#error-retry").click(function(){
		var $search = $(".search");
		var $error = $(".error");
		$error.addClass("hidden");
		setTimeout(function(){
			$error.addClass("removed");
			setTimeout(function(){
				$search.removeClass("removed");
				setTimeout(function(){
					$search.removeClass("hidden");
				}, 200);
			}, 200);
		}, 200);
	});
});
