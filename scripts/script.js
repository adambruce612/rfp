const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.getElementById("mobile-nav-items");
let tourLink = document.getElementById("tour")


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


