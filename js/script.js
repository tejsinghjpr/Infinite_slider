$(function () {
	var container = $('.carousel');
	var container_length = container.find('li').length;
	var container_list_width = container.width();
	var container_width = container_list_width*container_length;
	var last_item = container.find('li').last();

	container.find('ul').css({"width": container_width, "margin-left": -1*container_list_width});
	container.find('li').eq(0).addClass('current');
	container.find('ul').prepend(last_item);

	container.find('.next').click(function () {
		var current = container.find('.current');
		var next = container.find('.current').next();

		current.animate({
			'margin-left': -1*container_list_width
		}, 500, function() {
			var first_item = container.find('ul li').eq(0);
			first_item.remove();
			container.find('ul').append(first_item);

			var first_item = container.find('ul li').eq(0);
			first_item.removeAttr('style');
			first_item.removeAttr('class');
			$(this).removeClass('current');			
		});
		next.animate({
		}, 500, function () {
			$(this).addClass('current');
		});
	});

	container.find('.pre').click(function() {
		var current = container.find('.current');
		var previous = container.find('li.current').prev();

		previous.animate({
			'margin-left': container_list_width
		}, 500, function() {
			var previous_item = container.find('li').last();
			container.find('ul').prepend(previous_item);

			var previous_item = container.find('li').eq(0).next();
			previous_item.removeAttr('style');
			previous_item.removeAttr('class');
			console.log(this);
			$(this).next().removeClass('current');
			$(this).addClass('current');
		});
	});
});
