
/** sticky-menu */
$(window).scroll(function () {
    $('#scroll-color').toggleClass('scrolled', $(this).scrollTop() > 100);
})

/** 시계 */
Date.prototype.format = function (f) {
    if (!this.valueOf()) 
        return " ";
    var weekKorName = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ];
    var weekKorShortName = [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ];
    var weekEngName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var weekEngShortName = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    var d = this;
    return f.replace(
        /(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi,
        function ($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear(); // 년 (4자리)
                case "yy":
                    return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
                case "MM":
                    return (d.getMonth() + 1).zf(1); // 월 (2자리)
                case "dd":
                    return d
                        .getDate()
                        .zf(1); // 일 (2자리)

                case "KS":
                    return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
                case "KL":
                    return weekKorName[d.getDay()]; // 요일 (긴 한글)
                case "ES":
                    return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
                case "EL":
                    return weekEngName[d.getDay()]; // 요일 (긴 영어)

                case "HH":
                    return d
                        .getHours()
                        .zf(2); // 시간 (24시간 기준, 2자리)
                case "hh":
                    return (
                        (h = d.getHours() % 12)
                            ? h
                            : 12
                    ).zf(2); // 시간 (12시간 기준, 2자리)
                case "mm":
                    return d
                        .getMinutes()
                        .zf(2); // 분 (2자리)
                case "ss":
                    return d
                        .getSeconds()
                        .zf(2); // 초 (2자리)
                case "a/p":
                    return d.getHours() < 12
                        ? "오전"
                        : "오후"; // 오전/오후 구분
                default:
                    return $1;
            }
        }
    );
};
String.prototype.string = function (len) {
    var s = '',
        i = 0;
    while (i++ < len) {
        s += this;
    }
    return s;
};
String.prototype.zf = function (len) {
    return "0".string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
    return this
        .toString()
        .zf(len);
};

var today = new Date();
console.log(today.format('yyyy년 MM월 dd일 a/p hh:mm 기준'));
today = today.format('yyyy년 MM월 dd일 a/p hh:mm 기준');

var endDay = new Date();
endDay = endDay.format('MM월 dd일');

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


    $('.total_menu').click(function(){//메뉴열기//
        $('.ham-con').show();
		$('body').css('overflow-y','hidden');	
        setTimeout(function() {
            $('header .ham-con').addClass("on")
        }, 100);
    })
    
    $('.ham-close-btn').click(function(){ //메뉴 닫기// 
        $('.wrap').stop().animate({'margin-left' : '0%'})
        $('header .ham-con').removeClass("on");
		// $('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.bg').click(function(){//메뉴 컨텐츠 외 클릭시 닫힘
        $('.wrap').stop().animate({'margin-left' : '0%'})
		// $('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        $('header .ham-con').removeClass("on");
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.min-show .title').on('click',function(){ //모바일에서만 보이는 메뉴
        $(this).next('.min-con').slideToggle()
        $(this).toggleClass("on")
        // $(this).parents().find('header .ham-con .menu').toggleClass("on");
        // if($('.min-show .title').hasClass('on') == length < 1){
        //     $('.min-show .car-box,.bottom li,.middle ul li').addClass('on')
        // }else if($('.min-show .title').hasClass('on') == length < 0) {
        //     $('.min-show .car-box,.bottom li,.middle ul li').removeClass('on')
        // }
    })

    $('.Event_Menu').click(function(){//메뉴 열기//
        $('.our-con').slideToggle(400);
        $('.our-con').toggleClass("on");
		var our_con_check = $('.our-con').hasClass('on');
		if(our_con_check == true){
			$('body').css('overflow-y','hidden');	
		}else{
			$('body').css('overflow-y','scroll');						
		}

    })

    $('.out-close-btn').click(function(){//메뉴 닫기//
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");

    })

    $('.bg02').click(function(){//our-con 컨텐츠 외 클릭시 닫힘
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
    })
    
    $('.left li').on('click',function(){ //메뉴 1depth//
        var data = $(this).attr('data-rel');
        var $content = $('.' + data);
        $(this).addClass("on").siblings().removeClass("on")
        $content.show().siblings().hide()
    })

    $(".tab02").on('click',function(){//메뉴 2depth// 
        var title = $(this).data('tit'); 
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-100%'})
        $('header .ham-con .container-box > .top').addClass("on");
        $('.ham-con').attr("data-depth", 2);
    })

    $(".tab03").on('click',function(){ //메뉴 3depth//
        var title = $(this).data('tit');
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-200%'})
        $('.ham-con').attr("data-depth", 3);
    })

    $(".back").on('click',function(){ //메뉴 돌아가기//
        var depth = Number($('.ham-con').attr("data-depth"));
        var left = (depth - 2) * -100;
        $('.wrap').stop().animate({'margin-left' : left+'%'})
        if (0 == left) {
            $('header .ham-con .container-box > .top').removeClass("on");
        }

        $('.ham-con').attr("data-depth", (depth - 1)); 
    })