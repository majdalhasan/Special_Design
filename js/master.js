//Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

  document.documentElement.style.setProperty('--main-color',mainColors);

  //Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(Element => {

    Element.classList.remove("active");


    //Add Active Class On Element With Data-Color === Local Storage Item
    if (Element.dataset.color === mainColors) {

      //Add Active Class
      Element.classList.add("active");

    }


  });


}

//Random Background Option
let backgroundOption = true;


//Variable To Control The Background Interval
let backgroundInterval;


//Toggle Spin Class On Icon
document.querySelector(".toggle-settings i").onclick = function () {
  //toggle class fa-spin for rotation on self
  this.classList.toggle("rotate");


  //toggle class open on main settings box
  document.querySelector(".settings-box").classList.toggle("open");
};

//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items
colorsLi.forEach(li => {

  //Click On Every List Items
  li.addEventListener("click", (e) => {

    //Set Color On Root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    //Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(Element => {

      Element.classList.remove("active");

    });

    //Add Active Class On Self
    e.target.classList.add("active");

  });

});


//Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//Loop On All Spans
randomBackEl.forEach(span => {

  //Click On Every Span
  span.addEventListener("click", (e) => {

    //Remove Active Class From All Spans
    e.target.parentElement.querySelectorAll(".active").forEach(Element => {

      Element.classList.remove("active");

    });

    //Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }

  });

});


//Select Landing Page Element
let landingPage=document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];


//Function Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {
    
    backgroundInterval = setInterval(() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      
      //Change Background Image Url
      landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
      }, 10000)
  }
}
