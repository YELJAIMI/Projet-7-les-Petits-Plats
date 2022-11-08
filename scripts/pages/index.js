const {name,ingredients,time,description,id} = recipes[0];
const {ingredient, quantity, unit} = ingredients[0];

//creer un article
function articlesrecipes(recettes){
    const main = document.querySelector('main');
    //article
    const article = document.createElement('article');
    main.appendChild(article);
    article.setAttribute("class", 'article');
    article.id = recettes.id;
    //img
    const imgArticle = document.createElement('img');
    article.appendChild(imgArticle);
    imgArticle.setAttribute("class", "Img_article");
    //div
    const divRecettes = document.createElement('div');
    article.appendChild(divRecettes);
    divRecettes.setAttribute("class", "divrecettes");
    //div titre et temps de preparation
    const timeAndRecipe = document.createElement('div');
    divRecettes.appendChild(timeAndRecipe);
    timeAndRecipe.setAttribute("class", "time-recipe");
    // h5
    const recipeTitle = document.createElement('div');
    timeAndRecipe.appendChild(recipeTitle);
    recipeTitle.setAttribute("class", "recipe-title");
    recipeTitle.id = "titre";
    recipeTitle.textContent = recettes.name;
    //DIVicons
    const icons = document.createElement('div');
    timeAndRecipe.appendChild(icons);
    icons.setAttribute("class", "icon");
    //span
    const contentClock = document.createElement('span');
    icons.appendChild(contentClock);
        //IMG icon clock
        const clock = document.createElement('img');
        contentClock.appendChild(clock);
        clock.setAttribute("class", "horloge");
        clock.setAttribute("src", "/icons/clock.svg");

        // Minuterie
        const time = document.createElement('p');
        icons.appendChild(time);
        time.setAttribute("class", "minute");
        time.textContent = recettes.time + "min";

        //DIV contenant tous les ingredients
        const ingredientsAndRecipe = document.createElement('div');
        divRecettes.appendChild(ingredientsAndRecipe);
        ingredientsAndRecipe.setAttribute("class", "ingredients-et-description");
        ingredientsAndRecipe.id = "ingredients-et-description";
        
        //contenant ingrédient
        const contentIngredients = document.createElement('div');
        ingredientsAndRecipe.appendChild(contentIngredients);
        contentIngredients.setAttribute("class", "content-ingredients");

        recettes.ingredients.forEach((ingredient) => {
            
            const ligneIngredient = document.createElement('div');
            contentIngredients.appendChild(ligneIngredient);
            ligneIngredient.setAttribute("class", "ligne-ingredient");

            const recipeIngredients = document.createElement('span');
            ligneIngredient.appendChild(recipeIngredients);
            recipeIngredients.setAttribute("class", "recipe-ingredient");
            recipeIngredients.textContent = ingredient.ingredient;

            const quantité = document.createElement('p');
            ligneIngredient.appendChild(quantité);
            quantité.setAttribute("class", "quantity");
            quantité.textContent = ingredient.quantity;

            const unit = document.createElement('p');
            ligneIngredient.appendChild(unit);
            unit.setAttribute("class", "quantity-unit");
            unit.textContent = ingredient.unit;
        });

        // contenue description
        const manuelRecettes = document.createElement('p');
        ingredientsAndRecipe.appendChild(manuelRecettes);
        manuelRecettes.setAttribute("class", "manuel-recettes");
        manuelRecettes.textContent = recettes.description;
}

// creation d'un article pour chaque recette
recipes.forEach(articlesrecipes);