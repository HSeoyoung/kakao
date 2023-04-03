$(function() {
    let index=0;  //index를 0으로 해주고 바로 아래에 moveSlider 넣어줘야 첫번째 사진에 불이 들어옴
    let sw=false;  //이건 자동 슬라이스가 세번째로 안넘어갈때 사용 
    let auto;  //마우스가 사진에 닿았을때 오토를 멈추게 하기 위해서 추가
    moveSlider(index);
    autoSlider();  //자동 슬라이스   >>이미지로 할땐 사용 X


    //애니메이션 캔버스 영역에 이벤트 
    $('.animation_canvas').hover(function() {
        clearInterval(auto);
    },function() {
        autoSlider();   // >>이미지로 할땐 사용 X
    });



    //동그라미 컨트롤 버튼
    $('.control_button').click(function() {
        index=$(this).index();
        moveSlider(index); //만든 함수 여기로 불러오기

    });

    //좌우 컨트롤 버튼 부분
    //좌측 컨트롤 버튼
    $('.left_contorl').click(function() {

        index--;
        moveSlider(index);
    });

    //우측 컨트롤 버튼
    $('.right_contorl').click(function() {

        index++;
        moveSlider(index);
    });





    //이미지 슬라이드 구현 하는 함수(따로 만들어야 함)
    function moveSlider(index) {

        //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡalert 말고 화살표가 사라지게 할거면 이부분 추가ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        if(index < 6 && index > 0){
            $('.right_contorl').fadeIn(500);
            $('.left_contorl').fadeIn(500);
        }
        if(index ==6) {
            $('.right_contorl').fadeOut(500);
            $('.left_contorl').fadeIn(500);  
            //ㄴ동그라미 버튼 첫번째와 마지막 누르면 화살표 사라지는것을 방지하기 위해 추가
        }
        if(index==0) {
            $('.left_contorl').fadeOut(500);
            $('.right_contorl').fadeIn(500);
            //ㄴ동그라미 버튼 첫번째와 마지막 누르면 화살표 사라지는것을 방지하기 위해 추가
        }

        //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡalert 말고 화살표가 사라지게 할거면 이부분 추가ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


        $('.slider_panel').animate({
            left : -(index*800)  
        },'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index).addClass('active');
        $('.slider_text').hide(); 
        $('.slider_text').eq(index).fadeIn('slow');

    }

    //자동 이미지 슬라이드 구현 함수
    function autoSlider() {
        auto = setInterval(function() {   //setInterval 앞에 auto = 를 추가 
            if(index <6 && sw == false){
                $('.right_contorl').trigger('click');
            }else{
                sw=true;
            }
            if(index >0 && sw == true) {
                $('.left_contorl').trigger('click');
            }else{
                sw=false;
            }
        },2000);
    }
    
});