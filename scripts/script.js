const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.getElementById("mobile-nav-items");

console.log(mobileLinks.classList);

// menuToggle.addEventListener('click', () => {
//    if (mobileLinks.classList = "active") {
//    mobileLinks.classList.remove("active")
//    } else {
//       mobileLinks.classList.remove("active");
//    }
// });

menuToggle.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
   console.log(mobileLinks.classList);
})