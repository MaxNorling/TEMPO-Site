$(function() {
  $("#class1").show();

  var timer;

  $(".largeImg, #sheet").mouseleave(function() {
      timer = setTimeout(doSomething, 10);
  }).mouseenter(function() {
      clearTimeout(timer);
  });

  function doSomething(){
    $(".largeImg").stop().fadeOut();
  }

  $("#sheet").mouseenter(function(){
    $(".largeImg").stop().fadeIn();
  })

  $( "#menuButton" ).click(function() {
    $( "#navMobile" ).stop().slideToggle();
  });


});

function showCode(evt, nr) {
    $("#code").children().hide();
    $(".className").removeClass("current");
    nr.style.display = "block";
    $(evt.target).addClass("current");
}
$(".compress").hover(function(){
  $(".image").show();

});

