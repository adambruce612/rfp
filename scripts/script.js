const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.querySelectorAll(".mobile-nav-item");

console.log(mobileLinks);
menuToggle.addEventListener('click', () => {
   mobileLinks.forEach(element => {
    mobileLinks[element].classList.add("active"); 
   });
});
