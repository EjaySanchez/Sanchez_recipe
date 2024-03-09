document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn = document.querySelector('.card .get-recipe-btn');

    cardGetRecipeBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const mealImage = document.querySelector('.card img').src;
        const mealTitle = document.querySelector('.card h4').textContent;
        const yieldsInfo = document.querySelector('.yields-info b').textContent;
        const totalTime = document.querySelector('.yields-info2 b').textContent;
        const ingredients = [
            "<h3>Ingredients</h3>",
            "1 c. whole milk",
            "1 large egg",
            "1 tbsp. vegetable oil",
            "1 c. Homemade Pancake Mix",
            "1 tbsp. sugar"
        ];
        const instructions = document.querySelector('.instruction-section').innerHTML;

        let html = `
            <div class="recipe-image">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title">${mealTitle}</h2>
            <hr>
            <p class="yields-info">Yields: <br>
                <b>${yieldsInfo}</b> serving(s)
            </p>
            <p class="yields-info2">Total Time: <br>
                <b>${totalTime}</b> mins
            </p>
            <hr>
            <div class="recipe-instruction">
                <h3>Ingredients</h3>
        `;
        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});

//Second Meal
document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn2 = document.querySelector('.card .get-recipe-btn2');

    cardGetRecipeBtn2.addEventListener('click', function (event) {
        event.preventDefault();

        const mealImage = this.parentElement.querySelector('img').src;
        const mealTitle = document.querySelector('.card h3').textContent;
        const yieldsInfo = document.querySelector('.yields-info2').textContent;
        const totalTime = document.querySelector('.yields-info3').textContent;
        const ingredients = [
            "<h3>FOR GRANOLA</h3>",
            "1 tbsp. olive oil",
            "1 tbsp. pure maple syrup",
            "1/4 tsp. kosher salt",
            "1/2 c. buckwheat groats",
            "1/4 tsp. ground cinnamon",
            "1/3 c. sliced almonds",
            "<h3>FOR SERVING (1BOWL)</h3>",
            "3/4 c. plain Greek yogurt",
            "1/2 c. mixed berries",
            "1/3 c. almond-buckwheat granola",
            "Pure maple syrup, for drizzling"
        ];
        const instructions = document.querySelector('.instruction-section2').innerHTML;

        let html = `
            <div class="recipe-image2">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title">${mealTitle}</h2>
            <hr>
            <p class="yields-info2">Yields: <br>
                <b>1</b> c.
            </p>
            <p class="yields-info3">Total Time: <br>
                <b>30</b> mins
            </p>
            <hr>
            <div class="recipe-instruction">
                <h3>Ingredients</h3>
        `;

        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});

//Third Meal
document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn3 = document.querySelector('.card .get-recipe-btn3');

    cardGetRecipeBtn3.addEventListener('click', function (event) {
        event.preventDefault();

        const mealImage = this.parentElement.querySelector('img').src;
        const mealTitle = this.parentElement.querySelector('h4').textContent;
        const yieldsInfo = document.querySelector('.yields-info3').textContent;
        const totalTime = document.querySelector('.yields-info5').textContent;
        const ingredients = [
            "3/4 pound bacon strips, finely chopped",
            "1 medium onion, chopped",
            "8 large eggs",
            "1/2 teaspoon salt",
            "1/4 teaspoon pepper",
            "1 cup shredded cheddar cheese"
        ];
        const instructions = document.querySelector('.instruction-section3').innerHTML;

        let html = `
            <div class="recipe-image3">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title3">${mealTitle}</h2>
            <hr>
            <p class="yields-info2">Yields: <br>
                <b>1</b> c.
            </p>
            <p class="yields-info3">Total Time: <br>
                <b>30</b> mins
            </p>
            <hr>
            <div class="recipe-instruction3">
                <h3>Ingredients</h3>
        `;

        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});

