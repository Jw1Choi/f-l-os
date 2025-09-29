(function ($) {
    "use strict";
  
    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('.list-btn').css({color:"#413e66"});
        $('.mobile-nav-toggle i').css({color:"#413e66"});
        $('.mobile-nav a').css({color:"#fff"});
        $('#header .logo h1 a').css({color:"#413e66"});
        $('#topbar .social-links a').css({color:"#413e66"});
        $('.main-nav .drop-down ul').css({background:"#fff"});
        $('.main-nav a .imp-btn').css({color:"#fff"});
  
      } else {
        $('#header').removeClass('header-scrolled');
        $('.list-btn').css({color:"#fff"});
        $('.mobile-nav-toggle i').css({color:"#fff"});
        $('#header .logo h1 a').css({color:"#fff"});
        $('#topbar .social-links a').css({color:"#fff"});
        $('.main-nav .drop-down ul').css({background:"#413e66"});
    
        $('.main-nav a .imp-btn').css({color:"#fff"});
  
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 40;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });



  /***** 그래프 애니메이션 1 *****/
  function animateGraph() {
    const formSection = document.getElementById('graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '120px'; // 실제 비율에 맞게 조정
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  function handleScroll() {
    const formSection = document.getElementById('graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport(redBar)) {
      animateGraph();
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  /***** 그래프 애니메이션 2 *****/
  function animateGraph1() {
    const formSection = document.getElementById('limit-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '170px'; 
  }
  
  function isElementInViewport1(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // ※ 여기서 기존 코드상 버그: removeEventListener와 isElementInViewport 부분 수정
  function handleScroll1() {
    const formSection = document.getElementById('limit-graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport1(redBar)) {
      animateGraph1();
      window.removeEventListener('scroll', handleScroll1);
    }
  }
  
  window.addEventListener('scroll', handleScroll1);
  window.addEventListener('load', handleScroll1);
  
  /***** 그래프 애니메이션 3 *****/
  function animateGraph3() {
    const formSection = document.getElementById('interest-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '50px';
  }
  
  // 같은 함수명으로 다시 정의(원본 코드 유지)
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  function handleScroll3() {
    const formSection = document.getElementById('interest-graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport(redBar)) {
      animateGraph3();
      window.removeEventListener('scroll', handleScroll3);
    }
  }
  
  window.addEventListener('scroll', handleScroll3);
  window.addEventListener('load', handleScroll3);
  
  /***** 그래프 애니메이션 4 *****/
  function animateGraph4() {
    const formSection = document.getElementById('submit-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '70px';
  }
  
  // 다시 동일 함수명 isElementInViewport 유지(원본 코드 그대로)
  function handleScroll4() {
    const redBar = document.getElementById('redBar');
    if (isElementInViewport(redBar)) {
      animateGraph4();
      window.removeEventListener('scroll', handleScroll4);
    }
  }
  
  window.addEventListener('scroll', handleScroll4);
  window.addEventListener('load', handleScroll4);
  
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
    
      nav_sections.each(function() {
        var top = $(this).offset().top - main_nav_height,
            bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
        }
      });
    });
  
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
      $('#portfolio-flters li').on( 'click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
      });
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: false,
      dots: false,
      loop: true,
      items: 1
    });
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      autoplay: false,
      dots: false,
      loop: true,
      responsive: { 0: { items: 3 }, 768: { items: 3 }, 900: { items: 3 }
      }
    });
  
  })(jQuery);
  
  