$(document).ready(function(){
	$("#navigation ul li").click(function(){
		$(this).css("background-color", "red");
		$("#navigation ul li").not(this).css("background-color", "#cecece");
		$("#tog").toggle();
	});
	$("li:contains('Dan')").text("J'ai trouvé, mon p'tit pote !");
	$("#aup").click(function(){
		$("ul").append("<li>John</li>");
	});
	$("img").each(function(){
		var lien = $(this).attr("src");
		$(this).wrap("<a rel='group' href='"+ lien +"'></a>");
	});
	$("#photozoom a").fancybox();
	$("#ladate").datepicker();
	$("#ladate").datepicker("option", "dateFormat", "dd MM yy");
	$("#ladate").datepicker("option", "monthNames", ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]);
	$("#ladate").datepicker("option", "firstDay", 1);
});