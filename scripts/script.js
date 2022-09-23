const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.querySelector(".mobile-nav-items");

menuToggle.addEventListener('click', () => {
   mobileLinks.style.display = "block";
});
