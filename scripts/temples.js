// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        hamburger.innerHTML = "&times;";
        hamburger.setAttribute("aria-label", "Close menu");
        hamburger.setAttribute("aria-expanded", "true");
    } else {
        hamburger.innerHTML = "&#9776;";
        hamburger.setAttribute("aria-label", "Open menu");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// Close nav if window is resized to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove("open");
        hamburger.innerHTML = "&#9776;";
        hamburger.setAttribute("aria-label", "Open menu");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;