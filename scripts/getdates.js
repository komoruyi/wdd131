// WDD 131 - Get Dates JavaScript

// Function to get current year and populate the copyright year
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

// Function to get last modified date and populate the footer
function setLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = ⁠ Last modified: ${lastModified} ⁠;
    }
}

// Run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setLastModified();
});

// Alternative approach using window.onload
// window.onload = function() {
//     setCurrentYear();
//     setLastModified();
// };