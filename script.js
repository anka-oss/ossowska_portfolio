const toggleButtons = document.querySelectorAll('.toggle-btn');
const backToTopBtn = document.getElementById('backToTop');

function removeClamp(description) {
    description.classList.remove('description');
}

function addClamp(description) {
    description.classList.add('description');
}

// Function to expand text
function expandText(description, button) {
    description.classList.add('expanded');
    removeClamp(description);
    button.textContent = 'Zwiń';
}

// Function to collapse text
function collapseText(description, button) {
    description.classList.remove('expanded');
    addClamp(description);
    button.textContent = 'Pokaż więcej';
}

// Event listener for each button
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const description = this.previousElementSibling;

        if (description.classList.contains('expanded')) {
            collapseText(description, this);
        } else {
            expandText(description, this);
        }
    });
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

function initBackToTopButton(options = {}) {
    const {
        selector = "#backToTop", // Default selector
        scrollThreshold = 200, // When to show the button
        scrollBehavior = "smooth" // Scroll animation
    } = options;

    const button = document.querySelector(selector);
    if (!button) return;

    function toggleVisibility() {
        button.style.display = window.scrollY > scrollThreshold ? "block" : "none";
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
    }

    window.addEventListener("scroll", toggleVisibility);
    button.addEventListener("click", scrollToTop);

    toggleVisibility(); // Set initial state
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initBackToTopButton();
});