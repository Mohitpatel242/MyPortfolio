// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Spy for Navigation Dots
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".nav-dot");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if we have scrolled down to this section
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navDots.forEach((dot) => {
        dot.classList.remove("active");
        // If the dot's link matches the current section ID, make it active
        if (dot.getAttribute("href").includes(current)) {
            dot.classList.add("active");
        }
    });
});