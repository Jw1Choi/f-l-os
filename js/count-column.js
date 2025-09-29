$(function() {
    // 1) 원하는 목표 날짜·시간을 직접 지정(예: 2025년 3월 31일 15시 30분)
    var targetYear   = 2025;
    var targetMonth  = 3;   // 1~12월 (주의: JS Date에서는 월을 0부터 계산하므로 -1 해줌)
    var targetDay    = 31;
    var targetHour   = 11;  // 0~23시
    var targetMinute = 59;  // 0~59분

    // 2) Date 객체로 생성
    var targetDate = new Date(targetYear, targetMonth - 1, targetDay, targetHour, targetMinute, 0, 0);
    // ex) new Date(년, 월(0부터), 일, 시, 분, 초, 밀리초)

    // 3) 타겟 시간을 밀리초로 환산
    var countDownDate = targetDate.getTime();

    // 4) 매초마다 남은 시간을 계산·갱신하는 함수
    var x = setInterval(function() {
      // 현재 시각(밀리초)
      var now = new Date().getTime();

      // 남은 시간(타겟 - 현재)
      var distance = countDownDate - now;

      // 만약 시간이 지났다면(남은 시간이 0보다 작다면) 카운트다운 종료 처리
      if (distance < 0) {
        clearInterval(x);
        // 남은 시간이 없을 때 보여줄 문구
        document.getElementById("countdown").innerHTML  = "마감되었습니다.";
        document.getElementById("countdown1").innerHTML = "마감되었습니다.";
        document.getElementById("countdown2").innerHTML = "마감되었습니다.";
        return;
      }

      // 5) 일/시/분/초 계산 (남은 일수까지 표기하고 싶을 경우)
      var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                    .toString().padStart(2,"0");
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                    .toString().padStart(2,"0");
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
                    .toString().padStart(2,"0");

      // 6) HTML 요소에 표시 (id="day", "countdown" 등은 기존 코드와 동일하게 사용)
      //    - 목표 날짜를 보여주고 싶다면 day, day1, day2 등에도 타겟 날짜를 표기
      document.getElementById("day").innerHTML    = targetYear + ". " + targetMonth + ". " + targetDay + " ";
      document.getElementById("day1").innerHTML   = targetYear + "년 " + targetMonth + "월 " + targetDay + "일 ";
      document.getElementById("day2").innerHTML   = targetYear + ". " + targetMonth + ". " + targetDay + " ";
      
      //    - 남은 시간 (일, 시, 분, 초)
      var displayText = days + "일 " + hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("countdown").innerHTML  = displayText;
      document.getElementById("countdown1").innerHTML = displayText;
      document.getElementById("countdown2").innerHTML = displayText;

    }, 1000);

    // [선택 사항] ticker 움직임 관련 기존 코드 (필요하다면 그대로 유지)
    function upslide() {
      var h = $('#ticker').find('tbody > tr').outerHeight(); 
      var item = $('#ticker').find('tbody > tr:first-child'); 
      var itemClone = item.clone(); 
      $('#ticker > tbody').append(itemClone);
      
      $('#ticker_wrap').css({'top':0}).animate({'top': '-' + h +'px'}, function(){ 
          $('#ticker_wrap').css({'top': 0}); 
          item.remove(); 
      }); 
    }
    setInterval(function(){upslide()}, 1700);

  });