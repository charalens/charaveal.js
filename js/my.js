'use strict';

let waricomaLeft = 0;
$('.waricoma').each(function(){
  $(this).attr('style', `width: ${Math.floor(12+Math.random()*9)}%;left:${waricomaLeft+Math.floor(Math.random()*11)}%;`);
  $(this).css('animation-delay', `-${Math.floor(Math.random()*61)}s`);
  waricomaLeft+=20;
});
