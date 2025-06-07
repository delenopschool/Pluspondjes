document.addEventListener("DOMContentLoaded", function() {
    console.log("Website geladen!");
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("#nav-links");

    menuToggle.addEventListener("click", function() {
        // Controleer of het menu al open is en toggle de class
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        } else {
            navLinks.classList.add("show");
        }
    });

    // Sluit het menu als er buiten wordt geklikt
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
