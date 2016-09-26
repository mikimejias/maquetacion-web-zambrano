//Videos.js
$("document").ready(function() {
	$("div[id^=myVideo]").click(function() {
		var idcaja = $(this).attr("id");

		var idvideo = $("#"+idcaja+" img").attr("src").split("/")[3];
		
		//console.log(idvideo);
		
		var ytvideo = "<iframe src='https://www.youtube.com/embed/" + idvideo + "?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>";
		
		$("#"+idcaja).addClass("vacio");
		
		document.getElementById($(this).attr("id")).innerHTML = ytvideo;
	
	});
});