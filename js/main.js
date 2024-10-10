function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    
    // Adaugă sau elimină clasa 'menu-open' pe body
    document.body.classList.toggle('menu-open', navLinks.style.display === "flex");
}