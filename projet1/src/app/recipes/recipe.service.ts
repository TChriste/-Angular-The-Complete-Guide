import {RecipeModel} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: RecipeModel[] = [
    new RecipeModel('A test Recipe 1', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new IngredientModel('Meat', 1),
      new IngredientModel('French Fries', 20)
    ]),
    new RecipeModel('A test Recipe 2', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new IngredientModel('Buns', 2),
      new IngredientModel('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
