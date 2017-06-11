$(function(){
	$('#slider9').bxSlider({
		auto:true,
		speed:2000,
		pause:8000,
		onSlideAfter:function($slideElement, oldIndex, newIndex){
			var count = Number($('.cont').text());
			$('.cont').text(count + 1);
		}
	});
});