!function(){ //立即执行函数：前面有个符号，也可以写成+ -，一般写成!
   function rem(){
     var vw=window.innerWidth
     var html=document.documentElement
     if(vw>1000){
       html.style.fontSize='100px'
     }else {
       html.style.fontSize=(vw/1000)*100+'px'
     }
   }
   rem()
   window.onresize=rem
   window.addEventListener('orientationchange',rem)
 }()