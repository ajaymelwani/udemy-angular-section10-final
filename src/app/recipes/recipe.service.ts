import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  	];


  	//study Javascript Reference and Primitive Datatypes. We only get access to the copy of recipes array via the empty slice() method
  	getRecipes() {
  		return this.recipes.slice();
  	}

}