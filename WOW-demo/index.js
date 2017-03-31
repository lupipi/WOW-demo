$(function(){
  fontlight($("#footer .cprt .info ul li a"),"highlight");
  fontlight($("#footer .f-contact a"),"highlight");
  fontlight($("#wrapper-top .menu .nav li a"),"highlight");
  movetop($("#wrapper-mid .wrapper-mid-box li"));
  function fontlight(el,cl) {
      el.mouseover(function() {
      $(this).addClass(cl);
    }).mouseout(function() {
      $(this).removeClass(cl);
    });
  }
  function movetop(el) {
    el.mouseover(function() {
      $(this).find("h3").addClass("highlight");
      $(this).stop().animate({top:"-15px"},300);
    }).mouseout(function() {
      $(this).find("h3").removeClass("highlight");
      $(this).stop().animate({top:"0"},300);
    })
  }
})
