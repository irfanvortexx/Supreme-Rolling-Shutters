// Toggle menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Auto-close menu after clicking a link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll + active menu highlight

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });

    // Fade-in animation on scroll
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionTop < screenHeight - 100) {
            section.classList.add("visible");
        }
    });
});

//===============================================================================================================

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile footer navigation active state
const mobileLinks = document.querySelectorAll('.mobile-footer-nav a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Arrow click events
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Dot click events
const dotElements = document.querySelectorAll('.dot');
dotElements.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});