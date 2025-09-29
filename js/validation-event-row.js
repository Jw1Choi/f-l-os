$(document).ready(function(){
    $('#send_message').click(function(){
        
        //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // var position = $('#position').val();
        // var id = $('#id-number').val();
        var name = $('#name').val();
        var email = $('#email').val();
        // var phone = $('#phone').val();
        var message = $('#message').val();
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#email,#message,#agree11').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }
        
        // if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
        //     $('#phone').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#phone').addClass("error_input");
        //     alert("휴대폰 번호 입력을 확인하세요.");
        // }

        // if(id>=24 && id<=55 && regex.test(id) ){
            
        //     $('#id-number').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#id-number').addClass("error_input");
        //     alert("24 ~ 55세까지 신청가능합니다.");
        // }

        // if(position == null ){
        //     var error = true;
        //     $('#position').addClass("error_input");
        //    alert("통화 가능 시간을 선택해주세요.");
        // }else{
        //     $('#position').removeClass("error_input");
        // }

     


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLScMUWv9OvPOgSMLebZqL6wJegKSEfdtZpY4AQJ6J-xPXRYI7g/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();");
  

          
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
 
}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){
    fbq('track', 'Purchase', {value: 7700.00, currency: 'KRW'});
    var f = document.fm;
    f.submit();
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){
    var name =$('#name').val();
    var id = $('#id-number').val();
    var ph =$('#phone').val();
    var time = $('#position').val();
    var message = $('#message').val();

    $('[name="user_name"]').val(name);
    $('[name="나이"]').val(id);

    $('[name="휴대폰번호1"]').val('010');
     $('[name="휴대폰번호2"]').val(ph.substr(3,4));
     $('[name="휴대폰번호3"]').val(ph.substr(7,4));
     $('[name="통화가능시간"]').val(time);
     $('[name="문의사항"]').val(message);
    }




 $('#name,#phone,#position,#id-number,#message').bind("keyup click change",form_check);
 $('#name,#phone,#position,#id-number,#message,#agree11').bind("keyup click change",form_check);
