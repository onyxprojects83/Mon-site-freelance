document.getElementById('contactForm').addEventListener('submit', function (e) {
    let isValid = true;

    // Validation du champ "Nom complet"
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Lettres et espaces uniquement

    if (!nameRegex.test(nameField.value)) {
        nameError.textContent = "Le nom ne doit contenir que des lettres et des espaces.";
        isValid = false;
    } else {
        nameError.textContent = ""; // Supprime le message d'erreur si valide
    }

    // Validation du champ "Message"
    const messageField = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (messageField.value.length < 10) {
        messageError.textContent = "Le message doit contenir au moins 10 caractères.";
        isValid = false;
    } else {
        messageError.textContent = ""; // Supprime le message d'erreur si valide
    }

    // Bloque l'envoi du formulaire si des erreurs sont présentes
    if (!isValid) {
        e.preventDefault(); // Empêche l'envoi du formulaire
    }
});
