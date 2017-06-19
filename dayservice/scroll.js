// JavaScript Document

		$(function () {
			//以下、ページトップへ戻るボタンをスクロールに合わせてfadeIn、fadeOut
			$(window).on("load scroll", function () {
				var $this = $(this);

				if ($this.scrollTop() > 100) { //100pxスクロールした時
					$("#pageTop").stop();
					$("#pageTop").fadeTo(200, 1);
				} else {
					$("#pageTop").stop();
					$("#pageTop").fadeTo(200, 0);
				}
			});

			//以下、スムーズスクロール
			$("a[href^='#up']").click(function () {
				var href = $(this).attr("href"),
					target = 0,
					targetTop = $("body").offset().top;

				if (href === "#up") {
					$("body,html").animate({
						scrollTop: targetTop
					}, 700, "swing");
					return false;
				} else {
					target = $(href).offset().top;
					$("body,html").animate({
						scrollTop: (target - 25)
					}, 700, "swing");
					return false;
				}
			});
		});