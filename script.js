const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixed = document.querySelector("#image-fixed")
var elemC = document.querySelector("#elem-container")

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
    var video = e.getAttribute("data-video")
fixed.style.backgroundImage = `url(${video})`
   })
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        
      });
}

var fullScr = document.querySelector("#full-scr")
var menu = document.querySelector("nav h3")
var navImg = document.querySelector("nav img")
var flag =0
menu.addEventListener("click",function(){
    if(flag == 0){
   fullScr.style.top = 0
   navImg.style.opacity = 0
  flag = 1
}else{
    fullScr.style.top = "-100%"
    navImg.style.opacity = 1
   flag = 0
}

})

swiperAnimation()

var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},4200)