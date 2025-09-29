const form = document.getElementById('main');
main.innerHTML = `
<!-- main -->
<div class="main">
  
    <div class="inner">
       
        <div class="title" style="margin-bottom:40px;">
            <br><br>
            <a href="#sec05" class="scroll box">
                
                <span class="timer">
                    접수마감 | <script language="javascript" type="text/javascript">
                        today=new Date()
                        document.write(today.getFullYear(),".",today.getMonth()+1,".",today.getDate()) 
                    </script> ( <span id="countdown"></span>)
                </span>
            </a> <br><br>
            <img src="./img/gov.png" style="width:150px">
            <p class="top wow fadeInUp">한국교육개발센터<br>취업 준비 특별 지원</p><br>
            <h1 class="wow fadeInUp">여러분의 꿈을 위한<br>국가자격증<br>취득을 지원합니다.</h1>
        </div>

        <div id="menu" style="width:100%;">
            <span class="menu_list mn1" onclick="window.location.href='./kl-a.html'" >손해평가사</span>
            <!-- <span  class="menu_list mn2" onclick="window.location.href='./kl-b.html'">도로교통사고감정사</span> -->
            <span class="menu_list  mn3" onclick="window.location.href='./kl-c.html'">농산물품질관리사</span>
            <span  class="menu_list mn4" onclick="window.location.href='./kl-d.html'">반려견스타일리스트</span>
            <span  class="menu_list mn5" onclick="window.location.href='./kl-e.html'">맞춤형화장품제조관리사</span>
            
            <br><br><br>
        </div>

        <div id="m-menu" style="width:100%;">
            <span class="menu_list mn1" onclick="window.location.href='./kl-a.html'">손해평가사</span>
            <span class="menu_list mn3" onclick="window.location.href='./kl-c.html'">농산물품질관리사</span>
            <!-- <span  class="menu_list mn2" onclick="window.location.href='./kl-b.html'">도로교통사고감정사</span> -->
            <br>
            <span  class="menu_list mn5" onclick="window.location.href='./kl-e.html'">화장품제조관리사</span>
            <span  class="menu_list mn4" onclick="window.location.href='./kl-d.html'">반려견스타일리스트</span>
            
            
            <br><br>
            </div>

        
        <img src="img/bg4.png" class="bg" style="opacity: 0.6;">
        <img src="img/main4.png" class="img-main wow fadeInUp">
        <div id="sp">
        <ul class="listWrap">
            <li class="wow fadeInUp">
                <div>
                   누구나 가능<br>
                <span class="num">24~55</span> 세 까지
                </div>
            </li>
            <li class="wow fadeInUp" data-wow-delay=".1s">
                <div>
                    학력/연령/경력<br>
                    <span class="num">제한없음</span><br>
                </div>
                <!-- <span class="small">집·자동차 소유자는<wbr> 한도2배</span> -->
            </li>
            <li class="wow fadeInUp" data-wow-delay=".2s">
                <div>
                    교육비 지원 비용<br>
                    <span class="num">전액지원</span><br><span style="font-size:12px;">손해평가사, 농산물품질관리사</span>
                </div>
            </li>
        </ul>
        </div>

        <div id="dk" style="display:none;">
  
            </div>
        <!-- <div class="wow fadeIn">
            <a href="#sec05" class="scroll btn-main">
                안심대출 신청하기
            </a>
        </div> -->
    </div>
</div>
<!-- end main -->

`;

document.body.appendChild(main.content);