//Fourth Recipe
document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content4');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn3 = document.querySelector('.card .get-recipe-btn4');

    cardGetRecipeBtn3.addEventListener('click', function (event) {
        event.preventDefault();


        const mealImage = this.parentElement.querySelector('img').src;
        const mealTitle = this.parentElement.querySelector('h4').textContent;
        const yieldsInfo = document.querySelector('.yields-info7').textContent;
        const totalTime = document.querySelector('.yields-info8').textContent;
        const ingredients = [
            "1/2 cup mayonnaise",
            "2 tablespoons sour cream",
            "1 tablespoon lemon juice",
            "1/8 teaspoon salt",
            "1/8 teaspoon pepper",
            "4 cups shredded rotisserie chicken",
            "1-1/4 cups seedless red grapes",
            "1/2 cup chopped pecans",
            "1/2 cup chopped celery"
        ];
        const instructions = document.querySelector('.instruction-section4').innerHTML;

        let html = `
            <div class="recipe-image4">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title4">${mealTitle}</h2>
            <hr>
            <p class="yields-info7">Yields: <br>
                <b>8</b> serving(s)
            </p>
            <p class="yields-info8">Total Time: <br>
                <b>20</b> mins
            </p>
            <hr>
            <div class="recipe-instruction4">
                <h3>Ingredients</h3>
        `;

        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});

//Fifth Recipe
document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content5');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn4 = document.querySelector('.card .get-recipe-btn5');

    cardGetRecipeBtn4.addEventListener('click', function (event) {
        event.preventDefault();

        const mealImage = this.parentElement.querySelector('img').src;
        const mealTitle = this.parentElement.querySelector('h4').textContent;
        const yieldsInfo = document.querySelector('.yields-info9').textContent;
        const totalTime = document.querySelector('.yields-info10').textContent;
        const ingredients = [
            "1 tablespoon creamy peanut butter",
            "1 slice crusty white bread",
            "3 tablespoons shredded",
            "1 tablespoon torn fresh basil",
            "1/8 teaspoon coarse sea salt",
            "1 teaspoon extra virgin olive oil"
        ];
        const instructions = document.querySelector('.instruction-section5').innerHTML;

        let html = `
            <div class="recipe-image5">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title5">${mealTitle}</h2>
            <hr>
            <p class="yields-info9">Yields: <br>
                <b>1</b> serving
            </p>
            <p class="yields-info10">Total Time: <br>
                <b>5</b> mins
            </p>
            <hr>
            <div class="recipe-instruction5">
                <h3>Ingredients</h3>
        `;

        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});

//Sixth Recipe
document.addEventListener("DOMContentLoaded", function () {
    const mealDetailsContent = document.querySelector('.meal-details-content6');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const cardGetRecipeBtn3 = document.querySelector('.card .get-recipe-btn6');

    cardGetRecipeBtn3.addEventListener('click', function (event) {
        event.preventDefault();

        const mealImage = this.parentElement.querySelector('img').src;
        const mealTitle = this.parentElement.querySelector('h4').textContent;
        const yieldsInfo = document.querySelector('.yields-info11').textContent;
        const totalTime = document.querySelector('.yields-info12').textContent;
        const ingredients = [
            "1/2 cup mayonnaise",
            "2 tablespoons sour cream",
            "1 tablespoon lemon juice",
            "1/8 teaspoon salt",
            "1/8 teaspoon pepper",
            "4 cups shredded rotisserie chicken",
            "1-1/4 cups seedless red grapes",
            "1/2 cup chopped pecans",
            "1/2 cup chopped celery"
        ];
        const instructions = document.querySelector('.instruction-section6').innerHTML;

        let html = `
            <div class="recipe-image6">
                <img src="${mealImage}" alt="${mealTitle}">
            </div>
            <h2 class="recipe-title6">${mealTitle}</h2>
            <hr>
            <p class="yields-info11">Yields: <br>
                <b>2</b> serving(s)
            </p>
            <p class="yields-info12">Total Time: <br>
                <b>15</b> mins
            </p>
            <hr>
            <div class="recipe-instruction6">
                <h3>Ingredients</h3>
        `;

        let currentHeader = '';
        ingredients.forEach(ingredient => {
            if (ingredient.startsWith('FOR')) {
                currentHeader = ingredient;
                html += `<h3>${currentHeader}</h3>`;
            } else {
                html += `<p>${ingredient}</p><hr>`;
            }
        });

        html += `</div>`;

        console.log(html);

        html += `
                <div class="instruction-section6">
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    });

    recipeCloseBtn.addEventListener('click', function () {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
});


