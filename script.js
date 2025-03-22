const toggleButtons = document.querySelectorAll('.toggle-btn');

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
    button.textContent = 'Show less';
}

// Function to collapse text
function collapseText(description, button) {
    description.classList.remove('expanded');
    addClamp(description);
    button.textContent = 'Load more';
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