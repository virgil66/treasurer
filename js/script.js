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
	var $bombBtn = $('.bomb-box');
	var $bombBox = $('.bomb-box .bomb-box-btn');

	$bombBox.on('click',function(){
		$bombBtn.hide();
	})

	$close.on('click',function(e){
		$(this)
			.parents('.treasurer-infor-bg-1')
			.addClass('close-down')
			.removeClass('close-up');
	})
	var flag = false;
	var flag2 = false;
	$btn.on('click',function(e){
		// judgmentPhone();
		if(judgmentPhone()){
			$.ajax({
				url:"http://139.196.106.205/web/customer/add",
				type:"post",
				data:$('#treasurer-data').serialize(),
				success:function(data){
					switch(data.respCode){
						case "0000":{
							$bombBtn
								.show()
								.find('.bomb-success')
								.attr({
									src:"images/bomb_icon_02.png"
								})
								.siblings('.bomb-box-paragraph')
								.text("组团成功! 快召集你的亲友团小伙伴，完成任务赢取奖品吧！任务内容详见“活动规则”");
							break;
						}
						case "2222":{
							$bombBtn
								.show()
								.find('.bomb-success')
								.attr({
									src:"images/bomb_icon_01.png"
								})
								.siblings('.bomb-box-paragraph')
								.text(data.respMag);
							break;
						}
						case "2225":{
							$bombBtn
								.show()
								.find('.bomb-success')
								.attr({
									src:"images/bomb_icon_01.png"
								})
								.siblings('.bomb-box-paragraph')
								.text(data.respMag);
							break;
						}
						case "2224":{
							$bombBtn
								.show()
								.find('.bomb-success')
								.attr({
									src:"images/bomb_icon_01.png"
								}).siblings('.bomb-box-paragraph')
								.text(data.respMag);
							break;
						}
						default:{
							break;
						}
					}
				},
				error:function(data){
					// alert("数据提交失败，请重新确认信息！");
				}
			});
		}
		
	});


	//验证表单是否为空并且电话号码的长度是11位，且三个电话号码不能相同
	function judgmentPhone(){
		var phone = $("input[name='phone']");
		var phone2 = $("input[name='phone2']");
		var phone3 = $("input[name='phone3']");
		var str = "手机号码";
		isPhone(phone,phone2,phone3,str);
		
	}

	//去除左右空格
	function trim(str){
		return $.trim(str);
	}

	//表单为空
	function isNull(obj){
		if(trim(obj.val()).length == 0){
			return true;
		}else{
			return false;
		}
	}

	//表单内容不能为空
	function isNotNull(obj,str){
		if(isNull(obj)){
			// alert(str+"不能为空!");
			$bombBtn
				.show()
				.find('.bomb-success')
				.attr({
					src:"images/bomb_icon_01.png"
				})
				.siblings('.bomb-box-paragraph')
				.text(str+"不能为空!");
			obj.focus();
			return false;
		}else{
			return true;
		}
	}

	//判断手机号码的长度与格式
	function isPhone(obj1,obj2,obj3,str){
		var pattern = /^1[34578]\d{9}$/;
		if(!isNotNull(obj1,str) || !isNotNull(obj2,str) || !isNotNull(obj3,str)){
			return false;
		}
		if(!(pattern.test(obj1.val())) || !(pattern.test(obj2.val())) || !(pattern.test(obj3.val()))){
			// alert(str+"不正确!");
			$bombBtn
				.show()
				.find('.bomb-success')
				.attr({
					src:"images/bomb_icon_01.png"
				})
				.siblings('.bomb-box-paragraph')
				.text(str+"不正确!");
			obj1.focus();
			return false;
		}else{
			if(obj1.val() == obj2.val() || obj1.val() == obj3.val() || obj2.val() == obj3.val()){
				alert(str+"不能相同！");
				$bombBtn
					.show()
					.find('.bomb-success')
					.attr({
						src:"images/bomb_icon_01.png"
					})
					.siblings('.bomb-box-paragraph')
					.text(str+"不能相同！");
				obj1.focus();
				return false;
			}else{
				return true;
			}
		}
	}

})(jQuery);