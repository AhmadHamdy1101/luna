var hambrger = document.querySelector(".humperger");
var menu = document.querySelector(".main-menu");
var closemenu = document.querySelector(".close");

function hmenu() {
  menu.style.display="block";
  closemenu.style.display="block";
  closemenu.style.animation="closeanim 1s"
  
}
hambrger.addEventListener("click", hmenu);
closemenu.addEventListener("click",function () {
  menu.style.display="none";
  closemenu.style.display="none";
});

const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
      },
 
    speed: 400,
    loop: true,}
    );
    AOS.init();
    $("body").niceScroll({
      cursorcolor: "#3a1984",
      cursorborder: "none",
      scrollspeed: 50,
    });