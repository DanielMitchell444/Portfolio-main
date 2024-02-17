let mobileMenu = document.querySelector('#bars');
let navLinks = document.querySelector('.mobile-menu');


function open(){
  if(navLinks.style.display === "none"){
    navLinks.style.display = "none"
  
  } else {
   navLinks.style.display = "block";
   navLinks.classList.add('mobile-menu-active');
 }
}

mobileMenu.addEventListener('click', open);