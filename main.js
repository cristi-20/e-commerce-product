// ********************
// Hamburger Menu
// *********************
const menu = document.querySelector(".menu");
      const close = document.querySelector(".close");
      const nav = document.querySelector(".nav");

      menu.addEventListener("click", () => {
        nav.classList.add("open-nav");
      });

      close.addEventListener("click", () => {
        nav.classList.remove("open-nav");
      });

// ********************
// /Hamburger Menu
// *********************



// ********************
//  Image Gallery
// *********************

mainImg = document.querySelector(".mainImg");
mainImg2 = document.querySelector(".mainImg2");
mainImg3 = document.querySelector(".mainImg3");
mainImg4= document.querySelector(".mainImg4");


thumb1 = document.querySelector('.thumb1');
thumb1Src = document.querySelector('.thumb1').src;
thumb2 = document.querySelector('.thumb2');
thumb2Src = document.querySelector('.thumb2').src;
thumb3 = document.querySelector('.thumb3');
thumb3Src = document.querySelector('.thumb3').src;
thumb4 = document.querySelector('.thumb4');
thumb4Src = document.querySelector('.thumb4').src;


thumb1.addEventListener("click",function() {
  mainImg.src = thumb1Src
  mainImg.classList.remove("display-none");
  mainImg2.classList.add("display-none");
  mainImg3.classList.add("display-none");
  mainImg4.classList.add("display-none");
})

thumb2.addEventListener("click",function() {
    mainImg2.src = thumb2Src
    mainImg2.classList.add("display-block");
    mainImg2.classList.remove("display-none"); 
    mainImg.classList.add("display-none");
    mainImg3.classList.add("display-none");
    mainImg4.classList.add("display-none");
})

thumb3.addEventListener("click",function() {
    mainImg3.src = thumb3Src
    mainImg3.classList.add("display-block");
    mainImg3.classList.remove("display-none");
    mainImg.classList.add("display-none");
    mainImg2.classList.add("display-none");
    mainImg4.classList.add("display-none"); 
})

thumb4.addEventListener("click",function() {
    mainImg4.src = thumb4Src
    mainImg4.classList.add("display-block");
    mainImg4.classList.remove("display-none");
    mainImg.classList.add("display-none");
    mainImg2.classList.add("display-none");
    mainImg3.classList.add("display-none");   
})


var thumb = document.querySelectorAll('.thumb');

for (var i=thumb.length; i--;) {
    thumb[i].addEventListener('click', eventHandler);
}

function eventHandler() {
    this.className = 'active';

    for (var i=thumb.length; i--;) {
        if (thumb[i] != this) thumb[i].className = '';
    }
}



// ********************
//  /Image Gallery
// *********************