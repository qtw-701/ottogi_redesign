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

  //비주얼 슬라이드
  var autoSlide = new Swiper(".auto-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pager",
      clickable: true,
    },
    loop: true,
  });
  $(".auto-slide").hover(
    function () {
      //  .slide-area에 마우스를 올리면 자동재생 멈춤
      autoSlide.autoplay.stop();
    },
    function () {
      //   .slide-area에서 마우스가 벗어나면 자동재생 스타트
      autoSlide.autoplay.start();
    }
  );

  //오뚜기 products 슬라이드
  var oproductsSlide = new Swiper(".o-products-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".o-next",
      prevEl: ".o-prev",
    },
    loop: true,
  });

  //오뚜기 sns 탭메뉴
  var tabTitle = $(".tab-title > ul > li");
  var tabContent = $(".tab-content > ul > li");
  //모든 탭컨텐츠 안 보이게
  tabContent.hide();
  //탭컨텐츠 첫째만 보이게
  tabContent.filter(":nth-child(1)").show();

  tabTitle.click(function () {
    //클릭한 타이틀의 li의 index 번호
    var titleIndex = $(this).index();
    tabTitle.removeClass("active");
    $(this).addClass("active");

    tabContent.each(function () {
      if (titleIndex == $(this).index()) {
        tabContent.hide();
        $(this).fadeIn();
      }
    });
  });
});
