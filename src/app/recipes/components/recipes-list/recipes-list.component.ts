import { Component } from "@angular/core";
import { Recipe } from "../../model/recipe.model";

@Component({
    selector : 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
    recipes: Recipe[] = [
        new Recipe('Chiles rellenos', 'Preparacion de 40 min', '../../../assets/images/chiles.jpg'),
        new Recipe('Caldo de queso', 'Preparacion de 20 min', '../../../assets/images/chiles.jpg'),
        new Recipe('Taquitos', 'Preparacion de 35 min', '../../../assets/images/chiles.jpg')
    ];

}