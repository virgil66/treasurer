;(function($){
	//表单为空
	function isNull(obj){
		if(!obj.value || trim(obj.value)==""){
			return true;
		}else{
			return false;
		}
	}
   //表单不为空
   function inNotNull(obj,str,allowNull){
   		if(isNull(obj) && !allowNull){
   			alert(str+"不能为空！");
   			obj.focus();
   			return false;
   		}else{
   			return true;
   		}
   }
	//验证表单输入内容为数字格式
	function inNumber(obj,str,allowNull){
		var pattern = /^[-,+]{0,1}[0-9]{0,}[.]{0,1}[0-9]{0,}$/;
		if(!isNotNull(obj,str,allowNull)){
			return false;
		}

		if(!(pattern.test(obj.value)) && !isNull(obj)){
			alert(str+"不是数字格式！");
			obj.focus();
			return false;
		}else{
			return true;
		}
	}

	//判断表单内容是否为整数格式
	function isInteger(obj,str,allowNull){
		var pattern = /^-*\d+$/;
		if(!isNotNull(obj,str,allowNull)){
			return false;
		}

		if(!(pattern.test(obj.value)) && !isNull(obj)){
			alert(str+"不是整数格式！");
			obj.focus();
			return false;
		}else{
			return true;
		}
	}

	//判断表单内容是否为日期格式
	function isDate(obj,str,allowNull){
		var pattern = /^[1-9]\d{3}[/|-]((0[1-9]|(1(0|1|2))|([1-9]))[/|-](([0-2][1-9])|([1-2][0-9])|(3(0|1))|(1-9)))$/;

		if(!isNotNull(obj,str,allowNull)){
			return false;
		}

		if(!(pattern.test(obj.value)) && !isNull(obj)){
			alert(str+"不是日期格式！");
			obj.focus();
			return false;
		}else{
			return true;
		}
	}

	//判断密码框中的两次密码书否一致
	function verifyPassword(obj1,obj2){
		if(obj1.value != obj2.value){
			alert("输入的密码不一致！");
			return false;
		}
		return true;
	}

	//验证身份证号码的有效性
	function isIdCard(obj,str,allowNull){
		if(!(pattern.test(obj.value)) && !isNull(obj)){
			alert(str+"不是正确的身份证号码！");
			obj.focus();
			return false;
		}else{
			return true;
		}
	}

	//验证表单中手机号码的有效性
	function isMobile(obj,str,allowNull){
		var pattern = /^((\(\d{3}\))|(\d{3}))
	}
})(jQuery);
