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

var lec=3;

function I1_open(){
   
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
    document.getElementById('p1').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I2_open(){
    
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
    document.getElementById('p2').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I3_open(){
    
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
    document.getElementById('p3').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I4_open(){
    
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
    document.getElementById('p4').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I5_open(){
    
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
    document.getElementById('p5').style.display='block'
    document.getElementById('three').style.display='none'
   
   document.getElementById('backey').style.display='inline-block'
   document.getElementById('divoider').style.marginTop='1px'


}
function I6_open(){
    
    
    document.getElementById('thepic').style.display='none'
    document.getElementById('cart').style.display='none'
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
   document.getElementById('thepic').style.display='inline-block'
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
    document.getElementById('msg_cart').style.display='none'
    document.getElementById('msg_cart2').style.display='none'

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
    document.getElementById('msg_cart').style.display='none'
    document.getElementById('msg_cart2').style.display='none'
}

//juh
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides(slideIndex+=n)
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

//juh

//juh
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n2) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides2(slideIndex2+=n2)
}

// Thumbnail image controls
function currentSlide2(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n2 > slides2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

//juh


//juh3
var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n3) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides3(slideIndex3+=n3)
}

// Thumbnail image controls
function currentSlide3(n3) {
  showSlides3(slideIndex3 = n3);
}

function showSlides3(n3) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
  }
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

//juh3


//juh4
var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n4) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides4(slideIndex4+=n4)
}

// Thumbnail image controls
function currentSlide4(n4) {
  showSlides4(slideIndex4 = n4);
}

function showSlides4(n4) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n4 > slides4.length) {slideIndex4 = 1}
  if (n4 < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none";
  }
  for (i4 = 0; i4 < dots4.length; i4++) {
      dots4[i4].className = dots4[i4].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
}

//juh4


//juh5
var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n5) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides5(slideIndex5+=n5)
}

// Thumbnail image controls
function currentSlide2(n5) {
  showSlides5(slideIndex5 = n5);
}

function showSlides5(n5) {
  var i5;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n5 > slides5.length) {slideIndex5 = 1}
  if (n5 < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
      slides5[i5].style.display = "none";
  }
  for (i5 = 0; i5 < dots5.length; i5++) {
      dots5[i5].className = dots5[i5].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
}

//juh5

//juh6
var slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n6) {
/*if(slideIndex<lec){
  showSlides(slideIndex += n);
}
else{
    showSlides(slideIndex=lec-2)
}
}*/
showSlides6(slideIndex6+=n6)
}

// Thumbnail image controls
function currentSlide2(n6) {
  showSlides6(slideIndex6 = n6);
}

function showSlides6(n6) {
  var i6;
  var slides6 = document.getElementsByClassName("mySlides6");
  var dots6 = document.getElementsByClassName("dot6");
  if (n6> slides6.length) {slideIndex6 = 1}
  if (n6 < 1) {slideIndex6 = slides6.length}
  for (i6 = 0; i6 < slides6.length; i6++) {
      slides6[i6].style.display = "none";
  }
  for (i6 = 0; i6 < dots6.length; i6++) {
      dots6[i6].className = dots6[i6].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
}

//juh66







function added_cart(a){
    document.getElementById('msg_cart').style.display='block'
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
    document.getElementById('msg_cart2').style.display='block'
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
    var x=document.getElementById('inp').value
    if (x.toLowerCase()=='apple 13 pro max' || x.toLowerCase()=='apple' ||x.toLowerCase()=='apple 13'||x.toLowerCase()=='apple pro max' ||x.toLowerCase()=='iphone'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I1_open()
    }
    else if (x.toLowerCase()=='asus tuf gaming F15' || x.toLowerCase()=='asus' ||x.toLowerCase()=='asus laptops'||x.toLowerCase()=='asus laptop'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I4_open()
    }
    else if (x.toLowerCase()=='samsung galaxy z fold3' || x.toLowerCase()=='samsung' ||x.toLowerCase()=='samsung phone'||x.toLowerCase()=='samsung galaxy'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I2_open()
    }
    else if (x.toLowerCase()=='oppo a74 5g' || x.toLowerCase()=='oppo' ||x.toLowerCase()=='oppo phone'||x.toLowerCase()=='oppo a74'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I3_open()
    }
    else if (x.toLowerCase()=='mi notebook pro' || x.toLowerCase()=='mi' ||x.toLowerCase()=='mi laptop'||x.toLowerCase()=='mi notebook' ||x.toLowerCase()=='xiaomi'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I5_open()
    }
    else if (x.toLowerCase()=='realme' || x.toLowerCase()=='realme smart watch 2 pro' ||x.toLowerCase()=='smart watch'||x.toLowerCase()=='realme watches' ||x.toLowerCase()=='watches'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        I6_open()
    }
    else if (x.toLowerCase()=='mobiles' || x.toLowerCase()=='phones' ||x.toLowerCase()=='mobile'||x.toLowerCase()=='phone'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        mobile_on()
    }
    else if (x.toLowerCase()=='laptops' || x.toLowerCase()=='laptop' ||x.toLowerCase()=='lap'||x.toLowerCase()=='macbook'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        laptop_on()
    }
    else if (x.toLowerCase()=='gadgets' || x.toLowerCase()=='gadget' ||x.toLowerCase()=='others'||x.toLowerCase()=='electronics'){
        document.getElementById('search_page').style.display='none'
        document.getElementById('bott').style.display='block'
        document.getElementById('header').style.display='block'
        document.getElementById('bodyer').style.display='block'
        gadget_on()
    }
    else{
    document.getElementById('search_page').style.display='none'
    document.getElementById('bott').style.display='block'
    document.getElementById('header').style.display='block'
    document.getElementById('bodyer').style.display='block'
}
document.getElementById('inp').value=''
}