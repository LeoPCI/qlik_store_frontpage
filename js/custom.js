$(document).ready(function() {



//PARALLAX FUNCTION
$(window).scroll(function(e){
  var scrolled = $(window).scrollTop();
  $('.jumbotron').css('top',-(scrolled*.78)+'px');
});
//CAROUSEL FUNCTION(function(){
$('#itemslider').carousel({ 
	interval: 3000
});

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();


      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }


      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());

});