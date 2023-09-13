// Sample data for recipes (you can replace this with your data storage)
const recipes = [
    {
        id: 1,
        title: "Chicken Spaghetti",
        ingredients: "Spaghetti, Eggs, Chicken, Pecorino cheese, Black pepper",
        steps: "Cook pasta,Fry Chicken,Mix eggs and cheese,Combine all ingredients,Add pepper.",
        image: "/static/images/ChickenSpaghetti.jpg"
    },
    {
        id: 2,
        title: "Buff Momo",
        ingredients: "Flour, Buff Meat, Momo Masala, Onion, Cabbage, Garlic, Oil",
        steps: "Mix Flour with water,Cut all the veggie,Mix veggies and Buff meat,Pack the meat using Dough,Steam it",
        image: "/static/images/momo.jpg"
    },
    {
        id: 3,
        title: "Buff Momo",
        ingredients: "Flour, Buff Meat, Momo Masala, Onion, Cabbage, Garlic, Oil",
        steps: "Mix Flour with water,Cut all the veggie,Mix veggies and Buff meat,Pack the meat using Dough,Steam it",
        image: "/static/images/FriedRice.jpg"
    }
    // Add more recipes here...
];

// Function to find a recipe by ID
function findRecipeById(recipeId) {
    return recipes.find(recipe => recipe.id === recipeId);
}

// Function to display the recipe details
function displayRecipeDetails(recipe) {
    if (recipe) {
        const recipeDetail = document.getElementById("recipe-detail");
        recipeDetail.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Ingredients: ${recipe.ingredients}</p>
            <p>Steps:</p>
            <ol>
                ${recipe.steps.split(',').map(step => `<li>${step.trim()}</li>`).join('')}
            </ol>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        `;

        // Add a "Back to Recipe List" button
        const backButton = document.createElement("button");
        backButton.textContent = "Back to Recipe List";
        backButton.addEventListener("click", () => {
            // Redirect to the Recipe List page (adjust the URL as needed)
            window.location.href = '/recipe-list';
        });
        recipeDetail.appendChild(backButton);
    } else {
        // Display an error message if the recipe is not found
        const recipeDetail = document.getElementById("recipe-detail");
        recipeDetail.innerHTML = "<p>Recipe not found.</p>";
    }
}
// Function to handle page load
window.onload = function () {
    const currentURL = new URL(window.location.href);
    const recipeId = parseInt(currentURL.searchParams.get("id"));

    const recipe = findRecipeById(recipeId);
    displayRecipeDetails(recipe);
};
