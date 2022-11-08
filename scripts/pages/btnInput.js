/*:............. creation de la liste de tableaux .............*/

let ingredientArray = [];
let appareilArray = [];
let ustensilsArray = [];

//recupere tous les ingredients et les envoyés dans le tableau(array)
recipes.forEach((recettes) => {
   recettes.ingredients.forEach((recettes) => {
    ingredientArray.push(recettes.ingredients);
   });
});

// recupere tous les appareils et les envoyés dans le tableau(array)
recipes.forEach((recettes)=>{
    appareilArray.push(recettes.appliance);
});

//recupere les ustensils et les envoyées dans le tableau(array)
recipes.forEach((recettes) =>{
    recettes.ustensils.forEach((recette) => {
       ustensilsArray.push(recette); 
    });
});

//creer un nouveau tableau
let ingredientsFilter = Array.from(new Set(ingredientArray));
let appareilFilter = Array.from(new Set(appareilArray));
let ustensilsFilter = Array.from(new Set(ustensilsArray));
