from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

recipes = [
    {
        'id': 1,
        'title': 'Chicken Spaghetti',
        'ingredients': 'Spaghetti, Eggs, Chicken, Pecorino cheese, Black pepper',
        'steps': 'Cook pasta,Fry Chicken,Mix eggs and cheese,Combine all ingredients,Add pepper',
        'image': 'images/ChickenSpaghetti.jpg',
        'thumbnail': 'images/ChickenSpaghetti.jpg'
    },
    {
        'id': 2,
        'title': 'Buff Momo',
        'ingredients': 'Flour, Buff Meat, Momo Masala, Onion, Cabbage, Garlic, Oil',
        'steps': 'Mix Flour with water,Cut all the veggie,Mix veggies and Buff meat,Pack the meat using Dough,Steam it',
        'image': 'images/momo.jpg',
        'thumbnail': 'images/momo.jpg'
    },
    {
        'id': 3,
        'title': 'Fried Rice',
        'ingredients': 'Rice, Salt, Onion, Oil, Meat',
        'steps': 'Heat up the Oil,Add Meat,Put the Rice,Add vegetables in Rice,Stir the Rice properly,Let the Rice be Fried properly',
        'image': 'images/FriedRice.jpg',
        'thumbnail': 'images/FriedRice.jpg'
    }
    # Add more recipes here...
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recipe-list')
def recipe_list():
    return render_template('recipe_list.html', recipes=recipes)

@app.route('/recipe/<int:recipe_id>')
def view_recipe(recipe_id):
    recipe = next((r for r in recipes if r['id'] == recipe_id), None)
    if recipe:
        return render_template('recipe_detail.html', recipe=recipe)
    return 'Recipe not found', 404

@app.route('/add-edit-recipe', methods=['GET', 'POST'])
def add_edit_recipe():
    if request.method == 'POST':
        # Retrieve form data
        title = request.form.get('title')
        ingredients = request.form.get('ingredients')
        steps = request.form.get('steps')
        image = request.form.get('image')

        # Generate a new recipe ID (for simplicity, you can use a more robust method)
        new_recipe_id = len(recipes) + 1

        # Create a new recipe object
        new_recipe = {
            'id': new_recipe_id,
            'title': title,
            'ingredients': ingredients,
            'steps': steps,
            'image': image
        }

        # Append the new recipe to the recipes list
        recipes.append(new_recipe)

        # Redirect to the Recipe List page (adjust the URL as needed)
        return redirect(url_for('recipe_list'))

    return render_template('add_edit_recipe.html')
if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')

