$(function () {
  //탑 버튼
  $(window).scroll(function () {
    var windowSct = $(this).scrollTop();

    if (windowSct > 100) {
      $(".top-btn").stop().fadeIn();
    } else {
      $(".top-btn").stop().fadeOut();
    }
  });

  $(".top-btn").click(function (e) {
    e.preventDefault();
    $("body, html").stop().animate({ scrollTop: 0 }, 300);
  });

  //언어 설정
  $(".side-menu > ul > li:nth-child(3)").hover(
    function () {
      $(".lang").stop().fadeIn();
    },
    function () {
      $(".lang").stop().fadeOut();
    }
  );

  //주메뉴 서브메뉴
  $("nav > .nav-area > .main-menu > li").hover(
    function () {
      $(this).find('.sub-menu').stop().slideDown();
      // $(".sub-bg").stop().slideDown();
    },
    function () {
      $(this).find('.sub-menu').stop().slideUp();
      // $(".sub-bg").stop().slideUp();
    }
  );
  $('.xi-bars').click(function() {
    $('nav').fadeIn();
  });
  $('.xi-close').click(function() {
    $('nav').fadeOut();
  });
});
