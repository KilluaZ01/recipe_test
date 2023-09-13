// Function to handle form submission
function saveRecipe(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get form values
    const title = document.getElementById("title").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const steps = document.getElementById("steps").value.trim();
    const image = document.getElementById("image").value.trim();

    // Perform form validation
    if (!title || !ingredients || !steps) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create a new recipe object
    const recipe = {
        title: title,
        ingredients: ingredients,
        steps: steps,
        image: image
    };

    // You can add code here to save the recipe to your data storage (e.g., an array)

    // For now, we'll just display the recipe object in the console
    console.log(recipe);

    // Optionally, you can redirect the user to another page (e.g., Recipe List) after saving the recipe
    // window.location.href = '/recipe-list'; // Uncomment this line to enable redirection
}

// Add a submit event listener to the form
const recipeForm = document.getElementById("recipe-form");
recipeForm.addEventListener("submit", saveRecipe);
