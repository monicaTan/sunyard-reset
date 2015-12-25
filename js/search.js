$(document).ready(function(e) {
	$('.search').click(function(){
		//index
		$('#index-head').hide();
		$('#container').hide();
		$('.foot-menu').hide();
		//searchList
		$('#share-head').hide();
		$('.contentRoll').hide();
		//column
		$('.menu').hide();
		$('.column-list').hide();
		$('#search-head').show();
		$('.search-content').show();
		
	});	
	$('.close').click(function(){
		$('#search-head').hide();
		$('.search-content').hide();
		$('#index-head').show();
		$('#container').show();
		$('.foot-menu').show();
		$('#share-head').show();
		$('.contentRoll').show();
		$('.menu').show();
		$('.column-list').show();
	});	
	
	$('.search-historyBtn').click(function(){
		$('#search-history').remove();
		})	
	
	$('.column-menu>li').click(function(){
			$(this).addClass('selected-li').siblings().removeClass('selected-li');
			$('.column-content').hide().eq($('.column-menu>li').index(this)).show();
	});		


	$('.loading').lazyload({
		  placeholder:"images/loading.gif", 
		  effect: "fadeIn"
	  });	

});	