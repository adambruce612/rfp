const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.getElementById("mobile-nav-items");
let mobileNavHome = document.getElementById("mobile-nav-home");
let mobileNavMusic = document.getElementById("mobile-nav-music");
let mobileNavAbout = document.getElementById("mobile-nav-about");
let mobileNavTour = document.getElementById("mobile-nav-tour");
let mobileNavContact = document.getElementById("mobile-nav-contact");


// menuToggle.addEventListener('click', () => {
//    if (mobileLinks.classList = "active") {
//    mobileLinks.classList.remove("active")
//    } else {
//       mobileLinks.classList.remove("active");
//    }
// });

menuToggle.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
})

mobileNavHome.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
} )

mobileNavMusic.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
} )

mobileNavAbout.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
} )

mobileNavTour.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
} )

mobileNavContact.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
} )

