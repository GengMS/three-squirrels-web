/*
 * @Author: your name
 * @Date: 2019-11-03 18:24:27
 * @LastEditTime: 2019-11-15 11:05:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editdo
 * @FilePath: \结课作业\js\1.js
 */

 $('.fourteen').css({display:'none'})
    setTimeout(() => {
        $('.three').animate({top: 200},3000)
        $('.five').animate({top: 1700},5500)
        $('.six').animate({top: 2200},6000)
        $('.sevan').animate({top: 3000},5000)
        $('.nine').animate({top: 450},3000)
        $('.ten').animate({top: 120},4000)
        $('.eleven').animate({top: 2800},6000)
        $('.twlven').animate({top: 2500},6000)
        $('.thrteen').animate({top: 4500},6000)
    }, 1800);
    setTimeout(() => {
        $('.four').animate({top: 1000},4000)
    }, 2400);
setTimeout(() => {
    $('.eight').animate({top: 6500},6000)
}, 200);
    
    setTimeout(() => {
        $('.eight').css({display:'none'})
    }, 6000);
    $('.one').fadeOut();
    $('.two').fadeOut();
    setTimeout(() => {
        $('.one').fadeIn()
        $('.two').fadeIn()
    }, 5000);
     setTimeout(() => {
        $('.fourteen').css({display:'block'})
         var x=0
         var jian_ge=setInterval(function () {
             $('.jian_ge').css({display:'block'})
             $('.fourteen').css({ backgroundPosition: x+'px 0px'})
             x-=960;
             if(x<=-12480){
                 clearInterval(jian_ge)
             }
         },100)
     }, 5000);
$(document).scroll(function () { 
    $('.one').css({top:350-$(document).scrollTop()*0.2})
    $('.two').css({top:550-$(document).scrollTop()*0.2})
    $('.three').css({top:200-$(document).scrollTop()*0.07})
    $('.nine').css({top:450-$(document).scrollTop()*0.05})
    $('.ten').css({top:120-$(document).scrollTop()*0.05})
    $('.four').css({top:1000-$(document).scrollTop()*0.2})
    $('.five').css({top:1700-$(document).scrollTop()*0.35})
    $('.six').css({top:2200-$(document).scrollTop()*0.45})
    $('.fourteen').css({top:500-$(document).scrollTop()*0.85})
    $('.sevan').css({top:3000-$(document).scrollTop()*0.65})
    //yun
    $('.thrteen').css({top:4500-$(document).scrollTop()*0.45})
    $('.eleven').css({top:2800-$(document).scrollTop()*0.55})
    $('.twlven').css({top:2500-$(document).scrollTop()*0.55})
    var v=$(document).scrollTop()
    
    console.log(v)
    if (v>5935) {
        $('.op').animate({left:0},2000)
    }
});
$('.right>li').eq(2).mouseover(function () { 
    $('.pm').stop().animate({top:76},500)
    $('.bl').stop().fadeIn()
});
$('.right>li').eq(2).mouseout(function () { 
    $('.pm').stop().animate({top:-47},500)
    $('.bl').stop().fadeOut()
});
$('.right>li').eq(0).mouseover(function () { 
    $('.help').stop().animate({top:76},500)
    $('.bl').stop().fadeIn()
});
$('.right>li').eq(0).mouseout(function () { 
    $('.help').stop().animate({top:-155},500)
    $('.bl').stop().fadeOut()
});


console.log($('.a_1'))
$('.w_a').eq(0).mouseover(function () {
    $('.a_1').css({display:'none'});
    $('.a_1').eq(0).stop().fadeIn().siblings().css({display:'none'});
    $('.r').eq(0).stop().fadeIn()
})
$('.w_a').eq(0).mouseout(function () {
    $('.r').eq(0).css({display:'none'})
})
$('.w1>.r').mouseover(function () {
    $('.w1>.r').css({display:'block'})
})
$('.w1>.r').mouseout(function () {
    $('.w1>.r').css({display:'none'})
})


$('.w_a').eq(1).mouseover(function () {
    $('.a_1').css({display:'none'});
    $('.a_1').eq(1).stop().fadeIn().siblings().css({display:'none'});
    $('.r').eq(0).stop().fadeIn()
})
$('.w_a').eq(1).mouseout(function () {
    $('.r').eq(0).css({display:'none'})
})

$('.w_a').eq(2).mouseover(function () {
    $('.a_1').css({display:'none'});
    $('.a_1').eq(2).stop().fadeIn().siblings().css({display:'none'});
    $('.r').eq(0).stop().fadeIn()
})
$('.w_a').eq(2).mouseout(function () {
    $('.r').eq(0).css({display:'none'})
})

$('.w_a:eq(3)>.w_a_1').eq(0).mouseover(function () {
    $('.a_2').css({display:'none'});
    $('.a_2').eq(0).stop().fadeIn().siblings().css({display:'none'});
    $('.l').eq(1).stop().fadeIn()
})
$('.w_a:eq(3)>.w_a_1').eq(0).mouseout(function () {
    $('.l').eq(1).css({display:'none'})
})

$('.w_a:eq(3)>.w_a_2').eq(0).mouseover(function () {
    $('.a_2').css({display:'none'});
    $('.a_2').eq(1).stop().fadeIn().siblings().css({display:'none'});
    $('.l').eq(1).stop().fadeIn()
})
$('.w_a:eq(3)>.w_a_2').eq(0).mouseout(function () {
    $('.l').eq(1).css({display:'none'})
})

$('.w_a:eq(3)>.w_a_2').eq(1).mouseover(function () {
    $('.a_2').css({display:'none'});
    $('.a_2').eq(2).stop().fadeIn().siblings().css({display:'none'});
    $('.l').eq(1).stop().fadeIn()
})
$('.w_a:eq(3)>.w_a_2').eq(1).mouseout(function () {
    $('.l').eq(1).css({display:'none'})
})


 $('.w3>.l>.w_a>.w_a_1').eq(0).mouseover(function () {
     $('.w3>.r').eq(0).stop().fadeIn()
 })
 console.log($('.w3>.r').eq(0))
 $('.w3>.l>.w_a>.w_a_1').eq(0).mouseout(function () {
     $('.w3>.r').eq(0).css({display:'none'})
 })

 
 $('.w4>.r>.w_a').eq(0).mouseover(function () {
    $('.w4>.l').eq(0).stop().fadeIn()
})
$('.w4>.r>.w_a').eq(0).mouseout(function () {
    $('.w4>.l').eq(0).css({display:'none'})
})
