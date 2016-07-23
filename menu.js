$(function(){
	/**
	* 标签云
	*/
	var obj=$("#cloud a");
	function rand(num){
		return parseInt(Math.random()*num+1);
	}
	function randomcolor(){
		var str=Math.ceil(Math.random()*16777215).toString(16);   
		if(str.length<6){   
		 str="0"+str;   
		}	   
		return str;
	}
	function randomDegree(degree){
		return Math.floor(degree * Math.random() * 2 * Math.PI / 360);
	}
	
	for(len=obj.length,i=len;i--;){
		obj[i].style.position = "absolute";
		obj[i].style.left=rand(540)+"px";   
		obj[i].style.top=rand(180)+"px";   
		obj[i].className="color"+rand(5);   
		obj[i].style.zIndex=rand(5);   
		obj[i].style.fontSize=rand(12)+12+"px";   
		obj[i].style.color="#"+randomcolor();
		obj[i].style["transform"] = obj[i].style["-webkit-transform"] = "rotate("+randomDegree(2000)+"deg)";
	}  
    

    /**
	* canvas
	*/
	$.getScript('http://www.chartjs.org/assets/Chart.js',function(){
	  
	  var zhdata = [{
			label: '英文水平',
			value: 75,
			highlight: "#FFC870",
			color: "#F7464A"
		}, {
			value: 25,
			color: "#EEEEEE"
		}
		]

		var zhoptions = {
			animation: true,
			segmentShowStroke : false
		};

		var c = $('#ja');
		var ct = c.get(0).getContext('2d');
		
		var zhChart = new Chart(ct).Doughnut(zhdata, zhoptions);

	
	  var endata = [{
			label: '日语水平',
			value: 20,
			highlight: "#5AD3D1",
			color: "#4D5360"
		}, {
        value: 80,
        color: "#EEEEEE"
		}
		]

		var enoptions = {
			animation: true,
			segmentShowStroke : false
		};

		var c = $('#en');
		var ct = c.get(0).getContext('2d');
		
		var enchart = new Chart(ct).Doughnut(endata, enoptions);
	});
});
