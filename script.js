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

window.addEventListener("load", function () {
    document.querySelector(".loader").classList.add("hidden");
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    }).then(() => {
        alert("Votre message a bien été envoyé !");
        form.reset();
    }).catch(() => {
        alert("Une erreur est survenue. Veuillez réessayer.");
    });
});


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
