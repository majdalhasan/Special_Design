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

  });

});


//Select Landing Page Element
let landingPage=document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

setInterval(() => {
//Get Random Number
let randomNumber = Math.floor(Math.random() * imgsArray.length);

//Change Background Image Url
landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
}, 10000)