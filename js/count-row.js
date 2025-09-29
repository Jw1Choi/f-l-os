$(function() {
  var targetDate = new Date();
  var today=new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();

  targetDate.setDate(targetDate.getDate() + 1);
  targetDate.setHours(0, 0, 0, 0);
  
  // 24-hour countdown
  var countDownDate = targetDate.getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get current time
    var now = new Date().getTime();
  
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
  
    // Calculate time units
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
  
    // Output the result in an element with id="countdown"
    document.getElementById("day").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("countdown1").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("day1").innerHTML = year + "년 " + month + "월 " + day + "일 기준";
    document.getElementById("day2").innerHTML = year + ". " + month + ". " + day;
    // If the countdown is finished, start a new countdown for the next midnight
    if (distance < 0) {
      clearInterval(x);
      targetDate.setDate(targetDate.getDate() + 1);
      countDownDate = targetDate.getTime();
      x = setInterval(arguments.callee, 1000);
    }

  
  }, 1000);

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
  
  })

  