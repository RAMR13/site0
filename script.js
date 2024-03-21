
window.addEventListener("scroll", function(){
    var slider=this.document.getElementById("slider");
   var menu=this.document.getElementById("header");
   var scrollcontainer=this.document.getElementById("scrollable_container");
   menu.classList.toggle("scrolls", window.scrollY>0);
   slider.classList.toggle("scrolls",this.window.scrollY>0);
   scrollcontainer.classList.toggle("scrolls",this.window.scrollY>0);
})
let submenuA;
let glass;
let menu;
let myCarousel;
let textDiv;
let morepg;
document.addEventListener("DOMContentLoaded",function(){
   submenuA=document.getElementById("catM");
   glass=document.getElementById("glass");
   menu=document.getElementById("header");
   myCarousel = document.querySelector('#hero-carousel')
   textDiv = document.getElementById("mainText");
   morepg=document.getElementById("more_pg");
});

function closeM(){
   submenuA.classList.remove("expand")
   glass.style.opacity="0%";
   glass.style.visibility="hidden";
 //  menu.style.backgroundColor="rgba(22, 22, 23, 0.644)";
}
function openMore(){
 morepg.classList.add("open");
}
function closeMore(){
 setTimeout(function() { morepg.classList.add('close'); }, 1);
 setTimeout(function() { morepg.classList.remove('open'); }, 50);
 setTimeout(function() { morepg.classList.remove('close'); }, 300);
}
function toggleMenuM(){
   submenuA.classList.add("expand");
   glass.style.opacity="100%";
   glass.style.visibility="visible";
   menu.classList.add("scrolls");
//   menu.style.backgroundColor="#161617";
}




document.addEventListener("DOMContentLoaded", function() {
// Select the carousel element
var myCarousel = document.querySelector('hero-carousel');

// Initialize the carousel
var carousel = new bootstrap.Carousel(myCarousel);

// Select the div where you want to change the text
textDiv = document.getElementById("mainText");

// Listen for the 'slide.bs.carousel' event
myCarousel.addEventListener('slide.bs.carousel', function (event) {
   // Get the index of the slide being slid into view
   var currentIndex = event.to;
   
   // Update the text based on the index
   switch (currentIndex) {
       case 0:
           textDiv.textContent = "Text for slide 1";
           break;
       case 1:
           textDiv.textContent = "Text for slide 2";
           break;
       // Add cases for other slides as needed
   }
});
});
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width: ", tabsList.scrollWidth);
  console.log("client width: ", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);

let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});