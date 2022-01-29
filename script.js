window.onload= () =>{

    setTimeout(loadrem,1000)
}
//loading first screen
function loadrem(){
    document.getElementById('loading').style.display='none'
    document.getElementById('modulo_onl').style.display='block'
}

//make inform
function make_off_info(){
    document.getElementById('modulo_onl').style.display='none'
}


//Menu bar lines
function menubar(){
    document.getElementById('barout').style.display='inline-block'
    document.getElementById('three').style.display='none'
   
}

//menu bar open
function menu_barin(){
    document.getElementById('barout').style.display='none'
    document.getElementById('three').style.display='inline-block'
}

//bar remove methods
function bar_remove(x){
    if (!e) var e = window.event;
e.cancelBubble = true;
if (e.stopPropagation) e.stopPropagation();
    if(x==0){
    document.getElementById('barout').style.display='none'
    document.getElementById('three').style.display='inline-block'}
    else{pass}
}


//search bar coming out
function search_bar_open(){
    document.getElementById('search_page').style.display='block'
    document.getElementById('bott').style.display='none'
    document.getElementById('header').style.display='none'
    document.getElementById('bodyer').style.display='none'
}

function HandleBackFunctionality()  
 {  
       if(window.event) //Internet Explorer  
      {  
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
       }  
       else //Other browsers for example Chrome  
       {  
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block' 
       }  
 }
 function search_bar_off(){
    document.getElementById('search_page').style.display='none'
    document.getElementById('bott').style.display='block'
    document.getElementById('header').style.display='block'
    document.getElementById('bodyer').style.display='block'

 }






 //meth
 function all_on(){
    document.getElementById('all').style.display='block'
    document.getElementById('mobile').style.display='none'
    document.getElementById('laptop').style.display='none'
    document.getElementById('gadget').style.display='none'
   
    document.getElementById('allids').style.backgroundColor='rgba(11, 54, 94, 0.99)'
    document.getElementById('allid').style.color='rgb(255, 255, 255)'

    document.getElementById('mobileids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('mobileid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('laptopids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('laptopid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('gadgetids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('gadgetid').style.color='rgba(11, 54, 94, 0.99)'

    
   // document.getElementById('videoblock').style.border='0px'

}

function mobile_on(){
    document.getElementById('mobile').style.display='block'
    document.getElementById('all').style.display='none'
    document.getElementById('laptop').style.display='none'
    document.getElementById('gadget').style.display='none'
   
    document.getElementById('mobileids').style.backgroundColor='rgba(11, 54, 94, 0.99)'
    document.getElementById('mobileid').style.color='rgb(255, 255, 255)'

    document.getElementById('allids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('allid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('laptopids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('laptopid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('gadgetids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('gadgetid').style.color='rgba(11, 54, 94, 0.99)'

    
   // document.getElementById('videoblock').style.border='0px'

}
function laptop_on(){
    document.getElementById('laptop').style.display='block'
    document.getElementById('mobile').style.display='none'
    document.getElementById('all').style.display='none'
    document.getElementById('gadget').style.display='none'
   
    document.getElementById('laptopids').style.backgroundColor='rgba(11, 54, 94, 0.99)'
    document.getElementById('laptopid').style.color='rgb(255, 255, 255)'

    document.getElementById('mobileids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('mobileid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('allids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('allid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('gadgetids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('gadgetid').style.color='rgba(11, 54, 94, 0.99)'

    
   // document.getElementById('videoblock').style.border='0px'

}
function gadget_on(){
    document.getElementById('gadget').style.display='block'
    document.getElementById('mobile').style.display='none'
    document.getElementById('laptop').style.display='none'
    document.getElementById('all').style.display='none'
   
    document.getElementById('gadgetids').style.backgroundColor='rgba(11, 54, 94, 0.99)'
    document.getElementById('gadgetid').style.color='rgb(255, 255, 255)'

    document.getElementById('mobileids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('mobileid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('laptopids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('laptopid').style.color='rgba(11, 54, 94, 0.99)'

    document.getElementById('allids').style.backgroundColor='rgb(255, 255, 255)'
    document.getElementById('allid').style.color='rgba(11, 54, 94, 0.99)'

    
   // document.getElementById('videoblock').style.border='0px'

}



function I1_open(){
    
    document.getElementById('p1').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I2_open(){
    
    document.getElementById('p2').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I3_open(){
    
    document.getElementById('p3').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I4_open(){
    
    document.getElementById('p4').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I5_open(){
    
    document.getElementById('p5').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I6_open(){
    
    document.getElementById('p6').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function back_to_home(){
    
   
   document.getElementById('backey').style.display='none'
   document.getElementById('divoider').style.marginTop='6px'
   document.getElementById('p1').style.display='none'
   document.getElementById('p2').style.display='none'
   document.getElementById('p3').style.display='none'
  
   document.getElementById('p4').style.display='none'
   document.getElementById('p5').style.display='none'
   document.getElementById('p6').style.display='none'
   
   document.getElementById('barout').style.display='none'
   document.getElementById('three').style.display='inline-block'


}

function certbackbutton(){
    document.getElementById('main_modulo').style.display='none'
    document.getElementById('main_modulo2').style.display='none'
    document.getElementById('aboutt').style.display='none'

}
function cert_open(){
    // document.getElementById('res_modulo').style.display='none'
     
     document.getElementById('main_modulo').style.display='block'
     
 
     
   }

function order_bucket(){
    document.getElementById('main_modulo2').style.display='block'
}
function cart_open(){
    document.getElementById('cart').style.display='block'
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function added_cart(a){
    if(a==1){
        document.getElementById('pro1').style.display='block'
        document.getElementById('delete1').style.display='block'
        document.getElementById('ark1').style.display='none'
    }
    else if(a==2){
        document.getElementById('pro2').style.display='block'
        document.getElementById('delete2').style.display='block'
        document.getElementById('ark2').style.display='none'
    }
    else if(a==3){
        document.getElementById('pro3').style.display='block'
        document.getElementById('delete3').style.display='block'
        document.getElementById('ark3').style.display='none'
    }
    else if(a==4){
        document.getElementById('pro4').style.display='block'
        document.getElementById('delete4').style.display='block'
        document.getElementById('ark4').style.display='none'
    }
    else if(a==5){
        document.getElementById('pro5').style.display='block'
        document.getElementById('delete5').style.display='block'
        document.getElementById('ark5').style.display='none'
    }
    else if(a==6){
        document.getElementById('pro6').style.display='block'
        document.getElementById('delete6').style.display='block'
        document.getElementById('ark6').style.display='none'
    }
}
function del_cart(a){
    if(a==1){
        document.getElementById('pro1').style.display='none'
        document.getElementById('delete1').style.display='none'
        document.getElementById('ark1').style.display='block'
    }
    else if(a==2){
        document.getElementById('pro2').style.display='none'
        document.getElementById('delete2').style.display='none'
        document.getElementById('ark2').style.display='block'
    }
    else if(a==3){
        document.getElementById('pro3').style.display='none'
        document.getElementById('delete3').style.display='none'
        document.getElementById('ark3').style.display='block'
    }
    else if(a==4){
        document.getElementById('pro4').style.display='none'
        document.getElementById('delete4').style.display='none'
        document.getElementById('ark4').style.display='block'
    }
    else if(a==5){
        document.getElementById('pro5').style.display='none'
        document.getElementById('delete5').style.display='none'
        document.getElementById('ark5').style.display='block'
    }
    else if(a==6){
        document.getElementById('pro6').style.display='none'
        document.getElementById('delete6').style.display='none'
        document.getElementById('ark6').style.display='block'
    }
}
function cart_back(){
    document.getElementById('cart').style.display='none'
   
}
function about(){
    document.getElementById('aboutt').style.display='block'
}
function searching(){
    document.getElementById('search_page').style.display='none'
    document.getElementById('bott').style.display='block'
    document.getElementById('header').style.display='block'
    document.getElementById('bodyer').style.display='block'
}