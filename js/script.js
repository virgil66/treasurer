;(function($){

	//点击提交按钮效果实现
	var $btn = $('#data-btn .sign-up');
	var $code = $('.refresh-code');
	var $conBtn = $('#data-btn .activity');

	$code.on('click',function(e){
		var link = $(this).attr("src");
		$(this).attr('src',link);
		var href = window.location.href;
		window.location.href = href.substr(0,href.indexOf('#')) + '#' + link;
		return false;
	})


	$conBtn.on('click',function(e){
		$('.treasurer-infor-bg-1')
								.addClass('close-up')
								.removeClass('close-down');
	})


	//点击close按钮，关闭活动内容模块
	var $close = $('.treasurer-infor-bg-1 .close');

	$close.on('click',function(e){
		$(this)
			.parents('.treasurer-infor-bg-1')
			.addClass('close-down')
			.removeClass('close-up');
	})

	$btn.on('click',function(e){
		$.ajax({
			url:"http://lfsw.test.ebjcloud.com/redPacket/customer/add",
			type:"post",
			data:$('#treasurer-data').serialize(),
			success:function(data){
				switch(data.respCode){
					case "0000":{
						alert(data.respMag);
						break;
					}
					case "2222":{
						alert(data.respMag);
						break;
					}
					case "2225":{
						alert(data.respMag);
						break;
					}
					case "2224":{
						alert(data.respMag.phone2);
						break;
					}
					default:{
						break;
					}
				}
			},
			error:function(data){
				alert("数据提交失败，请重新确认信息！");
			}
		});
	})
})(jQuery);