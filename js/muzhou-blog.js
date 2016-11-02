jQuery(document).ready(function($){
	li{
		$(this).stop().animate({'marginLeft': '10px'}, 200);
		//鼠标移动到链接上的平滑效果,200是毫秒,就是效果时间,可以改成你需要的时间
	}, function() {
		$(this).stop().animate({'marginLeft': '0px'}, 200);
		//鼠标离开链接后的平滑效果,200同上
	});
});

$('body').scrollspy({ target: '.scrollspy' })
$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
});
