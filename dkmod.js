// Sélection des éléments du DOM
const formSections = document.querySelectorAll(".form-section");
const progressBar = document.getElementById("progress-bar");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const themeToggle = document.querySelector(".theme-toggle");

let currentSectionIndex = 0;

// Fonction pour afficher la section active
function updateFormDisplay() {
    formSections.forEach((section, index) => {
        section.classList.toggle("hidden", index !== currentSectionIndex);
    });

    // Mise à jour des boutons
    prevButton.classList.toggle("hidden", currentSectionIndex === 0);
    nextButton.classList.toggle("hidden", currentSectionIndex === formSections.length - 1);
    submitButton.classList.toggle("hidden", currentSectionIndex !== formSections.length - 1);

    // Mise à jour de la barre de progression
    const progressPercentage = ((currentSectionIndex + 1) / formSections.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Gestion des boutons "Suivant" et "Précédent"
nextButton.addEventListener("click", () => {
    if (currentSectionIndex < formSections.length - 1) {
        currentSectionIndex++;
        updateFormDisplay();
    }
});

prevButton.addEventListener("click", () => {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        updateFormDisplay();
    }
});

// Fonction pour soumettre le formulaire
submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche l'envoi par défaut
    const formData = new FormData(document.querySelector("form"));
    const data = Object.fromEntries(formData.entries());

    // Affichage des données dans la console (simule l'envoi au serveur)
    console.log("Formulaire soumis avec les données :", data);

    // Réinitialisation ou affichage d'un message de succès
    alert("Formulaire soumis avec succès !");
    currentSectionIndex = 0;
    updateFormDisplay();
    document.querySelector("form").reset();
});

// Fonction pour basculer le mode sombre
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector(".form-container").classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "🌞 Mode clair" : "🌙 Mode sombre";
});

// Initialisation du formulaire
updateFormDisplay();

