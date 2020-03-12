import { Component, OnInit } from '@angular/core';
// import  { Recipe } from '../recipe.model';
import { from } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes=[];
  //As earlier we define the recipes array only but now we gonna define the type as well what it gonna will store i.e array
  //Now we see that its not able define the name, so we have to inform typeScript where it is comimg from
  //So to do the above we need import: import {Recipe } from '../recipe.model';

  recipes:Recipe[]=[
    //Lets start with a new dummy recipe
    new Recipe('A test Recipe', 'This is simply a taste', 'https://pixabay.com/photos/food-meat-recipe-power-pork-1459693/' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
