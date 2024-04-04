
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
let prof;
let stylez;
document.addEventListener("DOMContentLoaded",function(){
   submenuA=document.getElementById("catM");
   glass=document.getElementById("glass");
   menu=document.getElementById("header");
   myCarousel = document.querySelector('#hero-carousel')
   textDiv = document.getElementById("mainText");
   morepg=document.getElementById("more_pg");
   stylez=document.getElementById("styleLan3");

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

function toggleMenuMs(){
  submenuA.style.opacity="1";
  submenuA.classList.add("expands");

}
function closeMenuS(){
  submenuA.style.opacity="0";
    setTimeout(function() { submenuA.classList.remove('expands'); }, 200);

}
function toggleMenuM(){
  
   submenuA.classList.add("expand");
   glass.style.opacity="100%";
   submenuA.style.opacity="1";

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
$(function(){
  $("#includedContent").load("footer.html"); 
});






function toggleLanguage(){
  if(stylez.getAttribute('href')== "style_rtl.css")
  stylez.setAttribute("href","");
  else
  stylez.setAttribute("href","style_rtl.css");
}

var currentLanguage = "english"; // Default language

function toggleLanguage2() {
  // Toggle language
  currentLanguage =stylez.getAttribute('href')== "style_rtl.css" ? "arabic" : "english";
  
  // Language dictionary
  var languageDict = {
    
    "english": {
      "view_all":"View All",
      "sub":"Subscribe to our newsletter and get 15% off your next purchase",
      "subtxt":"subscribe to our newsletter to be the first to recieve Exclusive offers.",
      "subButton":"Subscribe",
      "subHint":"Enter your email",
      "story":"Welcome to Style Haven, where we believe in the power of fashion to transform and inspire. From timeless essentials to modern trends, our curated selection offers handpicked pieces to elevate your wardrobe effortlessly. Discover the perfect styles that reflect your unique taste and vision. At Style Haven, every detail counts, ensuring your dream wardrobe comes to life with ease. Step into a world where fashion meets individuality, and let your style story unfold.",
      "ourSt":"Our Story",
      "bigText1": "Top Categories",
      "bigText2": "Most popular",
      "bigText3": "About Us",
      "cat_name1":"Jackets",
      "cat_name2":"T-shirts",
      "cat_name3":"Pants",
      "cat_name4":"Shoes",
      "cat_name5":"Hats",
      "categoryM":"Men",
      "categoryW":"Women",
      "categoryK":"Kids",
      "categoryA":"Accessories",
      "categoryB":"Boys",
      "categoryG":"Girls",
      "mainText": "Enhance your wardrobe with our exquisite selection.",
      "subText": "Discover handpicked collections tailored to your individual style.",
      "buttonText": "Explore collection",
      "story1": "Exclusive Collections",
      "story2": "Satisfied Customers",
      "story4": "Great Quality",
      "story5": "50+ Locations Worldwide",
      "p0":"Letter Drawstring Hoodie",
      "p1":"Sport sneakers",
      "p2":"Sport sneakers",
      "p3":"Girl plants tee",
      "search":"search"
    },
    "arabic": {
      "p0": "هودي برباط ورسومات حرفية",
      "p1": "حذاء رياضي",
      "p2": "حذاء رياضي",
      "p3": "قميص بتصميمات نباتية للفتاة",
      "view_all":"عرض الكل",
      "sub": "اشترك في نشرتنا الإخبارية واحصل على خصم 15% على عملية الشراء القادمة الخاصة بك",
      "subtxt": "اشترك في نشرتنا الإخبارية لتكون أول من يتلقى العروض الحصرية.",
      "subButton": "اشترك",
      "subHint": "أدخل بريدك الإلكتروني",
      "story": "مرحبًا بكم في ستايل هيفن، حيث نؤمن بقوة الموضة في التحول والإلهام. من الأساسيات الخالدة إلى الاتجاهات الحديثة، تقدم اختياراتنا المختارة بعناية قطعًا مميزة لرفع مستوى ملابسك بكل سهولة. اكتشف الأنماط المثالية التي تعكس ذوقك ورؤيتك الفريدة. في ستايل هيفن، كل التفاصيل مهمة، مما يضمن تحقيق حلم خزانتك بكل سهولة. ادخل إلى عالم حيث تلتقي الموضة بالفرادة، واسمح لقصة أسلوبك بالكشف عن نفسها.",
      "ourSt":"قصتنا",
      "story1": "مجموعات حصرية",
  "story2": "العملاء المرتاحون",
  "story4": "أكثر من 50 موقعاً حول العالم",
  "story5": "جودة عالية جداً",
      "bigText1": "أفضل الفئات",
      "bigText2": "الأكثر شيوعًا",
      "bigText3": "حولنا",
      "cat_name1":"السترات",
      "cat_name2":"التيشيرتات",
      "cat_name3":"السراويل",
      "cat_name4":"الاحذية",
      "cat_name5":"القبعات",
      "categoryM":"رجال",
      "categoryW":"نساء",
      "categoryK":"اطفال",
      "categoryA":"اكسسوارات",
      "categoryB":"اولاد",
      "categoryG":"بنات",
      "mainText": "تحسين خزانة ملابسك مع تشكيلتنا الرائعة.",
      "subText": "اكتشف مجموعات مختارة بعناية تتناسب مع أسلوبك الفردي.",
      "buttonText": "استكشاف المجموعة",
      "search":"بحث",

    }
  };
  
  // Update text content based on language
  document.getElementById("mainText").textContent = languageDict[currentLanguage]["mainText"];
  document.getElementById("subText").textContent = languageDict[currentLanguage]["subText"];
  document.getElementById("buttonMain").textContent = languageDict[currentLanguage]["buttonText"];

  document.querySelector(".categoryW").textContent = languageDict[currentLanguage]["categoryW"];
  document.querySelector(".categoryK").textContent = languageDict[currentLanguage]["categoryK"];
  document.querySelector(".categoryA").textContent = languageDict[currentLanguage]["categoryA"];
  document.querySelector(".categoryB").textContent = languageDict[currentLanguage]["categoryB"];
  document.querySelector(".categoryG").textContent = languageDict[currentLanguage]["categoryG"];

  var elementsM = document.querySelectorAll(".categoryM"); /*.textContent = languageDict[currentLanguage]["categoryM"];*/
  elementsM.forEach(function(element) {
    element.textContent = languageDict[currentLanguage]["categoryM"];
  });
  var elementsK = document.querySelectorAll(".categoryK"); /*.textContent = languageDict[currentLanguage]["categoryM"];*/
  elementsK.forEach(function(element) {
    element.textContent = languageDict[currentLanguage]["categoryK"];
  });
  var elementsW = document.querySelectorAll(".categoryW"); /*.textContent = languageDict[currentLanguage]["categoryM"];*/
  elementsW.forEach(function(element) {
    element.textContent = languageDict[currentLanguage]["categoryW"];
  });
  var elementsA = document.querySelectorAll(".categoryA"); /*.textContent = languageDict[currentLanguage]["categoryM"];*/
  elementsA.forEach(function(element) {
    element.textContent = languageDict[currentLanguage]["categoryA"];
  });
  var bigText=document.querySelectorAll(".bigText");
  for(let i=0; i<=2; i++){
bigText[i].textContent=languageDict[currentLanguage]["bigText"+(i+1)];
  }

  var catName=document.querySelectorAll(".cat_name");
  for(let i=0; i<=4; i++){
    catName[i].textContent=languageDict[currentLanguage]["cat_name"+(i+1)];
  }
  var story=document.querySelectorAll(".product_ourstory");
  for(let i=0; i<=4; i++){
    if(i!=2)
    story[i].textContent=languageDict[currentLanguage]["story"+(i+1)];
  }

document.querySelector("#ourSt").textContent = languageDict[currentLanguage]["ourSt"];
document.querySelector(".story").textContent = languageDict[currentLanguage]["story"];
document.querySelector("#t1").textContent = languageDict[currentLanguage]["sub"];
document.querySelector("#t2").textContent = languageDict[currentLanguage]["subtxt"];
document.querySelector("#mail_btn").textContent = languageDict[currentLanguage]["subButton"];
document.querySelector(".email").placeholder = languageDict[currentLanguage]["subHint"];
document.querySelector(".view_all").textContent = languageDict[currentLanguage]["view_all"];
var productNames= document.querySelectorAll(".product_name1");
for(let i=5; i<9; i++){
productNames[i].textContent = languageDict[currentLanguage]["p"+(i-5)];
}
document.querySelector("#search").placeholder = languageDict[currentLanguage]["search"];

}