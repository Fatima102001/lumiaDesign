// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};


  document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let links = document.querySelectorAll(".navbar ul li a, .dropdown-menu ul li a");
    
    links.forEach(link => {
      if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
      }
    });
  });




// Nav Bar Ends

const header = document.getElementById("navbar");

// Changer couleur quand on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) { 
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 🎨 Menu navigation
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");

// Activer un lien au clic
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Observer les SECTIONS pour mettre le bon lien actif au scroll
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      links.forEach(l => l.classList.remove("active"));
      const activeLink = document.querySelector(`#nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, { threshold: 0.1 }); // déclenche quand 60% de la section est visible

document.querySelectorAll("section").forEach(section => {
  sectionObserver.observe(section);
});

// ✨ Observer les éléments à animer
const elementObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 👉 si tu veux que ça disparaisse quand tu quittes la section
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".hidden").forEach(el => elementObserver.observe(el));
