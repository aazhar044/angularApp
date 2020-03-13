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
    //As here we are calling below a class as method means actually calling  a constructor
    new Recipe('A test Recipe', 'This is simply a taste', 'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png' ),
    new Recipe('A test of Flavour', 'This is simply a taste', 'http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png' )
  ];

  //As we have added the constructor but we are unable to see anything for now
  //To see that we have to do something inside the template of recipe-list.component.html

  constructor() { }

  ngOnInit(): void {
  }

}
