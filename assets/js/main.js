$("#titleBar .swap").on('click',function(){  $("body").toggleClass("nav-visible") });
$("#page-wrapper").on('click',function(){  $("body").removeClass("nav-visible") });
$(window).resize(function(){ 
if (window.innerWidth >= 980) { $("body").removeClass("nav-visible"); $("#navPanel").css('transition-duration','initial'); }
else if (window.innerWidth < 980){ $("#navPanel").css('transition-duration','500ms'); }
});