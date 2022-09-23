const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.querySelector(".mobile-nav-item");

menuToggle.addEventListener('click', () => {
   if (mobileLinks.style.display === "none") {
   mobileLinks.style.display = "block";
   } else {
      mobileLinks.style.display = "none";
   }
});
