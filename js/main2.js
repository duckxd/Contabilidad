$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active2');
	$('.secciones2 article').hide();
	$('.secciones2 article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active2');
		$(this).addClass('active2');
		$('.secciones2 article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});