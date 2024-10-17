function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";

    // Adaugă sau elimină clasa 'menu-open' pe body
    document.body.classList.toggle('menu-open', navLinks.style.display === "flex");
}



(function() {
    emailjs.init("5tNvNDnt_nIgCoEd5"); // Înlocuiește cu User ID-ul tău din EmailJS
  })();

  document.getElementById('hobby-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea implicită a formularului

    emailjs.sendForm('service_jt9q8mo', 'template_inye10d', this)
      .then(function() {
        alert('Mesajul a fost transmis!'); // Afișează un mesaj după trimiterea cu succes
        document.getElementById('hobby-form').reset(); // Resetează câmpurile formularului
      }, function(error) {
        alert('A apărut o eroare la trimiterea mesajului. Încercați din nou.');
        console.log('Eroare:', error);
      });
  });
