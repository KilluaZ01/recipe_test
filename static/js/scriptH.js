// Function to display the welcome message with animation
function displayWelcomeMessage() {
    const welcomeMessage = document.querySelector('.welcome');
    const ctaButton = document.querySelector('.cta-button');

    // Add a delay to make the welcome message appear with a fade-in effect
    setTimeout(() => {
        welcomeMessage.style.opacity = '1';
    }, 500);

    // Smooth scroll to the Recipe List section when CTA button is clicked
    ctaButton.addEventListener('click', () => {
        const recipeListSection = document.getElementById('recipe-list-section');
        recipeListSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Call the displayWelcomeMessage function when the page loads
window.onload = function () {
    displayWelcomeMessage();
};
