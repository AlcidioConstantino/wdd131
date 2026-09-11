// ==============================
// WDD 131 - Temple Album
// JavaScript
// ==============================

// Current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// ==============================
// Responsive Hamburger Menu
// ==============================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }

});