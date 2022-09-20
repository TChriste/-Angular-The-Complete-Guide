import { RecipeModel } from './recipe.model';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();
  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'A test Recipe 1',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [new IngredientModel('Meat', 1), new IngredientModel('French Fries', 20)]
  //   ),
  //   new RecipeModel(
  //     'A test Recipe 2',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [new IngredientModel('Buns', 2), new IngredientModel('Meat', 1)]
  //   ),
  // ];
  private recipes: RecipeModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
