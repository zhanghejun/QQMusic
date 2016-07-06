$(function(){
	var musics=[
{src:'meder/1.mp3',name:'骄傲的少年',artistan:'南征北战',duration:'02:00'},
{src:'meder/2.mp3',name:'瓶中沙',artistan:'twins',duration:'02:00'},
{src:'meder/3.mp3',name:'算你狠',artistan:'陈小春',duration:'02:00'},
{src:'meder/4.mp3',name:'败家娘们',artistan:'大庆小芳',duration:'02:00'},
{src:'meder/5.mp3',name:'今生是兄弟',artistan:'二龙湖浩',duration:'02:00'},
{src:'meder/6.mp3',name:'星月神话',artistan:'金莎',duration:'02:00'},
{src:'meder/7.mp3',name:'我的天空',artistan:'南征北站',duration:'02:00'},
{src:'meder/8.mp3',name:'菊花爆满山',artistan:'马腾',duration:'02:00'},
{src:'meder/9.mp3',name:'社会摇',artistan:'萧腾',duration:'02:00'}
];
//插入列表
$(musics).each(function(index,v){
	$('<ul class="zheng" data='+index+'><li class="quname">'+v.name+'</li><li class="name">'+v.artistan+'</li><li class="time">'+v.duration+'</li><div class="shang"><li class="quname">'+v.name+'</li><li class="name">'+v.artistan+'</li><li class="time"><div class="lick"><div class="xihuan"><div class="xhbe"></div></div><div class="fx"><div class="fxbe"></div></div><div class="sc"><div class="scbe"></div></div><div class="ac"><div class="acbe"></div></div></div></li></div></ul>').appendTo(".music-lb")
})
//点击换字
var kkk;
$('.zheng').on('click',function(){
	var ge=$('.quzi1');
	var ge1=$('.geshou1');
	var ge2=$('.geshou2');
    kkk=$(this).attr('data')
    ge.text(musics[kkk].name)
    ge1.text(musics[kkk].artistan)
    ge2.text(musics[kkk].duration)
})	
//右换歌
$('.right').on('click',function(){
	kkk+=1;
	if(kkk>musics.length-1){
		kkk=0;
	}
	/*if(kkk<0){
		kkk=musics.length
	}*/
	audio.src=musics[kkk].src;
	audio.play();
})
//左换歌
$('.left').on('click',function(){
	kkk-=1;
	if(kkk<0){
		kkk=musics.length-1;
	}
	audio.src=musics[kkk].src;
	audio.play();
})

//清空列表
$('.main-xiala').on('click',function(e){
	e.stopPropagation();
	$(".music-lb").empty($('.zheng'))
    $('.biao').text(0)
})
//点击删除
$('.ac').on('click',function(e){
    e.stopPropagation();
    $(this).closest('ul').remove();
    $('.biao').text($('ul').length);
})

//点击换歌
$('.zheng').on('click',function(){
	audio.src=musics[$(this).attr('data')].src;
	audio.play();
})


//播放、暂停
	var audio=$('#audio').get(0);
	var $audio=$('#audio');
	$('.stop').on('click',function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	})
	$audio.on('play',function(){
	    $('.zheng').removeClass('green');
        //下边换字
	    var ge=$('.quzi1');
	    var ge1=$('.geshou1');
	    var ge2=$('.geshou2');
        ge.text(musics[kkk].name)
        ge1.text(musics[kkk].artistan)
        ge2.text(musics[kkk].duration)
        //播放字体变绿
	    $('.zheng').eq(kkk).addClass('green');
		$('.stop').addClass('play');
	})
	$audio.on('pause',function(){
		$('.stop').removeClass('play');
	})


	$(document).on('keyup',function(e){
		if(e.shiftKey&&e.keyCode===80){
			$('.stop').trigger('click')
		}
	})
	//音量

	$('.liang-x').on('click',function(e){
		audio.volume=e.offsetX/$(this).width();
	})
	/*$('.bao').on('click',function(){
		if(!$(this).attr('aa')){
			$(this).attr('aa',audio.volume);
			audio.volume=0;
		}else{
			audio.volume=$(this).attr('aa');
			$(this).removeAttr('aa')
		}
	})*/

$audio.on('volumechange',function(){
 if(audio.volume===0){
      $('.yin').addClass('mute');
    }else{
      $('.yin').removeClass('mute');
    }
    var w=audio.volume*$('.bao').width();
    $('.liang').width(w-10);
    $('.disc').css({left:w-5});
  })
  $('.disc').on('click',function(e){
    e.stopPropagation();
  })
//进度条
 var jin=$('.jindu');
 var zhi=$('.zhishidian');
 var tiao=$('.hongtiao');
 $audio.on('timeupdate',function(){
 	var yi=audio.currentTime;
 	var zon=audio.duration;
 	var dd=jin.width()*(yi/zon);
 	tiao.width(dd);
 })

/*tiao.on('click'function(e){
    e.stopPropagation();
})
*/

 


})