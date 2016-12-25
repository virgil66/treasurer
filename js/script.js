;(function($){

	//点击提交按钮效果实现
	var $btn = $('#data-btn');
	var $code = $('.refresh-code');

	// $code.on('click',function(e){
	// 	getCode();
	// })

	// function getCode(){
	// 	$.ajax({
	// 		url:"http://lfsw.test.ebjcloud.com/redPacket/customer/getVerificationCode",
	// 		type:"get",
	// 		success:function(data){
	// 			var code = data;
	// 			$code.append(code);
	// 		},
	// 		error:function(data){
	// 			alert("验证码获取失败，请重新获取验证码！");
	// 		}
	// 	});
	// }

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
					case "2225":{
						alert(data.respMag);
						break;
					}
					case "2224":{
						alert(data.respMag.phone2);
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