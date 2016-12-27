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
	var flag = false;
	var flag2 = false;
	$btn.on('click',function(e){
		judgmentPhone();
		if(flag && flag2){
			$.ajax({
				url:"http://139.196.106.205/web/customer/add",
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
		}
		
	});


	//验证表单是否为空并且电话号码的长度是11位，且三个电话号码不能相同
	function judgmentPhone(){
		var $form = document.getElementById('#treasurer-data');
		var phone = $("input[name='phone']").val();
		var phone2 = $("input[name='phone2']").val();
		var phone3 = $("input[name='phone3']").val();
		if(phone.length != 11 || phone2.length != 11 || phone3.length != 11){
			alert("手机号码必须为11位，请确认后重新尝试！");
		}else{
			flag = true;
		}
		if(phone == phone2){
			alert("手机号码不能相同，请选择不同的手机号码填写！")
		}else if(phone == phone3){
			alert("手机号码不能相同，请选择不同的手机号码填写！")
		}else if(phone2 == phone3){
			alert("手机号码不能相同，请选择不同的手机号码填写！")
		}else{
			flag2 = true;
		}
	}

})(jQuery);