$(function(){
	$("#biyo").toggle(1);
	$("#links").toggle(1);
	$("#yazilar").toggle(1);
	$("#profilim").click(function(){
		$("#biyo").toggle(1000);
	});
	$("#iletisim").click(function(){
		$("#links").toggle(1000);
	});
	$("#yazdostum").click(function(){
		$("#yazilar").toggle(1);
	});
});
