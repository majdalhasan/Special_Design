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


//Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

  }else {

    backgroundOption = false;

  }

  //Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element=> {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  }else {

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}


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
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
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
      }, 7000)
  }
}

randomizeImgs();



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;


  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //window Height
  let windowHeight = this.innerHeight;


  // Window Scroll Top 
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight) - 100) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  } 

};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    //Create Overlay Element
    let overlay = document.createElement("div");

    //Add Class To Overlay
    overlay.className = 'popup-overlay';

    //Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading 
      let imgHading = document.createElement("h3");

      // Create Text For Heading 
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To The Body
    document.body.appendChild(popupBox);

    // Create Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append The Text To The Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button 
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);


  });

});


// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});