// Sample data for recipes (you can replace this with your data storage)
const recipes = [
    {
        id: 1,
        title: "Chicken Spaghetti",
        ingredients: "Spaghetti, Eggs, Chicken, Pecorino cheese, Black pepper",
        steps: "Cook pasta,Fry Chicken,Mix eggs and cheese,Combine all ingredients,Add pepper.",
        image: "images/ChickenSpaghetti.jpg"
        thumbnail: "images/ChickenSpaghetti.jpg"
    },
    {
        id: 2,
        title: "Buff Momo",
        ingredients: "Flour, Buff Meat, Momo Masala, Onion, Cabbage, Garlic, Oil",
        steps: "1. Mix Flour with water 2. Cut all the veggie 3. Mix veggies and Buff meat 4. Pack the meat using Dough 5. Steam it",
        image: "images/momo.jpg"
        thumbnail: "images/momo.jpg"
    },
    {
        id: 3,
        title: "Fried Rice",
        ingredients: "Rice, Salt, Onion, Oil, Meat",
        steps: "Heat up the Oil,Add Meat,Put the Rice,Add vegetables in Rice,Stir the Rice properly,Let the Rice be Fried properly"
        image: "images/FriedRice.jpg",
        thumbnail: "images/FriedRice.jpg"
    }
    // Add more recipes here...
];

// Function to display the list of recipes
function displayRecipeList() {
    const recipeList = document.getElementById("recipe-list");

    // Loop through the recipes and create HTML elements to display them
    for (const recipe of recipes) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.ingredients}</p>
            <a href="/recipe/${recipe.id}" class="view-button">View Recipe</a>
            <button onclick="deleteRecipe(${recipe.id})" class="delete-button">Delete Recipe</button>
        `;
        recipeList.appendChild(listItem);
    }
}
// Function to apply the filter based on search keywords
function applyFilter() {
    const searchInput = document.getElementById("recipe-search");
    const filter = searchInput.value.toLowerCase();

    const recipeList = document.querySelector(".recipe-list");
    const recipeItems = recipeList.querySelectorAll("li");

    recipeItems.forEach(recipeItem => {
        const title = recipeItem.querySelector("h3").textContent.toLowerCase();
        const ingredients = recipeItem.querySelector("p").textContent.toLowerCase();

        if (title.includes(filter) || ingredients.includes(filter)) {
            recipeItem.style.display = "block"; // Show matching recipes
        } else {
            recipeItem.style.display = "none"; // Hide non-matching recipes
        }
    });
}

// Function to delete a recipe
function deleteRecipe(recipeId) {
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);

    // Check if the recipe exists
    if (recipeIndex !== -1) {
        // Remove the recipe from the array
        recipes.splice(recipeIndex, 1);

        // Update the UI (e.g., remove the recipe from the list)
        displayRecipeList();
    } else {
        alert("Recipe not found!");
    }
}

// Call the displayRecipeList function when the page loads
window.onload = function () {
    displayRecipeList();
};

// Function to search recipes
function searchRecipes() {
    const searchInput = document.getElementById("recipe-search").value.toLowerCase();
    const recipeList = document.querySelector(".recipe-list");
    const recipeItems = recipeList.querySelectorAll("li");

    // Loop through recipe items and check if the title contains the search query
    recipeItems.forEach(item => {
        const recipeTitle = item.querySelector("h3").textContent.toLowerCase();
        if (recipeTitle.includes(searchInput)) {
            item.style.display = "block"; // Display the matching recipe
        } else {
            item.style.display = "none"; // Hide non-matching recipes
        }
    });
}

