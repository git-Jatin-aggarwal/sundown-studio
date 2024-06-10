const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var fixed = document.querySelector("#image-fixed");
var elemC = document.querySelector("#elem-container");

elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

// var vid = document.createElement("video")
// var elems = document.querySelectorAll(".elem")
// elems.forEach(function(e){
//    e.addEventListener("mouseenter",function(){
//     var video = e.getAttribute("data-video")
//     var addele = document.querySelector("#image-fixed").appendChild("vid")
//      vid.textContent = `src(${video})`;
//    })
// })

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

var fullScr = document.querySelector("#full-scr");
var menu = document.querySelector("nav h3");
var navImg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    fullScr.style.top = 0;
    navImg.style.opacity = 0;
    flag = 1;
  } else {
    fullScr.style.top = "-100%";
    navImg.style.opacity = 1;
    flag = 0;
  }
});

swiperAnimation();

var loader = document.querySelector("#loader");

setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);


// var Click = document.querySelectorAll(".h1")
// var design = document.querySelector("#design1")
// var project = document.querySelector("#project1")
// var execution = document.querySelector("#execution1")
//  var noflag = 0
// Click.forEach(function(e){
//  e.addEventListener("mouseenter",function(){
//     if(noflag === 0){
//       e.style.color = "#fff"
//       e.style.borderLeft = "2px solid #FE330A"

//       noflag =1

//     }
//     else if(noflag === 1){
//       e.style.color = "#fff"
//       e.style.borderLeft = "2px solid #FE330A"
//       design.style.display = "none"
//       noflag =0
  
//     }
    
//   })
// })

var designImage = document.querySelector("#design1")
var projectImage = document.querySelector("#project1")
 var executionImage = document.querySelector("#execution1")
var design = document.querySelector("#design")
var project = document.querySelector("#project")
 var execution = document.querySelector("#execution")
var designPara = document.querySelector("#design-p")
var projectPara = document.querySelector("#project-p")
 var executionPara = document.querySelector("#execution-p")


 design.addEventListener("mouseenter",function(){
  design.style.color = "#fff"
 design.style.borderLeft = "2px solid #FE330A"
 designImage.style.display ="block"
 designPara.style.display = "block"

 project.style.color = "#504A45"
 project.style.borderLeft = "2px solid #504A45"
 projectImage.style.display  ="none"
projectPara.style.display="none"

 execution.style.color ="#504A45"
  execution.style.borderLeft ="2px solid #504A45"
  executionImage.style.display ="none"
  executionPara.style.display = "none"

 })

 project.addEventListener("mouseenter",function(){
  project.style.color = "#fff"
 project.style.borderLeft = "2px solid #FE330A"
 projectImage.style.display  ="block"
 projectPara.style.display ="block"

 designImage.style.display  ="none"
 design.style.color = "#504A45"
 design.style.borderLeft = "2px solid #504A45"
 designPara.style.display = "none"


 execution.style.color ="#504A45"
 executionImage.style.display  ="none"
 execution.style.borderLeft ="2px solid #504A45"
 executionPara.style.display = "none"

 })

 execution.addEventListener("mouseenter",function(){
  execution.style.color ="#fff"
  execution.style.borderLeft ="2px solid #FE330A"
  executionImage.style.display ="block"
  executionPara.style.display = "block"


  project.style.color = "#504A45"
  project.style.borderLeft = "2px solid #504A45"
  projectImage.style.display  ="none"
  projectPara.style.display  ="none"

  designImage.style.display  ="none"
  design.style.color = "#504A45"
 design.style.borderLeft = "2px solid #504A45"
 designPara.style.display = "none"

 })

