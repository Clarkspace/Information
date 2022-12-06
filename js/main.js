$("#header .small_nav").off().on('click',function(){  $("body").toggleClass("nav-visible") });
$("#wrap").off().on('click',function(){  $("body").removeClass("nav-visible") });
$(window).resize(function(){ 
if (window.innerWidth >= 740) { $("body").removeClass("nav-visible"); $("#navPanel").css('transition-duration','initial'); }
else if (window.innerWidth < 740){ $("#navPanel").css('transition-duration','500ms'); }
});




