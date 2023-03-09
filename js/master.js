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