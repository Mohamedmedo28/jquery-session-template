// بعد ال about  عن اللي فوق
let aboutOfest = $('#about').offset().top  // nav

$(window).scroll(()=>{   // nav
    let scrollTop = $(window).scrollTop()  // nav

    if(scrollTop > aboutOfest-50){  // nav
        $('#main-nav').css('backgroundColor','red')  // nav
        $('#btnUp').fadeIn(1000) //up
    }else{ 
        $('#main-nav').css('backgroundColor','transparent') // nav
        $('#btnUp').fadeOut(1000) //up
    }
})


////
$('#btnUp').click(() =>{ //up
    $('html,body').animate({scrollTop:'0'},1000) //up
})
//////
$('.nav-item a[href^="#"]').click(function (){ //scroll nav
    $('.nav-item a').removeClass('myActive') //color nav
    $(this).addClass('myActive') //color nav
    let aHref =$(this).attr('href') //scroll nav
    let offset =$(aHref).offset().top //scroll nav
    $('html,body').animate({scrollTop: offset},1000)  //scroll nav
})

let spans=$('#boxColor span')
spans.eq(0).css('backgroundColor','blue')
spans.eq(1).css('backgroundColor','orange')
spans.eq(2).css('backgroundColor','teal')
spans.eq(3).css('backgroundColor','#09c')
spans.eq(4).css('backgroundColor','#fff')

spans.click(function(){
    let color=$(this).css('backgroundColor')
    $('h1,h2,p').css('color',color)
    localStorage.setItem('color',color)
})
let color=localStorage.getItem('color')
if(color !=null){
   
    $('h1,h2,p').css('color',color)

}

let boxColorWidth=$("#boxColor").width()
let left =true
$("#slideBox").animate({left:-boxColorWidth},1000)
$("#close").click(()=>{
    // let left=$("#slideBox").css("left")
    if(left){
    $("#slideBox").animate({left:-boxColorWidth},1000)
    left=false

    }else{
    $("#slideBox").animate({left:"0px"},1000)
    left=true
    }
})